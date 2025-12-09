# My Portfolio

A modern, responsive personal portfolio website built with React and Vite. Features a clean design with dark/light theme toggle, showcasing skills, projects, and contact information.

## 🚀 Features

- **Modern UI/UX Design** - Clean, minimal interface with smooth animations
- **Dark/Light Theme Toggle** - Persistent theme preference using localStorage
- **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Interactive Components** - Hero section, About section, Contact form, and Footer
- **3D Avatar Support** - Theme-aware avatar images
- **Social Media Integration** - Links to GitHub, LinkedIn, and Upwork
- **Fast Performance** - Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Styled Components** - CSS-in-JS styling
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── 3d-avatar-dark.png
│   │       ├── 3d-avatar-light.png
│   │       └── main-bg.jpg
│   ├── components/
│   │   ├── hook/
│   │   │   └── useLocalStorage.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── data.js
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Updating Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):

   - Update the name and title
   - Modify the introduction text
   - Add/update social media links

2. **About Section** (`src/components/data.js`):

   - Edit the `about` array to update your skills, tools, and services
   - Modify front-end, back-end, and design technologies

3. **Contact Section** (`src/components/Contact.jsx`):

   - Update contact form fields and functionality

4. **Theme Colors**:
   - Customize colors in `src/index.css` or Tailwind config
   - Update gradient colors in component files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Style using Tailwind CSS classes

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://personal-portfolio-eight-swart.vercel.app/)
3. Vercel will automatically detect Vite and configure the build settings

## 📝 License

This project is private and personal.

## 👤 Author

# Roni Mardani Sore

- Front-End Developer
- Learning full-stack development

# Contact

- Email: ronisore360@gmail.com
- Phone: +63 917 123 4567
- LinkedIn: https://www.linkedin.com/in/roni-mardani-sore
- GitHub: https://github.com/roni-mardani-sore
- Upwork: https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~015812cdcb051ae449?mp_source=share

---

Built with ❤️ using React and Vite
