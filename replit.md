# Vintage Strings - Guitar Shop

## Overview

Vintage Strings is a guitar shop web application built with React 18 and Vite. The project is a modern single-page application (SPA) focused on showcasing and selling guitars. It uses a minimal, performance-oriented tech stack with Vite as the build tool for fast development and optimized production builds.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: React 18 with Vite**
- **Problem**: Need for fast development workflow and optimal production builds
- **Solution**: React 18 with Vite bundler instead of traditional Create React App
- **Rationale**: Vite provides instant Hot Module Replacement (HMR), faster build times, and better developer experience compared to webpack-based solutions
- **Pros**: Lightning-fast dev server startup, efficient HMR, optimized builds, TypeScript support out of the box
- **Cons**: Smaller ecosystem compared to CRA, requires manual configuration for some advanced features

**Component Architecture**
- **Solution**: Component-based architecture using JSX
- **Rationale**: React's component model provides reusability and maintainability
- **Structure**: Components organized in the `/src` directory with separate CSS modules

**Styling Approach**
- **Solution**: CSS-in-CSS with Google Fonts integration
- **Fonts Used**: 
  - Playfair Display (serif) for headings and branding
  - Montserrat (sans-serif) for body text
- **Rationale**: Classic, elegant typography suitable for a vintage guitar shop aesthetic
- **Color Palette**: Warm, vintage-inspired colors (#faf8f5 background, #8b5a3c brand color, #2c2419 text)

**Layout Strategy**
- **Solution**: Fixed navigation with responsive design
- **Features**: 
  - Sticky navbar with backdrop blur effect
  - Mobile-first responsive approach
  - Max-width container (1200px) for content
- **Rationale**: Provides consistent navigation and professional appearance across devices

### Build Configuration

**Development Server**
- **Host**: 0.0.0.0 (allows external access, required for Replit)
- **Port**: 5000
- **HMR Configuration**: Custom client port (443) for Replit compatibility
- **Rationale**: Replit's infrastructure requires specific port configuration for proper HMR functionality

**TypeScript Support**
- **Solution**: TypeScript configuration included but JavaScript files used by default
- **Flexibility**: Project supports both .jsx and .tsx files
- **Target**: ESNext for modern JavaScript features
- **Rationale**: Provides option to gradually migrate to TypeScript without forcing it from the start

### Module System

**ES Modules**
- **Solution**: "type": "module" in package.json
- **Rationale**: Modern JavaScript module system, better tree-shaking, and alignment with Vite's architecture
- **Import Strategy**: ESNext module resolution for optimal compatibility

## External Dependencies

### Core Dependencies (DevDependencies)

**React Ecosystem**
- **react** (^18.2.0): Core React library
- **react-dom** (^18.2.0): React DOM rendering
- **@types/react** (^18.2.37): TypeScript definitions for React
- **@types/react-dom** (^18.2.15): TypeScript definitions for React DOM

**Build Tools**
- **vite** (^5.0.0): Frontend build tool and dev server
- **@vitejs/plugin-react** (^4.2.0): Official Vite plugin for React with Fast Refresh support
- **typescript** (^5.2.2): TypeScript compiler (optional usage)

**External Resources**
- **Google Fonts API**: 
  - Playfair Display (weights: 400, 600, 700)
  - Montserrat (weights: 300, 400, 500, 600)
  - Integration: CDN links in index.html with preconnect optimization

### Infrastructure

**Hosting Platform**
- **Replit**: Cloud-based development and hosting environment
- **Special Configurations**: 
  - Custom HMR client port for proxy compatibility
  - Host binding to 0.0.0.0 for external access
  - Port 5000 for web server

**No Backend/Database**
- Currently a frontend-only application
- No API endpoints, database, or authentication implemented
- Static data approach (likely hardcoded or imported from local files)

### Browser Targets

**Supported Environments**
- Modern browsers supporting ESNext features
- DOM and DOM.Iterable APIs
- JSX transformation handled by Vite