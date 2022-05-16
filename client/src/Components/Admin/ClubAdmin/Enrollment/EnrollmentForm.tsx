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
const AdminEnrollmentForm = (props: Props): ReactElement => {
  const { clubId } = props;
  const [questions, setQuestions] = useState<string[]>([]);
  useEffect(() => {
    // axios.get(``).then((res) => setQuestions(res.data.res));
  }, [clubId]);
  const addQuestion = () => {
    setQuestions((questions) => [...questions, '']);
  };
  const removeQuestion = (index: number) => {
    setQuestions((questions) =>
      questions.filter((question, idx) => {
        return idx !== index;
      }),
    );
  };
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, idx: number) => {
      // console.log(e.target.value);
      setQuestions((questions) => {
        return questions.map((question, index) => {
          return index === idx ? e.target.value : question;
        });
      });
    },
    [],
  );
  const submit = () => {};
  return (
    <AdminEnrollmentFormContainer>
      <span>신청양식</span>
      <FormBodyContainer>
        {questions.map((question, idx) => {
          return (
            <div>
              <span>질문</span>
              <input
                onChange={(e) => onChange(e, idx)}
                value={question}
              ></input>
              <button onClick={() => removeQuestion(idx)}>취소</button>
            </div>
          );
        })}
      </FormBodyContainer>
      <div>
        <Button name="추가" clickEvent={() => addQuestion()}></Button>
        <Button name="저장" clickEvent={() => submit()}></Button>
      </div>
    </AdminEnrollmentFormContainer>
  );
};
export default AdminEnrollmentForm;
