# REDUX con REDUX-TOOLKIT

## 1. Introducción

**Redux** es una librería que se utiliza para gestionar el estado de una aplicación.

Una de las principales ventajas de **Redux** es que proporciona un lugar centralizado para almacenar el estado de la aplicación y un conjunto de reglas claras para actualizar ese estado. Esto hace que sea más fácil de entender cómo funciona la aplicación y cómo se actualiza el estado.

**Redux Toolkit** es una biblioteca que se ha diseñado para hacer más fácil y más rápido trabajar con **Redux**.
Proporciona una serie de funcionalidades que facilitan la configuración y uso de **Redux**, incluyendo la creación de **actions** y **reducers** de manera más concisa, la configuración y utilización de middlewares de manera más sencilla, y la facilidad de trabajar con datos asíncronos. 

## 2. Instalación

Para instalar redux-toolkit:

`npm install @reduxjs/toolkit`

Para trabajar con react

`npm i -S react-redux`

Esta última librería proporciona una manera de conectar componentes de React con el estado de la aplicación gestionado por **Redux**.
Permite a los componentes de *React* acceder al estado de la aplicación de manera sencilla y sin tener que pasar propiedades a través de varios componentes anidados manualmente. También proporciona una forma de enviar acciones y actualizar el estado de la aplicación desde componentes de *React*.

## 3. Conceptos básicos

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
