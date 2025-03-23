# Job Matcher Frontend

A Next.js application that helps match job seekers with relevant positions based on their resume and location preferences.

## Features

- Resume upload (drag & drop or file selection)
- Location-based job search
- Job listing display
- Referral message generation
- Cold email template generation

## Tech Stack

- Next.js 15.2
- React 19
- TypeScript
- Tailwind CSS
- Axios for API calls

## Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## API Integration

The frontend communicates with a backend server running on `http://localhost:8080` for:
- Resume analysis
- Job matching
- Referral message generation
- Cold email template creation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

