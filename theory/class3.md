# Vue Basics

### Computed Properties and Methods
the difference is that computed properties are cached based on their ***reactive dependencies***. A computed property will only re-evaluate when some of its reactive dependencies have changed. 
In comparison, a method invocation will always run the function whenever a re-render happens.
In cases where you do not want caching, use a method instead.