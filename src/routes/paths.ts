const path = (root: string, sublink: string) => {
  return `${root}${sublink}`
}

const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/dashboard'

export const PATH_AUTH = {
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  register: path(ROOTS_AUTH, '/register'),
  verify: path(ROOTS_AUTH, '/verify'),
  login: path(ROOTS_AUTH, '/login'),
  root: ROOTS_AUTH
}

export const PATH_PAGE = {
  maintenance: '/maintenance',
  comingSoon: '/coming-soon',
  components: '/components',
  contact: '/contact-us',
  payment: '/payment',
  pricing: '/pricing',
  about: '/about-us',
  page404: '/404',
  page500: '/500',
  faqs: '/faqs'
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
    frota: path(ROOTS_DASHBOARD, '/fleet'),
    app: path(ROOTS_DASHBOARD, '/app')
  },
  mail: {
    all: path(ROOTS_DASHBOARD, '/mail/all'),
    root: path(ROOTS_DASHBOARD, '/mail')
  },
  chat: {
    conversation: path(ROOTS_DASHBOARD, '/chat/:conversationKey'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    root: path(ROOTS_DASHBOARD, '/chat')
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  user: {
    editById: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    newUser: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    root: path(ROOTS_DASHBOARD, '/user')
  },
  eCommerce: {
    editById: path(
      ROOTS_DASHBOARD,
      '/e-commerce/product/nike-blazer-low-77-vintage/edit'
    ),
    productById: path(
      ROOTS_DASHBOARD,
      '/e-commerce/product/nike-air-force-1-ndestrukt'
    ),
    product: path(ROOTS_DASHBOARD, '/e-commerce/product/:name'),
    newProduct: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    invoice: path(ROOTS_DASHBOARD, '/e-commerce/invoice'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    root: path(ROOTS_DASHBOARD, '/e-commerce')
  },
  blog: {
    postById: path(
      ROOTS_DASHBOARD,
      '/blog/post/apply-these-7-secret-techniques-to-improve-event'
    ),
    post: path(ROOTS_DASHBOARD, '/blog/post/:title'),
    newPost: path(ROOTS_DASHBOARD, '/blog/new-post'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    root: path(ROOTS_DASHBOARD, '/blog')
  }
}

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction'
