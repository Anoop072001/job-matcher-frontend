'use client';

import { useState, FormEvent } from 'react';
import axios from 'axios';
import ResumeDrop from '../components/ResumeDrop';
import LocationInput from '../components/LocationInput';
import JobList from '../components/JobList';
import ReferralBox from '../components/ReferralBox';
import ColdEmailBox from '../components/ColdEmailBox';
import { Job, ApiResponse } from '../types';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState<string>('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [referralMessage, setReferralMessage] = useState<string>('');
  const [coldEmail, setColdEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file || !location) {
      setError('Please upload a resume and enter a location.');
      return;
    }

    setError('');
    setLoading(true);
    setJobs([]);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('location', location);

    try {
      const response = await axios.post<ApiResponse>("https://natural-maryellen-job-matcher-finder-b6ea5ea7.koyeb.app/analyze", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setJobs(response.data.jobs || []);
      setReferralMessage(response.data.referralMessage || '');
      setColdEmail(response.data.coldEmail || '');
    } catch (err) {
      setError('Error fetching data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 flex items-start justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cold Email Box */}
        <div className="lg:col-span-1">
          <ColdEmailBox coldEmail={coldEmail} />
        </div>

        {/* Center: Main Input and Job List */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <ResumeDrop onFileSelect={setFile} />
              <LocationInput onLocationChange={setLocation} />
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-grok-border text-grok-text rounded-lg font-semibold hover:bg-black transition-colors disabled:opacity-50"
              >
                {loading ? 'Searching...' : 'Find Jobs'}
              </button>
            </form>
          </div>
          <JobList jobs={jobs} />
        </div>

        {/* Right: Referral Box */}
        <div className="lg:col-span-1">
          <ReferralBox referralMessage={referralMessage} />
        </div>
      </div>
    </div>
  );
}