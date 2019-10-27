module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-personal-portfolio","short_name":"mohan's portfolio","start_url":"/","background_color":"#616CAA","theme_color":"#616CAA","display":"minimal-ui","icon":"src/images/code_logo.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/home/caroline.santos/personal/divasite/gatsby_starter_portfolio/node_modules/gatsby-remark-images","id":"3626c0e0-58d4-5046-b0e5-cb7731a052f2","name":"gatsby-remark-images","version":"3.1.28","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":["onRenderBody"]},{"resolve":"/home/caroline.santos/personal/divasite/gatsby_starter_portfolio/node_modules/gatsby-remark-autolink-headers","id":"df380aaa-460e-51a2-8830-e6712dc1f436","name":"gatsby-remark-autolink-headers","version":"2.1.16","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]}],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-external-links","options":{"target":"_blank","rel":"nofollow noopener noreferrer"}},{"resolve":"gatsby-remark-images","options":{"maxWidth":830,"quality":90,"withWebp":true,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-autolink-headers","options":{"maintainCase":false}}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Minimal Blog - Gatsby Theme","short_name":"MinimalBlog","description":"Minimal Blog with a focus on typography. Gatsby Starter powered by MDX.","background_color":"#FFF","theme_color":"#616CAA","display":"standalone","icon":"src/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-tech-blog-theme/gatsby-browser.js'),
      options: {"plugins":[],"basePath":"/blog","contentPath":"content/blog"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
