# Past Continuous Tense Learning App

## Overview

This is a modern web application designed to teach English grammar, specifically focusing on the Past Continuous Tense (Was/Were). The application provides an interactive learning experience with a clean, responsive interface built using React and modern web technologies. It features a slide-based presentation format that guides users through grammar concepts with clear explanations and examples in both English and Gujarati.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Development Setup**: Hot module replacement and development middleware integration
- **Static Serving**: Vite development server integration for seamless full-stack development

### Data Storage Solutions
- **Database**: PostgreSQL configured for production use
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for development/testing

### Design System and UI
- **Component Architecture**: Modular component system with consistent styling
- **Theme System**: CSS custom properties for dark/light mode support
- **Typography**: Multiple font families including Inter, DM Sans, and Fira Code
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Development Environment
- **Package Management**: npm with lock file for dependency consistency
- **TypeScript Configuration**: Strict typing with path mapping for clean imports
- **Code Quality**: ESNext modules with modern JavaScript features
- **Development Tools**: TSX for TypeScript execution and hot reloading

### Application Features
- **Interactive Learning**: Slide-based presentation format for grammar lessons
- **Multilingual Support**: Content presented in both English and Gujarati
- **Progressive Enhancement**: Works without JavaScript for basic functionality
- **Accessibility**: Built with Radix UI primitives ensuring ARIA compliance
- **Performance**: Optimized with Vite bundling and lazy loading patterns

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library for React
- **react**: Core React library for UI components
- **express**: Web application framework for Node.js backend

### Database and ORM
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-kit**: CLI tools for database migrations and schema management
- **@neondatabase/serverless**: Neon Database driver for serverless PostgreSQL
- **connect-pg-simple**: PostgreSQL session store for Express

### UI and Styling
- **@radix-ui/***: Collection of low-level UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating type-safe component variants
- **clsx**: Utility for constructing className strings conditionally

### Form Management
- **react-hook-form**: Performant forms library with easy validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema declaration and validation library

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Additional Utilities
- **date-fns**: Modern JavaScript date utility library
- **cmdk**: Command palette component for React
- **embla-carousel-react**: Carousel/slider component for React
- **nanoid**: Tiny, secure, URL-safe unique string ID generator