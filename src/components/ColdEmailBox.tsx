'use client';

import { useState } from 'react';
import { ClipboardIcon } from '@heroicons/react/24/solid';

interface ColdEmailBoxProps {
  coldEmail: string;
}

export default function ColdEmailBox({ coldEmail }: ColdEmailBoxProps) {
  const [copyText, setCopyText] = useState('Copy');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coldEmail);
    setCopyText('Copied');
    setTimeout(() => setCopyText('Copy'), 2000);
  };

  return (
    <div className="relative border border-grok-border rounded-lg p-6 bg-grok-box shadow-md h-full">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 px-2 py-1 bg-grok-border text-grok-text text-sm rounded-md hover:bg-gray-600 transition-colors flex items-center space-x-1"
      >
        <ClipboardIcon className="w-4 h-4" />
        <span>{copyText}</span>
      </button>
      <h2 className="text-xl font-semibold text-grok-text mb-4">Cold Email</h2>
      <p className="text-sm text-grok-text mb-4 whitespace-pre-wrap font-mono">
        {coldEmail || 'Submit your resume to generate a cold email.'}
      </p>
    </div>
  );
}