// fixtures/test-data.ts

export const TEST_USER = {
    name: process.env.TEST_NAME || 'Test User',
    email: process.env.TEST_EMAIL || 'playwright@example.com',
    password: process.env.TEST_PASSWORD || 'playwright',
};

export const CATEGORIES = {
  valid: {
    name: 'Rufus Donnelly',
  },
  updated: {
    name: 'Updated Garry Runolfsson',
  },
  empty: {
    name: '',
  },
};

export const POSTS = {
  valid: {
    title: 'addo tremo candidus',
    text: 'Ea decet soleo tandem umerus aeternus via cur.',
    category_id: 'derideo',
  },
  updated: {
    title: 'Updated nobis cruciamentum cubicularis',
    text: 'Updated Termes cogo adstringo caste dapifer suspendo coma.',
    category_id: 'Updated Value',
  },
  empty: {
    title: '',
    text: '',
    category_id: '',
  },
};

export const ROUTES = {
    login: '/login',
    register: '/register',
    dashboard: '/dashboard',
    profile: '/profile',
  categories: { index: '/categories', create: '/categories/create' },
  posts: { index: '/posts', create: '/posts/create' },
};
