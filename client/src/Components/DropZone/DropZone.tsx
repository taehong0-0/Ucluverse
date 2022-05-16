import { Dispatch, SetStateAction } from 'react';
import { ReactElement, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  setFile: Dispatch<SetStateAction<Blob | null>>;
  setImage: Dispatch<SetStateAction<string | null>>;
}
const DropZone: React.FC<Props> = ({ setFile, setImage, children }) => {
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
        const binaryStr = reader.result;
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
};

export default DropZone;
