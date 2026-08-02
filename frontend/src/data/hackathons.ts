/**
 * Cloudinary Helper Utility
 * Automatically injects transformation parameters (f_auto, q_auto, width) into Cloudinary URLs
 * for optimized lazy loading and responsive web display.
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: { width?: number; quality?: string; format?: string } = {}
): string {
  if (!url || !url.includes('res.cloudinary.com')) return url;
  const { width = 800, quality = 'auto', format = 'auto' } = options;
  const transformString = `f_${format},q_${quality}${width ? `,w_${width}` : ''}`;
  
  if (url.includes('/upload/')) {
    return url.replace('/upload/', `/upload/${transformString}/`);
  }
  return url;
}

export interface HackathonBadge {
  text: string;
  type: 'winner' | 'finalist' | 'runnerup' | 'participant';
}

export interface MediaItem {
  id: string;
  url: string;
  
  type?: 'image' | 'certificate' | 'cover';
}

export interface CertificateInfo {
  url: string;
  title: string;
}

export interface Hackathon {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  badge: HackathonBadge;
  coverImage: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tech: string[];
  gallery: MediaItem[];
  certificate: CertificateInfo;
}

export const hackathons: Hackathon[] = [
  {
    id: 'sih',
    title: 'Smart India Hackathon (SIH)',
    subtitle: 'AI-Powered Sentiment Analysis Platform',
    period: 'September 2025 ',
    location: 'ABES Engineering College',
    badge: {
      text: 'College Level Selection',
      type: 'finalist',
    },
    // Replace with your Cloudinary image URL
    coverImage:
      'https://ik.imagekit.io/pranav31/Portfolio/SIH/IMG-20251111-WA0044.jpg.jpeg',
    description:
      'Developed an AI-powered sentiment analysis platform featuring CSV upload, real-time visualizations, and intelligent feedback insights.',
    longDescription:
      `Smart India Hackathon (SIH) is India's premier nationwide innovation challenge where students solve real-world problems proposed by government organizations and industries. Our team successfully cleared the initial screening rounds, presented our solution before the college evaluation panel, and secured selection at the college level to represent our institution in the Smart India Hackathon.`,
    highlights: [
      'Selected among Top 50 teams from 350+ participating teams in the college SIH screening.',
      'Developed a web-based(prototype) sentiment analysis platform with CSV upload support',
      'Generated pie charts, word clouds, and AI-powered summaries for comment analysis.',
      'Automated bulk feedback processing for faster sentiment insights.',
    ],
    tech: ['React.js', 'TypeScript', 'Vite', 'HTML5', 'Tailwind CSS', 'JavaScript'],
    gallery: [
      {
        id: 'sih-1',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/SIH/Screenshot%202026-08-01%20at%207.48.13%E2%80%AFPM.png',
      },
      {
        id: 'sih-2',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/SIH/IMG-20251111-WA0044.jpg.jpeg',
      },
      {
        id: 'sih-3',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/SIH/SIH%20certificate.pdf',
      },
    ],
    certificate: {
      url: 'https://ik.imagekit.io/pranav31/Portfolio/SIH/SIH%20certificate.pdf',
      title: 'Smart India Hackathon Certificate of Excellence',
    },
  },
  {
    id: 'dron-pratibimb',
    title: 'Dron-Pratibimb',
    subtitle: 'AI-Powered Customer Support & Ticket Classification Platform',
    period: 'April 2026',
    location: 'Dronacharya Group of Institutions, Greater Noida, Uttar Pradesh (India)',
    badge: {
      text: 'Participated',
      type: 'participant',
    },
    // Replace with your Cloudinary image URL
    coverImage:
      'https://ik.imagekit.io/pranav31/Portfolio/DronePratibimb/WhatsApp%20Image%202026-07-31%20at%201.06.52%20PM%20(2).jpeg',
    description:
      'Built an AI-powered customer support platform for intelligent ticket classification and automated issue resolution.',
    longDescription:
      'Developed a modern AI-powered customer support platform that automates ticket classification and streamlines issue management. The application features a responsive dashboard, real-time chat interface, AI-assisted ticket categorization, and analytics to improve customer support efficiency and response time.',
    highlights: [
      'Developed an AI-powered ticket classification and customer support platform.',
      'Built responsive chat, dashboard, and analytics interfaces using React.',
      'Implemented intelligent issue categorization for faster support workflows.',
      'Designed a modern UI with reusable components and responsive layouts.',
    ],
    tech: ['React.js','TypeScript','Tailwind CSS','JavaScript','Vite','HTML','CSS',],
    gallery: [
      {
        id: 'drone-1',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/DronePratibimb/WhatsApp%20Image%202026-07-31%20at%201.06.55%20PM%20(1).jpeg',
      },
      {
        id: 'drone-2',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/DronePratibimb/WhatsApp%20Image%202026-07-31%20at%201.06.52%20PM.jpeg',

      },
      {
        id: 'drone-3',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/DronePratibimb/WhatsApp%20Image%202026-07-31%20at%201.06.52%20PM%20(2).jpeg',
      },
      {
        id: 'drone-4',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/DronePratibimb/WhatsApp%20Image%202026-07-31%20at%201.06.52%20PM%20(1).jpeg',
      },
      {
        id: 'drone-5',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/DronePratibimb/WhatsApp%20Image%202026-07-31%20at%201.06.57%20PM.jpeg',
      },
           {
        id: 'drone-6',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/DronePratibimb/WhatsApp%20Image%202026-07-31%20at%201.06.55%20PM.jpeg?updatedAt=1785613967167',
      },

    ],
    certificate: {
      url: 'https://ik.imagekit.io/pranav31/Portfolio/DronePratibimb/WhatsApp%20Image%202026-08-01%20at%201.07.27%20AM%20(1).jpeg',
      title: 'DronePratibimb Winner Certificate',
    },
  },
  {
    id: 'cognitive-chaos',
    title: 'Cognitive Chaos',
    subtitle: 'AI-Native Multi-Tenant Enterprise Operating System',
    period: 'July 2026',
    location: 'Microsoft Office, Noida',
    badge: {
      text: '🥈 2nd Position',
      type: 'runnerup',
    },
    // Replace with your Cloudinary image URL
    coverImage:
      'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.35%20AM.jpeg?updatedAt=1785615444649',
    description:
      '🥈 Secured 2nd Position at Cognitive Chaos 2026 by building AIFlow Enterprise OS, an AI-native multi-company enterprise platform powered by Convex, Gemini, and Notion',
    longDescription:
      'AIFlow Enterprise OS is a multi-tenant SaaS platform designed for modern enterprises. Every company gets its own secure workspace with isolated employees, managers, departments, policies, budgets, and approval workflows. Instead of relying on a single chatbot, the platform coordinates multiple AI agents such as Policy, HR, Finance, IT, and Notification Agents to automate enterprise operations while keeping humans in control of critical decisions. Convex powers the real-time backend, Notion acts as the organizations long-term memory and audit system, and Gemini provides intelligent reasoning for enterprise workflows.',
    highlights: [
      "🥈 Secured 2nd Position in Cognitive Chaos 2026 , organized by HackBriven in collaboration with the Microsoft Azure Developer Community.",
      "Built a secure multi-company (multi-tenant) SaaS architecture.",
      "Implemented role-based access for Admin, Manager, and Employee.",
      "Integrated Convex for real-time backend and Notion for audit trails.",
      "Developed analytics dashboards and request approval workflow."
    ],
    tech: [ "React","TypeScript","Tailwind CSS","Convex","Gemini","Notion API"],
    gallery: [
      {
        id: 'cog-1',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.34%20AM%20(2).jpeg?updatedAt=1785615444220',

      },
      {
        id: 'cog-2',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.34%20AM.jpeg?updatedAt=1785615444415',
      },
      {
        id: 'cog-3',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.35%20AM%20(2).jpeg?updatedAt=1785615444216',
      },
      {
        id: 'cog-4',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.32%20AM.jpeg?updatedAt=1785615444624',
      },
      {
        id: 'cog-5',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.33%20AM.jpeg?updatedAt=1785615444644',
      },
      {
        id: 'cog-6',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.32%20AM%20(1).jpeg?updatedAt=1785615444635',
      },
      {
        id: 'cog-7',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.36%20AM.jpeg?updatedAt=1785615444590',
      },
      {
        id: 'cog-8',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%2012.59.34%20AM%20(1).jpeg?updatedAt=1785615444556',
      },
       {
        id: 'cog-9',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%201.58.42%20AM.jpeg?updatedAt=1785615444597',
      },
      {
        id: 'cog-10',
        url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%201.07.27%20AM%20(3).jpeg?updatedAt=1785615444512',
      },
    ],
    certificate: {
      url: 'https://ik.imagekit.io/pranav31/Portfolio/Cognitive%20Chaos/WhatsApp%20Image%202026-08-01%20at%201.07.27%20AM%20(2).jpeg?updatedAt=1785615444261',
      title: 'Cognitive Chaos 1st Runner-Up Certificate',
    },
  },
];
