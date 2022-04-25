import { useRef, useState } from 'react';
import Button from '../../Button/Button';
import Editor from '../../Editor/Editor';
import FloatInput from '../../Input/Input';
import { PostingContainer } from './style';

interface props {
  clubId: number;
  boardIdx: Number;
}
const Posting = (props: props) => {
  const { clubId, boardIdx } = props;
  const titleRef = useRef(null);
  const [content, setContent] = useState<string>('');
  const submit = () => {
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
