# Vue Basics

### Declarative Rendering and Attributes
As we have seen so far one of the main features of Vue is the way it renders the data in our view. In a fast and efficient way, using the Virtual DOM.
To update and refresh the data that is hosted in the logic layer and that allows changes to be made in the view Vue uses what is called declarative rendering. That is, declarative rendering is what allows the system to become reactive and Vue to effectively load and refresh the Virtual DOM.

When we refer to Vue's reactivity, we are talking about the system's capacity to show the appropriate modifications in the view when we make changes in the logical part. This means that if we modify any of our properties hosted in **data** the system will automatically modify all the parts where the value of that property is being shown or rendered.

```
app.message = 'Hello class';
```

Within the app variable, which represents our application in Vue, everything we have defined within the **data** object is treated as local variables at our instance of Vue. We can refer to those variables with the dot or square-bracket notation.

As we have observed when defining the ***message*** property, through the template syntax we can handle the variables of our Vue instance. The problem is that this would only serve to interpolate variables or show primitive variables, since within the notation {{}} we will only be able to host a ***expression***. 

```
<div id="app">{{ message1 + message2  }}</div>
<div id="app">{{ message.split('').reverse().join('') }}</div>
```
That's why Vue puts at our service another way of rendering and working with the variables that we have defined in the **data** object of our Vue app. This is called **directives**.

Vue directives can be understood as Vue functionality to handle our data in a more efficient way. We could understand Vue directives as a kind of predefined functions.


### Instance Lifecycle Hooks

When we initialize our instance of Vue, a series of methods associated with the life cycle of our application are triggered. At the same time there is what is known as Lifecycle Hooks, to be able to alter the way in which the call to the methods mentioned above are triggered and thus be able to add our code at specific times.

![lifecycle](../assets/class2/lifecycle.png)

The life cycle of Vue begins when we declare the new instance of Vue by calling its constructor ``new Vue()`` after that, Vue proceeds to examine the events and lifecycle hooks that we may have overwritten.
At this point, it is important to specify that **the data object does not exist** from our instance of Vue.

After being executed the ***beforeCreate*** method, Vue has access to the data object of our app. The Vue instance has already been created.

