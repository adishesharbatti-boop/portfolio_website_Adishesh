export const categories = ['All', 'Web App', 'IoT'];

export const projectsData = [
  {
    id: 1,
    title: 'Weather App',
    category: 'Web App',
    featured: true, // <-- Ensure this is present if you filter by featured!
    description: 'Real-time weather for any city.',
    longDesc: 'A full-featured weather application that fetches real-time updates using REST APIs.',
    tags: ['React', 'CSS', 'REST API'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/weather-app',
    youtubeLink: 'https://www.youtube.com/watch?v=YQCDUJ6hhNY'
  },
  {
    id: 2,
    title: 'Portfolio Site',
    category: 'Web App',
    featured: true,
    description: 'This dynamic multi-page React portfolio.',
    longDesc: 'A sleek, responsive portfolio website built with React and React Router DOM.',
    tags: ['React', 'CSS3', 'React Router'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/portfolio-site',
    youtubeLink: 'https://www.youtube.com/watch?v=CKAn5dCK6RE'
  },
  {
    id: 3,
    title: 'Smart Ultrasonic Distance Tracker',
    category: 'IoT',
    featured: true,
    description: 'Arduino IoT distance and obstacle monitoring system.',
    longDesc: 'An IoT project using HC-SR04 ultrasonic sensors and C++ programming on Arduino.',
    tags: ['C++', 'Arduino', 'IoT'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/distance-tracker',
    youtubeLink: 'https://www.youtube.com/watch?v=NPyd5whN8XE'
  },
  {
    id: 4,
    title: 'Todo Manager',
    category: 'Web App',
    featured: false,
    description: 'Kanban-style task board.',
    longDesc: 'A streamlined Kanban task management application.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/todo-manager',
    youtubeLink: 'https://www.youtube.com/watch?v=SJTazZUQVDE'
  },
];
