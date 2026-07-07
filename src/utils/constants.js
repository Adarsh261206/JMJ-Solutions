export const COMPANY = {
  name: 'JMJ Solutions',
  tagline: 'Sales & Services',
  description: 'Leading Security & Surveillance System Provider',
  fullDescription: 'JMJ Solutions is a premier provider of world-class Security & Surveillance Systems. Established in July 2015, we have been delivering quality security solutions in quality time and within customer budget.',
  foundingYear: 2015,
  experience: '10+ Years',
  projectsCompleted: '500+',
  happyClients: '150+',
  supportAvailable: '24/7',
  email: 'saiprasad.jmj7@gmail.com',
  phone1: '+91 95942 09259',
  phone2: '+91 98332 80079',
  contactPerson1: 'Saiprasad G. Nayak',
  contactPerson2: 'Jiteen A. Sawant',
  address: 'First Floor, Above All In One Classes, Near RJ Thakur, Mahatma Phule Nagar, Thane-West, 400606',
  city: 'Thane',
  state: 'Maharashtra',
  pincode: '400606',
  area: 'Mumbai Metropolitan Region',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.051217320588!2d72.9773!3d19.2181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzA1LjIiTiA3MsKwNTgnMzguMyJF!5e0!3m2!1sen!2sin!4v1',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/services' },
  { label: 'Clients', path: '/clients' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'cctv',
    title: 'CCTV Camera Installation',
    icon: 'Camera',
    image: '/images/product-cctv.jpg',
    shortDesc: 'High-definition CCTV surveillance systems for comprehensive security monitoring.',
    description: 'We offer complete CCTV surveillance solutions featuring high-definition cameras with advanced features including night vision, motion detection, and remote monitoring. Our systems are tailored to your specific security requirements, ensuring every corner is covered.',
    benefits: [
      '24/7 remote monitoring capability',
      'High-definition video quality',
      'Night vision and motion detection',
      'Scalable from small to enterprise setups',
      'Professional installation by certified engineers',
    ],
    industries: ['Residential', 'Commercial', 'Corporate', 'Warehouses', 'Schools', 'Restaurants'],
  },
  {
    id: 'video-door',
    title: 'Video Door Phone',
    icon: 'DoorOpen',
    image: '/images/product-video-door.jpg',
    shortDesc: 'Smart video door phone systems for enhanced entry security and visitor management.',
    description: 'Modern video door phone systems that let you see, hear, and speak to visitors at your doorstep. Our solutions range from single-unit residential systems to multi-tenant commercial setups with centralized access control.',
    benefits: [
      'Real-time audio & video communication',
      'Night vision visitor identification',
      'Remote door unlock functionality',
      'Multi-unit support for apartments',
      'Integration with existing security systems',
    ],
    industries: ['Residential', 'Corporate Offices', 'Commercial Complexes', 'Gated Communities'],
  },
  {
    id: 'epabx',
    title: 'EPABX System',
    icon: 'Phone',
    image: '/images/product-epabx.jpg',
    shortDesc: 'Enterprise-grade EPABX communication systems for seamless internal and external connectivity.',
    description: 'Professional EPABX (Electronic Private Automatic Branch Exchange) systems that streamline business communication. We provide installation and configuration of advanced telephone systems for organizations of all sizes.',
    benefits: [
      'Cost-effective internal communication',
      'Auto-attendant and call routing',
      'Voicemail and call forwarding',
      'Scalable for growing businesses',
      'Integration with mobile and remote workers',
    ],
    industries: ['Corporate Offices', 'Hotels', 'Hospitals', 'Educational Institutions', 'Business Parks'],
  },
  {
    id: 'access-control',
    title: 'Access Control Systems',
    icon: 'Fingerprint',
    image: '/images/product-access.jpg',
    shortDesc: 'Biometric and card-based access control systems for restricted area security.',
    description: 'Advanced access control solutions including biometric fingerprint scanners, RFID card readers, and keypad entry systems. Manage and monitor who enters your premises with complete audit trails and real-time alerts.',
    benefits: [
      'Biometric and card-based authentication',
      'Complete access audit trails',
      'Real-time entry monitoring',
      'Time-based access restrictions',
      'Integration with alarm systems',
    ],
    industries: ['Corporate', 'Data Centers', 'Warehouses', 'Government', 'Commercial Complexes'],
  },
  {
    id: 'boom-barrier',
    title: 'Boom Barrier Systems',
    icon: 'ArrowLeftRight',
    image: '/images/product-boom.jpg',
    shortDesc: 'Automated boom barrier systems for vehicle access management and traffic control.',
    description: 'Automated boom barrier systems for efficient vehicle access management. Our solutions range from manual barriers to fully automated systems with RFID, remote control, and number plate recognition.',
    benefits: [
      'Automated vehicle access control',
      'RFID and remote operation',
      'Durable industrial-grade construction',
      'Fast opening and closing cycles',
      'Integration with security systems',
    ],
    industries: ['Residential Societies', 'Corporate Parks', 'Parking Lots', 'Industrial Facilities', 'Toll Plazas'],
  },
  {
    id: 'tripod',
    title: 'Tripod Turnstile Systems',
    icon: 'Grid3x3',
    image: '/images/product-tripod.jpg',
    shortDesc: 'Tripod turnstile systems for secure pedestrian access management and crowd control.',
    description: 'Premium tripod turnstile systems designed for secure pedestrian access management. Ideal for managing foot traffic at entry and exit points with options for card, biometric, or token-based authentication.',
    benefits: [
      'Secure pedestrian access control',
      'Anti-tailgating detection',
      'Multiple authentication options',
      'Durable stainless steel construction',
      'Compact and space-efficient design',
    ],
    industries: ['Corporate Offices', 'Metro Stations', 'Stadiums', 'Educational Institutions', 'Government Buildings'],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: '10+ Years Experience',
    description: 'Over a decade of expertise in security and surveillance solutions across Mumbai.',
    icon: 'Shield',
  },
  {
    title: 'Certified Engineers',
    description: 'Our team of certified engineers ensures professional installation and reliable service.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Quick Installation',
    description: 'We value your time with prompt installation and minimal disruption to your operations.',
    icon: 'Zap',
  },
  {
    title: 'Trusted Brands',
    description: 'Authorized partners of CP Plus, Hikvision, Dahua, Prama, ESSL, and Crystel.',
    icon: 'Award',
  },
  {
    title: 'Affordable Solutions',
    description: 'Quality security solutions designed to fit within your budget without compromises.',
    icon: 'IndianRupee',
  },
  {
    title: 'Reliable Support',
    description: 'Ongoing maintenance and support to keep your security systems operating at peak performance.',
    icon: 'Headphones',
  },
];

export const INDUSTRIES = [
  { name: 'Residential Societies', icon: 'Building2', image: '/images/industry-residential.jpg', description: 'Comprehensive security for apartments and gated communities.' },
  { name: 'Commercial Complexes', icon: 'ShoppingBag', image: '/images/industry-retail.jpg', description: 'Security solutions for retail and commercial spaces.' },
  { name: 'Corporate Offices', icon: 'Building', image: '/images/industry-corporate.jpg', description: 'Enterprise-grade security for corporate environments.' },
  { name: 'Educational Institutions', icon: 'GraduationCap', image: '/images/industry-education.jpg', description: 'Safe learning environments with advanced surveillance.' },
  { name: 'Warehouses & Logistics', icon: 'Warehouse', image: '/images/industry-warehouse.jpg', description: 'Industrial security for warehouses and distribution centers.' },
  { name: 'Restaurants & Hospitality', icon: 'UtensilsCrossed', image: '/images/industry-retail.jpg', description: 'Security tailored for restaurants and hospitality venues.' },
  { name: 'Healthcare Facilities', icon: 'HeartPulse', image: '/images/industry-healthcare.jpg', description: 'Specialized security solutions for hospitals and clinics.' },
  { name: 'Industrial Facilities', icon: 'Factory', image: '/images/industry-industrial.jpg', description: 'Robust security for manufacturing and industrial plants.' },
];

export const BRANDS = [
  { name: 'CP Plus', image: null },
  { name: 'Hikvision', image: null },
  { name: 'Dahua', image: null },
  { name: 'Prama', image: null },
  { name: 'ESSL', image: null },
  { name: 'Crystel', image: null },
];

export const COMMERCIAL_CLIENTS = [
  { name: 'Lechler India Pvt Ltd', location: 'Wagle Estate, Thane', image: '/images/clients/commercial-1.jpg' },
  { name: 'Gilly Professional Kitchen', location: 'Bhoomi World, Bhivandi', image: '/images/clients/commercial-2.jpg' },
  { name: 'Semantic India Pvt Ltd', location: 'Mahape, Navi Mumbai', image: '/images/clients/commercial-3.jpg' },
  { name: 'Active Industries', location: 'Upwan, Thane', image: '/images/clients/commercial-4.jpg' },
  { name: 'Techvisio Design', location: 'Centerm Business Square, Wagle Estate, Thane', image: '/images/clients/commercial-5.jpg' },
  { name: 'Centrum Business Square B Wing', location: 'Wagle Estate, Thane', image: '/images/clients/commercial-6.jpg' },
  { name: 'From Packaging Systems India Pvt Ltd', location: 'Panvel, Aurangabad, Khanapur', image: '/images/clients/commercial-7.jpg' },
  { name: 'Indusprint Logistics Private Ltd', location: 'Ulhasnagar', image: '/images/clients/commercial-8.jpg' },
];

export const RESIDENTIAL_CLIENTS = [
  { name: 'Runwal Garden City', location: 'Balkum, Thane', image: '/images/clients/residential-1.jpg' },
  { name: 'Vedant CHSL', location: 'Vartak Nagar, Thane', image: '/images/clients/residential-2.jpg' },
  { name: 'Ashar Sapphire', location: 'Dhokali, Thane', image: '/images/clients/residential-3.jpg' },
  { name: 'Lodha Magestica & Casa Royal', location: 'Lodha Group, Balkum, Thane', image: '/images/clients/residential-4.jpg' },
  { name: 'Wadhwa Platina', location: 'Kolshet Road, Thane', image: '/images/clients/residential-5.jpg' },
  { name: 'Neelkanth Green CHSL', location: 'Manpada, Thane', image: '/images/clients/residential-6.jpg' },
  { name: 'Godrej Emerald', location: 'Owala, GB Road, Thane', image: '/images/clients/residential-7.jpg' },
  { name: 'Riverview Society, Lodha Splendora', location: 'Owala, GB Road, Thane', image: '/images/clients/residential-8.jpg' },
  { name: 'Rain Art CHSL', location: 'Vartak Nagar, Thane', image: '/images/clients/residential-9.jpg' },
];

export const PROCESS_STEPS = [
  { step: 1, title: 'Consultation', description: 'We understand your security needs through a detailed site assessment and discussion.' },
  { step: 2, title: 'Planning', description: 'Our engineers design a customized security solution tailored to your premises.' },
  { step: 3, title: 'Installation', description: 'Professional installation by our certified team with minimal disruption.' },
  { step: 4, title: 'Testing', description: 'Comprehensive testing of all systems to ensure optimal performance.' },
  { step: 5, title: 'Support', description: 'Ongoing maintenance and 24/7 support to keep your security systems reliable.' },
];

export const FAQS = [
  {
    q: 'What types of CCTV cameras do you install?',
    a: 'We install a wide range of cameras including dome cameras, bullet cameras, PTZ cameras, and IP cameras from leading brands like CP Plus, Hikvision, and Dahua. Each solution is customized to your specific surveillance requirements.',
  },
  {
    q: 'Do you provide services for residential societies?',
    a: 'Yes, we have extensive experience working with residential societies. We have catered to over 150+ residential societies across Mumbai, providing comprehensive security solutions including CCTV, access control, and boom barrier systems.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We primarily serve the Mumbai Metropolitan Region, including Thane, Navi Mumbai, and surrounding areas. Our team is based in Thane-West and can respond quickly to service requests across the region.',
  },
  {
    q: 'How long does installation typically take?',
    a: 'Installation time varies based on the complexity of the system. A standard residential CCTV setup can be completed in 4-6 hours, while larger commercial installations may take 1-3 days. We always aim for minimal disruption to your daily operations.',
  },
  {
    q: 'Do you offer maintenance and support?',
    a: 'Yes, we provide comprehensive maintenance and support services for all our installations. Our team is available for regular checkups, troubleshooting, and system upgrades to ensure your security systems remain reliable.',
  },
  {
    q: 'Which brands do you work with?',
    a: 'We are authorized partners and work with premium brands including CP Plus, Hikvision, Dahua, Prama, ESSL, and Crystel. This ensures we can offer solutions across different budgets and requirements.',
  },
  {
    q: 'Can I monitor my cameras remotely?',
    a: 'Absolutely. All our modern CCTV systems support remote monitoring via smartphone apps and web browsers. You can view live feeds and playback recordings from anywhere in the world with an internet connection.',
  },
  {
    q: 'Do you provide customized security solutions?',
    a: 'Yes, every security solution we provide is customized. We assess your premises, understand your specific security concerns, and design a system that addresses your unique requirements while staying within your budget.',
  },
];

export const BLOG_POSTS = [
  {
    id: 'cctv-installation-guide-mumbai',
    title: 'Complete Guide to CCTV Camera Installation in Mumbai & Thane (2026)',
    slug: 'cctv-installation-guide-mumbai',
    excerpt: 'Looking for CCTV installation in Mumbai? This comprehensive guide covers camera types, installation costs, legal requirements, and how to choose the best security system for your home or business in Thane, Navi Mumbai & beyond.',
    image: '/images/product-cctv.jpg',
    date: 'July 5, 2026',
    author: 'JMJ Solutions Team',
    tags: ['CCTV', 'Installation Guide', 'Mumbai', 'Security'],
    content: `
      <p>Security is a top priority for every homeowner and business owner in Mumbai. With rising urban crime rates, installing a reliable CCTV surveillance system has become essential. At <strong>JMJ Solutions</strong>, we have been providing top-notch CCTV installation services across Mumbai, Thane, and Navi Mumbai since 2015.</p>
      <h2>Types of CCTV Cameras Available</h2>
      <p>Understanding the different types of CCTV cameras helps you make an informed decision:</p>
      <ul>
        <li><strong>Dome Cameras:</strong> Ideal for indoor use, discreet and vandal-resistant. Perfect for offices, hotels, and retail stores.</li>
        <li><strong>Bullet Cameras:</strong> Best for outdoor surveillance with long-range night vision. Commonly used for perimeter security.</li>
        <li><strong>PTZ Cameras:</strong> Pan-Tilt-Zoom cameras that can be remotely controlled to cover wide areas. Great for large premises.</li>
        <li><strong>IP Cameras:</strong> Network-based cameras that deliver high-definition video directly to your smartphone or computer.</li>
        <li><strong>Wireless Cameras:</strong> Easy to install without extensive cabling, ideal for temporary setups or rental properties.</li>
      </ul>
      <h2>Why Choose Professional Installation?</h2>
      <p>While DIY camera systems are available, professional installation ensures optimal camera placement, proper cabling, and seamless integration with your existing security infrastructure. Our certified engineers at JMJ Solutions provide:</p>
      <ul>
        <li>Site survey and customized system design</li>
        <li>High-quality cabling and weatherproof mounting</li>
        <li>Remote viewing setup on smartphones and PCs</li>
        <li>Complete system testing and staff training</li>
      </ul>
      <h2>Cost of CCTV Installation in Mumbai</h2>
      <p>The cost varies based on the number of cameras, type of system, and installation complexity. A basic 4-camera system starts from affordable rates. Contact JMJ Solutions for a free, no-obligation quote tailored to your budget.</p>
    `,
  },
  {
    id: 'benefits-of-access-control-systems',
    title: 'Why Every Business in Thane Needs an Access Control System',
    slug: 'benefits-of-access-control-systems',
    excerpt: 'Discover how modern access control systems with biometric fingerprint scanners and RFID technology can enhance security, track employee movements, and protect your business in Thane & Mumbai.',
    image: '/images/product-access.jpg',
    date: 'June 28, 2026',
    author: 'JMJ Solutions Team',
    tags: ['Access Control', 'Business Security', 'Biometric', 'Thane'],
    content: `
      <p>In today's business environment, securing your premises goes beyond just locking the doors. Modern <strong>access control systems</strong> provide a comprehensive security solution that protects your employees, assets, and sensitive information.</p>
      <h2>Types of Access Control Systems</h2>
      <ul>
        <li><strong>Biometric Fingerprint Scanners:</strong> Provide unique, non-transferable access based on fingerprint recognition. Ideal for high-security areas.</li>
        <li><strong>RFID Card Readers:</strong> Cost-effective solution for employee access with easy card issuance and revocation.</li>
        <li><strong>Keypad Entry Systems:</strong> PIN-based access for smaller offices or residential societies.</li>
        <li><strong>Mobile App-Based Access:</strong> Modern systems that allow entry via smartphone, perfect for touchless access.</li>
      </ul>
      <h2>Benefits for Thane Businesses</h2>
      <p>JMJ Solutions has installed access control systems for numerous corporate offices in Wagle Estate, Centrum Business Square, and other commercial hubs in Thane. Key benefits include:</p>
      <ul>
        <li>Complete audit trails of who enters and exits</li>
        <li>Time-based access restrictions for different employee levels</li>
        <li>Integration with CCTV cameras for visual verification</li>
        <li>Remote access management from anywhere</li>
      </ul>
      <p>Contact JMJ Solutions today to discuss the perfect access control solution for your business.</p>
    `,
  },
  {
    id: 'residential-society-security-mumbai',
    title: 'Complete Security Guide for Residential Societies in Mumbai',
    slug: 'residential-society-security-mumbai',
    excerpt: 'Learn how residential societies across Mumbai are enhancing security with CCTV cameras, video door phones, boom barriers, and access control systems. Expert tips from JMJ Solutions — serving 150+ societies.',
    image: '/images/industry-residential.jpg',
    date: 'June 20, 2026',
    author: 'JMJ Solutions Team',
    tags: ['Residential', 'Society Security', 'Mumbai', 'Boom Barrier'],
    content: `
      <p>Mumbai's residential societies face unique security challenges — from managing visitor access to monitoring common areas and parking lots. A comprehensive security setup is no longer a luxury but a necessity.</p>
      <h2>Essential Security Systems for Societies</h2>
      <ul>
        <li><strong>CCTV Camera Network:</strong> Strategic placement at entry/exit points, parking lots, staircases, and common areas.</li>
        <li><strong>Video Door Phone:</strong> Allow residents to see and speak with visitors before granting access from their apartment.</li>
        <li><strong>Boom Barrier Systems:</strong> Automated vehicle access control with RFID tags for residents and visitor management.</li>
        <li><strong>Access Control Systems:</strong> Restrict unauthorized entry to sensitive areas like the clubhouse, gym, or maintenance rooms.</li>
      </ul>
      <h2>Why JMJ Solutions?</h2>
      <p>With over <strong>150+ residential societies served</strong> across Runwal Garden City, Lodha Splendora, Godrej Emerald, and many more prestigious projects, JMJ Solutions understands the unique needs of Mumbai's housing communities.</p>
      <p>We offer customized packages for societies of all sizes, with flexible payment options and comprehensive maintenance support.</p>
    `,
  },
  {
    id: 'importance-of-video-door-phone',
    title: 'Video Door Phone vs Traditional Intercom: Why Upgrade in 2026',
    slug: 'importance-of-video-door-phone',
    excerpt: 'Compare modern video door phone systems with traditional audio intercoms. See the benefits of visual visitor identification, night vision, and remote unlock for Mumbai apartments and offices.',
    image: '/images/product-video-door.jpg',
    date: 'June 15, 2026',
    author: 'JMJ Solutions Team',
    tags: ['Video Door Phone', 'Intercom', 'Smart Home', 'Security'],
    content: `
      <p>Gone are the days when a simple audio intercom was enough. Today's <strong>video door phone systems</strong> offer a level of security and convenience that traditional intercoms simply cannot match.</p>
      <h2>Key Differences</h2>
      <ul>
        <li><strong>Visual Identification:</strong> See who is at your door before letting them in. No more guessing or relying on voice alone.</li>
        <li><strong>Night Vision:</strong> Modern video door phones have built-in infrared LEDs for clear visibility even in complete darkness.</li>
        <li><strong>Remote Unlock:</strong> Grant access to visitors from anywhere using your smartphone — perfect for deliveries and guests.</li>
        <li><strong>Recording Capability:</strong> Some systems automatically record video of all visitors, providing a valuable security record.</li>
      </ul>
      <h2>Best for Mumbai Apartments</h2>
      <p>For Mumbai's apartment culture, video door phones are especially valuable. Whether you live in a standalone building or a large gated community, we have solutions ranging from single-unit systems to multi-tenant setups with centralized management.</p>
      <p>JMJ Solutions installs premium video door phone systems from trusted brands, ensuring reliable performance and excellent after-sales support.</p>
    `,
  },
];

export const SEO_DEFAULTS = {
  title: 'JMJ Solutions | Premium Security & Surveillance Systems in Mumbai',
  description: 'JMJ Solutions — Mumbai\'s trusted security partner since 2015. Specializing in CCTV, Video Door Phone, EPABX, Access Control, Boom Barrier & Tripod Systems. 150+ residential societies served.',
  keywords: 'CCTV installation Mumbai, security systems Thane, video door phone, EPABX system, access control, boom barrier, tripod turnstile, CP Plus, Hikvision, Dahua, security solutions Mumbai, JMJ Solutions',
  ogImage: '/og-image.jpg',
  url: 'https://jmjsolutions.in',
};
