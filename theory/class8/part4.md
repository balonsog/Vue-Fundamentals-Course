#### main.js
We can see that we’re importing our router.js file, which is bringing in what we exported from router.js.

import router from './router'
And in main.js you’ll notice that we tell our Vue instance to use the router we’ve imported:


 new Vue({
      router,
    ...


### App.vue

 <router-view/>

 So what’s happening here? <router-link> is a component (from the vue-router library) whose job is to link to a specific route. And <router-view/> is essentially a placeholder where the contents of our component will be rendered onto the page.

So when a user clicks on the About link, they are taken to /about, and as we saw in router.js, that means the About component will load into the place where <router-view/> is shown.


**Also, if we look into the network panel of our browser, we can see that indeed our application is loaded once, and no subsequent requests are asked of the server. All our templates are loaded into our browser, and we are indeed doing client-side routing.**

### Using Named Routes

Another way we can create router links is by using named routes. Remember how in our router.js each of our routes has a name? We can use these names. So instead of:

<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>

We can write:

<router-link :to="{ name: 'home' }">Home</router-link> |
<router-link :to="{ name: 'about' }">About</router-link>


These have equivalent functionality, but Vue is using the name to look up the path that we want to use.

As you might imagine, if we have a huge application with lots of links to all our pages, and we want to change the path of a route, if we’re using named routes we’d only have to change that path in one place instead of everywhere in our app.

* Problem: Changing Routes
Sometimes in our applications, after we ship them to production we need to change their paths. Like from /about to /about-us . How might we deal with this?

* Solution #1: Redirect

Obviously the first step is to change our original route:
const router = new VueRouter({
      routes: [
        ...
        {
          path: '/about-us',
          name: 'about',
          component: About
        }
      ]
    })


If we’re using named routes then we don’t need to change our router-links at all. Otherwise we would have to. Then, since there might be links around the internet to our /about page, we want to make that redirect from /about to /about-us, with the following additional route.

const router = new VueRouter({
      routes: [
        ...
        { 
          path: '/about', 
          redirect: { name: "about" }
        }
      ]
    })


Note we’re using the named route for the redirect. We could have also used redirect: "/about-us" to get the same functionality, but this is hard-coding a URL in one more place we’d have to change if the path changed.

* Solution #2: Alias
Instead of redirecting the old path we might just want to alias it, meaning just provide a duplicate path to the same content. We could update that path and provide an alias to the old path:

    const router = new VueRouter({
      routes: [
        ...
        {
          path: '/about-us',
          name: 'about',
          component: About,
          alias: '/about' // <-----
        }
      ]
    })
    
Now the user can go to /about or /about-us and they’ll get the same content.