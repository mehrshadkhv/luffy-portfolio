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
  CpuChipIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  PuzzlePieceIcon,
  PencilIcon,
  CheckBadgeIcon,
  ServerStackIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  FiShield,
  FiWind,
  FiCoffee,
  FiHexagon,
  FiRefreshCw,
  FiFeather,
  DocumentDuplicateIcon,
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
  FiTerminal,
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
  staticCount: 10000800,
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
  animatedNameJapanese: "メルシャド",
  // Opening intro animation (full-screen splash before the site)
  introLetter1: "Hire",
  introLetter2: "Me",
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
    id: "project-going-merry",
    iconComponent: RocketLaunchIcon,
    iconBgColor: "bg-yellow-500 dark:bg-yellow-600",
    name: "Going Merry Ship Upgrade",
    description:
      "Major upgrades and repairs to the Straw Hats' first pirate ship, the Going Merry.",
    technologies: [
      "Woodworking",
      "Engineering",
      "Friendship",
      "Sniper King Magic",
    ],
    cardImageUrl:
      "https://preview.redd.it/going-merry-or-thousand-sunny-v0-zwgzn343tqzb1.jpg?width=562&format=pjpg&auto=webp&s=e9ecd2766cd1fd9953efae2622abad1abd1c5f8d",
    logoImageUrl:
      "https://preview.redd.it/going-merry-or-thousand-sunny-v0-zwgzn343tqzb1.jpg?width=562&format=pjpg&auto=webp&s=e9ecd2766cd1fd9953efae2622abad1abd1c5f8d",
    client: "Straw Hat Pirates",
    company: "Water 7 Shipwrights",
    projectType: "Ship Repair, Adventure",
    year: "Grand Line Era",
    tagline:
      "The Going Merry carried us through countless adventures. She was more than a ship—she was our friend!",
    overview:
      "After many battles and storms, the Going Merry needed serious repairs. With the help of the Water 7 shipwrights (and Usopp's determination), we gave her one last epic journey.",
    liveLink: "https://onepiece.fandom.com/wiki/Going_Merry",
    images: [
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/67a971cb-baf1-4821-8e0e-f6a221e77f6d.jpeg",
    ],
    problemStatement: {
      title: "Ship in Trouble!",
      description:
        "Our beloved ship was falling apart after so many adventures. We needed to fix her or risk losing our way to the Grand Line!",
    },
  },
  {
    id: "project-meat-inventory",
    iconComponent: ShoppingBagIcon,
    iconBgColor: "bg-red-500 dark:bg-red-600",
    name: "Meat Inventory App",
    description:
      "A handy app to track all the meat supplies on the Thousand Sunny.",
    technologies: ["React", "Meat Tracking", "Sanji's Recipes", "QR Code"],
    cardImageUrl:
      "https://preview.redd.it/if-sanji-tells-you-that-he-will-cook-any-dish-for-you-that-v0-txrdpkzu2fqb1.jpg?auto=webp&s=3cecbad31936393ee734a95dab67cfe30d77cb94",
    logoImageUrl:
      "https://preview.redd.it/if-sanji-tells-you-that-he-will-cook-any-dish-for-you-that-v0-txrdpkzu2fqb1.jpg?auto=webp&s=3cecbad31936393ee734a95dab67cfe30d77cb94",
    client: "Luffy (for Sanji)",
    company: "Straw Hat Pirates",
    projectType: "Food Management, App",
    year: "Grand Line Era",
    tagline: "Never run out of meat again!",
    overview:
      "Sanji was tired of Luffy eating all the meat, so we built an app to keep track of supplies. Now, everyone gets their fair share (except when I get hungry).",
    liveLink: "https://onepiece.fandom.com/wiki/Sanji",
    images: [
      "https://i.pinimg.com/736x/23/5f/15/235f15beabf134c30e3dc437a22ec884.jpg",
    ],
    problemStatement: {
      title: "Where's the Meat?",
      description:
        "Meat kept disappearing from the kitchen. We needed a way to track it and keep Luffy honest!",
    },
  },
  {
    id: "project-crew-recruitment",
    iconComponent: UserIcon,
    iconBgColor: "bg-blue-600 dark:bg-blue-700",
    name: "Pirate Crew Recruitment Portal",
    description:
      "A portal for recruiting new Straw Hat Pirates with big dreams.",
    technologies: [
      "React",
      "Dream Detection",
      "Wanted Posters",
      "Grand Line Map",
    ],
    cardImageUrl:
      "https://logowik.com/content/uploads/images/straw-hat-pirates3177.logowik.com.webp",
    logoImageUrl:
      "https://logowik.com/content/uploads/images/straw-hat-pirates3177.logowik.com.webp",
    client: "Monkey D. Luffy",
    company: "Straw Hat Pirates",
    projectType: "Recruitment, Adventure",
    year: "Grand Line Era",
    tagline: "Got a dream? Join my crew!",
    overview:
      "We needed more nakama for our journey. This portal lets dreamers from all over the world apply to join the Straw Hat Pirates. Only those with true spirit make the cut!",
    liveLink: "https://onepiece.fandom.com/wiki/Straw_Hat_Pirates",
    images: [
      "https://i.pinimg.com/736x/dc/e6/72/dce67240d40184611e1ee2d301b6d9ab.jpg",
    ],
    problemStatement: {
      title: "Need More Nakama!",
      description:
        "The Grand Line is tough. We need strong, loyal friends to help us reach the end!",
    },
  },
  {
    id: "project-grand-line-map",
    iconComponent: ServerStackIcon,
    iconBgColor: "bg-green-600 dark:bg-green-700",
    name: "Grand Line Navigation System",
    description:
      "A high-tech map and log pose tracker for navigating the Grand Line.",
    technologies: [
      "Log Pose",
      "Weather Science",
      "Nami's Cartography",
      "React",
    ],
    cardImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Onepiece-welt_(2).png",
    logoImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Onepiece-welt_(2).png",
    client: "Nami",
    company: "Straw Hat Pirates",
    projectType: "Navigation, Mapping",
    year: "Grand Line Era",
    tagline: "Never get lost again! (Unless Luffy's steering)",
    overview:
      "Nami built a navigation system to help us survive the Grand Line's crazy weather and islands. Now we only get lost when Luffy ignores her directions!",
    liveLink: "https://onepiece.fandom.com/wiki/Nami",
    images: [
      "https://preview.redd.it/one-piece-world-map-v0-phf7wbld54zc1.jpeg?width=1080&crop=smart&auto=webp&s=540c62ca48e64cade0d16c251b1e46d6ebe3197c",
    ],
    problemStatement: {
      title: "Lost at Sea",
      description:
        "The Grand Line is full of surprises. We needed a way to track our journey and avoid danger!",
    },
  },
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: "side-1",
    iconComponent: PaintBrushIcon,
    iconBgColor: "bg-pink-500 dark:bg-pink-600",
    name: "Wanted Poster Generator",
    tag: "OPEN SOURCE",
    link: "#",
    linkText: "Try Now",
    description:
      "Create your own pirate wanted poster! Upload a photo and get your bounty.",
    cardImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRNIzKewfHkPM_RztQBv_NA4JyRlgVi6cgA&s",
    year: "2024",
    projectType: "Web App",
    tagline: "Make yourself look dangerous — even if you just ate meat.",
    overview:
      "A fun demo product page showing how side projects can open a full details view in this portfolio template.",
    technologies: ["React", "Canvas", "Typography"],
    keyFeatures: [
      "Upload a face and generate a poster",
      "Customize bounty text",
      "Export as image",
    ],
  },
  {
    id: "side-2",
    iconComponent: CpuChipIcon,
    iconBgColor: "bg-teal-500 dark:bg-teal-600",
    name: "Devil Fruit Encyclopedia",
    tag: "LIVE DEMO",
    link: "#",
    linkText: "Explore",
    description:
      "Browse all known Devil Fruits and their powers. Beware of side effects!",
    cardImageUrl:
      "https://static.vecteezy.com/system/resources/previews/046/805/836/non_2x/devil-fruits-gomu-gomu-no-monkey-d-luffy-one-piece-free-png.png",
    year: "2025",
    projectType: "Web App",
    tagline: "Know every fruit before you bite it.",
    overview: "Example product with richer metadata for the details page.",
    technologies: ["React", "Search", "Content"],
  },
  {
    id: "side-3",
    iconComponent: PencilIcon,
    iconBgColor: "bg-yellow-500 dark:bg-yellow-600",
    name: "Zoro's Sword Tracker",
    tag: "Live on Play Store",
    playStoreStats: {
      downloads: "1K+",
      rating: "4.5",
    },
    link: "#",
    linkText: "Play Store",
    description: "Keep track of all swords Zoro has owned (and lost).",
    cardImageUrl:
      "https://image.made-in-china.com/202f0j00wtkMBPJAMEqi/104cm-Roronoa-Zoro-Carbon-Steel-One-Piece-Anime-Cartoon-Cosplay-Sword-Purple.webp",
    year: "2026",
    projectType: "Android App",
    tagline: "Never lose a sword again (or do, and still track it).",
    overview:
      "Demo of Play Store metrics badges (downloads + average rating) on product cards and detail pages.",
    technologies: ["Android", "Flutter"],
    keyFeatures: [
      "Log every sword in the collection",
      "Mark lost / found status",
      "Share bounty-ready screenshots",
    ],
  },
  {
    id: "side-4",
    iconComponent: PuzzlePieceIcon,
    iconBgColor: "bg-indigo-500 dark:bg-indigo-600",
    name: "Chopper's Medical Kit",
    tag: "HOBBY PROJECT",
    link: "#",
    linkText: "View Kit",
    description:
      "A digital guide to Chopper's favorite remedies and medicines.",
    cardImageUrl: "https://s1.zerochan.net/Tony.Tony.Chopper.600.2356091.jpg",
    year: "2023",
    projectType: "Web Tool",
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
    name: "Networking & Protocols",
    backgroundColor: "bg-cyan-600",
    textColor: "text-white",
    icon: FiTerminal,
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
  {
    name: "Performance & Profiling",
    backgroundColor: "bg-orange-500",
    textColor: "text-white",
    icon: FiActivity,
  },
];
