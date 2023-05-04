/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line object-curly-newline
import { ChangeEvent, useState, useCallback, useEffect, ReactElement, useRef } from 'react';
import api from '../../../../Util/helpers/Auth/Api';
import Button from '../../../Button/Button';
import { AdminEnrollmentFormContainer, FormBodyContainer } from './style';
/* eslint-disable react/button-has-type */
interface Props {
  clubId: number;
}
interface Question {
  content: string;
  questionIdx: number;
  formIdx: number;
}
function AdminEnrollmentForm(props: Props): ReactElement {
  const { clubId } = props;
  const noticeRef = useRef<HTMLTextAreaElement>(null);
  const [notice, setNotice] = useState<string>('');
  const [questions, setQuestions] = useState<string[]>([]);
  useEffect(() => {
    api.get(`/forms/${clubId}`).then((res) => {
      if (res.data.isSuccess) {
        setNotice(res.data.res.form.notice);
        setQuestions(res.data.res.form.questions.map((question: Question) => question.content));
      }
    });
  }, [clubId]);
  const addQuestion = () => {
    setQuestions((prev) => [...prev, '']);
  };
  const removeQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((question, idx) => idx !== index));
  };
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>, idx: number) => {
    // console.log(e.target.value);
    setQuestions((prev) =>
      prev.map((question, index) => (index === idx ? e.target.value : question)),
    );
  }, []);
  const submit = () => {
    api.post('/forms', {
      clubIdx: clubId,
      notice: noticeRef.current?.value,
      questions,
    });
  };
  return (
    <AdminEnrollmentFormContainer>
      <span>신청양식</span>
      <FormBodyContainer>
        <div>
          <span>공지사항</span>
          <textarea ref={noticeRef} defaultValue={notice} />
        </div>
        {questions.map((question, idx) => (
          <div key={question}>
            <span>질문</span>
            <input onChange={(e) => onChange(e, idx)} value={question} />
            <button onClick={() => removeQuestion(idx)}>취소</button>
          </div>
        ))}
      </FormBodyContainer>
      <div>
        <Button name="추가" clickEvent={addQuestion} />
        <Button name="저장" clickEvent={submit} />
      </div>
    </AdminEnrollmentFormContainer>
  );
}
export default AdminEnrollmentForm;
