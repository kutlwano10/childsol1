import React from 'react';

interface DownloadButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  label = 'Download',
  className = '',
}) => {
  return (
    <a
      href={href}
      download
      className={`inline-flex items-center text-yellow-500 hover:text-yellow-700 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </a>
  );
};