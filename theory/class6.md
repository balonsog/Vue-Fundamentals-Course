### Instance Lifecycle Hooks

When we initialize our instance of Vue, a series of methods associated with the life cycle of our application are triggered. At the same time there is what is known as Lifecycle Hooks, to be able to alter the way in which the call to the methods mentioned above are triggered and thus be able to add our code at specific times.

![lifecycle](../assets/class6/lifecycle.png)

The life cycle of Vue begins when we declare the new instance of Vue by calling its constructor `new Vue()` after that, Vue proceeds to examine the events and lifecycle hooks that we may have overwritten.
At this point, it is important to specify that **the data object does not exist** from our instance of Vue.

After being executed the **_beforeCreate_** method, Vue has access to the data object of our app. The Vue instance has already been created.
