export const categories = ['all', 'web', 'iot', 'python', 'design'];

export const projectsData = [
  {
    id: 1,
    title: 'Weather App',
    description: 'Real-time weather for any city.',
    longDesc: 'A fully responsive weather application that shows current conditions and 5-day forecasts using external weather APIs.',
    tech: ['React', 'CSS', 'REST API'],
    category: 'web',
    featured: true,
    link: '#',      // Matches ProjectCard prop expecting 'link'
    github: '#'     // Matches ProjectCard prop expecting 'github'
  },
  {
    id: 2,
    title: 'Portfolio Site',
    description: 'This dynamic multi-page React portfolio.',
    longDesc: 'A responsive React portfolio featuring client-side routing, dark mode toggle, interactive filtering, and live GitHub stats.',
    tech: ['React', 'CSS3', 'React Router'],
    category: 'web',
    featured: true,
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Smart Ultrasonic Distance Tracker',
    description: 'Arduino IoT distance and obstacle monitoring system.',
    longDesc: 'Hardware and embedded C++ project using an ultrasonic sensor connected to an Arduino board to measure physical clearance in real time.',
    tech: ['C++', 'Arduino', 'IoT'],
    category: 'iot',
    featured: true,
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Todo Manager',
    description: 'Kanban-style task board.',
    longDesc: 'A full-featured task manager with customizable columns and local storage persistence.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'design',
    featured: false,
    link: '#',
    github: '#'
  }
];