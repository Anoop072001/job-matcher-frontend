'use client';

import { Job } from '../types';

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) { // Limit to 10 jobs

  return (
    <div className="mt-8">
      <div className="border border-grok-border rounded-lg p-6 bg-grok-box shadow-md max-h-[400px] overflow-y-auto">
        <ul className="space-y-4">
          {jobs.map((job, index) => (
            <li key={index} className="p-4 bg-grok-box rounded-md border border-grok-border">
              <h3 className="text-lg font-medium text-grok-text">{job.name}</h3>
              <p className="text-sm text-gray-400">{job.location}</p>
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-grok-text hover:text-white hover:underline"
              >
                View on LinkedIn
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}