export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  ogType: string;
  canonicalUrl?: string;
}

export const defaultSeo: PageSeo = {
  title: "Chess Coaching for Kids And Training | VCA",
  description: "Join Venture Chess Academy for expert online chess coaching for kids. Learn from FIDE-rated instructors with small batches and proven tournament results.",
  keywords: "chess coaching for kids, online chess classes, kids chess training, FIDE rated chess coaches, chess academy online, learn chess online",
  ogImage: "https://venturechessacademy.com/wp-content/uploads/2025/04/Venture-Chess-Academy.png",
  ogType: "website",
};

export const seoConfig: Record<string, PageSeo> = {
  home: {
    title: "Chess Coaching for Kids And Training | VCA",
    description: "Join Venture Chess Academy for expert online chess coaching for kids. Learn from FIDE-rated instructors with small batches and proven tournament results.",
    keywords: "chess coaching for kids, online chess classes, kids chess training, FIDE rated chess coaches, chess academy online",
    ogImage: "https://venturechessacademy.com/wp-content/uploads/2025/04/Venture-Chess-Academy.png",
    ogType: "website",
    canonicalUrl: "https://venturechessacademy.com/",
  },
  about: {
    title: "About Venture Chess Academy | Expert Chess Coaches for Kids",
    description: "Discover Venture Chess Academy, a premier institute offering professional chess training led by FIDE-rated coaches to build confident champions.",
    keywords: "about venture chess academy, chess academy mentors, FIDE rated coaches, kids chess institute, chess training methodology",
    ogImage: "https://venturechessacademy.com/wp-content/uploads/2025/04/Venture-Chess-Academy.png",
    ogType: "website",
    canonicalUrl: "https://venturechessacademy.com/about/",
  },
  results: {
    title: "Chess Student Achievements & FIDE Ratings | VCA",
    description: "Explore the stellar tournament victories, international trophies, and FIDE ratings achieved by students at Venture Chess Academy",
    keywords: "chess student achievements, youth chess champions, FIDE rated students, chess tournament trophies, chess awards",
    ogImage: "https://venturechessacademy.com/wp-content/uploads/2025/04/Venture-Chess-Academy.png",
    ogType: "website",
    canonicalUrl: "https://venturechessacademy.com/chess-student-achievements/",
  },
  courses: {
    title: "Online Chess Classes for Kids in India | VCA",
    description: "Enroll in structured online chess classes for kids in India. Systematic chess courses, small batches, and expert training for all skill levels",
    keywords: "online chess classes for kids in india, chess courses karnataka, beginner chess classes, intermediate chess coaching, master chess syllabus",
    ogImage: "https://venturechessacademy.com/wp-content/uploads/2025/04/Venture-Chess-Academy.png",
    ogType: "website",
    canonicalUrl: "https://venturechessacademy.com/chess-academy-karnataka-india/",
  },
  blog: {
    title: "Chess Coaching Blog & Tips for Kids | VCA",
    description: "Read expert chess articles, tactical guides, opening tips, and advice for young players and parents on the Venture Chess Academy blog.",
    keywords: "chess blog, chess tips for kids, chess openings, chess tactics, junior chess guides, chess strategies",
    ogImage: "https://venturechessacademy.com/wp-content/uploads/2025/04/Venture-Chess-Academy.png",
    ogType: "blog",
    canonicalUrl: "https://venturechessacademy.com/blog/",
  },
  games: {
    title: "Free Mini Chess Games & Puzzles Online | VCA",
    description: "Play interactive free mini chess games and tactical puzzles online at Venture Chess Academy to sharpen your skills and boost focus",
    keywords: "free mini chess games, chess puzzles online, blindfold chess trainer, chess coordinate trainer, chess quiz, chess maze",
    ogImage: "https://venturechessacademy.com/wp-content/uploads/2025/04/Venture-Chess-Academy.png",
    ogType: "website",
    canonicalUrl: "https://venturechessacademy.com/vca-free-mini-games/",
  },
  contact: {
    title: "Contact Venture Chess Academy | Get in Touch Today",
    description: "Get in touch with Venture Chess Academy in Puttur, Karnataka. Reach out via phone or email for admissions, trial classes, and inquiries",
    keywords: "contact venture chess academy, chess academy puttur karnataka, book chess trial class, chess admissions, chess coaching phone email",
    ogImage: "https://venturechessacademy.com/wp-content/uploads/2025/04/Venture-Chess-Academy.png",
    ogType: "website",
    canonicalUrl: "https://venturechessacademy.com/contact-us/",
  },
};

export const pathToSeoKeyMap: Record<string, keyof typeof seoConfig> = {
  "/": "home",
  "/about": "about",
  "/chess-student-achievements": "results",
  "/chess-academy-karnataka-india": "courses",
  "/blog": "blog",
  "/vca-free-mini-games": "games",
  "/contact-us": "contact",
};

export function getSeoForPath(pathname: string): PageSeo | undefined {
  const normalized = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
  const key = pathToSeoKeyMap[normalized];
  return key ? seoConfig[key] : undefined;
}
