import cidashboard from "../assets/cidashboard.png";
import cicard from "../assets/cicard.png";
import attendance from "../assets/attendance.png";


export const educationData = [
  {
    year: "2015 - 2018",
    degree: "Junior High School",
    school: "SMP Dr. Wahidin Sudirohusodo",
    location: "Medan, Indonesia",
    desc: "",
    highlights: [""]
  },
  {
    year: "2021 - 2025",
    degree: "Bachelor of Science",
    school: "Universitas Mikroskil",
    location: "Medan, Indonesia",
    desc: "A field of study that studies the application of computer science principles, algorithms, and mathematical analysis to design, develop, and test software and computing systems.",
    highlights: ["Research With Lecture", "Bangkit Batch II Android Developer", "Google Developer Student Club"]
  },
  {
    year: "2018 - 2021",
    degree: "Senior High School",
    school: "SMA Negeri 19 Medan",
    location: "Medan, Indonesia",
    desc: "Field of Studies are Mathematics, Science (biology, chemistry, physics), and English",
    highlights: [""]
  }
];

export const experienceData = [
  {
    year: "January 2026 - Present",
    role: "IT Staff",
    company: "PT. Canang Indah Particle & MDF Board",
    desc: "Responsible for managing and securing the company's network and server infrastructure. I design and develop web-based applications to automate internal processes, improving operational efficiency and simplifying factory workflows through digital innovation.",
    tech: ["Network & Server Security", "React.js", "Python", "Web Development"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Canang Indah Dashboard",
    desc: "Transformation from paper to digital system, make operations more efficient.",
    image: cidashboard,
    category: "web",
    tech: ["React.js Vite", "Node.js", "PostgreSQL"],
    liveUrl: "https://canang-indah-dashboard.vercel.app/",
    sourceUrl: "https://github.com/Iamwillypieter/Canang-Indah-Dashboard",
    featured: false
  },
  {
    id: 2,
    title: "Card ID Processing",
    desc: "Efficient processing of employee identification cards with simple task, just input 4 NIK and it will generate the card.",
    image: cicard,
    category: "web",
    tech: ["React", "Python"],
    liveUrl: "#",
    sourceUrl: "disabled",
    featured: false
  },
  {
    id: 3,
    title: "Attendance Filtering",
    desc: "Create a data filter from random data into individual files based on name and NIK.",
    image: attendance,
    category: "web",
    tech: ["React", "Python"],
    liveUrl: "#",
    sourceUrl: "https://github.com/Iamwillypieter/Sort-Absensi-Canang-Indah",
    featured: false
  }
];

export const storyValues = [
  {
    icon: "🎯",
    title: "Problem-First",
    desc: "Tech serves people, not the other way around."
  },
  {
    icon: "🗣️",
    title: "Public Speaking",
    desc: "Extrovert Person to get more relations."
  },
  {
    icon: "🤝",
    title: "Open Collaboration",
    desc: "Great things are built together."
  },
  {
    icon: "🔄",
    title: "Continuous Growth",
    desc: "Yesterday's expert is today's beginner."
  }
];

export const storyHobbies = [
  {
    icon: "⚽",
    title: "Footbal & Futsal",
    desc: "I like football to fresh my mind"
  },
  {
    icon: "🎹",
    title: "Music",
    desc: "Playing piano to unwind and spark creativity"
  },
  {
    icon: "🎮",
    title: "Play Games",
    desc: "Gaming is my way to relax"
  },
  {
    icon: "📺",
    title: "Watching Movie",
    desc: "Watching movies is my way to relax and get inspired"
  },
  {
    icon: "🎧",
    title: "Hear Song",
    desc: "Hear my favorite song to fresh my mind"
  }
];

export const storyJourney = [
  {
    year: "2021",
    label: "Started college & joined GDSC Mikroskil",
    active: false
  },
  {
    year: "2023",
    label: "Bangkit Academy Batch II | Android Dev",
    active: false
  },
  {
    year: "2025",
    label: "Graduated from Universitas Mikroskil",
    active: false
  },
  {
    year: "2026",
    label: "Full-time IT Staff at PT. Canang Indah Particle & MDF Board",
    active: true
  }
];

export const socialLinks = [
  {
    href: "https://github.com/Iamwillypieter",
    icon: "🐱",
    label: "GitHub",
    external: true
  },
  {
    href: "https://instagram.com/willypieter",
    icon: "🅾",
    label: "Instagram",
    external: true
  },
  {
    href: "https://www.facebook.com/willy.pieter.2025",
    icon: "ⓕ",
    label: "Facebook",
    external: true
  },
  {
    href: "mailto:willypieter8@gmail.com",
    icon: "📧",
    label: "Email",
    external: true
  }
];