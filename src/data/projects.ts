export type Category =
  | 'All'
  | 'Branding'
  | 'Web Design'
  | 'Product Design'
  | 'Launch Videos'
  | 'Pitch/Sales Decks'
  | 'Platform Development'
  | 'Asset Management';

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: Category[];
  tags: string[];
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Metal - B2B SaaS Ecosystem',
    client: 'Metal Financial Systems',
    year: '2025',
    category: ['Web Design', 'Product Design'],
    tags: ['B2B', 'SaaS', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    summary: 'An institutional-grade financial dashboard and web portal designed for cross-border liquidity management and automated treasury ops.',
    challenge: 'Transforming legacy spreadsheet workflows into intuitive, real-time data visualizers.',
    solution: 'Built modular dashboard components with ultra-sharp borders, zero-border-radius architectural grids, and rapid filtering.',
    deliverables: ['Product Architecture', 'Design System', 'React Component Library'],
    metrics: [
      { label: 'Daily Active Users', value: '45,000+' },
      { label: 'Time Saved / Flow', value: '62%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: '02',
    title: 'Archil - Developer Infrastructure Brand',
    client: 'Archil Systems',
    year: '2025',
    category: ['Branding'],
    tags: ['Dev Tools', 'AI', 'Branding'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    summary: 'A dark, minimalist identity for a high-performance distributed cloud engine.',
    challenge: 'Standing out in a saturated developer tooling market while appealing to C-level decision-makers.',
    solution: 'Created an iconic geometric typography system paired with matte dark UI surfaces and emerald accents.',
    deliverables: ['Brand Strategy', 'Logo System', 'Design Guidelines'],
    metrics: [
      { label: 'Brand Recognition', value: '+210%' },
      { label: 'Developer Adoption', value: '120k Stars' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: '03',
    title: 'Sixnity - Web3 Asset Platform',
    client: 'Sixnity Global',
    year: '2026',
    category: ['Platform Development', 'Product Design'],
    tags: ['Fintech', 'Dashboard', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop',
    summary: 'High-frequency digital portfolio terminal and asset management console built for private wealth portfolios.',
    challenge: 'Architecting dynamic data visualizers that perform smoothly without page lag during fast market shifts.',
    solution: 'Integrated real-time streaming charts and sharp architectural UI layouts.',
    deliverables: ['UI/UX Design', 'Full-stack Platform Development'],
    metrics: [
      { label: 'Transaction Speed', value: '<50ms' },
      { label: 'User Satisfaction', value: '98%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: '04',
    title: 'Confluence - Venture Capital Experience',
    client: 'Confluence Capital',
    year: '2026',
    category: ['Asset Management', 'Branding'],
    tags: ['Venture Capital', 'Dark Luxury', 'Brand'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
    summary: 'A dark luxury, minimalist web presence designed to showcase high-conviction tech investments.',
    challenge: 'Communicating elite prestige without feeling overly corporate or disconnected.',
    solution: 'Designed a high-contrast matte dark layout with smooth scroll animations and refined typography.',
    deliverables: ['Brand Identity', 'Web Design', 'Interactive Motion'],
    metrics: [
      { label: 'AUM Represented', value: '$250M+' },
      { label: 'Deal Enquiries', value: '+300%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    ],
  },
];