import { useDropzone } from "react-dropzone";
import { useFormikContext, FormikValues } from 'formik';
import { useEffect, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

export type ImageProps = {
    preview: string,
    name: string,

}
const ImageUploadComponent = () => {
    const [files, setFiles] = useState<ImageProps[] | []>([]);

    const { setFieldValue, values } = useFormikContext<FormikValues>();

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        accept: { "image/jpeg": [], "image/png": [] },
        onDrop: (acceptedFiles) => {
            console.log('Accepted files', acceptedFiles)
            setFieldValue("images", acceptedFiles);
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },

    });

    const removeFile = (file: ImageProps) => () => {
        const newFiles = [...files]
        newFiles.splice(newFiles.indexOf(file), 1)
        setFiles(newFiles)
    }

    const thumbs = files.map(file => (
        <div key={file.name}>
            <div >
                <div className="relative">
                    <Image
                        height={100}
                        width={500}
                        src={file?.preview}
                        alt={file?.name}
                    />
                    <button onClick={removeFile(file)}>
                        <XMarkIcon className="absolute px-2 py-1 font-extrabold text-black transition duration-150 ease-in-out bg-white rounded-full shadow-lg hover:bg-red-900 -top-3 -right-3 w-7 h-7" />
                    </button>
                </div>

            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div>
            <div
                {...getRootProps({ className: "dropzone" })}
                className="text-center text-white"
            >
                <input {...getInputProps()} />
                <div className="px-2 py-4 border-2 border-pink-800 border-dotted">
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>Drag and drop some files here, or click to select files</p>
                    )}
                </div>
            </div>
            <div className="py-7">
                <div className="grid grid-cols-3 gap-7">
                    {thumbs}
                </div>
            </div>
        </div>
    );
};
export default ImageUploadComponent;