// export const homeMsg =
export const homeMsg = {}
export const commonMsg = {
  header: {
    my_link: 'My library',
    nav_items: [
      { path: '/platform', label: 'About platform' },
      { path: '/pricing', label: 'Pricing' },
      { path: '/blog', label: 'Blog' }
    ],
    mega_menu_btn: 'Browse by',
    login_btn_name: 'Login / Register',
    advanced_search: 'Advanced Search',
    mega_menu_items: [
      {
        items: [
          {
            path: '/subject/artificial_intelligence',
            label: 'Artificial intelligence'
          },
          { path: '/subject/machine_learning', label: 'Machine learning' },
          { path: '/subject/arts', label: 'Arts' },
          { path: '/subject/medicine', label: 'Medicine' },
          { path: '/subject/hospitality', label: 'Hospitality' },
          { path: '/subject/law', label: 'Law' },
          { path: '/subject/history', label: 'History' },
          { path: '/subjects', label: 'All subjects' }
        ],
        title: 'by Subject'
      },
      {
        items: [
          { path: '/material/Journals', label: 'Journals' },
          { path: '/material/Books', label: 'Books' },
          {
            path: '/material/Conference_Materials',
            label: 'Conference Materials'
          },
          { path: '/material/EBooks', label: 'EBooks' },
          { path: '/material/magazines', label: 'Magazines' },
          {
            path: '/material/primary_source_documents',
            label: 'Primary Source Documents'
          },
          { path: '/material/reports', label: 'Reports' },
          { path: '/material/reviews', label: 'Reviews' }
        ],
        title: 'by Material'
      },
      {
        items: [
          { path: '/publisher/Springer_Nature', label: 'Springer Nature' },
          { path: '/publisher/MDPI', label: 'MDPI' },
          { path: '/publisher/Elsevier ', label: 'Elsevier' },
          { path: '/publisher/EBooks', label: 'EBooks' },
          { path: '/publisher/IEEE', label: 'IEEE' },
          { path: '/publisher/SAGE', label: 'SAGE' },
          { path: '/publisher/JSTOR', label: 'JSTOR' },
          { path: '/publishers', label: 'All Publishers' }
        ],
        title: 'by Publishers'
      }
    ],
    search_placeholder_d: 'Search by title, author, ISBN or Collection',
    search_placeholder_m: 'Search by title, author'
  },
  footer: {
    news_list: [
      { path: '/', label: 'What is new in zendi.io' },
      { path: '/', label: 'How to do better research' },
      { path: '/', label: 'Checklist for a effective research' },
      { path: '/', label: 'Research collection relate to COVID-19' },
      { path: '/', label: 'Our give back to the community' }
    ],
    about_text:
      'We help you to broaden your research horizons and we help you to keep up with latest development in your field by providing a access to a platform for a price of a single price of a research paper.',
    news_title: 'From our news',
    reach_title: 'Reach us',
    rights_text: 'All Rights Reserved with Knowledge E © 2020.',
    explore_list: [
      { path: '/pricing', label: 'Zendy Plus' },
      { path: '/faqs', label: 'FAQs' },
      { path: '/contact', label: 'Contact' },
      { path: '/about', label: 'About' },
      { path: '/blog', label: 'Blog' },
      { path: '/csr', label: 'CSR' },
      { path: '/feedback', label: 'Feedback' },
      { path: '/jobs', label: 'Careers' },
      { path: '/login', label: 'Login/Register' }
    ],
    privacy_list: [
      { path: '/privacy-policy', label: 'Privacy' },
      { path: '/zendy-terms-of-use', label: 'Terms' },
      { path: '/feedback', label: 'Feedback' }
    ],
    explore_title: 'Explore'
  },
  testimonial: {
    title: 'We are trusted by professionals around the world',
    subtitle:
      'Our library is trusted by many universities and government organization in GCC.',
    testimonials: [
      {
        name: 'Prakash Kumar',
        quote:
          'I have chosen Zendy to reach out to readers across the globe and increase my revenue. I hope Zendy will be a great digital publishing partner for me!',
        title: 'Digital Marketing, Neutral Publishing House Ltd.'
      },
      {
        name: 'Molife Kumona',
        quote:
          'Outside Magazine is pleased to partner with Zendy. We are excited at this opportunity to expand our digital offerings and to grow our audience worldwide.',
        title: 'Head of Digital, Conde Nast South Africa.'
      },
      {
        name: 'Thokozani Ndlovu',
        quote:
          'We find Zendy the easiest to use of all the online magazine publishing platforms. They are a key partner for us as we evolve into a digital-first business.',
        title: 'Student, African Mining News'
      }
    ]
  },
  subscribe: {
    btn: 'Count me in',
    title:
      'Subscribe to your own weekly briefing of research publications in your field.',
    subtitle:
      'Be on your toes, stay ahead of the cave, get your weekly briefing into your Email.',
    description:
      'We take privacy very seriously. we will not be sharing or selling your email to any third party. You can easily unsubscribe or easily manage a subscription upon your sign up.'
  },
  cta_final: {
    btn: 'Start your Free Trial',
    title: 'Get Started with a Free Trial',
    subtitle:
      'No credit card is required, you can cancel at any time. Sign in/Sign now for free.'
  },
  createdAt: '2022-03-05T15:38:41.541Z',
  updatedAt: '2022-03-05T16:13:42.245Z',
  publishedAt: '2022-03-05T15:38:43.156Z',
  locale: 'en',
  settings: {
    title: 'Customize appearance',
    select_lang: 'Select language',
    select_size: 'Font size',
    select_them: 'App theme'
  },

  common: {
    cta: '“Research is creating new knowledge.”',
    title: 'Zendy, Premium research publications library',
    cta_sub: 'Welcome to Zendy',
    see_all: 'See all',
    section1: 'From our blog',
    section2: 'Browse by subject',
    section3: 'Magazines'
  }
}

export const priceMsg = {
  header: { ...commonMsg.header },
  footer: {
    news_list: [
      {
        path: '/',
        label: 'What is new in zendi.io'
      },
      {
        path: '/',
        label: 'How to do better research'
      },
      {
        path: '/',
        label: 'Checklist for a effective research'
      },
      {
        path: '/',
        label: 'Research collection relate to COVID-19'
      },
      {
        path: '/',
        label: 'Our give back to the community'
      }
    ],
    about_text:
      'We help you to broaden your research horizons and we help you to keep up with latest development in your field by providing a access to a platform for a price of a single price of a research paper.',
    news_title: 'From our news',
    reach_title: 'Reach us',
    rights_text: 'All Rights Reserved with Knowledge E © 2020.',
    explore_list: [
      {
        path: '/pricing',
        label: 'Zendy Plus'
      },
      {
        path: '/faqs',
        label: 'FAQs'
      },
      {
        path: '/contact',
        label: 'Contact'
      },
      {
        path: '/about',
        label: 'About'
      },
      {
        path: '/blog',
        label: 'Blog'
      },
      {
        path: '/csr',
        label: 'CSR'
      },
      {
        path: '/feedback',
        label: 'Feedback'
      },
      {
        path: '/jobs',
        label: 'Careers'
      },
      {
        path: '/login',
        label: 'Login/Register'
      }
    ],
    privacy_list: [
      {
        path: '/privacy-policy',
        label: 'Privacy'
      },
      {
        path: '/zendy-terms-of-use',
        label: 'Terms'
      },
      {
        path: '/feedback',
        label: 'Feedback'
      }
    ],
    explore_title: 'Explore'
  },
  testimonial: {
    title: 'We are trusted by professionals around the world',
    subtitle:
      'Our library is trusted by many universities and government organization in GCC.',
    testimonials: [
      {
        name: 'Prakash Kumar',
        quote:
          'I have chosen Zendy to reach out to readers across the globe and increase my revenue. I hope Zendy will be a great digital publishing partner for me!',
        title: 'Digital Marketing, Neutral Publishing House Ltd.'
      },
      {
        name: 'Molife Kumona',
        quote:
          'Outside Magazine is pleased to partner with Zendy. We are excited at this opportunity to expand our digital offerings and to grow our audience worldwide.',
        title: 'Head of Digital, Conde Nast South Africa.'
      },
      {
        name: 'Thokozani Ndlovu',
        quote:
          'We find Zendy the easiest to use of all the online magazine publishing platforms. They are a key partner for us as we evolve into a digital-first business.',
        title: 'Student, African Mining News'
      }
    ]
  },
  subscribe: {
    btn: 'Count me in',
    title:
      'Subscribe to your own weekly briefing of research publications in your field.',
    subtitle:
      'Be on your toes, stay ahead of the cave, get your weekly briefing into your Email.',
    description:
      'We take privacy very seriously. we will not be sharing or selling your email to any third party. You can easily unsubscribe or easily manage a subscription upon your sign up.'
  },
  cta_final: {
    btn: 'Start your Free Trial',
    title: 'Get Started with a Free Trial',
    subtitle:
      'No credit card is required, you can cancel at any time. Sign in/Sign now for free.'
  },
  createdAt: '2022-06-16T14:38:10.066Z',
  updatedAt: '2022-07-16T20:52:17.090Z',
  publishedAt: '2022-06-16T14:38:16.944Z',
  locale: 'en',
  settings: {
    title: 'Customize appearance',
    select_lang: 'Select language',
    select_size: 'Font size',
    select_them: 'App theme'
  },
  common: {
    title:
      '<h1 class="text-center mt-10 text-4xl font-serif">Zendy <span class="text-orange-600">Plus</span> Free for 14 days</h1> <p class="text-center">No credit card required, you can cancel at any time. Sign in/Sign now for free.</p>',
    planTypes: {
      yearly: {
        name: 'Yearly plan',
        offer: '(40% Off special offer)',
        price: '29',
        paying: '420',
        currency: 'AED',
        interval: 'yearly',
        fullPrice: '700'
      },
      monthly: {
        name: 'Monthly plan',
        offer: '(10% Off special offer)',
        price: '63',
        paying: '63',
        currency: 'AED',
        interval: 'monthly',
        fullPrice: '70'
      }
    }
  }
}

export const curatedMsg = {
  data: [
    {
      id: 2,
      href: '/blog/zendy-launches-new-beta-search-engine-with-open-access-content',
      image:
        'https://storage.googleapis.com/echoranu.appspot.com/research_methodology_6f0c74248a/research_methodology_6f0c74248a.jpg',
      title: 'How to Structure Research Methodology',
      content:
        'The methodology chapter should comprehensively describe and justify all the research design choices you made. The following is a sample of a research structure: Chapter One communicates the purpose and focus of the study and explains the outline of the research. '
    },
    {
      id: 1,
      href: '/blog/upcoming-talk-at-dubai-cares-pavilion-promoting-a-more-knowledgeable-society-through-research',
      image:
        'https://storage.googleapis.com/echoranu.appspot.com/curated_facebook_india_whatsapp_77be7ee431/curated_facebook_india_whatsapp_77be7ee431.jpg',
      title: 'Checklist for Writing a Great Research Paper',
      content:
        'Does each paragraph begin with a good topic sentence? Do I provide clear evidence to support my thesis? Have I used examples with citations evenly throughout the work? Do my paragraphs flow in a logical manner'
    },
    {
      id: 4,
      href: '/blog/top-5-reads-of-july-2021',
      image:
        'https://storage.googleapis.com/echoranu.appspot.com/curated_tiktok_hong_kong_6a7ac49655/curated_tiktok_hong_kong_6a7ac49655.jpg',
      title: 'how to keep up with research in your field',
      content:
        'The sheer number of online services and social media platforms available to academics makes it possible to receive a constant stream of information about newly published research. However, much of this may serve only as a distraction from your research and staying on top of it all can even come to feel like a burden.'
    },
    {
      id: 3,
      href: '/blog/top-5-reads-of-september-2021-2',
      image:
        'https://storage.googleapis.com/echoranu.appspot.com/curated_meditation_home_lockdown_ae02f594d1/curated_meditation_home_lockdown_ae02f594d1.jpg',
      title: 'Organizing Your Social Sciences Research Paper',
      content:
        'This guide is intended to help students organize and write a quality research paper for classes taught in the social and behavioral sciences. Also included are recommendations concerning how to successfully manage and complete specific course assignments.'
    }
  ]
}
