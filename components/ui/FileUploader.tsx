"use client";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

 const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
       <Image src={convertFileToUrl(files[0])} alt="Uploaded file" width={1000} height={1000} className="max-h-[400px] overflow-hidden object-cover" />
      ) : <>
      <Image src="/assets/icons/upload.svg" alt="Upload Icon" width={400} height={400} className="max-h-[400px] overflow-hidden object-cover" />
      <div className="file-upload_label">
        <p className="text-14-regular">
            <span className="text-green-500">Click to upload</span> or drag and drop files here
        </p>
        <p className="text-12-regular text-gray-500">Supported formats: JPG, PNG, GIF(max 800*400)</p>
      </div>
      </>}
      
    </div>
  );
};
export default FileUploader;