// fixtures/test-data.ts

export const TEST_USER = {
    name: process.env.TEST_NAME || 'Test User',
    email: process.env.TEST_EMAIL || 'playwright@example.com',
    password: process.env.TEST_PASSWORD || 'playwright',
};

export const CATEGORIES = {
  valid: {
    name: 'Linda Heathcote MD',
  },
  updated: {
    name: 'Updated Fernando Graham',
  },
  empty: {
    name: '',
  },
};

export const POSTS = {
  valid: {
    title: 'harum tollo patruus',
    text: 'Deserunt subvenio vester delectatio absorbeo tabgo voluptas summisse dapifer.',
    category_id: 'depromo',
  },
  updated: {
    title: 'Updated aestivus eum curto',
    text: 'Updated Vel sophismata soluta culpa credo.',
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
