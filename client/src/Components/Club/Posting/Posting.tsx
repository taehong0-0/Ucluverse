import { useRef, useState } from 'react';
import Button from '../../Button/Button';
import Editor from '../../Editor/Editor';
import FloatInput from '../../Input/Input';
import { PostingContainer } from './style';
import { Buffer } from 'buffer';
import AWS from 'aws-sdk';

interface props {
  clubId: number;
  boardIdx: Number;
}
const Posting = (props: props) => {
  const { clubId, boardIdx } = props;
  const titleRef = useRef(null);
  const [content, setContent] = useState<string>('');
  const submit = async () => {
    const option = {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      region: process.env.REACT_APP_AWS_REGION,
    };
    const s3 = new AWS.S3(option);
    const srcRegEx = /<img src=\"([^\"]*?)\" \/>/gi;
    const srcList = content.match(srcRegEx);
    var result = content;
    const promiseList = srcList?.map(async (tag, idx) => {
      tag.match(srcRegEx);
      const srcData = RegExp.$1;
      const base64Data = Buffer.from(
        srcData.replace(/^data:image\/\w+;base64,/, ''),
        'base64',
      );
      const type = srcData.split(';')[0].split('/')[1];

      const param = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME ?? '',
        ACL: 'public-read',
        ContentType: `image/${type}`,
        ContentEncoding: 'base64',
        Key: `posting/test/${new Date().toString()}${idx}.${type ?? 'png'}`,
        Body: base64Data,
      };
      return await s3
        .upload(param)
        .promise()
        .then((data) => {
          result = result.replace(srcData, data.Location);
        });
    });
    await Promise.all(promiseList ?? []);
  };
  return (
    <PostingContainer>
      <FloatInput inputRef={titleRef} name="제목" />
      <Editor setContent={setContent} />
      <Button name="작성" clickEvent={submit}></Button>
    </PostingContainer>
  );
};
export default Posting;
