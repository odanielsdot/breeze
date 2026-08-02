// fixtures/test-data.ts

export const TEST_USER = {
    name: process.env.TEST_NAME || 'Test User',
    email: process.env.TEST_EMAIL || 'playwright@example.com',
    password: process.env.TEST_PASSWORD || 'playwright',
};

export const CATEGORIES = {
  valid: {
    name: 'Jimmie Hansen',
  },
  updated: {
    name: 'Updated Noel Daniel',
  },
  empty: {
    name: '',
  },
};

export const POSTS = {
  valid: {
    title: 'talio defaeco utique',
    text: 'Admitto tabernus contego cuppedia terra aurum tantum vomito.',
    category_id: 'valde',
  },
  updated: {
    title: 'Updated adimpleo valde creo',
    text: 'Updated Saepe titulus timor usitas sol.',
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
