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

**Debugging**

Vue is characterized by being one of the frameworks with one of the most complete ecosystems. Apart from the main libraries it has to manage larger applications with more complexity in state control or routing issues, Vue puts at our disposal tools that facilitate debugging while we develop our applications.

![vueLibraries](../assets/class1/vueLibraries.png)


Besides the Command Line Interface that we have installed previously, we will work with the debbug tool Vue DevTools. This tool allows us to see in the browser in a fast and deep way all the information of our application. 

![vueDevTools](../assets/class1/vueDevTools.png)


**First Vue App**

Vue is a framework that allows us to create web applications following a Model-view-viewmodel. This means that a large part of the functionality of this framework is totally directed to control the view of our application, which is divided into 3 parts. The part where we store the logic, the data (Model), the visual part (View) and an intermediate layer that allows us to interconnect these two parts mentioned above (ViewModel).

Vue gives us very powerful tools to create our applications but let's say it's designed so we can do it with a scalable vision. This means that it directs us to design applications created by reusable parts. These pieces are what we know as web components.

We can therefore put in a wrapper all our application made in Vue or just a smaller piece that we will then integrate in the whole application. This wrapper becomes the DOM element where we will host what we want to create with Vue.

![rootElement](../assets/class1/rootElement.png)

Through this element of the DOM (div) we will control everything that we show in our view. This is why this element is designated as the root element of our application.
For the ViewModel layer to work, we must connect the data layer to the view. To do this, we initialize and instantiate Vue into an object that receives the same id as our DOM element. In this case:

```
id="app"
```

![vueInstance](../assets/class1/vueObject.png)

This new Vue object receives certain configuration parameters aka **OPTIONS** object, in this object the first param is the identifier of the DOM element where the Vue object we have just created will reside.

```
el:'#app'
```

As one of the additional parameters that we can pass to our Vue object in the **OPTIONS** object, there is the data object. This object is literally the data layer of our application, which is the Model of Vue layer. In it we will define the variables that we need our Vue object to handle locally.

Within **data** we can define the variables we need to manage the logic of our application. Also Vue has ***instance properties*** which have a special nomenclature to differentiate them from the properties created ad hoc by us.

```
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
```

We will use this data to show it in our view or interpolate it, because in the core of Vue.js there is a system that allows us to process data in a declarative way to the DOM using a simple template syntax:

```
 var app = new Vue({
      el: "#app",
      data: {
        message: "Hello developers",
      }
    });
```

At this point the data and the DOM are now linked, and everything is now reactive. This means that the DOM update used by Vue allows that if we modify the data layer, the visual layer will render only those parts that are affected. To do this quickly and easily, Vue uses what is called Virtual DOM.
