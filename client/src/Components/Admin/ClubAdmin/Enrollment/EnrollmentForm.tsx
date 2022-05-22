import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { ReactElement, useRef } from 'react';
import Button from '../../../Button/Button';
import { AdminEnrollmentFormContainer, FormBodyContainer } from './style';
interface Props {
  clubId: number;
}
interface Question {
  content: string;
  questionIdx: number;
  formIdx: number;
}
const AdminEnrollmentForm = (props: Props): ReactElement => {
  const { clubId } = props;
  const noticeRef = useRef<HTMLTextAreaElement>(null);
  const [notice, setNotice] = useState<string>('');
  const [questions, setQuestions] = useState<string[]>([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/forms/${clubId}`).then((res) => {
      if (res.data.isSuccess) {
        setNotice(res.data.res.from.notice);
        setQuestions(res.data.res.form.questions.map((question: Question) => question.content));
      }
      console.log(res);
    });
  }, [clubId]);
  const addQuestion = () => {
    setQuestions((questions) => [...questions, '']);
  };
  const removeQuestion = (index: number) => {
    setQuestions((questions) => {
      questions.splice(index, index);
      console.log(questions);
      return questions;
    });
  };
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>, idx: number) => {
    // console.log(e.target.value);
    setQuestions((questions) => {
      return questions.map((question, index) => {
        return index === idx ? e.target.value : question;
      });
    });
  }, []);
  const submit = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/forms`, {
        clubIdx: clubId,
        notice: noticeRef.current?.value,
        questions: questions,
      })
      .then((res) => console.log(res));
  };
  return (
    <AdminEnrollmentFormContainer>
      <span>신청양식</span>
      <FormBodyContainer>
        <div>
          <span>공지사항</span>
          <textarea ref={noticeRef}>{notice}</textarea>
        </div>
        {questions.map((question, idx) => {
          return (
            <div>
              <span>질문</span>
              <input onChange={(e) => onChange(e, idx)} value={question}></input>
              <button onClick={() => removeQuestion(idx)}>취소</button>
            </div>
          );
        })}
      </FormBodyContainer>
      <div>
        <Button name="추가" clickEvent={addQuestion}></Button>
        <Button name="저장" clickEvent={submit}></Button>
      </div>
    </AdminEnrollmentFormContainer>
  );
};
export default AdminEnrollmentForm;
