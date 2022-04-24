import React from 'react';
import { CKEditor } from 'ckeditor4-react';

const Editor = () => {
  return (
    <div>
      <CKEditor
        data="<p>Hello from CKEditor 4!</p>"
        onChange={(event: any) => {
          console.log(event.editor.getData());
        }}
        CKEditorEventHandler={(event: 'change', editor: any) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
};
export default Editor;
