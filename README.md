# ALX Listing App

A modern Airbnb clone listing page built with Next.js, TypeScript, and TailwindCSS. This project demonstrates a responsive, accessible, and well-structured web application for property listings.

## 🚀 Features

- **Modern UI/UX**: Clean and responsive design inspired by Airbnb
- **TypeScript**: Full type safety and better development experience
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **Component Architecture**: Reusable components with proper interfaces
- **Pages Router**: Traditional Next.js routing structure
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance Optimized**: Built with Next.js best practices

## 📁 Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Button.tsx          # Reusable button component
│       └── Card.tsx            # Property card component
├── constants/
│   └── index.ts                # App constants and configuration
├── interfaces/
│   └── index.ts                # TypeScript interfaces
├── pages/
│   ├── _app.tsx                # App wrapper component
│   ├── _document.tsx           # Document structure
│   └── index.tsx               # Home page with property listings
├── public/
│   └── assets/                 # Static assets (images, icons)
├── styles/
│   └── globals.css             # Global styles with Tailwind directives
├── tailwind.config.js          # TailwindCSS configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

### Directory Purposes

- **`components/`**: Contains all reusable React components organized by category
- **`interfaces/`**: TypeScript type definitions and interfaces for type safety
- **`constants/`**: Application constants, API URLs, UI text, and configuration
- **`public/assets/`**: Static assets like images, icons, and other media files
- **`pages/`**: Next.js pages using the Pages Router for routing
- **`styles/`**: Global stylesheets and Tailwind CSS configuration

## 🛠️ Technologies Used

- **Next.js 15**: React framework with SSR/SSG capabilities
- **TypeScript**: Static type checking for JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **React 18**: Component-based UI library
- **ESLint**: Code linting and formatting

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alx-listing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Components

### Button Component
A flexible, reusable button component with multiple variants and sizes:
- **Variants**: primary, secondary, outline
- **Sizes**: small, medium, large
- **Props**: disabled state, custom styling, click handlers

### Card Component
A property listing card component featuring:
- Property image with Next.js Image optimization
- Property details (title, location, price, rating)
- Interactive hover effects
- Star rating display
- Responsive design

## 🔧 Configuration

### TailwindCSS
The project uses a custom Tailwind configuration located in `tailwind.config.js`:
- Scans `pages/**/*.{ts,tsx}` and `components/**/*.{js,ts,jsx,tsx}` for classes
- Extended theme capabilities for custom design tokens

### TypeScript
Strict TypeScript configuration with:
- Path aliases for clean imports
- Strict type checking enabled
- Next.js specific type definitions

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Large Desktop**: Optimized for large screens (1280px+)

## 🎯 Development Guidelines

### Component Development
- Use TypeScript interfaces for all props
- Implement proper error handling
- Follow responsive design principles
- Use semantic HTML elements
- Ensure accessibility compliance

### Styling Conventions
- Use TailwindCSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use design tokens from constants

### Code Quality
- Follow ESLint rules
- Use meaningful variable and function names
- Write descriptive comments for complex logic
- Implement proper TypeScript types

## 🚀 Deployment

The app can be deployed on various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (automatic for Next.js)
3. Deploy with zero configuration

### Other Platforms
- Netlify
- AWS Amplify
- Heroku
- Custom server with Node.js

## 📝 Future Enhancements

- [ ] Add property search and filtering
- [ ] Implement user authentication
- [ ] Add property booking functionality
- [ ] Create property detail pages
- [ ] Add user reviews and ratings
- [ ] Implement map integration
- [ ] Add payment processing
- [ ] Create host dashboard
- [ ] Add real-time messaging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for educational purposes as part of the ALX program.

## 🙏 Acknowledgments

- ALX for the project requirements and guidance
- Next.js team for the excellent framework
- TailwindCSS for the utility-first CSS framework
- Vercel for hosting and deployment solutions

---

Built with ❤️ for the ALX Software Engineering Program
