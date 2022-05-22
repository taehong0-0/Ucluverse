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
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { send } from 'node:process';

interface Props {
  clubId: number;
}
const Posting = (props: Props) => {
  const { clubId } = props;
  const user = useRecoilValue(userState);
  const { boardIdx, boardName } = window.history.state;
  const titleRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<string>('');
  const [imageList, setImageList] = useState<string[]>([]);

  var result = content;
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
    // var result = content;
    var images;
    const promiseList = srcList?.map(async (tag, idx) => {
      tag.match(srcRegEx);
      const srcData = RegExp.$1;
      const base64Data = Buffer.from(srcData.replace(/^data:image\/\w+;base64,/, ''), 'base64');
      const type = srcData.split(';')[0].split('/')[1];

      const param = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME ?? '',
        ACL: 'public-read',
        ContentType: `image/${type}`,
        ContentEncoding: 'base64',
        Key: `posting/test/${new Date().toString()}${idx}.${type ?? 'png'}`,
        Body: base64Data,
      };
      return s3
        .upload(param)
        .promise()
        .then((data) => {
          console.log(data.Location);
          result = result.replace(srcData, data.Location);
          return data.Location;
        });
    });
    console.log(promiseList);
    const res = await Promise.all(promiseList ?? []);
    setImageList(res);
  };

  const send = () => {
    if (!titleRef.current || content === '') return;
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/postings/clubBoard/${boardIdx}`, {
        userIdx: user.userIdx,
        title: titleRef.current.value,
        content: result,
        images: imageList,
        allowComments: true,
        isPublic: true,
      })
      .then((res) => {
        window.location.href = `/club/${clubId}/board`;
      });
  };
  useEffect(() => {
    send();
  }, [imageList]);
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
