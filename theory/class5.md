# Vue Components: Slots

Slots allow developers to have the flexibility to provide content to a child component, but what happens when the child component has control of the data? In these cases, scoped slots are here to come to the rescue.

### What are slots?
Scoped slots is a technique for allowing a component to expose data to the slot’s template block.
When we want to access data from the child, standard slots will not give us permission to grab that data. As a result, we need to expose the data from the child so that we can grab it and put it in the slot as desired.