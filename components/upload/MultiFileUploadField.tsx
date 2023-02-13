import { FormikValues, useFormikContext } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function MultipleFileUploadField() {
    const { setFieldValue } = useFormikContext<FormikValues>();
    const [acceptedFiles, setAcceptedFile] = useState<File[]>([])
    const [rejectedFiles, setrejectedFiles] = useState<FileRejection[]>([])

    const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
        setAcceptedFile(accFiles)
        setrejectedFiles(rejFiles)
    }, []);

    useEffect(() => {
        setFieldValue('images', acceptedFiles)
    }, [acceptedFiles, setFieldValue]);

    function onAcceptedDelete(file: File) {
        setAcceptedFile((curr) => curr.filter((f) => f !== file));
    }

    function onRejectedDelete(file: File) {
        setrejectedFiles((curr) => curr.filter((fw) => fw.file !== file));
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
        },
        maxSize: 300 * 1024, // 300KB
    });

    const accFiles = acceptedFiles.map((file, idx) => (
        <div key={idx}>
            <div className='relative'>
                <Image
                    height={100}
                    width={500}
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                />
                <button onClick={() => onAcceptedDelete(file)}>
                    <XMarkIcon className="absolute px-2 py-1 font-extrabold text-black transition duration-150 ease-in-out bg-white rounded-full shadow-lg hover:bg-red-900 -top-3 -right-3 w-7 h-7" />
                </button>
            </div>


        </div>
    ))

    const rejFiles = rejectedFiles.map((fw, idx) => (
        <div key={idx}>
            <div className='relative'>
                <Image
                    height={100}
                    width={500}
                    src={URL.createObjectURL(fw.file)}
                    alt={fw.file.name}
                />
                <button onClick={() => onRejectedDelete(fw.file)}>
                    <XMarkIcon className="absolute px-2 py-1 font-extrabold text-black transition duration-150 ease-in-out bg-white rounded-full shadow-lg hover:bg-red-900 -top-3 -right-3 w-7 h-7" />
                </button>
            </div>
            <div>
                {fw.errors.map(error => (
                    <p key={error.code} className='text-xs italic text-red-600'>{error.message}</p>
                ))}
            </div>

        </div>
    ))

    return (
        <div className='px-3 py-12 text-center border border-pink-600 border-dotted '>
            <div {...getRootProps({})} className='px-2 py-1 bg-indigo-500 text-slate-100'>
                <input {...getInputProps()} />

                <p> click to select files</p>
            </div>
            {acceptedFiles.length ? <div className="py-7">
                <h2 className='text-lg text-slate-200'>Accepted files</h2>
                <div className="grid grid-cols-3 gap-7">
                    {accFiles}
                </div>
            </div> : null}
            {rejectedFiles.length ? <div className="py-7">
                <h2 className='text-lg text-slate-200'>Rejected files</h2>
                <div className="grid grid-cols-3 gap-7">
                    {rejFiles}
                </div>
            </div> : null
            }
        </div>
    );
}