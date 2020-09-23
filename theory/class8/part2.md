### package.json
All of our application’s dependencies are tracked inside our package.json file. If we take a quick look inside here we see that Vue CLI already inserted Vue Router as a dependency for our project:

  "dependencies": {
        "vue": "^2.5.16",
        "vue-router": "^3.0.1", // <---- 
        "vuex": "^3.0.1"
      },

This is telling our application to use a version of vue-router that is compatible with version 3.0.1 of the Vue-Router.

When we created the project with the CLI, it ran “npm install” for us, which went out to NPM, and asked it for the latest version of Vue-Router between version 3.0.1 and less than 4.0.0 (this is what “^3.0.1” means), and it installed this library inside our application’s node_modules directory.

Next, let’s see if we can figure out where our router library gets loaded. If you look at our application Vue CLI generated for us, we find that it has a /src/router.js file.