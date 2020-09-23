The Hash
By now you’re probably noticing that there’s a hash in our URL (http://localhost:8080/#/about-us), and you may be wondering what that’s about. “Hash mode” is the default mode for Vue Router and it uses the URL hash to simulate a full URL so the page isn’t reloaded every time the URL changes.

Solution: History mode + server configuration
In order to remove it we need to add some configuration to our router.js :

export default new Router({
      mode: 'history', // <----
      routes: [
       ...
      ]
    })

This tells Vue to use the browser history.pushState API to change the URL without reloading the page.

Now when we play around locally it shows the URLs exactly as we would want them, and even when we go to URLs like http://localhost:8080/about-us the proper page is loaded, which is interesting don’t you think?

**Normally when you load up /about-us on a server it would look for an about-us.html file. On our application no matter what URL is called up, we must load up index.html which is where our application is loaded, and then our router will take over and load up the proper page.**
**This is already the default functionality on our development server, but if we go to deploy our application we’ll need to ensure our server has the proper configuration to serve up our index.html no matter what route is navigated to. The Vue Router documentation has a bunch of example configurations showing how to do this.**

Caveat: Handling 404s
A side effect of this you should be aware of is that when we go to an invalid URL, we are no longer given the proper 404 file not found error. There are different ways to combat this, one of which is by creating a /views/FileNotFound.vue component, which gets loaded if none of the existing paths match. To do this we would place this catch-all route at the bottom of our routes.js:

    ...
    const router = new VueRouter({
      mode: 'history',
      routes: [
        ...
        { path: '*', component: NotFoundComponent }
      ]
    })


- DOC: https://router.vuejs.org/api/#the-route-object