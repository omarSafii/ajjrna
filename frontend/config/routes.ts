export default {
  index: "/",
  about: { index: "/about-us" },
  contactUs: { index: "/contact-us" },
  faq: { index: "/faq" },
  gallery: { index: "/gallery" },
  payment: { index: "/payment" },
  products: {
    index: `/products`,
    product: (id: string) => `/products/${id}`,
  },
  auth: {
    login: {
      index: "/login",
    },
    register: {
      index: "/register",
    },
    forgetPassword: {
      index: "forget-password",
    },
  },
} as const;
