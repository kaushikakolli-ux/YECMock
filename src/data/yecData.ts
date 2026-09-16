import { Competition, TeamMember, CompetitionLead, PackageItem } from '../types';

export const HERO_ASSETS = {
  bgImage: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/a1e5cdd8-1585-4154-9ea6-3a8d594bfbe5/image+%281%29.png',
  logo: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/0409f7c7-6a6b-45ee-8824-956962ac15f2/yec2022logo.png',
  lesLogo: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/f67e7787-4f74-452b-8d71-f28f3df62cfc/LES+Logo.png',
  robotMascot: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/b0b7469d-263d-441a-bdb9-140d1af4a6df/RobotVY.png',
  yecBanner: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/cb81a050-d5e6-4588-87ae-c0326a91edc6/YEC+Information+Package.png',
  aboutPhoto: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/00991a4a-52d4-4846-b6f5-7418af09634a/IMG_5828.JPG',
  teamBg: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/28bf6126-029d-47c3-ad52-c95e9d5d3c5d/IMG_6244.png',
  leadsBg: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/38aa62d6-fd77-477e-9945-8e91db234f06/IMG_6109.png',
  packagesBg: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/6718f9e2-86c7-4149-bb38-95d692383eb5/IMG_6257.png',
};

export const TICKET_LINKS = {
  week2: 'https://www.eventbrite.ca/e/yec-week-2-re-engineering-consulting-senior-design-tickets-1681446414489?aff=oddtdtcreator',
  week3: 'https://www.eventbrite.ca/e/yec-week-3-programming-communication-innovative-design-tickets-1685049962799?aff=oddtdtcreator',
};

export const COMPETITIONS: Competition[] = [
  // WEEK 1
  {
    id: 'bioengineering',
    name: 'Bioengineering',
    week: 1,
    weekLabel: 'WEEK 1',
    dates: 'SEPTEMBER 26TH - SEPTEMBER 27TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/04d144ec-7596-4ed4-a9db-13a9c87c716e/YEC+Information+Package+%282%29.png',
    description: 'Teams will be provided with a narrative with one or numerous complications that must be resolved utilizing core engineering principles to develop a solution to this bio-engineering problem.',
    teamSize: '2 - 4 Competitors',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: '1st place advances to the Ontario Engineering Competition (OEC)',
    details: 'Competitors examine biological mechanisms, medical challenges, or biotechnology processes and create an engineered system or device addressing critical bottlenecks.'
  },
  {
    id: 'debate',
    name: 'Debate',
    week: 1,
    weekLabel: 'WEEK 1',
    dates: 'SEPTEMBER 26TH - SEPTEMBER 27TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/71b9f721-b150-4076-8883-a6a1ebc7b3be/YEC+Information+Package.png',
    description: 'Akin to real-world scenarios, students develop and present nuanced arguments in favour of or against an impromptu resolution. Teams go head to head in a battle of logic and rhetoric in multiple rounds of debate.',
    teamSize: '2 Competitors per Team',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: 'Winners qualify for the Parliamentary Debate division at OEC',
    details: 'Teams are provided with resolutions regarding ethics, modern engineering developments, and public policy with limited prep time, emphasizing quick critical reasoning and persuasive communication.'
  },
  {
    id: 'junior-design',
    name: 'Junior Design',
    week: 1,
    weekLabel: 'WEEK 1',
    dates: 'SEPTEMBER 26TH - SEPTEMBER 27TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/3547dc0d-d583-45c0-927d-4d86aed4cc19/YEC+Information+Package+%281%29.png',
    description: 'Students in their first and second years are tasked with designing creative solutions to real-world engineering problems. Competitors must design a practical solution and present it to judges making the best use of limited time and resources.',
    teamSize: '4 Competitors per Team',
    eligibleYears: '1st & 2nd Year Undergraduates',
    qualification: 'Top team qualifies for Junior Design at OEC and CEC',
    details: 'Participants receive a mystery design problem with raw materials and must build, calibrate, test, and demonstrate their prototype device within the testing arena.'
  },

  // WEEK 2
  {
    id: 're-engineering',
    name: 'Re-Engineering',
    week: 2,
    weekLabel: 'WEEK 2',
    dates: 'OCTOBER 3RD - OCTOBER 4TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/f5769b0a-737f-4da5-85a8-e9708da2ec30/YEC+Information+Package+%283%29.png',
    description: 'Teams utilize their diverse skill sets to redesign an existing solution to a problem with the aim of improving its overall performance.',
    teamSize: '2 - 4 Competitors',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: '1st place advances to Re-Engineering category at OEC',
    details: 'Competitors dissect a current manufactured product, analyze its engineering flaws or inefficiencies, and deliver a redesigned CAD and operational schematic.'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    week: 2,
    weekLabel: 'WEEK 2',
    dates: 'OCTOBER 3RD - OCTOBER 4TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/0b02dfb5-8b61-4ee2-8ea8-5913f61a0528/YEC+Information+Package+%284%29.png',
    description: 'Competitors will develop and present an in-depth analytical solution to a given multi-dimensional engineering challenge. Teams must demonstrate a thorough understanding of the diverse social, environmental, technological and economic impacts of their solutions.',
    teamSize: '4 Competitors per Team',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: 'Winners represent Lassonde at OEC Consulting',
    details: 'Focuses on holistic municipal, sustainability, or industrial problems requiring feasibility studies, risk matrix assessments, and executive-level presentations.'
  },
  {
    id: 'senior-design',
    name: 'Senior Design',
    week: 2,
    weekLabel: 'WEEK 2',
    dates: 'OCTOBER 3RD - OCTOBER 4TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/6fdf99c8-3a82-4ab0-bb08-d572ff0ca899/YEC+Information+Package+%285%29.png',
    description: 'Students combine multidisciplinary knowledge to design a technical solution to an advanced engineering problem. Participants must design and present a functional solution under resource constraints and adhering to competition requirements.',
    teamSize: '4 Competitors per Team',
    eligibleYears: '3rd & 4th+ Year Undergraduates',
    qualification: 'Top team qualifies for OEC Senior Design with CEC track',
    details: 'The premier hands-on engineering build competition testing embedded systems, mechanical mechanisms, structural endurance, and sensor telemetry.'
  },

  // WEEK 3
  {
    id: 'programming',
    name: 'Programming',
    week: 3,
    weekLabel: 'WEEK 3',
    dates: 'OCTOBER 10TH - OCTOBER 11TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/dd8ce199-747a-4bc5-bb12-7c3112ca1133/YEC+Information+Package+%286%29.png',
    description: 'Teams are tasked with coding the best possible software solution to a complex computational challenge. Competitors will aim to minimize execution time, maximize correctness or achieve the best overall performance.',
    teamSize: '3 - 4 Competitors',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: '1st place advances to OEC Programming',
    details: 'A marathon software engineering sprint where teams produce algorithms, real-time data visualizers, or distributed logic under rigorous test case evaluations.'
  },
  {
    id: 'communication',
    name: 'Communication',
    week: 3,
    weekLabel: 'WEEK 3',
    dates: 'OCTOBER 10TH - OCTOBER 11TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/5494895d-00be-4950-a25e-9c5543107c1c/YEC+Information+Package+%287%29.png',
    description: "Participants must discuss their chosen topic's environmental, economic, technological, and societal impacts, presenting their analysis effectively. Competitors will be judged on the clarity and organization of their ideas, the depth of their analysis, and the quality and delivery of their presentation.",
    teamSize: '1 - 2 Competitors',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: 'Winners represent Lassonde at OEC Engineering Communications',
    details: 'Presenting complex technical concepts to non-technical stakeholders and regulatory bodies with clear storytelling, visual aids, and rigorous scientific basis.'
  },
  {
    id: 'innovative-design',
    name: 'Innovative Design',
    week: 3,
    weekLabel: 'WEEK 3',
    dates: 'OCTOBER 10TH - OCTOBER 11TH, 2026',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/97d470f9-90ca-4303-ac82-035100386e37/YEC+Information+Package+%288%29.png',
    description: 'Participants develop a novel product or service to address an unmet need or to improve upon currently available solutions. Competitors will present their nuanced designs to a panel of experts.',
    teamSize: '2 - 4 Competitors',
    eligibleYears: 'Undergraduate Students (All Years)',
    qualification: 'Top team qualifies for OEC Innovative Design showcase',
    details: 'Original student inventions, capstone spin-offs, patent-pending prototypes, and market-ready products assessed on engineering rigor, originality, and commercial viability.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Naeem baig',
    role: 'YEC Chair',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/74baa90c-f836-47dc-becc-6bd058e2c46f/Baig_Naeem.jpg'
  },
  {
    name: 'Habiba Koraitam',
    role: 'Vice Chair Finance',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/430e4761-f31e-4910-8a3d-18f56351a535/Habiba.jpg'
  },
  {
    name: 'Ishaan Das-Basak',
    role: 'Sponsorship Commissioner',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/95dba7a3-38eb-46f3-8f0a-ec8119265e95/Ishaan.jpg'
  },
  {
    name: 'Tehreem Asad',
    role: 'Vice Chair Communications',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/373fb592-1ce5-49dc-b6be-a6cab6621d5b/tehreem2.jpeg'
  },
  {
    name: 'Allen Abraham',
    role: 'Logistics Manager',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/58a449f3-0b6b-4438-aa9a-78782771f5fd/Allen.jpg'
  },
  {
    name: 'Aqeelah Ghadiyali',
    role: 'Graphic Designer',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/cbf3919d-29e1-4131-87e5-859750f40687/Aqeelah+Ghadiyali.png'
  },
  {
    name: 'Pietro Angiolella',
    role: 'Webmaster',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/6ecb8c99-9aab-484d-84dd-4c7ab3ad6593/IMG_3817.jpg'
  },
  {
    name: 'Dania Abdul Rahim',
    role: 'Vice Chair Logistics',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/1f96f288-2a37-4b8a-8e9a-585ed52d22f7/Dania.jpg'
  },
  {
    name: 'Ziad Hammouda',
    role: 'Sponsorship Acquisition',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/9629e48c-497b-400c-96a4-284f5a49aa07/IMG_2232.jpg'
  }
];

export const COMPETITION_LEADS: CompetitionLead[] = [
  {
    name: 'Maheen Mirza',
    role: 'Competition Lead',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/82f376d3-7f3c-4d72-b6e4-ff686d57b9fe/maheen.jpg'
  },
  {
    name: 'Hadia Ali',
    role: 'Competition Lead',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/be483e10-2ec3-4038-9d90-bbca10bde0dc/Hadia_Ali.jpg'
  },
  {
    name: 'Hiam Al-Jamal',
    role: 'Competition Lead',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/b22bdb42-3676-41dd-a77b-cf3a1bc7ea9d/hiam.png'
  },
  {
    name: 'Ibrahim Rfifi',
    role: 'Competition Lead',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/40388255-bde3-415e-a2d6-ed2e1f709a3b/RobotVY.png'
  },
  {
    name: 'Kenzi',
    role: 'Compeition Lead',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/40388255-bde3-415e-a2d6-ed2e1f709a3b/RobotVY.png'
  },
  {
    name: 'Luna Marouf',
    role: 'Competition Lead',
    image: 'https://images.squarespace-cdn.com/content/v1/5f040b5c2da53a4ed0d94956/40388255-bde3-415e-a2d6-ed2e1f709a3b/RobotVY.png'
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'sponsorship',
    title: 'Sponsorship Package',
    pdfUrl: 'https://lasengsoc.com/s/YEC-Sponsorship-Package-2025-r3nm.pdf',
    description: 'Partner with the York Engineering Competition to connect with 4,700+ high-achieving engineering students across software, mechanical, electrical, civil, and space engineering.',
    targetAudience: 'Corporate Partners, Engineering Firms & Tech Recruiters',
    highlights: [
      'Keynote speaking slots during opening ceremonies',
      'Exclusive company branding across all printed and digital competition materials',
      'Judge seat allocation on competition evaluation panels',
      'Direct access to participant resume books for co-op and graduate hiring',
      'Booths and networking tables in the Bergeron Centre atrium'
    ]
  },
  {
    id: 'club',
    title: 'Club Package',
    pdfUrl: 'https://lasengsoc.com/s/YEC-Club-Package.pdf',
    description: 'Collaborate as a student club or technical society to co-host workshops, showcase team projects, and mentor prospective competitors.',
    targetAudience: 'Student Design Teams & Engineering Clubs',
    highlights: [
      'Co-branded challenge tracks and technical workshops',
      'Exhibition slots during the finalist showcase day',
      'Cross-promotion across Lassonde Engineering Society channels',
      'Discounted group registrations for affiliated members'
    ]
  },
  {
    id: 'judge',
    title: 'Judge Package',
    pdfUrl: 'https://lasengsoc.com/s/YEC-Judge-Package-2025.pdf',
    description: 'Lend your professional expertise as an industry judge or faculty panelist to evaluate prototypes, presentations, and technical design proposals.',
    targetAudience: 'Professional Engineers, Alumni & Lassonde Faculty',
    highlights: [
      'Rubric-based evaluation criteria for all 9 categories',
      'Complimentary catered lunch and hospitality lounge',
      'Networking with emerging top engineering talents and fellow industry leaders',
      'Honourary certification and recognition from LES Executive'
    ]
  }
];

export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/z5ErnW4',
  instagram: 'https://www.instagram.com/lasengsoc/?hl=en',
  facebook: 'https://www.facebook.com/LasEngSoc/',
  twitter: 'https://twitter.com/lasengsoc?lang=en',
  linkedin: 'https://www.linkedin.com/company/28807164/admin/',
  email: 'info@lasengsoc.com'
};
