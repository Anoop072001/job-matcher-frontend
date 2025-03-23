export interface Job {
    applyUrl: string;
    name: string;
    location: string;
  }
  
  export interface ApiResponse {
    jobs: Job[];
    referralMessage: string;
    coldEmail: string;
  }