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
      },
    },
  },
  "media-prefix": {
    enabled: true,
  },
})
