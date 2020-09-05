# Vue Basics

### Declarative Rendering and Attributes
As we have seen so far one of the main features of Vue is the way it renders the data in our view. In a fast and efficient way, using the Virtual DOM.
To update and refresh the data that is hosted in the logic layer and that allows changes to be made in the view Vue uses what is called declarative rendering. That is, declarative rendering is what allows the system to become reactive and Vue to effectively load and refresh the Virtual DOM.

Cuando nos referimos a la reactividad de Vue hablamos de la capacidad que tiene el sistema para mostrar las modificaciones oportunas en la vista cuando realizamos cambios en la parte logica. Esto quiere decir si modificamos alguna de nuestras propiedades alojadas en **data** el sistema modificara automaticamente todas las partes en las que se este mostrando o renderizando el valor de dicha propiedad.

Within the app variable, which represents our application in Vue, everything we have defined within the **data** object is treated as local variables at our instance of Vue. We can refer to those variables with the dot or square-bracket notation.

```
app.message = 'Hello class';
```
Como hemos observado al definir la propiedad ***message***, mediante la sintaxis de template podemos manejar las variables de nuestra instancia de Vue. El problema es que esto nos serviria tan solo para poder interpolar variables o mostrar variables primitivas, ya que dentro de la notacion {{}} solo podremos alojar una ***expresion***. 

```
<div id="app">{{ message1 + message2  }}</div>
<div id="app">{{ message.split('').reverse().join('') }}</div>
```
Por ello Vue pone a nuestra disposicion otra manera de renderizar y trabajar con las variables que hemos definido en el objeto **data** de nuestra app de Vue. Es lo que se denomina **directivas**.

Las directivas de Vue se pueden entender como funcionalidad de Vue para manejar nuestros datos de manera mas eficiente. Podriamos entender las directivas de Vue como una especie de funciones predefinidas. 