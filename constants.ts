import {
  PersonalInfo,
  Project,
  SideProject,
  SocialLink,
  NavItem,
  Skill,
} from "./types";
// Updated icon imports: Added GithubIcon, removed TwitterIcon, DribbbleIcon
// Added icons for skills
// Removed FiTerminal, FiCheckSquare, FiImage as they are aliased or not directly exported.
// CommandLineIcon (FiTerminal), CheckBadgeIcon (FiCheckCircle, used as FiCheckSquare), PuzzlePieceIcon (FiImage) are already imported.
import {
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  ShoppingBagIcon,
  RocketLaunchIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  FiShield,
} from "./components/icons";

import {
  FiSmartphone,
  FiCode,
  FiLayers,
  FiDatabase,
  FiGlobe,
  FiGitBranch,
  FiCpu,
  FiLayout,
  FiServer,
  FiActivity
} from "react-icons/fi";

// Import assets properly for Vite to process them
// import vaLogoCircle from "./assets/";
// import vickeyAppsProject from "./assets/";
// import superbScorerLogo from "./assets/";
// import superbScorer from "./assets/";
// import oohoFav from "./assets/";
// import oohoProject from "./assets/";
// import oohoLogin from "./assets/";

// TODO: Replace with your own Web3Forms Access Key
// You can get one for free at https://web3forms.com/
export const WEB3FORMS_ACCESS_KEY = ""; // TODO: Replace with your own Web3Forms Access Key

/** Template author credit in the footer (clickable) */
export const DEVELOPER_CREDIT = {
  name: "Anand Krishna",
  animatedNameEnglish: "Krishna",
  animatedNameJapanese: "クリシュナ",
  url: "https://instagram.com/krishhnahere",
};

/**
 * Visitor count shown on the home hero.
 *
 * Default: STATIC demo number (no Firebase / no personal data needed).
 * Live count: set enableLiveCount to true AND add your own Firebase keys in .env
 * (see VISITOR_COUNTER_SETUP.md).
 */
export const VISITOR_STATS = {
  /** Shown when live Firebase counting is off or not configured */
  staticCount: 156,
  /**
   * false = always show staticCount (recommended for the open-source template)
   * true  = use your own Firebase Firestore counter when .env is filled in
   */
  enableLiveCount: false,
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Mehrshad Khodavirdizadeh",
  title: "Flutter Developer",
  bio: "Mobile Application Developer specializing in Flutter & Dart, focused on building scalable, high-performance cross-platform apps with clean architecture.",
  imageUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQFmGDHzrAuqiA/profile-displayphoto-scale_400_400/B4DZlzNBQFJUAg-/0/1758574418864?e=1790812800&v=beta&t=73iO8c36PvhOkraeg2jXzxPXlONobiM5eo42LQyGH5s", // Luffy's anime portrait
  email: "mehrshadkho15@gmail.com",
  githubUsername: "mehrshadkhv",
  // Text rotating around the profile photo on the home page
  circularText: "Open To  Work • Open To  Work • ",
  // Gap between letters on the circular text (try "0.5em", "0.9em", "1.2em")
  circularTextLetterSpacing: "1.0em",
  // Name swap animation (home hero, About "It's Me", footer only)
  animatedNameEnglish: "Mehrshad",
  animatedNameJapanese: "مهرشاد",
  // Opening intro animation (full-screen splash before the site)
  introLetter1: "Mehrshad",
  introLetter2: "Khodavirdizadeh",
  introTagline: "Mehrshad Khodavirdizadeh",
  aboutMeIntro:
    "I am a Mobile Application Developer with a degree in Computer Engineering, dedicated to turning ideas into smooth, high-performance mobile experiences. I specialize in the Flutter & Dart ecosystem, bridging structured engineering with intuitive, responsive design.",
  aboutMeDetailed: [
    "With a strong background in Computer Engineering, my work focuses on architecting production-grade cross-platform applications from the ground up. I emphasize clean architecture, maintainability, and reliable state management using BLoC, ensuring apps remain robust and testable as they scale.\n\nMy experience spans the full mobile development lifecycle—from defining technical architectures and data modeling to integrating REST APIs, lightweight backends like PocketBase, and offline-first persistence with Hive. I care deeply about fluid performance, elegant user interactions, and writing clean, scalable Dart code.\n\nBeyond mobile development, I continuously explore modern computer networking, developer workflows, and system architectures to stay at the cutting edge of modern software engineering.",
  ],
  aboutPageImageUrl: "https://avatars.githubusercontent.com/u/101244749?v=4", // Luffy's anime portrait
  projectsPageIntro:
    "A showcase of production-grade mobile applications and software projects, built with a focus on clean architecture, fluid performance, and intuitive user experiences.",
  sideProjectsPageIntro:
    "A collection of open-source initiatives, experimental tools, and passion projects exploring new paradigms and architectures.",
  productsPageIntro:
    "Complete applications and digital solutions engineered from concept to deployment, crafted for real-world impact and usability.",
  hireMePageTitle: "Let's Build Something Together",
  hireMePageSubtitle:
    "Have an exciting project, a mobile app to engineer, or an engineering role to discuss? Drop a message below and let's talk.",
};

export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "#home", icon: HomeIcon },
  { id: "about", name: "About", href: "#about", icon: UserIcon },
  {
    id: "projects",
    name: "Projects",
    href: "#projects-page",
    icon: Squares2X2Icon,
  },
  {
    id: "products",
    name: "Products",
    href: "#products-page",
    icon: ShoppingBagIcon,
  }, // New Products Nav Item
];

export const PROJECTS: Project[] = [
  {
    id: "project-aviz",
    iconComponent: RocketLaunchIcon, // Replace with HomeModernIcon if available
    iconBgColor: "bg-blue-500 dark:bg-blue-600",
    name: "Aviz Real Estate App",
    description:
      "A comprehensive mobile application for real estate listings, buying, selling, and rentals.",
    technologies: [
      "Flutter",
      "Dart",
      "PocketBase",
      "BLoC",
      "Hive",
      "Dio"
    ],
    cardImageUrl: "assets/aviz-icon.webp",
    logoImageUrl: "assets/aviz-icon.webp",
    client: "Software Project Course",
    company: "Personal Project",
    projectType: "Mobile Application",
    year: "2026",
    tagline: "Your ultimate platform for real estate transactions.",
    overview:
      "Aviz is a cross-platform mobile application designed to streamline real estate listings, buying, selling, and rentals. Built with Flutter, the app utilizes BLoC for predictable state management and Hive for efficient local storage. The platform is powered by a relational PocketBase backend hosted on Chabokan, ensuring fast, secure, and robust data handling for a seamless property browsing experience.",
    liveLink: "https://github.com/mehrshadkhv/Aviz", // Update with exact repo link
    images: [
      
    ],
    problemStatement: {
      title: "Streamlining Property Listings",
      description:
        "Navigating the real estate market can be fragmented. Aviz unifies listings, providing users with a fast, cross-platform experience to find or advertise properties effortlessly.",
    },
  },
];

export const SIDE_PROJECTS: SideProject[] = [
 {
    id: "side-financial-app",
    iconComponent: FiActivity,
    iconBgColor: "bg-emerald-500 dark:bg-emerald-600",
    name: "Personal Financial Manager",
    tag: "MOBILE APP",
    link: "https://github.com/mehrshadkhv/Financial", // لینک ریپازیتوری گیت‌هاب را اینجا قرار دهید
    linkText: "View Project",
    description:
      "A Flutter application for tracking daily income and expenses with detailed financial reporting.",
    cardImageUrl: "assets/financial.webp", // مسیر یکی از اسکرین‌شات‌هایی که فرستادید را اینجا بگذارید
    year: "2025",
    projectType: "Mobile Application",
    tagline: "Track, manage, and analyze your personal transactions effortlessly.",
    overview:
      "A personal finance management application built entirely with Flutter and Dart. It enables users to record income and expenses, search through transaction history, and view comprehensive financial summaries (daily, monthly, and yearly). The app features full Persian localization and integrates a custom Jalali (Shamsi) date picker for a seamless, native-feeling user experience.",
    technologies: ["Flutter", "Dart", "Hive", "Local Storage"],
    keyFeatures: [
      "Record and categorize income (دریافتی) and expenses (پرداختی)",
      "Real-time search functionality for transaction history",
      "Integrated Persian (Jalali) calendar for intuitive date selection",
      "Automated financial dashboards for daily, monthly, and annual reports",
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/mehrshadkhv",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mehrshadkhv/",
    icon: LinkedinIcon,
  },
  { name: "GitHub", url: "https://github.com/mehrshadkhv", icon: GithubIcon },
];

export const SKILLS: Skill[] = [
  {
    name: "Flutter",
    backgroundColor: "bg-sky-500",
    textColor: "text-white",
    icon: FiSmartphone,
  },
  {
    name: "Dart",
    backgroundColor: "bg-blue-600",
    textColor: "text-white",
    icon: FiCode,
  },
  {
    name: "BLoC State Management",
    backgroundColor: "bg-purple-600",
    textColor: "text-white",
    icon: FiLayers,
  },
  {
    name: "Clean Architecture",
    backgroundColor: "bg-indigo-600",
    textColor: "text-white",
    icon: FiCpu,
  },
  {
    name: "REST APIs & Dio",
    backgroundColor: "bg-emerald-600",
    textColor: "text-white",
    icon: FiGlobe,
  },
  {
    name: "Hive & Offline Storage",
    backgroundColor: "bg-amber-500",
    textColor: "text-white",
    icon: FiDatabase,
  },
  {
    name: "PocketBase",
    backgroundColor: "bg-teal-600",
    textColor: "text-white",
    icon: FiServer,
  },
  {
    name: "Git & Version Control",
    backgroundColor: "bg-zinc-800",
    textColor: "text-white",
    icon: FiGitBranch,
  },
  {
    name: "Responsive UI/UX",
    backgroundColor: "bg-pink-600",
    textColor: "text-white",
    icon: FiLayout,
  },
  {
    name: "App Security & Storage",
    backgroundColor: "bg-rose-600",
    textColor: "text-white",
    icon: FiShield,
  },
];
