# Software Engineer Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. This portfolio showcases your skills, projects, experience, and provides a professional way to connect with potential employers or clients.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with React and optimized for performance
- 🎯 **SEO Friendly**: Proper semantic HTML structure
- 📧 **Contact Form**: Ready-to-use contact form
- 🔗 **Social Links**: Easy to add your social media profiles
- 🎭 **Customizable**: Easy to personalize with your information

## Sections Included

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and key statistics
3. **Skills**: Technical skills with progress bars and technology grid
4. **Projects**: Featured projects with images, descriptions, and links
5. **Experience**: Work history and achievements
6. **Contact**: Contact form and contact information
7. **Footer**: Social media links and copyright

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd timetracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Customization Guide

### Personal Information

Edit the following in `src/App.jsx`:

1. **Name and Title**: Update the hero section
   ```jsx
   <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
     Hi, I'm <span className="text-blue-600">Your Name</span>
   </h1>
   ```

2. **Profile Picture**: Replace the image URL in the hero section
   ```jsx
   <img
     src="your-profile-picture-url"
     alt="Your Name"
     className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
   />
   ```

3. **About Section**: Update the description and statistics
4. **Contact Information**: Update email, phone, and location
5. **Social Media Links**: Update the footer links

### Projects

Update the `projects` array in `src/App.jsx`:

```jsx
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Your project description",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "your-project-image-url",
    github: "your-github-link",
    live: "your-live-demo-link"
  },
  // Add more projects...
];
```

### Skills

Update the `skills` array:

```jsx
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  // Add more skills...
];
```

### Experience

Update the `experience` array:

```jsx
const experience = [
  {
    company: "Your Company",
    position: "Your Position",
    period: "2022 - Present",
    description: "Your role description"
  },
  // Add more experience...
];
```

### Styling

The portfolio uses Tailwind CSS for styling. You can:

1. **Change Colors**: Update the color classes (e.g., `blue-600` to `green-600`)
2. **Modify Layout**: Adjust grid layouts and spacing
3. **Add Animations**: Enhance with additional CSS animations

### Contact Form

The contact form is currently for display. To make it functional, you'll need to:

1. Add form handling logic
2. Integrate with a backend service (e.g., EmailJS, Netlify Forms)
3. Add form validation

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

1. **Netlify**: Drag and drop the `dist` folder
2. **Vercel**: Connect your GitHub repository
3. **GitHub Pages**: Use the `gh-pages` package
4. **Firebase Hosting**: Use Firebase CLI

## Technologies Used

- **React 19**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool
- **ESLint**: Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions, please open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio, feel free to reach out or check the documentation for the technologies used.

---

**Happy coding! 🚀**
