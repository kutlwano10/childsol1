
import React, { useRef, useState, ChangeEvent } from 'react';

interface FileUploadProps {
  id: string;
  name: string;
  label?: string;
  onChange: (file: File | null) => void;
  accept?: string;
  maxSize?: number; // in MB
  className?: string;
  buttonText?: string;
  multiple?: boolean;
}

export default function FileUpload({
  id,
  name,
  label,
  onChange,
  accept = 'application/pdf,image/*',
  maxSize = 5, // default 5MB
  className = '',
  buttonText = 'Upload file',
  multiple = false,
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setError('');
    
    if (!files || files.length === 0) {
      setFileName('');
      onChange(null);
      return;
    }
    
    const file = files[0];
    
   
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`);
      setFileName('');
      onChange(null);
      return;
    }
    
    setFileName(file.name);
    onChange(file);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`${className}`}>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="flex items-center w-full ">
        <input
          type="file"
          id={id}
          name={name}
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          className="hidden"
          multiple={multiple}
        />
        
        <button
          type="button"
          onClick={handleButtonClick}
          className="inline-flex w-full items-center px-4 py-6 border border-gray-300 rounded-2xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
        >
          <svg className="mr-2 -ml-1 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" clipRule="evenodd" />
          </svg>
          {buttonText}
        </button>
        
        {fileName && (
          <span className="ml-2 text-sm text-gray-500 truncate max-w-xs">
            {fileName}
          </span>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-[var(--color-danger)]">{error}</p>
      )}
    </div>
  );
}