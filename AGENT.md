# AGENT.md - Guide for AI Coding Agents

## Build & Run Commands
- Start backend server: `npm run start` (in backend directory)
- No tests configured yet (add with Jest or Mocha)

## Code Style Guidelines
- **Imports**: ES modules (import/export), sorted by external then internal
- **Formatting**: Use consistent indentation (2 spaces)
- **Error Handling**: Use try/catch blocks with specific error handling, re-throw when appropriate
- **Naming**: camelCase for variables/functions, PascalCase for classes/components
- **Comments**: JSDoc style for function documentation
- **Authentication**: Use Clerk middleware for protected routes
- **Async**: Use async/await pattern for asynchronous operations
- **Environment**: Use dotenv for environment variables
- **MongoDB**: Use Mongoose for database operations
- **Logging**: Use console.log/error with descriptive messages

Consider adding tests and linting configuration in future updates.