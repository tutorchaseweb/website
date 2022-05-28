export default {
  name: "site-config",
  type: "document",
  title: "Site configuration",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page title",
      description: "Title for your site, search engines and social media.",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your site for search engines and social media.",
    },
  ],
};
