'use client';

import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';

interface ResumeDropProps {
  onFileSelect: (file: File | null) => void;
}

export default function ResumeDrop({ onFileSelect }: ResumeDropProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(droppedFile.type)
    ) {
      setFile(droppedFile);
      onFileSelect(droppedFile);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-6 bg-grok-modal rounded-lg p-6">
      <div className="text-center">
        {file ? (
          <p className="text-grok-text">{file.name}</p>
        ) : (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-4 ${isDragging ? 'border-grok-text' : 'border-gray-300'}`}
          >
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-grok-border flex items-center justify-center">
                <ArrowUpTrayIcon className="w-6 h-6 text-grok-text" />
              </div>
            </div>
            <p className="text-gray-400">Drag and drop to upload</p>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="resume-upload"
              ref={fileInputRef}
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="mt-2 px-4 py-2 bg-grok-border text-white font-semibold rounded-lg hover:bg-black transition-all"
            >
              Select resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
}