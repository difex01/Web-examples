# REDUX

## 1. Introducción

**Redux** es una librería que se utiliza para gestionar el estado de una aplicación.

Una de las principales ventajas de **Redux** es que proporciona un lugar centralizado para almacenar el estado de la aplicación y un conjunto de reglas claras para actualizar ese estado. Esto hace que sea más fácil de entender cómo funciona la aplicación y cómo se actualiza el estado.

## 2. Instalación

Para instalar la versión estable:

`npm i -S redux`

Para trabajar con react

`npm i -S react-redux`

Esta última librería proporciona una manera de conectar componentes de React con el estado de la aplicación gestionado por **Redux**.
Permite a los componentes de *React* acceder al estado de la aplicación de manera sencilla y sin tener que pasar propiedades a través de varios componentes anidados manualmente. También proporciona una forma de enviar acciones y actualizar el estado de la aplicación desde componentes de *React*.

## 3. Conceptos básicos

### 3.1. State

El estado de nuestra aplicación puede ser visto como un simple objeto.
Por ejemplo, este sería el estado de una aplicación to-do.

```js
{
  todos: [
    {
    title: 'Hacer la tarea',
    completed: true,
    },
    {
    title: 'Ir al super',
    completed: false,
    }
  ],
  loading: false
}
```

### 3.2. Actions

Para actualizar el estado, es necesario enviar un **action**.
Un **action** es un simple objeto que describe la acción a realizar.

```js
{ type: 'ADD_TODO', title: 'Hacer ejercicio' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_LOADING', value: true }
```

### 3.3. Reducers

Un **reducer** es una función que toma el **state** y el **action** como argumentos y devuelve el siguiente estado de la aplicación.
Esta debe ser una función pura, que no modifique el estado y en su lugar devuelva un nuevo objeto como estado.

En este ejemplo, separamos los reducers por cada recurso al que se quiera acceder de nuestro estado. Uno para **todo** y otro para **loading**.

```js
const loadingInitialState = false

function loadingReducer(state = loadingInitialState, action) {
  if (action.type === 'SET_LOADING') {
    // Devolvemos un nuevo estado
    return action.value;
  } else {
    // Devolvemos el estado actual
    return state;
  }
}

const todosInitialState = [];

function todosReducer(state = todoInitialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          title: actio.title
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo, index) => action.index === index ?
        { text: todo.text, completed: !todo.completed } :
        todo
      )
    default:
      return state;
  }
}
```

Como podemos observar en el ejemplo anterior, cada **reducer** devuelve la parte del estado que le corresponde.

Finalmente creamos otro **reducer** donde uniremos los demás **reducers**.

```js
const initialState = {
  todos: [],
  loading: false
}

function reducer(state = initialState, action) {
  return {
    todos: todosReducer(state.todos, action),
    loading: loadingReducer(state.loading, action),
  }
}
```

## 4. Los 3 principios de REDUX

### 4.1. Single source of truth: Una única fuente de la verdad

El estado de la aplicación se almacena en un único lugar, conocido como el **store**.

Esto significa que todos los datos que necesita la aplicación están disponibles en un único lugar y no tienen que ser sincronizados entre componentes o módulos de manera manual.

### 4.2. State is read-only: Estado de solo lectura

El estado de la aplicación es de solo lectura y no puede ser modificado directamente.

Si quieres actualizar el estado, debes enviar un **action**, que es un objeto que describe qué cambios deben realizarse. Esto hace que sea fácil rastrear cómo el estado de la aplicación ha cambiado a lo largo del tiempo y facilita la depuración y el seguimiento de errores.

### 4.3. Changes are made with pure functions: Los cambios se realizan con funciones puras

Para actualizar el estado, debes escribir **reducers** que son funciones *puras* que toman el estado anterior y la acción y devuelven el próximo estado.

Los **reducers** deben ser funciones puras, lo que significa que deben devolver el mismo resultado siempre que se llamen con el mismo conjunto de entrada y no deben tener efectos secundarios. Esto hace que sea fácil predecir cómo el estado de la aplicación cambiará y facilita la prueba y la depuración de código.
