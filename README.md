# Design Patterns and SOLID Principles in Node.js

This repository contains practical examples of design patterns and SOLID principles implemented in Node.js using TypeScript. It serves as a learning resource and reference for understanding these fundamental software design concepts.

## Project Structure

- `solid/`: Contains examples of SOLID principles
  - Single Responsibility Principle (SRP)
  - Open/Closed Principle (OCP)
  - Liskov Substitution Principle (LSP)
  - Interface Segregation Principle (ISP)
  - Dependency Inversion Principle (DIP)
- `patterns/`: Contains examples of common design patterns
  - Creational Design Patterns
    - Singleton
    - Factory
    - Builder
  - Structural Design Patterns
    - Adapter
    - Decorator
    - Proxy
  - Behavioral Design Patterns
    - Observer
    - Strategy
    - Command
  - Concurrency Design Patterns
    - Fork/Join (split up one task into subtasks and recombine later)
    - Thread Pools (worker pool to handle incoming requests/image processing)
  - Architectural Design Patterns
    - Microservices (split up app into multiple services)
    - Event-driven (event bus/broker)

## Prerequisites

- Node.js (version specified in .nvmrc)
- pnpm (required)

## Setup

```bash
pnpm install
```

## Available Scripts

- `pnpm test`: Run tests in watch mode
- `pnpm test:ci`: Run tests in CI mode
- `pnpm lint`: Run linter
- `pnpm format`: Format code using Prettier
- `pnpm lint:types`: Run TypeScript type checking
- `pnpm build:solid`: Build the solid examples

## Development

The project uses:

- TypeScript for type safety
- Vitest for testing
- Oxlint for linting
- Prettier for code formatting
- Hono for web framework examples

## License

MIT
