'use client';

import { useState, ChangeEvent } from 'react';

interface LocationInputProps {
  onLocationChange: (location: string) => void;
}

export default function LocationInput({ onLocationChange }: LocationInputProps) {
  const [location, setLocation] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    onLocationChange(e.target.value);
  };

  return (
    <div className="mb-6 bg-grok-modal rounded-lg p-6">
      <h3 className="text-sm font-semibold text-grok-text mb-2">Enter Location</h3>
      <input
        type="text"
        value={location}
        onChange={handleChange}
        placeholder="e.g., Bangalore"
        className="w-full p-3 bg-grok-box text-grok-text border border-grok-border rounded-lg focus:outline-none"
      />
    </div>
  );
}