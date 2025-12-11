module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blog: {
          field: "slug",
          references: "title",
          slugifyWithCount: true,
          shouldUpdateSlug: true,
          skipUndefinedReferences: false,
        },
        product: {
          field: "slug",
          references: "title",
          slugifyWithCount: true,
          shouldUpdateSlug: true,
          skipUndefinedReferences: false,
        },
        faq: {
          field: "slug",
          references: "title",
          slugifyWithCount: true,
          shouldUpdateSlug: true,
          skipUndefinedReferences: false,
        },
        about: {
          field: "slug",
          references: "title",
          slugifyWithCount: true,
          shouldUpdateSlug: true,
          skipUndefinedReferences: false,
        },
      },
    },
  },
  // email: {
  //   config: {
  //     provider: "strapi-provider-email-resend",
  //     providerOptions: {
  //       apiKey: env("RESEND_API_KEY"), // Required
  //     },
  //     settings: {
  //       defaultFrom: "piginakorea@pigina.com.vn",
  //       defaultReplyTo: "piginakorea@pigina.com.vn",
  //     },
  //   },
  // },
  // "media-prefix": {
  //   enabled: false,
  // },
})
