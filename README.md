# Portfolio Website

A modern, full-featured portfolio website built with Next.js, React, and cutting-edge technologies. Showcase your projects, services, and skills with an elegant, responsive design.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Fast Performance** - Built with Next.js 15 and optimized for production
- **Admin Dashboard** - Manage your portfolio content with an admin panel
- **Project Showcase** - Display your finest work with project sections
- **Services Section** - Highlight the services you offer
- **Contact Form** - Get in touch with potential clients
- **Animated Sections** - Smooth animations and transitions
- **SEO Optimized** - Proper meta tags and structured data
- **Dark Mode Ready** - Tailwind CSS with theme support

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **UI Components**: Radix UI, shadcn/ui
- **Database**: Supabase (optional), Firebase
- **Forms**: React Hook Form
- **AI**: Google Genkit for AI features
- **Hosting**: Firebase App Hosting

## 📦 Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/work-suvash/Protfolio-worksuvash.git
   cd Protfolio-worksuvash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Firebase and Supabase credentials

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5000](http://localhost:5000) in your browser

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── admin/          # Admin dashboard
│   └── projects/       # Projects page
├── components/
│   ├── sections/       # Main page sections
│   ├── layout/         # Layout components
│   ├── admin/          # Admin components
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
├── types/              # TypeScript types
└── ai/                 # Genkit AI configuration
```

## 🎯 Available Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run genkit:dev       # Start Genkit AI server

# Production
npm run build            # Build for production
npm start               # Start production server

# Maintenance
npm run lint            # Run ESLint
npm run typecheck       # Type check with TypeScript
```

## 📝 Environment Variables

Create a `.env.local` file with the following:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

# Supabase Configuration (optional)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Admin Configuration
ADMIN_PASSWORD=your_admin_password
```

## 🚀 Deployment

### Firebase App Hosting

1. The project is configured for Firebase App Hosting via `apphosting.yaml`
2. Push to the main branch - Firebase auto-deploys
3. Or use: `firebase deploy --only hosting`

### Other Platforms

The project is optimized for any Node.js hosting platform (Vercel, Railway, Heroku, etc.)

## 📄 Pages

- **`/`** - Home page with hero section, services, about, projects, and contact
- **`/projects`** - Dedicated projects showcase
- **`/admin`** - Admin dashboard (password protected)

## 🔧 Customization

- **Content**: Edit `src/lib/data.ts` for your portfolio content
- **Styling**: Modify `tailwind.config.ts` for colors and themes
- **Components**: Check `src/components/` for reusable components
- **Sections**: Customize sections in `src/components/sections/`

## 📦 Dependencies

- Next.js 15.5.15
- React 19.2.3
- TypeScript
- Tailwind CSS
- Radix UI components
- Firebase Admin
- Supabase
- Google Genkit

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For issues or questions, please open an issue on [GitHub](https://github.com/work-suvash/Protfolio-worksuvash/issues)
