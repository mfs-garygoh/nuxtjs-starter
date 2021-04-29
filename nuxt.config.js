import { projects } from "./utils/projectsData";

  export default {
    mode: "universal",

    //...truncated

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