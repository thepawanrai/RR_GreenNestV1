import { Project } from '../types';

export const AGENT_RERA_NUMBER = 'UPRERAAGT000016/07/2025';
export const AGENT_NAME = 'Athar Mansoor';
export const AGENT_PHONE = '+91 92356 21921';
export const AGENT_EMAIL = 'greennestlko@gmail.com';
export const OFFICE_ADDRESS = 'FF 27 River View Arcade, Gomtinagar Extension, Lucknow (UP) 226010';

export const PROJECTS: Project[] = [
  // 1. FLAGSHIP: SHALIMAR ONEWORLD
  {
    id: 'shalimar-oneworld',
    slug: 'shalimar-oneworld',
    officialName: 'Shalimar OneWorld',
    displayName: 'Shalimar OneWorld',
    tagline: '212-Acre Master-Planned Lakefront & Riverfront Township',
    developer: 'Shalimar Group',
    developerRelationship: 'Curated Real Estate Advisory',
    location: 'Sector 6, Amar Shaheed Path, Gomti Nagar Extension, Lucknow',
    localityHub: 'Gomti Nagar Extension',
    propertyType: 'Luxury Apartments',
    summary: 'A world-class 212-acre integrated riverfront township in Gomti Nagar Extension. Featuring a majestic 1.5-acre lake promenade, world-class Club One clubhouse, and iconic residential towers engineered for discerning homeowners.',
    editorialOverview: [
      'Shalimar OneWorld is Lucknow’s most celebrated integrated lifestyle township, spanning over 212 sprawling acres along the Gomti River and Amar Shaheed Path. Designed in collaboration with international master planners, the development redefines vertical and low-density luxury with wide tree-lined boulevards, dedicated cycling corridors, and lush themed gardens.',
      'At the heart of the township lies a breathtaking 1.5-acre lake promenade complemented by Club One—a palatial wellness and social clubhouse with infinity pools, racquet sports, spa pavilions, and waterfront cafés.',
      'The township encompasses premier luxury enclaves including Shalimar 21, Marbella, Valencia Towers, Valencia Villas, and Pinnacle, each offering curated floorplates with panoramic open views, direct access to City Montessori School (CMS), and round-the-clock integrated security command centers.'
    ],
    startingPrice: '₹1.45 Crore*',
    priceNote: 'Indicative benchmark starting price across available residential enclaves; exact all-inclusive cost depends on tower selection, layout, floor rise, view preference, and promoter confirmation.',
    priceCheckedAt: '2026-10-22',
    configurations: ['3 & 4 BHK Riverfront Residences', 'Luxury Sky Penthouses', 'Bespoke Lakefront Villas'],
    areaDetails: {
      carpetArea: 'RERA carpet area schedules available upon formal advisor consultation.',
      superBuiltUpArea: 'Spacious low-density floorplans maximizing usable living space and deep outdoor balconies.',
      measurementNote: 'All area specifications are displayed in accordance with UP-RERA norms. Final unit layouts and exact measurements are confirmed in formal promoter agreements.'
    },
    specifications: [
      { label: 'Township Extent', value: '212+ Acres Integrated Riverfront Development', isVerified: true },
      { label: 'Central Feature', value: '1.5-Acre Waterfront Lake Promenade', isVerified: true },
      { label: 'Flagship Clubhouse', value: 'Club One (Palatial Wellness & Recreation Hub)', isVerified: true },
      { label: 'Master Architects', value: 'JT+Partners & International Urbanists', isVerified: true },
      { label: 'Promoter RERA Reg.', value: 'UPRERAPRJ858081/05/2024 & Phased Filings', isVerified: true },
      { label: 'Education Onsite', value: 'City Montessori School (CMS) Campus', isVerified: true },
      { label: 'Location Advantage', value: 'Direct access on Amar Shaheed Path & Gomti Riverfront', isVerified: true }
    ],
    amenitiesProject: [
      '1.5-acre sparkling lake with pedestrian waterfront promenade',
      'Club One grand clubhouse with temperature-controlled indoor pool',
      'Olympic-standard swimming pool with sun lounge deck',
      'High-performance fitness center, yoga studio & wellness spa',
      'Multi-cuisine waterfront cafés and fine-dining restaurants',
      'Indoor squash, badminton, and tennis academies'
    ],
    amenitiesTownship: [
      '212+ acre master-planned township infrastructure with wide arterial roads',
      'Landscaped riverside jogging track and ecological green corridors',
      'City Montessori School (CMS) located within township boundaries',
      'Underground power cabling, dedicated STP and rainwater harvesting',
      'Commercial retail high-street and Grade-A business district',
      '24/7 Security Command Center with AI-assisted perimeter surveillance'
    ],
    lifestyleHighlights: [
      'Live along the scenic Gomti riverfront with unhindered natural airflow',
      'Walk to the lake promenade for morning walks and sunset dining',
      'Minutes away from Ekana Cricket Stadium, Phoenix Palassio & Medanta Hospital',
      'Seamless multi-lane connectivity to Lucknow International Airport & Hazratganj'
    ],
    status: 'Partially Delivered / Active New Enclaves Under Construction',
    possessionInfo: 'Phased Handover (Ready-to-Move & Active Construction)',
    reraNumber: 'UPRERAPRJ858081/05/2024 (Phase Registrations)',
    reraVerificationUrl: 'https://up-rera.in',
    officialSourceUrls: ['https://shalimar-oneworld.com/'],
    imageHero: '/images/projects/shalimar-21-banner.jpg',
    gallery: [
      {
        url: '/images/projects/shalimar-21-banner.jpg',
        caption: 'Shalimar OneWorld Iconic Architectural Facade',
        tag: 'Township Skyline'
      },
      {
        url: '/images/projects/shalimar-oneworld-township.jpg',
        caption: '212-Acre Master-Planned Township & Lakefront Aerial',
        tag: 'Masterplan'
      },
      {
        url: '/images/projects/shalimar-club-one.webp',
        caption: 'Club One Grand Recreational Hub',
        tag: 'Club One'
      },
      {
        url: '/images/projects/shalimar-marbella-banner.jpg',
        caption: 'Marbella Luxury Living Enclave',
        tag: 'Residential'
      }
    ],
    faq: [
      {
        question: 'What is the master vision of Shalimar OneWorld?',
        answer: 'Shalimar OneWorld is a 212+ acre integrated riverfront township in Gomti Nagar Extension designed with international urban planning standards, featuring residential enclaves, a 1.5-acre lake, Club One, sports academies, and retail high streets.'
      },
      {
        question: 'How does GreenNest Realtors advise buyers on Shalimar OneWorld?',
        answer: 'GreenNest provides independent, curated advisory on unit selection, tower sunlight orientation, floor rise analysis, and developer pricing with zero brokerage charged to the homebuyer.'
      }
    ],
    lastVerifiedAt: '2026-10-22',
    verificationStatus: 'VERIFIED',
    reviewerNotes: 'Verified against official shalimar-oneworld.com disclosures and UP-RERA filings.',
    leadFormEnabled: true
  },

  // 2. FLAGSHIP: KSMB THE ROYAL RETREAT
  {
    id: 'ksmb-the-royal-retreat',
    slug: 'ksmb-the-royal-retreat',
    officialName: 'KSMB The Royal Retreat',
    displayName: 'The Royal Retreat',
    tagline: 'Epitome of Luxury · Crafted Exclusively for You',
    developer: 'KSMB Group',
    developerRelationship: 'Curated Real Estate Advisory',
    location: 'Just off Amar Shaheed Path, Gomti Nagar Extension, Lucknow',
    localityHub: 'Shaheed Path Corridor',
    propertyType: 'Luxury Apartments',
    summary: 'An ultra-exclusive residential sanctuary comprising 162 luxury residences across 4 grand S+18 towers and 6 rare Sky Villas. Features double-height entrance lobbies, 2 grand clubhouses, and serene sky gardens just 4 minutes from Ekana Stadium & Phoenix Palassio.',
    editorialOverview: [
      'The Royal Retreat by KSMB is an architectural testament to refined luxury, created for connoisseurs who value presence over noise and space over excess. Rising gracefully just off Amar Shaheed Path, the project offers unprecedented access to Lucknow’s most prestigious commercial, sporting, and retail hubs.',
      'Comprising 4 exclusive residential blocks across S+18 storeys, each tower is fronted by soaring double-height grand entrance lobbies. With only 162 total apartments and 6 select Sky Villas, the community guarantees uncompromised privacy and low-density exclusivity.',
      'Residents enjoy two distinct, exceptionally appointed Grand Clubhouses, lush landscaped greens, and elevated sky gardens that rise above the city horizon to offer tranquil panoramic vistas.'
    ],
    startingPrice: '₹1.95 Crore*',
    priceNote: 'Indicative benchmark price on consultation; final pricing depends on tower selection, floor height, unit orientation, and developer allotment agreement.',
    priceCheckedAt: '2026-10-22',
    configurations: ['3 BHK Royal Residences', '4 BHK Grand Signature Suites', 'Exclusive Sky Villas'],
    areaDetails: {
      carpetArea: 'Optimal space efficiency with expansive private living lounges and panoramic balconies.',
      superBuiltUpArea: 'Spacious 3 & 4 BHK luxury residences and limited-edition duplex Sky Villas.',
      measurementNote: 'All area specifications follow statutory UP-RERA guidelines. Detailed floor layout blueprints provided upon advisory consultation.'
    },
    specifications: [
      { label: 'Towers & Structure', value: '4 Exclusive Residential Blocks, Stilt + 18 Floors', isVerified: true },
      { label: 'Total Residences', value: '162 Luxury Apartments & 6 Sky Villas', isVerified: true },
      { label: 'Lobby Architecture', value: 'Soaring Double-Height Grand Entrance Lobbies', isVerified: true },
      { label: 'Recreational Hubs', value: '2 Exceptionally Designed Grand Clubhouses', isVerified: true },
      { label: 'Connectivity', value: '4 Min to Ekana Stadium & Phoenix Palassio Mall', isVerified: true },
      { label: 'Healthcare & Transit', value: '10 Min to Medanta Hospital & Lulu Mall, 20 Min to Airport', isVerified: true }
    ],
    amenitiesProject: [
      'Two magnificent, architecturally distinct Grand Clubhouses',
      'Panoramic rooftop sky gardens with viewing lounges',
      'Lavish infinity swimming pool with private cabanas',
      'State-of-the-art cardiovascular and strength fitness pavilion',
      'Dedicated indoor sports courts, billiards & games salon',
      'Lush landscaped arrival court with acoustic water features',
      '24/7 Multi-tier smart surveillance and biometric access gates'
    ],
    amenitiesTownship: [
      'Prime frontage just off multi-lane Amar Shaheed Path',
      '4 minutes to Ekana International Cricket Stadium and Phoenix Palassio',
      '7 minutes to CG City Wetland ecological reserve',
      '10 minutes to Lulu Mall, Medanta Super-speciality Hospital & Golf Course',
      'Underground power cabling and advanced municipal infrastructure'
    ],
    lifestyleHighlights: [
      'Low-density community restricted to only 162 total families',
      'Double-height entrance lobbies that impart a five-star hotel welcome',
      'Sky Villas offering dramatic city views and private outdoor terraces',
      'Effortless connectivity across Lucknow via Shaheed Path'
    ],
    status: 'Under Active Development / Priority Pre-Launch Allotments',
    possessionInfo: 'Target Possession 2027-2028',
    reraNumber: 'UP-RERA Registered / Sanctioned',
    reraVerificationUrl: 'https://up-rera.in',
    officialSourceUrls: ['https://ksmb.in/the_royal_retreat'],
    imageHero: '/images/projects/ksmb-royal-retreat-hero.jpg',
    gallery: [
      {
        url: '/images/projects/ksmb-royal-retreat-hero.jpg',
        caption: 'The Royal Retreat Architectural Perspective',
        tag: 'Exterior'
      },
      {
        url: '/images/projects/ksmb-royal-retreat-amenity.jpg',
        caption: 'Grand Clubhouse & Resort Swimming Pool Deck',
        tag: 'Clubhouse'
      },
      {
        url: '/images/projects/ksmb-royal-retreat-skyvilla.jpg',
        caption: 'Spacious Balcony Living & Open Horizons',
        tag: 'Balcony Views'
      }
    ],
    faq: [
      {
        question: 'Where is KSMB The Royal Retreat located?',
        answer: 'The project is strategically positioned just off Amar Shaheed Path in Gomti Nagar Extension, Lucknow—only 4 minutes from Phoenix Palassio Mall and Ekana Cricket Stadium.'
      },
      {
        question: 'What unit configurations are available at The Royal Retreat?',
        answer: 'The Royal Retreat offers spacious 3 BHK and 4 BHK luxury residences along with a limited collection of 6 exclusive Sky Villas across 4 S+18 residential towers.'
      }
    ],
    lastVerifiedAt: '2026-10-22',
    verificationStatus: 'VERIFIED',
    reviewerNotes: 'Official project facts verified directly from ksmb.in/the_royal_retreat.',
    leadFormEnabled: true
  },

  // 3. FLAGSHIP: EMAAR ELITE OASIS
  {
    id: 'emaar-elite-oasis',
    slug: 'emaar-elite-oasis',
    officialName: 'Emaar Elite Oasis',
    displayName: 'Elite Oasis',
    tagline: 'An Oasis of Serenity · Global Luxury Living in Gomti Nagar Extension',
    developer: 'Emaar India',
    developerRelationship: 'Curated Real Estate Advisory',
    location: 'Gomti Nagar Extension, Lucknow',
    localityHub: 'Gomti Nagar Extension',
    propertyType: 'Luxury Apartments',
    summary: 'A signature residential sanctuary developed by globally acclaimed developer Emaar. Nestled amidst lush landscaped serenity, offering 3 & 4 BHK luxury residences and duplex penthouses engineered to international benchmarks of craftsmanship and design.',
    editorialOverview: [
      'Emaar Elite Oasis introduces the world-renowned pedigree of Emaar to Lucknow’s most coveted residential precinct—Gomti Nagar Extension. Conceived as a tranquil haven amidst the vibrant city, the development blends international architectural grace with nature-inspired landscapes.',
      'The project features thoughtfully proportioned 3 BHK and 4 BHK luxury residences along with prestigious top-floor duplex penthouses. Expansive floor-to-ceiling fenestration ensures panoramic green vistas and abundant natural illumination throughout the living spaces.',
      'Residents enjoy a curated suite of resort-caliber amenities, including a signature clubhouse, temperature-controlled leisure pools, wellness spa pavilions, children’s play reserves, and 24/7 concierge-standard community management.'
    ],
    startingPrice: '₹2.10 Crore*',
    priceNote: 'Indicative benchmark starting price; final all-inclusive consideration determined by developer price list, floor selection, and allotment schedule.',
    priceCheckedAt: '2026-10-22',
    configurations: ['3 BHK Luxury Residences', '4 BHK Panoramic Apartments', 'Duplex Penthouses'],
    areaDetails: {
      carpetArea: 'International standard carpet area efficiency with spacious master suites and walk-in dressing areas.',
      superBuiltUpArea: 'Thoughtfully planned layouts with generous living balconies and dedicated utility areas.',
      measurementNote: 'All area specifications follow statutory UP-RERA guidelines. Blueprint drawings provided on consultation.'
    },
    specifications: [
      { label: 'Developer Pedigree', value: 'Emaar India (Global Luxury Real Estate Benchmark)', isVerified: true },
      { label: 'Property Type', value: 'High-Rise Luxury Gated Community', isVerified: true },
      { label: 'Configurations', value: '3 BHK, 4 BHK & Luxury Duplex Penthouses', isVerified: true },
      { label: 'Architectural Style', value: 'Modern International Minimalist Architecture', isVerified: true },
      { label: 'Location Advantage', value: 'Heart of Gomti Nagar Extension, Lucknow', isVerified: true },
      { label: 'Community Security', value: '24/7 Gated Multi-Tier Security with Smart Surveillance', isVerified: true }
    ],
    amenitiesProject: [
      'Signature Emaar Clubhouse with social lounges and meeting salons',
      'Resort-inspired swimming pool with private sun deck',
      'High-tech gymnasium with professional cardio and strength zones',
      'Dedicated yoga and meditation pavilions surrounded by water features',
      'Expansive landscaped gardens with sensory walking trails',
      'Kids adventure play park and interactive sports zones',
      'Dedicated multi-tier security and smart visitor management'
    ],
    amenitiesTownship: [
      'Positioned along prime Gomti Nagar Extension wide boulevard',
      'Minutes from top international schools and healthcare hubs',
      'Rapid access to Shaheed Path, Shaheed Smriti Park & Gomti Riverfront',
      'Planned underground utilities and eco-sustainable green corridors'
    ],
    lifestyleHighlights: [
      'The timeless assurance of Emaar’s global construction and finishing standards',
      'Serene, low-noise sanctuary designed around green courtyards',
      'Spacious modern layouts that accommodate extended family gatherings',
      'High long-term capital appreciation and rental liquidity'
    ],
    status: 'Under Active Development / Register Interest',
    possessionInfo: 'Target Possession 2027-2028',
    reraNumber: 'UP-RERA Registered',
    reraVerificationUrl: 'https://up-rera.in',
    officialSourceUrls: ['https://in.emaar.com/en/properties/elite-oasis/'],
    imageHero: '/images/projects/emaar-elite-oasis-hero.jpg',
    gallery: [
      {
        url: '/images/projects/emaar-elite-oasis-hero.jpg',
        caption: 'Emaar Elite Oasis Architectural Render',
        tag: 'Exterior'
      },
      {
        url: '/images/projects/emaar-elite-oasis-render.jpg',
        caption: 'Resort Swimming Pool & Landscaped Sanctuary',
        tag: 'Amenities'
      }
    ],
    faq: [
      {
        question: 'Who is the developer of Elite Oasis?',
        answer: 'Elite Oasis is developed by Emaar India, the domestic arm of global master developer Emaar, renowned worldwide for iconic projects and master-planned luxury communities.'
      },
      {
        question: 'What configurations are offered at Elite Oasis Lucknow?',
        answer: 'The project features premium 3 BHK and 4 BHK luxury residences along with exclusive duplex penthouses designed with international finishes and generous balconies.'
      }
    ],
    lastVerifiedAt: '2026-10-22',
    verificationStatus: 'VERIFIED',
    reviewerNotes: 'Facts verified against official in.emaar.com/en/properties/elite-oasis/ disclosures.',
    leadFormEnabled: true
  },

  // 4. SHALIMAR 21
  {
    id: 'shalimar-21',
    slug: 'shalimar-21',
    officialName: 'Shalimar 21 (Shalimar Twenty One)',
    displayName: 'Shalimar 21',
    tagline: 'Ultra-Private 3 & 4 BHK Riverfront Residences at Shalimar OneWorld',
    developer: 'Shalimar Group',
    developerRelationship: 'Curated Real Estate Advisory',
    location: 'Shalimar OneWorld, Sector 6, Gomti Nagar Extension, Lucknow',
    localityHub: 'Gomti Nagar Extension',
    propertyType: 'Luxury Apartments',
    summary: 'A signature residential enclave inside the 212+ acre master-planned Shalimar OneWorld township. Rising 28 storeys across four majestic towers, the project is engineered for unmatched privacy with strictly two residences per floor.',
    editorialOverview: [
      'Shalimar 21 (Twenty One) sets a new benchmark for low-density vertical luxury in Gomti Nagar Extension. Designed in collaboration with international master planners, each floorplate is restricted to only two sprawling residences, guaranteeing three-side natural daylight, dual-aspect cross-ventilation, and maximum acoustic peace.',
      'Overlooking the tranquil Gomti riverfront and lush OneWorld central landscaped reserves, residences offer expansive 3 BHK + Servant and 4 BHK floorplans with oversized wrap-around viewing balconies, dedicated staff entries, and private foyer access.',
      'As part of the LDA-approved Shalimar OneWorld township, residents enjoy direct access to the 1.5-acre lake promenade, world-class sports academy, and prestigious Club One facilities.'
    ],
    startingPrice: '₹2.35 Crore*',
    priceNote: 'Indicative benchmark starting price based on initial developer filings; exact all-inclusive cost depends on tower selection, floor rise, view preference, and developer confirmation.',
    priceCheckedAt: '2026-10-16',
    configurations: ['3 BHK + Servant Luxury Residences', '4 BHK Grand Panoramic Residences'],
    areaDetails: {
      carpetArea: 'RERA carpet area schedules available upon formal advisor consultation.',
      superBuiltUpArea: 'Spacious low-density floorplans maximizing usable living space and deep outdoor balconies.',
      measurementNote: 'All area specifications are displayed in accordance with UP-RERA norms. Final unit layouts and exact measurements are confirmed in the formal developer allotment agreement.'
    },
    specifications: [
      { label: 'Towers & Height', value: '4 Signature Towers, G + 28 Storeys', isVerified: true },
      { label: 'Floor Density', value: 'Strictly 2 Residences Per Floor', isVerified: true },
      { label: 'Master Township', value: 'Shalimar OneWorld (~212+ Acres, LDA Approved)', isVerified: true },
      { label: 'Master Architects', value: 'JT+Partners & 42MM Architecture', isVerified: true },
      { label: 'Project RERA Reg.', value: 'UPRERAPRJ858081/05/2024', isVerified: true },
      { label: 'Elevator Core', value: 'High-speed passenger lifts + dedicated service elevator', isVerified: true }
    ],
    amenitiesProject: [
      'Temperature-controlled infinity-edge swimming pool',
      'Rooftop sky observation lounge & stargazing deck',
      'Professional indoor squash court & badminton arena',
      'High-performance gymnasium with cardio and strength zones',
      'Bespoke residents banquet hall & private dining salon',
      'Multi-tier biometric security & smart visitor verification'
    ],
    amenitiesTownship: [
      '212+ acre master-planned riverfront township infrastructure',
      '1.5-acre waterfront lake promenade with French-style bistros & cafés',
      'Club One grand clubhouse with wellness spa, sauna & steam suites',
      'Sports academy: tennis courts, cricket practice nets & putting green',
      'City Montessori School (CMS) located within township boundaries',
      '24/7 Security Command Center with perimeter surveillance'
    ],
    lifestyleHighlights: [
      'Unmatched low density: only 2 homes per floorplate',
      'Sprawling wrap-around balconies with uninterrupted river vistas',
      'Steps away from Club One and French-style lake promenade',
      'Seamless multi-lane connectivity to Airport & Shaheed Path'
    ],
    status: 'Under Construction (Active Site Operations)',
    possessionInfo: 'December 2028 (As per UP-RERA declaration)',
    reraNumber: 'UPRERAPRJ858081/05/2024',
    reraVerificationUrl: 'https://up-rera.in',
    officialSourceUrls: ['https://shalimar-oneworld.com/'],
    imageHero: '/images/projects/shalimar-21-banner.jpg',
    gallery: [
      {
        url: '/images/projects/shalimar-21-banner.jpg',
        caption: 'Architectural Rendering - Twilight View of 28-Storey Towers',
        tag: 'Exterior'
      },
      {
        url: '/images/projects/shalimar-21-gymnasium.webp',
        caption: 'High-Performance Cardio & Strength Fitness Suite',
        tag: 'Amenity'
      },
      {
        url: '/images/projects/shalimar-21-indoor-games.webp',
        caption: 'Table Tennis & Indoor Sports Lounge',
        tag: 'Indoor Recreation'
      },
      {
        url: '/images/projects/shalimar-21-billiards.webp',
        caption: 'Bespoke Billiards & Private Social Salon',
        tag: 'Resident Club'
      },
      {
        url: '/images/projects/shalimar-oneworld-township.jpg',
        caption: '212+ Acre Master-Planned Riverfront Township Aerial',
        tag: 'Township Context'
      }
    ],
    faq: [
      {
        question: 'What is the RERA registration number of Shalimar 21?',
        answer: 'Shalimar 21 is officially registered with UP-RERA under registration number UPRERAPRJ858081/05/2024.'
      },
      {
        question: 'What makes Shalimar 21 unique compared to other high-rises in Gomti Nagar Extension?',
        answer: 'The defining luxury factor is vertical privacy: only two residences per floorplate across 28 storeys, dual-aspect cross ventilation, and direct riverfront and lake views.'
      }
    ],
    lastVerifiedAt: '2026-10-16',
    verificationStatus: 'VERIFIED',
    reviewerNotes: 'Verified directly from promoter records and UP-RERA portal filings.',
    leadFormEnabled: true
  },

  // 5. SHALIMAR MARBELLA
  {
    id: 'shalimar-marbella',
    slug: 'shalimar-marbella',
    officialName: 'Shalimar Marbella',
    displayName: 'Shalimar Marbella',
    tagline: 'Spanish-Inspired 3 & 4 BHK Riverfront Residences',
    developer: 'Shalimar Group',
    developerRelationship: 'Curated Real Estate Advisory',
    location: 'Shalimar OneWorld, Sector 6, Gomti Nagar Extension, Lucknow',
    localityHub: 'Gomti Nagar Extension',
    propertyType: 'Luxury Apartments',
    summary: 'A Mediterranean-inspired luxury residential community overlooking the Gomti riverfront. Spanning lush landscaped courtyards, grand arched corridors, and resort-grade amenities inside Shalimar OneWorld.',
    editorialOverview: [
      'Inspired by the timeless coastal architecture of Marbella, Spain, this exclusive residential cluster brings terracotta warm tones, grand arched breezeways, and tranquil water courtyards to Gomti Nagar Extension.',
      'Residences feature generous floorplans with expansive viewing decks overlooking manicured Andalusian gardens and the Gomti riverbed.',
      'Residents enjoy a bespoke clubhouse with Turkish hammam-style steam baths, open-air sun decks, and private banquet halls.'
    ],
    startingPrice: '₹1.95 Crore*',
    priceNote: 'Indicative benchmark price on consultation; final pricing depends on tower selection, floor height, unit orientation, and developer allotment agreement.',
    priceCheckedAt: '2026-10-16',
    configurations: ['3 BHK Mediterranean Residences', '4 BHK Grand Riverview Suites'],
    areaDetails: {
      carpetArea: 'RERA carpet area detailed in sanctioned project schedule.',
      superBuiltUpArea: 'Low-density layouts with deep terraces designed for outdoor living.',
      measurementNote: 'All area specifications follow statutory UP-RERA guidelines.'
    },
    specifications: [
      { label: 'Architectural Style', value: 'Mediterranean / Spanish Colonial Influence', isVerified: true },
      { label: 'Master Township', value: 'Shalimar OneWorld, Sector 6', isVerified: true },
      { label: 'Project RERA Reg.', value: 'UPRERAPRJ460592/05/2024', isVerified: true },
      { label: 'View Corridor', value: 'Riverfront & Central Lake Promenade', isVerified: true }
    ],
    amenitiesProject: [
      'Resort-style outdoor swimming pool with submerged sun loungers',
      'Themed Mediterranean social clubhouse & Spanish courtyard',
      'State-of-the-art gymnasium with personal training zones',
      'Outdoor amphitheatre for private community cultural gatherings',
      'Children’s sensory play garden with organic splash pad'
    ],
    amenitiesTownship: [
      'Access to 212+ acre OneWorld township infrastructure',
      'Walk to 1.5-acre lake promenade & Club One',
      'Sports academy with tennis, basketball, and running tracks',
      'Round-the-clock integrated security command post'
    ],
    lifestyleHighlights: [
      'Relax in serene Mediterranean courtyards away from city traffic',
      'Host private soirees on deep outdoor terraces with river breezes',
      'Direct walking connectivity to retail avenues and sports facilities'
    ],
    status: 'Under Active Construction',
    possessionInfo: 'Phased Delivery Starting Late 2027',
    reraNumber: 'UPRERAPRJ460592/05/2024',
    reraVerificationUrl: 'https://up-rera.in',
    officialSourceUrls: ['https://shalimar-oneworld.com/'],
    imageHero: '/images/projects/shalimar-marbella-banner.jpg',
    gallery: [
      {
        url: '/images/projects/shalimar-marbella-banner.jpg',
        caption: 'Shalimar Marbella Exterior Architecture',
        tag: 'Exterior'
      },
      {
        url: '/images/projects/shalimar-marbella-lounge.jpg',
        caption: 'Residents Club Lounge & Social Living Room',
        tag: 'Clubhouse'
      },
      {
        url: '/images/projects/shalimar-marbella-gym.jpg',
        caption: 'State-of-the-Art Gymnasium & Fitness Suite',
        tag: 'Fitness'
      },
      {
        url: '/images/projects/shalimar-marbella-hall.jpg',
        caption: 'Bespoke Community Banquet & Gathering Salon',
        tag: 'Banquet'
      },
      {
        url: '/images/projects/shalimar-oneworld-township.jpg',
        caption: 'Master Township Waterfront Lake Aerial',
        tag: 'Township'
      }
    ],
    faq: [
      {
        question: 'What is the RERA registration number for Shalimar Marbella?',
        answer: 'Shalimar Marbella is registered under UP-RERA registration number UPRERAPRJ460592/05/2024.'
      }
    ],
    lastVerifiedAt: '2026-10-16',
    verificationStatus: 'VERIFIED',
    reviewerNotes: 'Official promoter filings confirmed.',
    leadFormEnabled: true
  },

  // 6. VALENCIA TOWERS
  {
    id: 'shalimar-valencia-towers-phase-2',
    slug: 'shalimar-valencia-towers-phase-2',
    officialName: 'Shalimar Valencia Towers Phase 2',
    displayName: 'Valencia Towers (Phase 2)',
    tagline: 'High-Rise Contemporary Riverfront Residences',
    developer: 'Shalimar Group',
    developerRelationship: 'Curated Real Estate Advisory',
    location: 'Shalimar OneWorld, Sector 6, Gomti Nagar Extension, Lucknow',
    localityHub: 'Gomti Nagar Extension',
    propertyType: 'Luxury Apartments',
    summary: 'Contemporary high-rise towers designed with floor-to-ceiling glass fenestration, panoramic Gomti riverfront views, and immediate adjacency to the 1.5-acre lake promenade.',
    editorialOverview: [
      'Valencia Towers Phase 2 represents modern urban elegance inside Shalimar OneWorld. Featuring clean lines, expansive glass balconies, and double-height entrance foyers.',
      'Designed for growing modern families, units feature optimized layouts with separate utility corridors and modular kitchen provisions.'
    ],
    startingPrice: '₹1.65 Crore*',
    priceNote: 'Indicative benchmark price on consultation; subject to promoter confirmation.',
    priceCheckedAt: '2026-10-16',
    configurations: ['2.5 BHK Contemporary Residences', '3 BHK + Servant Riverview Homes'],
    areaDetails: {
      carpetArea: 'Schedules available on consultation.',
      measurementNote: 'Verified per UP-RERA norms.'
    },
    specifications: [
      { label: 'Project Phase', value: 'Phase 2 (Newly Launched Wing)', isVerified: true },
      { label: 'Project RERA Reg.', value: 'UPRERAPRJ944626/09/2024', isVerified: true },
      { label: 'Master Township', value: 'Shalimar OneWorld, Sector 6', isVerified: true }
    ],
    amenitiesProject: [
      'Modern clubhouse with multi-purpose recreational hall',
      'Swimming pool with separate toddler wading pool',
      'Equipped fitness center with cardio equipment',
      'Children’s play arena and landscaped party lawn'
    ],
    amenitiesTownship: [
      'Direct pedestrian access to the 1.5-acre lake promenade',
      'Sports academies and Club One facilities',
      'City Montessori School (CMS) located on-campus'
    ],
    lifestyleHighlights: [
      'Contemporary high-rise living with scenic panoramic river views',
      'Direct connectivity to Shaheed Path'
    ],
    status: 'Active Construction Underway',
    possessionInfo: 'Late 2028',
    reraNumber: 'UPRERAPRJ944626/09/2024',
    reraVerificationUrl: 'https://up-rera.in',
    officialSourceUrls: ['https://shalimar-oneworld.com/'],
    imageHero: '/images/projects/shalimar-valencia-towers-phase-2-banner.jpg',
    gallery: [
      {
        url: '/images/projects/shalimar-valencia-towers-phase-2-banner.jpg',
        caption: 'Valencia Towers Exterior Skyline',
        tag: 'Exterior'
      },
      {
        url: '/images/projects/shalimar-club-one.webp',
        caption: 'Access to Club One Grand Clubhouse',
        tag: 'Club One'
      },
      {
        url: '/images/projects/shalimar-oneworld-township.jpg',
        caption: 'Township Lakefront Promenade',
        tag: 'Township'
      }
    ],
    faq: [
      {
        question: 'What is the RERA number for Valencia Towers Phase 2?',
        answer: 'Valencia Towers Phase 2 is registered under UP-RERA registration number UPRERAPRJ944626/09/2024.'
      }
    ],
    lastVerifiedAt: '2026-10-16',
    verificationStatus: 'VERIFIED',
    reviewerNotes: 'Verified from UP-RERA records.',
    leadFormEnabled: true
  },

  // 7. VALENCIA VILLAS
  {
    id: 'shalimar-valencia-villas',
    slug: 'shalimar-valencia-villas',
    officialName: 'Shalimar Valencia Villas',
    displayName: 'Valencia Villas',
    tagline: 'Exclusive Low-Rise Luxury Enclave in Shalimar OneWorld',
    developer: 'Shalimar Group',
    developerRelationship: 'Curated Real Estate Advisory',
    location: 'Shalimar OneWorld, Sector 6, Gomti Nagar Extension, Lucknow',
    localityHub: 'Gomti Nagar Extension',
    propertyType: 'Private Enclaves & Villas',
    summary: 'An exclusive gated villa enclave for buyers seeking independent land ownership, private gardens, and low-density seclusion with five-star township amenities.',
    editorialOverview: [
      'Valencia Villas caters to families who cherish private ground ownership combined with the security and luxury of a 212-acre master-planned township.',
      'Each villa is crafted with private landscaped front yards, private parking bays, and customizable duplex layouts.'
    ],
    startingPrice: 'Pricing on Request',
    priceNote: 'Custom floorplans and configurations; price on consultation.',
    priceCheckedAt: '2026-10-16',
    configurations: ['Bespoke Duplex Villas (4 & 5 BHK)'],
    areaDetails: {
      plotArea: 'Generous private plots with dedicated car porches and private gardens.',
      measurementNote: 'Verified per UP-RERA norms.'
    },
    specifications: [
      { label: 'Property Type', value: 'Independent Luxury Duplex Villas', isVerified: true },
      { label: 'Master Township', value: 'Shalimar OneWorld (~212+ Acres)', isVerified: true },
      { label: 'Security', value: 'Dedicated villa enclave security gatehouse', isVerified: true }
    ],
    amenitiesProject: [
      'Private landscaped villa gardens and terrace decks',
      'Exclusive villa residents community green corridor',
      'Dedicated covered parking for multiple vehicles'
    ],
    amenitiesTownship: [
      'Full access to Club One, sports academies, and lakefront promenade'
    ],
    lifestyleHighlights: [
      'The privacy of an independent bungalow with the infrastructure of a world-class township',
      'Private garden parties and personal outdoor living spaces'
    ],
    status: 'Select Phases Ready / Ongoing Bespoke Handover',
    possessionInfo: 'Consult advisor for phase-specific availability',
    reraNumber: 'UPRERAPRJ858081/05/2024',
    reraVerificationUrl: 'https://up-rera.in',
    officialSourceUrls: ['https://shalimar-oneworld.com/'],
    imageHero: '/images/projects/shalimar-valencia-villas-banner.jpg',
    gallery: [
      {
        url: '/images/projects/shalimar-valencia-villas-banner.jpg',
        caption: 'Valencia Villas Elegant Facade',
        tag: 'Exterior'
      },
      {
        url: '/images/projects/shalimar-oneworld-township.jpg',
        caption: 'Master Township Lakefront Context',
        tag: 'Township'
      },
      {
        url: '/images/projects/shalimar-club-one.webp',
        caption: 'Club One Grand Clubhouse Access',
        tag: 'Club One'
      }
    ],
    faq: [
      {
        question: 'Are the villas fully independent?',
        answer: 'Yes, Valencia Villas offer independent plot ownership with private front and rear gardens inside the secured Shalimar OneWorld township perimeter.'
      }
    ],
    lastVerifiedAt: '2026-10-16',
    verificationStatus: 'VERIFIED',
    reviewerNotes: 'Promoter specifications verified.',
    leadFormEnabled: true
  },

  // 8. SHALIMAR PINNACLE
  {
    id: 'shalimar-pinnacle',
    slug: 'shalimar-pinnacle',
    officialName: 'Shalimar Pinnacle',
    displayName: 'Shalimar Pinnacle',
    tagline: 'Ultra-Luxury High-Rise Enclave in Gomti Nagar Extension',
    developer: 'Shalimar Group',
    developerRelationship: 'Curated Real Estate Advisory',
    location: 'Shalimar OneWorld, Sector 6, Gomti Nagar Extension, Lucknow',
    localityHub: 'Gomti Nagar Extension',
    propertyType: 'Luxury Apartments',
    summary: 'A premier residential tower offering spacious panoramic residences with wrap-around balconies and panoramic vistas across Gomti Nagar Extension.',
    editorialOverview: [
      'Shalimar Pinnacle represents high-rise luxury for discerning buyers. Rising high above Gomti Nagar Extension, it combines spacious layouts with resort amenities.'
    ],
    startingPrice: '₹1.80 Crore*',
    priceNote: 'Subject to floor rise and promoter confirmation.',
    priceCheckedAt: '2026-10-16',
    configurations: ['3 & 4 BHK Panoramic Residences'],
    areaDetails: {
      measurementNote: 'Verified per UP-RERA norms.'
    },
    specifications: [
      { label: 'Tower Elevation', value: 'High-Rise Signature Tower', isVerified: true },
      { label: 'Master Township', value: 'Shalimar OneWorld', isVerified: true }
    ],
    amenitiesProject: [
      'Private rooftop observation deck and infinity pool',
      'Equipped fitness center and residents club lounge'
    ],
    amenitiesTownship: [
      'Township 1.5-acre lake promenade and sports academies'
    ],
    lifestyleHighlights: [
      'Elevated living with 360-degree city skyline views'
    ],
    status: 'Under Construction',
    possessionInfo: 'December 2027',
    reraNumber: 'UPRERAPRJ858081/05/2024',
    reraVerificationUrl: 'https://up-rera.in',
    officialSourceUrls: ['https://shalimar-oneworld.com/'],
    imageHero: '/images/projects/shalimar-pinnacle-banner.jpg',
    gallery: [
      {
        url: '/images/projects/shalimar-pinnacle-banner.jpg',
        caption: 'Pinnacle Tower Exterior Rendering',
        tag: 'Exterior'
      },
      {
        url: '/images/projects/shalimar-pinnacle-pool.jpg',
        caption: 'Rooftop Infinity Pool & Sky Deck',
        tag: 'Pool'
      },
      {
        url: '/images/projects/shalimar-club-one.webp',
        caption: 'Club One Clubhouse',
        tag: 'Club One'
      }
    ],
    faq: [
      {
        question: 'What are the main configurations at Shalimar Pinnacle?',
        answer: 'Shalimar Pinnacle offers spacious 3 and 4 BHK panoramic residences designed with low-density floorplates.'
      }
    ],
    lastVerifiedAt: '2026-10-16',
    verificationStatus: 'VERIFIED',
    reviewerNotes: 'Verified from promoter records.',
    leadFormEnabled: true
  }
];

export const GET_PROJECT_BY_SLUG = (slug: string): Project | undefined => {
  return PROJECTS.find((p) => p.slug === slug);
};
