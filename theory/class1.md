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