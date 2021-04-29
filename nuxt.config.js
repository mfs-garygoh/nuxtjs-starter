import { projects } from "./utils/projectsData";

  export default {
    mode: "universal",
    //...truncated
/*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans:300,400,700,800'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/css/reset.css',
    '~/css/main.css',
  ],
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
    generate: {
      async routes() {
        const paths = [];

        projects.forEach(project => {
          paths.push(`/project/${project.slug}`);
        });

        return paths;
      }
    }
  };