# Next.js Project Boilerplate

## Repository contents

Repository contains boilerplate project using Next.js.

Project is using Node.js and TypeScript in versions listed below:

| Technology | Version |
| ---------- | ------- |
| Node.js    | ^22.18  |
| TypeScript | ^5.x    |

Main dependencies are Next.js and React in versions listed below.

| Vendor  | Version |
| ------- | ------- |
| Next.js | ^14.x   |
| React   | ^18.x   |
| Tailwind CSS | ^3.x |
| Zod     | ^4.x    |
| Axios   | ^1.x    |

### Package descriptions

- **Next.js** - React framework for production with features like server-side rendering, static generation, and API routes
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Zod** - TypeScript-first schema validation library for runtime type checking
- **Axios** - Promise-based HTTP client for making API requests

## Infrastructure

This is a frontend-only boilerplate that runs locally using Next.js development server.

## Setting project up

This app uses Node.js and Yarn package manager. In order to set up project, follow these steps:

1. Install Node.js (v22.18.0 or higher):
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use a version manager like [nvm](https://github.com/nvm-sh/nvm)

2. Install Yarn globally:
   ```shell
   npm install --global yarn
   ```

3. Clone project by running:
    ```shell
    git clone <your-repository-url>
    ```
4. Navigate to the project directory:
    ```shell
    cd nextjs-boilerplate
    ```
5. Install dependencies using Yarn:
    ```shell
    yarn install
    ```

## Running the project

To start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

```
src
|- app                # Next.js App Router directory
|- assets             # Static assets
    |- icons          # Icon files (SVG, PNG, etc.)
    |- images         # Image files (JPG, PNG, etc.)
|- components         # React components
    |- [shared]       # Shared/reusable components across domains
        |- [ComponentName]  # Individual component folders
    |- [domain-name]  # Domain-specific components (e.g., home, admin)
        |- [ComponentName]  # Individual component folders
```

## Available scripts

```bash
yarn dev              # Start development server
yarn build            # Build for production (static export)
yarn start            # Start production server
yarn lint             # Run ESLint
yarn type-check       # Run TypeScript type checking
```

## Static Export

This project uses Next.js static export for optimal performance and deployment flexibility. 

**Important**: This approach generates static HTML files at build time. Server-side features like SSR, API routes, and dynamic routes are not available. All data fetching must occur during build time or on the client side.

## Testing

Currently, no test scripts are configured in this boilerplate. To add testing, you can:

1. Install testing library: `vitest`
2. Add test scripts to package.json
3. Configure test environment

Example test setup:

```bash
# Install vitest and testing libraries
yarn add -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Add test script to package.json
# "test": "vitest"
# "test:ui": "vitest --ui"
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React Documentation](https://react.dev/reference/react) - React.js reference
- [Learn React](https://react.dev/learn) - an interactive React.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/) - Tailwind CSS documentation.
