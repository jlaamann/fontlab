# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FontLab Pro is a web application for comprehensive font testing in realistic UI contexts. The application allows designers and developers to test fonts across complete digital interfaces rather than isolated text samples.

**Target Stack (per documentation):**
- Frontend: React 18 with TypeScript, Styled Components, Zustand
- Backend: Node.js with Express, PostgreSQL, Redis
- Infrastructure: Vercel (frontend), AWS ECS (backend)

## Current State

This is an early-stage project with:
- `/docs/product-doc.md` - Complete product requirements document
- `/frontend/` - Empty directory for React application
- No build scripts or package configuration yet

## Development Commands

*Note: This project is in early development. Build/test commands will be added as the codebase develops.*

## Architecture Guidelines

### Frontend Architecture (Planned)
- React 18 with TypeScript for type safety
- Styled Components for CSS-in-JS styling
- Zustand for global state management
- Socket.io for real-time collaboration features
- Web Font Loader for performance optimization

### Key Features to Implement
1. **Interactive UI Element Testing** - Font testing within realistic UI components
2. **Complete Website Mockup Experience** - Full-page layout testing environments
3. **Context-Aware Font Testing** - Hierarchical typography evaluation
4. **Real-time Collaboration** - Multi-user font testing with live updates
5. **Font Pairing Suggestions** - AI-powered font combination recommendations
6. **Export Capabilities** - CSS generation and design system documentation

### Technical Considerations
- Font loading performance optimization is critical
- Support for TTF, OTF, WOFF, WOFF2 formats
- Maximum font file size: 10MB per font
- Cross-browser compatibility (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Real-time collaboration requires WebSocket implementation

### File Organization
- Component library for common UI patterns
- Multiple mockup templates for different industries
- Font management system for uploads and library access
- Collaborative features with user presence and commenting

## Security Notes
- Font licensing compliance tools required
- GDPR and CCPA compliance for user data
- Secure font file upload and storage
- User authentication via Auth0 (planned)