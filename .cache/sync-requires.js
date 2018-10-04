// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/mariahadams/alchemy/401/gatsby-sandbox/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mariahadams/alchemy/401/gatsby-sandbox/.cache/dev-404-page.js")),
  "component---src-pages-about-css-modules-js": preferDefault(require("/Users/mariahadams/alchemy/401/gatsby-sandbox/src/pages/about-css-modules.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/mariahadams/alchemy/401/gatsby-sandbox/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/mariahadams/alchemy/401/gatsby-sandbox/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mariahadams/alchemy/401/gatsby-sandbox/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/mariahadams/alchemy/401/gatsby-sandbox/src/pages/my-files.js"))
}

