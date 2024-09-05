export interface Post {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  avatarUrl: string;
  author: string;
  date: string;
  category: string;
}

export interface Author {
  id: string;
  avatarSrc: string;
  name: string;
  role: string;
  socialLinks: Array<{ src: string; alt: string }>;
  posts: Post[];
}

export const authors = [
  {
    id: 'floyd-miles',
    avatarSrc: '/images/Floyd_Miles.jpg',
    name: 'Floyd Miles',
    role: 'Content Writer @Company',
    socialLinks: [
      { src: '/images/FaceBook.png', alt: 'FaceBook' },
      { src: '/images/Twitter.png', alt: 'Twitter' },
      { src: '/images/Instagram.png', alt: 'Instagram' },
      { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
    ],
    posts: [
      {
        id: 2,
        title: 'How to build rapport with your web design clients',
        subtitle: 'BUSINESS',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_2.png',
        avatarUrl: '/images/Floyd_Miles.jpg',
        author: 'Floyd Miles',
        date: 'August 23, 2021',
        category: 'Business',
      },
      {
        id: 6,
        title: 'How to build rapport with your web design clients',
        subtitle: 'EXPERIENCE',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_2.png',
        avatarUrl: '/images/Floyd_Miles.jpg',
        author: 'Floyd Miles',
        date: 'March 12, 2022',
        category: 'Experience',
      },
      {
        id: 1,
        title: 'Design tips for designers that cover everything you need',
        subtitle: 'Startup',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_1.png',
        avatarUrl: '/images/Floyd_Miles.jpg',
        author: 'Floyd Miles',
        date: 'January 27, 2022',
        category: 'Design',
      },
    ],
  },
  {
    id: 'dianne-russell',
    avatarSrc: '/images/Dianne_Russell.png',
    name: 'Dianne Russell',
    role: 'Content Writer @Company',
    socialLinks: [
      { src: '/images/FaceBook.png', alt: 'FaceBook' },
      { src: '/images/Twitter.png', alt: 'Twitter' },
    ],
    posts: [],
  },
  {
    id: 'jenny-wilson',
    avatarSrc: '/images/Jenny_Wilson.jpg',
    name: 'Jenny Wilson',
    role: 'Content Writer @Company',
    socialLinks: [
      { src: '/images/FaceBook.png', alt: 'FaceBook' },
      { src: '/images/Instagram.png', alt: 'Instagram' },
      { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
    ],
    posts: [
      {
        id: 3,
        title: 'Logo design trends to avoid in 2022',
        subtitle: 'SCREEN',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_3.png',
        avatarUrl: '/images/Jenny_Wilson.jpg',
        author: 'Jenny Wilson',
        date: 'June 10, 2022',
        category: 'Screen',
      },
      {
        id: 4,
        title: '8 Figma design systems you can download for free today',
        subtitle: 'TECHNOLOGY',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_4.png',
        avatarUrl: '/images/Jenny_Wilson.jpg',
        author: 'Jenny Wilson',
        date: 'September 15, 2021',
        category: 'Technology',
      },
      {
        id: 5,
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: 'ECONOMY',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_1.png',
        avatarUrl: '/images/Jenny_Wilson.jpg',
        author: 'Jenny Wilson',
        date: 'July 5, 2022',
        category: 'Economy',
      },
      {
        id: 8,
        title: 'Font sizes in UI design: The complete guide to follow',
        subtitle: 'ECONOMY',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_1.png',
        avatarUrl: '/images/Jenny_Wilson.jpg',
        author: 'Jenny Wilson',
        date: 'October 18, 2021',
        category: 'Economy',
      },
    ],
  },
  {
    id: 'leslie-alexander',
    avatarSrc: '/images/Leslie_Alexander.jpg',
    name: 'Leslie Alexander',
    role: 'Content Writer @Company',
    socialLinks: [
      { src: '/images/Twitter.png', alt: 'Twitter' },
      { src: '/images/Instagram.png', alt: 'Instagram' },
      { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
    ],
    posts: [
      {
        id: 7,
        title: 'Design tips for designers that cover everything you need',
        subtitle: 'LIFE',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_1.png',
        avatarUrl: '/images/Leslie_Alexander.jpg',
        author: 'Leslie Alexander',
        date: 'May 20, 2022',
        category: 'Life',
      },
      {
        id: 9,
        title: '8 Figma design systems you can download for free today',
        subtitle: 'MARKETING',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_4.png',
        avatarUrl: '/images/Leslie_Alexander.jpg',
        author: 'Leslie Alexander',
        date: 'November 2, 2022',
        category: 'Marketing',
      },
      {
        id: 10,
        title: 'Logo design trends to avoid in 2022',
        subtitle: 'Startup',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_3.png',
        avatarUrl: '/images/Leslie_Alexander.jpg',
        author: 'Leslie Alexander',
        date: 'April 14, 2022',
        category: 'Startup',
      },
    ],
  },
  {
    id: 'guy-hawkins',
    avatarSrc: '/images/Guy_Hawkins.png',
    name: 'Guy Hawkins',
    role: 'Content Writer @Company',
    socialLinks: [
      { src: '/images/Twitter.png', alt: 'Twitter' },
      { src: '/images/Instagram.png', alt: 'Instagram' },
      { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
    ],
    posts: [
      {
        id: 9,
        title: '8 Figma design systems you can download for free today',
        subtitle: 'MARKETING',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_4.png',
        avatarUrl: '/images/Leslie_Alexander.jpg',
        author: 'Guy Hawkins',
        date: 'November 2, 2022',
        category: 'Marketing',
      },
    ],
  },
  {
    id: 'eleanor_pena',
    avatarSrc: '/images/Eleanor_Pena.png',
    name: 'Eleanor Pena',
    role: 'Content Writer @Company',
    socialLinks: [
      { src: '/images/Twitter.png', alt: 'Twitter' },
      { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
    ],
    posts: [
      {
        id: 9,
        title: '8 Figma design systems you can download for free today',
        subtitle: 'MARKETING',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_4.png',
        avatarUrl: '/images/Leslie_Alexander.jpg',
        author: 'Guy Hawkins',
        date: 'November 2, 2022',
        category: 'Marketing',
      },
    ],
  },
  {
    id: 'robert_fox',
    avatarSrc: '/images/Robert_Fox.jpg',
    name: 'Robert Fox',
    role: 'Content Writer @Company',
    socialLinks: [
      { src: '/images/Twitter.png', alt: 'Twitter' },
      { src: '/images/Instagram.png', alt: 'Instagram' },
      { src: '/images/LinkedIn.png', alt: 'LinkedIn' },
    ],
    posts: [
      {
        id: 9,
        title: '8 Figma design systems you can download for free today',
        subtitle: 'MARKETING',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_4.png',
        avatarUrl: '/images/Leslie_Alexander.jpg',
        author: 'Guy Hawkins',
        date: 'November 2, 2022',
        category: 'Marketing',
      },
    ],
  },
  {
    id: 'jacob_jones',
    avatarSrc: '/images/Jacob_Jones.jpg',
    name: 'Jacob Jones',
    role: 'Content Writer @Company',
    socialLinks: [{ src: '/images/Twitter.png', alt: 'Twitter' }],
    posts: [
      {
        id: 9,
        title: '8 Figma design systems you can download for free today',
        subtitle: 'MARKETING',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        imageUrl: '/images/collection_image_4.png',
        avatarUrl: '/images/Leslie_Alexander.jpg',
        author: 'Guy Hawkins',
        date: 'November 2, 2022',
        category: 'Marketing',
      },
    ],
  },
];
