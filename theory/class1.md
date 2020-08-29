# What is Vue.js?

### Introduction to Vue.js: DOM & Virtual DOM

**Installation**

Vue allows us to easily manage our projects according to our needs.
We can start a small application by directly adding the Vue library to our script, or work through the Command Line Interface provided by the Vue ecosystem.
At the same time, if we are used to work through npm, we can download and install vue.

- Simply download and include with a script tag. Vue will be registered as a global variable.

```
// You can browse the source of the NPM package at cdn.jsdelivr.net/npm/vue.
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

```
<!DOCTYPE html>
<html>
<head>
  <title>My first Vue app</title>
  // Vue is also available on unpkg and cdnjs
  <script src="https://unpkg.com/vue"></script>
</head>
<body>
  <div id="app">
    {{ message }}
  </div>

  <script>
    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    })
  </script>
</body>
</html>
```

- Downloading and installing vue with npm: NPM is the recommended installation method when building large scale applications with Vue.

```
npm install vue
```

- CLI: Vue Command Line Interface provides a full system for rapid Vue.js development.

```
npm i -g @vue/cli
```

Development with Vue is very intuitive since it is a framework that works on JavaScript.
Although Vue allows us to add the library only in a part of our projects (Single File Components), this is generally not useful when we want to make scalable and maintainable development on this framework.

The main thing to understand how Vue works is to understand the way this library handles the view of our project and connects it to the logical part where the data that will handle our application resides.
