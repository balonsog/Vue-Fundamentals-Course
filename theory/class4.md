# What is a component of Vue?

### Introduction to Vue Components

The component-driven architecture is currently a dominant feature. The idea of component is based on the ability to create reusable pieces to encapsulate core functionality into singular blocks, reducing overall complexity, allowing for better separation of concerns, collaboration, and scalability.

Generally when we conceive the design of a new component we should consider the following aspects:

- Make an initial functional design in which we determine what properties our component needs to receive and what local data we need to define to give the functionality we want to our component.

- If the component is a visual component (ie, has styles) we need a way to stop the styles leaking out into the rest of our application

- Register this component so that it can be used globally throughout the application

- Register this component so that it can be used locally within a component

Translated with www.DeepL.com/Translator (free version)

**Registering components globally**

We can create components and register them globally with the following interface: Vue.component(name: string, options: Object<VueInstance>). Although it isn't required, when naming our components it's important to adhere to the naming conventions set by the W3C Custom Elements specification (https://www.w3.org/TR/custom-elements/#valid-custom-element-name), that is, all-lowercase and it must contain a hyphen.

inside of our App.vue file, let's register our FancyButton component by first importing it from the appropriate path:

```
import HelloWorld from "./components/HelloWorld.vue";
```
Afterwards, we can register the component

```
Vue.component('fancy-button', FancyButton);
```
![props](../assets/class4/registerComponent.png)


Our component has now been registered globally. Now we use this inside of our App.vue component, with the tag that we specified. We just add that to the template like so:

```
<template>
 <fancy-button/>
</template>
```
**Registering a component locally**

We can also register our components locally within our application. This can be done by adding it specifically to our Vue instance,


### Props

When it comes to passing information down from one component to another, props are the first technique that most Vue developers encounter. By defining a props property on a component, it can then receive data.

![props](../assets/class4/propsComponent.jpg)


### Scoped styles

The scoped attribute isn't part of Vue by default, this comes from our Webpack vue-loader. You'll notice that after adding this, the button styles are specific to our fancy-button component only. If we look at the differences between the two buttons in the following screenshot, we can see that one is merely a button and the other is styling a button with a randomly generated data attribute. This stops the browser from applying the styles to both button elements in this scenario.

When using scoped CSS within Vue, keep in mind that rules created within the component won't be accessible globally across the application: