# FSAC-SDGLR Scraper AI UI

## Overview

This project is a web scraping interface that enables users to extract event data from websites. It is built using modern technologies, including **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**.

## Features

- Scraper form to input website URLs, prompts, and keywords.
- Dynamic display of results with animations.
- Error handling and loading states.
- Modular UI components with reusable patterns.
- Dark mode support with customizable themes.

## Technologies

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Components**: Radix UI, Lucide Icons
- **State Management**: React Hooks
- **Animations**: Framer Motion
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js (v18+)
- Yarn or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fsac-sdglr-scraper-ai-ui.git
   cd fsac-sdglr-scraper-ai-ui
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

### Development

1. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

2. Open the application at [http://localhost:3000](http://localhost:3000).

### Build

To build the project for production:
```bash
yarn build
# or
npm run build
```

### Run

Start the production server:
```bash
yarn start
# or
npm run start
```

## Project Structure

```
fsac-sdglr-scraper-ai-ui/
├── app/                       # Next.js application components
│   ├── components/            # Modular UI components
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Application layout
├── components/ui/             # Reusable UI components
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── public/                    # Static assets
├── styles/                    # Global and theme styles
├── package.json               # Project metadata and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## API Endpoint

The application communicates with a backend API for web scraping:
- **POST /scrape/**  
  Request body:
  ```json
  {
    "website": "https://example.com",
    "user_prompt": "Scrape events from the website",
    "keywords": ["event", "conference", "workshop"]
  }
  ```

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push to your branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Let me know if you'd like to customize any part!