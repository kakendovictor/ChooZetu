import { ToiletUnit, BlogPost } from './types';
import heroTrailerImg from '../src/assets/images/hero_luxury_trailer_1790245910200.jpg';
import vipInteriorImg from '../src/assets/images/vip_interior_luxury_1790245924670.jpg';
import accessibleVipImg from '../src/assets/images/accessible_vip_unit_1790245936767.jpg';
import executiveSingleImg from '../src/assets/images/executive_single_loo_1790245952767.jpg';

export const SEED_TOILETS: ToiletUnit[] = [
  {
    _id: 'unit-vip-trailer-01',
    title: 'The Presidential 4-Station VIP Trailer',
    slug: 'presidential-4-station-vip-trailer',
    category: 'VIP Luxury Trailer',
    dailyRateKSh: 75000,
    capacity: 'Up to 500 guests · 1,500 flushes',
    features: [
      'Dual Climate AC & Heating',
      'Porcelain Flush Toilets & Urinals',
      'Hot/Cold Running Water Basins',
      'LED Backlit Vanity & Full Mirrors',
      'Bluetooth Ambient Sound System',
      'Luxury Hand Soaps & Fragrance Diffusers',
      'Solar Battery + Generator Backup',
      'Dedicated Male & Female Suites',
    ],
    images: [
      {
        url: heroTrailerImg,
        alt: 'ChooZetu Presidential VIP Restroom Trailer setup in Karen Nairobi',
      },
      {
        url: vipInteriorImg,
        alt: 'Interior view of ChooZetu luxury mobile restroom with porcelain fixtures and vanity',
      },
    ],
    isAvailable: true,
    internalVendorInfo: 'Fleet Yard: Nairobi Industrial Area. Chassis #CZ-2026-VIP01. Serviced by EcoSan Kenya Ltd.',
  },
  {
    _id: 'unit-accessible-vip-02',
    title: 'Executive Accessible ADA VIP Unit',
    slug: 'executive-accessible-ada-vip-unit',
    category: 'Accessible VIP Unit',
    dailyRateKSh: 28000,
    capacity: 'Up to 200 guests · Full Wheelchair Access',
    features: [
      'Gentle Low-Gradient Entry Ramp',
      'Spacious 360° Wheelchair Turnaround',
      'Stainless Steel Support Grab Rails',
      'Touchless Sensor Handwash Basin',
      'Foot-Operated Flush Mechanism',
      'Emergency Pull-Cord Alarm',
      'Anti-Slip Heavy Duty Flooring',
      'Solar Interior Lighting',
    ],
    images: [
      {
        url: accessibleVipImg,
        alt: 'Accessible VIP Mobile Restroom with Ramp and Handrails in Kenya',
      },
      {
        url: vipInteriorImg,
        alt: 'Clean interior view of accessible mobile restroom',
      },
    ],
    isAvailable: true,
    internalVendorInfo: 'Fleet Yard: Naivasha Depot. Certified ADA compliant for regional conferences & luxury weddings.',
  },
  {
    _id: 'unit-single-executive-03',
    title: 'Single Executive Standalone Luxury Loo',
    slug: 'single-executive-standalone-luxury-loo',
    category: 'Single Executive Loo',
    dailyRateKSh: 12500,
    capacity: 'Up to 120 guests / 8-hour private event',
    features: [
      'Freshwater Foot-Pedal Flush',
      'Integrated Handwash Station with Soap',
      'Overhead Solar LED Illumination',
      'Coat Hook & Vanity Wall Mirror',
      'Hygienic Bio-Degradable Odor Neutralizer',
      'Heavy-Duty Ventilated Roof Cavity',
      'Modern Sleek Navy Exterior Finish',
    ],
    images: [
      {
        url: executiveSingleImg,
        alt: 'Single Executive Standalone Mobile Toilet Unit for outdoor corporate events in Nairobi',
      },
    ],
    isAvailable: true,
    internalVendorInfo: 'Fleet Yard: Kiambu Rd Depot. High demand for private dinners and photo shoots.',
  },
  {
    _id: 'unit-standard-construction-04',
    title: 'Heavy-Duty Site Sanitation Cabins (Pair)',
    slug: 'heavy-duty-site-sanitation-cabins',
    category: 'Standard Construction Loo',
    dailyRateKSh: 6500,
    capacity: 'Full day shift for up to 30 site workers',
    features: [
      'Anti-Clog Chemical Recirculating System',
      'Durable High-Density Polyethylene Shell',
      'External Handwash Station Attachment',
      'Weekly Pump-Out & Disinfection Included',
      'Heavy-Duty Security Padlock Hasp',
      'Slip-Resistant Textured Base',
      'Translucent Natural Light Skyroof',
    ],
    images: [
      {
        url: executiveSingleImg,
        alt: 'Standard construction site mobile toilet cabins in Kenya',
      },
    ],
    isAvailable: true,
    internalVendorInfo: 'Fleet Yard: Athi River & Mombasa Road Hub. Available on long-term monthly lease discount.',
  },
  {
    _id: 'unit-vip-trailer-05',
    title: 'The Sovereign 2-Station Luxury Trailer',
    slug: 'sovereign-2-station-luxury-trailer',
    category: 'VIP Luxury Trailer',
    dailyRateKSh: 48000,
    capacity: 'Up to 250 guests · Intimate Boutique Weddings',
    features: [
      'Porcelain Fixtures with Soft-Close Seats',
      'Silent Generator Operation or Grid Hookup',
      'Custom Wood-Grain Flooring',
      'Full Air Conditioning & Subtle Aromatherapy',
      'Touchless Sensor Faucets',
      'Dedicated Hand Towel & Toiletry Dispensers',
    ],
    images: [
      {
        url: vipInteriorImg,
        alt: 'The Sovereign 2-Station Luxury Trailer Interior',
      },
      {
        url: heroTrailerImg,
        alt: 'Exterior view of ChooZetu 2-Station trailer',
      },
    ],
    isAvailable: true,
    internalVendorInfo: 'Fleet Yard: Westlands Garage. Ideal for high-end boutique weddings in Tigoni and Karen.',
  },
];

export const SEED_POSTS: BlogPost[] = [
  {
    _id: 'post-01',
    title: 'Mobile Toilet Rental Cost in Nairobi (2026 Comprehensive Price Guide)',
    slug: 'mobile-toilet-rental-cost-nairobi-price-guide',
    publishedAt: '2026-08-14T09:00:00.000Z',
    excerpt:
      'Planning an event in Nairobi? Here is a breakdown of mobile toilet rental pricing in KSh, from standard site units to luxury air-conditioned VIP trailers.',
    mainImage: {
      url: heroTrailerImg,
      alt: 'Luxury mobile toilet rental costs in Nairobi Kenya',
    },
    readTimeMinutes: 5,
    category: 'Pricing & Planning',
    contentHtml: [
      'Hosting an outdoor wedding in Karen, a corporate expo at KICC, or a music festival in Ngong Hills requires one foundational element that guests notice first: restroom cleanliness.',
      'In Kenya, mobile toilet rental rates depend on four key variables: the type of unit (standard chemical versus luxury flush trailer), duration of hire, distance from central depot, and whether dedicated uniformed attendants are deployed.',
      '1. Standard Construction & Festival Loos: Typically range from KSh 5,000 to KSh 7,500 per unit per day, including bio-chemical setup and end-of-day evacuation.',
      '2. Single Executive Units: Perfect for garden parties and brand activations, priced between KSh 10,000 and KSh 15,000 per day with foot-pump freshwater flush.',
      '3. Luxury Multi-Station VIP Restroom Trailers: Ranging from KSh 45,000 to KSh 85,000 per day. These feature air-conditioned private cubicles, running hot and cold water, vanity mirrors, and five-star hotel aesthetics.',
      'At ChooZetu, all quotes include clear logistics breakdowns, professional delivery, on-site setup, and sanitization before event kick-off.',
    ],
  },
  {
    _id: 'post-02',
    title: 'Best VIP Loos for Naivasha Destination Weddings: What Event Planners Need to Know',
    slug: 'best-vip-loos-for-naivasha-weddings',
    publishedAt: '2026-07-28T10:30:00.000Z',
    excerpt:
      'Lake Naivasha and Great Rift Valley outdoor weddings demand robust, elegant sanitation. Learn how to size VIP trailers and manage power and water in remote scenic venues.',
    mainImage: {
      url: vipInteriorImg,
      alt: 'VIP mobile restroom trailer setup for destination wedding in Naivasha',
    },
    readTimeMinutes: 4,
    category: 'Weddings & Events',
    contentHtml: [
      'Naivasha has cemented its status as Kenya’s premier destination wedding hub. From the shores of Lake Naivasha to private conservancies in Kedong, the scenery is breathtaking—but infrastructure can be sparse.',
      'A common pitfall for couples is underestimating sanitation logistics. High temperatures during mid-day lakeside ceremonies make climate-controlled trailers an absolute necessity for guests dressed in formal attire.',
      'Key recommendations for Naivasha weddings:',
      '• Calculate units based on 1 restroom station per 60-75 guests if alcohol is being served.',
      '• Ensure your toilet provider brings an on-board water tank (ChooZetu VIP units carry 1,200L onboard freshwater).',
      '• Request silent-inverter generators so the hum of motors does not interfere with emotional vow exchanges.',
      '• Assign on-site attendants who maintain fresh floral scents, wipe down countertops after each use, and restock luxury cotton towels.',
    ],
  },
  {
    _id: 'post-03',
    title: 'Sanitation Compliance for Kenyan Construction Sites: NEMA & OSHA Guidelines',
    slug: 'sanitation-compliance-kenya-construction-nema-osha',
    publishedAt: '2026-06-15T14:15:00.000Z',
    excerpt:
      'Ensure your project meets Kenyan environmental and occupational safety standards with certified mobile toilets and safe biological waste disposal.',
    mainImage: {
      url: accessibleVipImg,
      alt: 'Construction site sanitation compliance in Nairobi Kenya',
    },
    readTimeMinutes: 6,
    category: 'Safety & Regulations',
    contentHtml: [
      'Under the Occupational Safety and Health Act (OSHA 2007) and National Environment Management Authority (NEMA) regulations in Kenya, developers and contractors are legally required to provide adequate, hygienic sanitary conveniences.',
      'Key compliance requirements include:',
      '• Ratio: At least 1 portable toilet per 25 workers for single-shift sites, with separate facilities clearly designated when both male and female staff are present.',
      '• Handwashing: Mandatory running water stations or foot-pedal dispensers with antibacterial soap adjacent to all cubicles.',
      '• Evacuation: Waste must be handled only by NEMA-licensed exhauster trucks with disposal at approved municipal sewage treatment plants.',
      'ChooZetu provides contractors with verified waste disposal compliance certificates, scheduled weekly deep-clean pump-outs, and robust anti-theft anchoring for prolonged construction phases.',
    ],
  },
];
