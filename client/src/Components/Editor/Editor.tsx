import React, { Dispatch, SetStateAction } from 'react';
import { CKEditor } from 'ckeditor4-react';

interface IProps {
  setContent: Dispatch<SetStateAction<string>>;
}
function Editor(props: IProps) {
  const { setContent } = props;
  const config = {
    height: '25rem',
  };
  return (
    <div>
      <CKEditor
        data="<p>Hello from CKEditor 4!</p>"
        onChange={(event: any) => {
          setContent(event.editor.getData());
        }}
        config={config}
        // style={{ height: '600px' }}
      />
    </div>
  );
}
export default Editor;
