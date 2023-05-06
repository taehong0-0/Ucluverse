import { Dispatch, SetStateAction, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface IProps {
  setImage: Dispatch<SetStateAction<string | null>>;
  setFile: Dispatch<SetStateAction<Blob | null>>;
  children: any;
}
function DropZone(props: IProps) {
  const { setFile, setImage, children } = props;
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader();
      setFile(file);
      const bloburl = URL.createObjectURL(file);
      setImage(bloburl);
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        // const binaryStr = reader.result;
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} id="dropzone">
      <input {...getInputProps()} />
      {children}
    </div>
  );
}
export default DropZone;
