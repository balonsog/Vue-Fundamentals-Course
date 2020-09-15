# What is a component of Vue?

### Introduction to Vue Components

The component-driven architecture is currently a dominant feature. The idea of component is based on the ability to create reusable pieces to encapsulate core functionality into singular blocks, reducing overall complexity, allowing for better separation of concerns, collaboration, and scalability.

Generalmente  cuando concebimos el diseno de un nuevo componente deberiamos considerar los siguientes aspectos:

- Hacer un diseño funcional inicial en el que determinar que propiedades necesita recibir nuestro componente y que datos locales necesitamos definir para otorgarle la funcionalidad que deseamos a nuestro componente.

- Si el componente es un componente visual (es decir, tiene estilos) we need a way to stop the styles leaking out into the rest of our application

- Register this component so that it can be used globally throughout the application

- Register this component so that it can be used locally within a component

**Registering components globally**

We can create components and register them globally with the following interface: Vue.component(name: string, options: Object<VueInstance>). Although it isn't required, when naming our components it's important to adhere to the naming conventions set by the W3C Custom Elements specification (https://www.w3.org/TR/custom-elements/#valid-custom-element-name), that is, all-lowercase and it must contain a hyphen.

nside of our App.vue file, let's register our FancyButton component by first importing it from the appropriate path:

```
import HelloWorld from "./components/HelloWorld.vue";
```
Afterwards, we can register the component

```
Vue.component('fancy-button', FancyButton);
```
Our component has now been registered globally. Now we use this inside of our App.vue component, with the tag that we specified. We just add that to the template like so:

```
<template>
 <fancy-button/>
</template>
```

### Props

When it comes to passing information down from one component to another, props are the first technique that most Vue developers encounter. By defining a props property on a component, it can then receive data.

![props](../assets/class4/propsComponent.jpg)
