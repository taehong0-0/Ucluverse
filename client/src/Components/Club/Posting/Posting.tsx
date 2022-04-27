import { useRef, useState } from 'react';
import { isPropertyAccessChain } from 'typescript';
import Button from '../../Button/Button';
import Editor from '../../Editor/Editor';
import FloatInput from '../../Input/Input';
import { PostingContainer } from './style';
import AWS from 'aws-sdk';

interface props {
  clubId: number;
  boardIdx: Number;
}
const Posting = (props: props) => {
  const { clubId, boardIdx } = props;
  const titleRef = useRef(null);
  const [content, setContent] = useState<string>('');
  const submit = () => {
    const option = {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      region: process.env.REACT_APP_AWS_REGION,
    };
    const s3 = new AWS.S3(option);

    const srcRegEx = /<img src=\"([^\"]*?)\" \/>/gi;
    const srcList = content.match(srcRegEx);

    srcList?.forEach(async (tag) => {
      tag.match(srcRegEx);
      const param = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME ?? '',
        ACL: 'public-read',
        ContentType: 'image/png',
        ContentEncoding: 'base64',
        Key: 'posting/' + 'test',
        Body: RegExp.$1,
      };
      const data = await s3.upload(param).promise();
      console.log(data);
      content.replace(RegExp.$1, data.Location);
    });
    console.log(content);
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
