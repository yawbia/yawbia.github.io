import { Publication, NewsItem, Experience, SocialLink, Education } from './types';

export const PERSONAL_INFO = {
  name: "Yaw Bia Tan",
  title: "Protein Engineering | Diagnostics | Structural Biology",
  tagline: "Protein enthusiast developing next-generation diagnostics using protein biology and computational design.",
  about: `I am a Protein Engineer and Scientist specializing in Structural Biology and Virology. My work focuses on developing next-generation diagnostics and therapeutics through protein biology and computational design.

  With a background in both wet-lab biochemistry and in-silico modeling, I bridge the gap between structural discovery and practical application.`,
  email: "yawbia@example.com", 
  location: "Singapore",
  profileImage: "", 
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/yawbia/", icon: "linkedin" },
  { platform: "Scholar", url: "https://scholar.google.com/citations?hl=en&user=vRS_sU4AAAAJ&view_op=list_works&sortby=pubdate", icon: "graduation-cap" },
  { platform: "GitHub", url: "https://github.com/yawbia", icon: "github" },
];

export const HIGHLIGHTS: NewsItem[] = [
  {
    id: "h1",
    date: "Oct 2024",
    content: "Joined Thrixen as a Protein Engineer (Multiplex Diagnostics).",
  },
  {
    id: "h2",
    date: "Mar 2024",
    content: "Completed Postdoc at LKC Medicine (Drug Discovery).",
  },
  {
    id: "h3",
    date: "2023",
    content: "Conferred PhD in Structural Biology from LKC Medicine.",
  },
  {
    id: "h4",
    date: "Oct 2021",
    content: "Awarded RNA2021 Poster Award by RNA Society.",
  },
  {
    id: "h5",
    date: "Aug 2019",
    content: "Started PhD journey at Lee Kong Chian School of Medicine.",
  },
  {
    id: "h6",
    date: "Apr 2019",
    content: "Winner of the Lab Tech of the Year 2019 Award.",
  },
  {
    id: "h7",
    date: "2018",
    content: "Completed M.Sc. at Nanyang Technological University.",
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "FADD-DED filaments coordinate complex IIa assembly during TNF-induced apoptosis",
    authors: ["Yaw Bia Tan", "et al."],
    venue: "Nature Communications",
    year: 2025,
    description: "Investigating the structural mechanism of FADD-DED filaments in the context of apoptosis signaling.",
    tags: ["Structural Biology", "Apoptosis"],
    links: [
      { label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vRS_sU4AAAAJ&citation_for_view=vRS_sU4AAAAJ:u5HHmVD_uO8C", type: "website" },
    ],
  },
  {
    id: "p_sci_imm",
    title: "Potent neutralization of dengue virus by human antibody targeting a conserved epitope",
    authors: ["Yaw Bia Tan", "et al."],
    venue: "Science Immunology",
    year: 2024,
    description: "Structural definition of a pan-serotype dengue virus epitope targeted by a broadly neutralizing human antibody.",
    tags: ["Virology", "Immunology"],
    links: [
      { label: "Paper", url: "https://scholar.google.com/citations?hl=en&user=vRS_sU4AAAAJ", type: "website" },
    ],
  },
  {
    id: "p2",
    title: "A Structural Perspective on the Alphavirus Life Cycle",
    authors: ["Yaw Bia Tan", "et al."],
    venue: "Viruses",
    year: 2024,
    description: "A comprehensive review and structural analysis of the lifecycle of alphaviruses.",
    tags: ["Virology", "Review"],
    links: [
      { label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=vRS_sU4AAAAJ&citation_for_view=vRS_sU4AAAAJ:d1gkVwhDpl0C", type: "website" },
    ],
  },
  {
    id: "p3",
    title: "Molecular basis of the chikungunya virus replication complex assembly",
    authors: ["Yaw Bia Tan"],
    venue: "PhD Thesis",
    year: 2023,
    description: "Elucidating the assembly mechanism of the CHIKV replication complex.",
    tags: ["Thesis", "Virology"],
    links: [
       { label: "Scholar", url: "https://scholar.google.com/citations?hl=en&user=vRS_sU4AAAAJ", type: "website" }
    ],
  },
  {
    id: "p_sci_adv",
    title: "Molecular architecture of the Chikungunya virus replication complex",
    authors: ["Yaw Bia Tan", "et al."],
    venue: "Science Advances",
    year: 2022,
    description: "High-resolution Cryo-EM structure elucidating the assembly of the alphavirus replication machinery.",
    tags: ["Cryo-EM", "Virology"],
    links: [
      { label: "Paper", url: "https://scholar.google.com/citations?hl=en&user=vRS_sU4AAAAJ", type: "website" },
    ],
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "e1",
    role: "Protein Engineer",
    company: "Thrixen",
    period: "Oct 2024 - Present",
    description: "Innovating protein components for multiplex diagnostics using in-silico engineering platforms.",
    location: "Singapore"
  },
  {
    id: "e2",
    role: "Postdoctoral Research Fellow",
    company: "LKC Medicine",
    period: "Mar 2024 - Sep 2024",
    description: "Led drug discovery project (5 members) in structural biology. Part of J&J CGHD dengue program.",
    location: "Singapore"
  },
  {
    id: "e3",
    role: "Research Fellow",
    company: "Duke-NUS Medical School",
    period: "Sep 2023 - Mar 2024",
    description: "Structure guided drug discovery. Cryo-EM of small membrane proteins and antibodies.",
    location: "Singapore"
  },
  {
    id: "e4",
    role: "Research Assistant",
    company: "LKC Medicine",
    period: "Feb 2023 - Oct 2023",
    description: "Leading infectious disease projects and training staff in structural biology.",
    location: "Singapore"
  },
  {
    id: "e5",
    role: "Research Assistant",
    company: "LKC Medicine",
    period: "Apr 2015 - Jul 2019",
    description: "Lab management, procurement, research training, and safety systems.",
    location: "Singapore"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    school: "Lee Kong Chian School of Medicine",
    degree: "PhD, Structural Biology",
    period: "2019 - 2023",
    description: "Thesis on CHIKV replication complex assembly."
  },
  {
    id: "edu2",
    school: "Nanyang Technological University",
    degree: "M.Sc., Biological & Physical Sciences",
    period: "2018 - 2019",
    description: "Alphavirus Replication Machinery discovery."
  }
];