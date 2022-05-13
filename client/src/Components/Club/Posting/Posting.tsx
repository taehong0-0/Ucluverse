import { useRef, useState } from 'react';
import Button from '../../Button/Button';
import Editor from '../../Editor/Editor';
import FloatInput from '../../Input/Input';
import { PostingContainer } from './style';
import { Buffer } from 'buffer';
import AWS from 'aws-sdk';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../Recoil/User';
import { useContext } from 'react';
import { ClubContext } from '../../../Pages/Club/Club';
import { useLocation } from 'react-router-dom';

const Posting = () => {
  const user = useRecoilValue(userState);
  const { boardIdx, boardName } = window.history.state;
  const titleRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<string>('');
  const [imageList, setImageList] = useState<string[]>([]);
  const submit = async () => {
    if (!titleRef.current || content === '') return;
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
          setImageList((imageList) => [...imageList, data.Location]);
        });
    });
    await Promise.all(promiseList ?? []);
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/postings/clubBoard/${boardIdx}`,
      {
        userIdx: user.userIdx,
        title: titleRef.current.value,
        content: content,
        images: imageList,
        allowComments: true,
        isPublic: true,
      },
    );
  };
  return (
    <PostingContainer>
      <div className="navigator">
        <span>Home</span>
        <span>{'>'}</span>
        <span>{boardName}</span>
      </div>
      <FloatInput inputRef={titleRef} name="제목" type="large" />
      <Editor setContent={setContent} />
      <Button name="작성" clickEvent={submit}></Button>
    </PostingContainer>
  );
};
export default Posting;
