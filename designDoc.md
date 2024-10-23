### 📑: Sección 1 - Introducción y visión general

React Subscription Form:
Este proyecto consiste en una aplicación web que permite a los usuarios completar un formulario de suscripción mediante un flujo dividido en varias vistas. Cada vista cubre un aspecto importante del proceso, desde la recolección de datos personales hasta la confirmación final del plan seleccionado. La aplicación está diseñada para ser rápida, intuitiva y estéticamente agradable gracias a la integración con React y TailwindCSS. El estado de la aplicación se manejará de forma eficiente con Zustand, y las interacciones con APIs para la gestión de suscripciones se harán con Axios.

Objetivo del proyecto:
Crear una interfaz de usuario moderna y modular que permita a los usuarios suscribirse a servicios mediante un formulario dividido en varias secciones. El proyecto también busca ser fácil de mantener y escalar mediante buenas prácticas de gestión de estado y modularización del código.

### 📑: Sección 2 - Tecnologías utilizadas

Tecnologías principales:
React:

Framework de JavaScript para construir interfaces de usuario dinámicas y modulares.
Utilizado para crear las diferentes vistas del formulario de suscripción.
TailwindCSS:

Framework de CSS basado en utilidades que facilita el desarrollo de UI moderna y responsiva.
Permite diseñar de forma rápida componentes estilizados sin necesidad de escribir CSS desde cero.
Zustand:

Biblioteca de gestión de estado global simple y ligera para React.
Utilizada para mantener el estado compartido entre las diferentes vistas del formulario, como el plan seleccionado y los datos ingresados por el usuario.
Axios:

Cliente HTTP basado en promesas.
Utilizado para conectar la aplicación con mockable.io, realizando operaciones CRUD simuladas para el flujo de suscripción.
Mockable.io:

Servicio que proporciona una API de pruebas sin necesidad de backend propio.
Facilitará la simulación de peticiones y respuestas en el flujo de suscripción.

### 📑: Sección 3 - Descripción de las vistas de usuario (UI Flows)

Vista 1: Información Personal
Objetivo: Capturar la información básica del usuario.
Campos requeridos:

First Name (Obligatorio)
Last Name (Obligatorio)
Email (Obligatorio, con validación de formato)
Phone Number (Obligatorio, con validación numérica)
Date of Birth (Opcional)
Gender (Opcional)
Comportamiento:

Si alguno de los campos obligatorios no se llena, se mostrará un mensaje de error.
Botón "Next" habilitado solo si los campos requeridos están completos.
Vista 2: Selección de Plan de Suscripción
Objetivo: Elegir un plan entre las opciones disponibles.
Opciones de Plan:

Basic Plan: $9.99/mes
Standard Plan: $19.99/mes
Premium Plan: $29.99/mes
Comportamiento:

El usuario debe seleccionar un plan para continuar.
Botones "Back", "Next" y "Cancel" disponibles.
Si no se selecciona un plan, el botón "Next" estará deshabilitado.
Vista 3: Selección de Add-ons
Objetivo: Permitir la selección opcional de complementos (Add-ons).
Comportamiento:

El usuario puede seleccionar uno, varios o ningún complemento.
Los complementos seleccionados se listan en un cuadro con opción de eliminarlos.
Botones "Back", "Next" y "Cancel".
Vista 4: Revisión y Confirmación
Objetivo: Mostrar toda la información ingresada para revisión.
Secciones:

Información Personal
Plan de Suscripción
Complementos Seleccionados
Total a pagar (incluye impuestos si aplican)
Comportamiento:

El usuario puede regresar a cualquier vista anterior para corregir opciones.
Botones "Back", "Submit" y "Cancel".
Al presionar "Submit", se enviarán los datos a la API mockable.io usando Axios.

### 📑: Sección 4 - Diagrama de Arquitectura del Formulario de Suscripción

![diagram](/docs/assets/ArquitectureDiagramDesignDoc.png)

1. Especificaciones Técnicas
   Frontend: React
   Renderiza las vistas de formulario: Información personal, selección de plan, complementos (add-ons), y confirmación.
   Gestión de estado: Zustand
   Almacena los datos del usuario, plan seleccionado y complementos en un estado global accesible a lo largo del flujo.
   Cliente HTTP: Axios
   Gestiona las peticiones hacia la API alojada en mockable.io.
   Estilos: TailwindCSS
   Proporciona un diseño minimalista con una experiencia limpia y entendible.
2. Diagrama de Arquitectura
   El diagrama describe la interacción de los componentes principales:

React renderiza las vistas y maneja los eventos del usuario.
Zustand sincroniza los datos del formulario entre las vistas.
Axios realiza peticiones HTTP para enviar la información de la suscripción a mockable.io.
TailwindCSS estiliza las vistas de forma consistente. 3. Flujo de la Aplicación
Pantalla 1: Información Personal

El usuario completa los campos obligatorios: nombre, apellido, correo, y teléfono.
El botón "Next" lleva a la selección de plan solo si todos los campos requeridos están completos.
Pantalla 2: Selección de Plan

El usuario selecciona uno de los tres planes disponibles (básico, estándar o premium).
No se puede continuar sin haber elegido un plan.
Pantalla 3: Complementos (Add-ons)

Opcionalmente, el usuario selecciona complementos adicionales.
Los complementos seleccionados se almacenan y se muestran en una lista dinámica.
Pantalla 4: Revisión y Confirmación

El usuario revisa la información ingresada y seleccionada.
Puede regresar para modificar las opciones o confirmar la suscripción.

### 📑: Sección 5 - Fases de Implementación

Fase 1: Configuración del Proyecto

Inicializar el proyecto con Vite y React.
Instalar dependencias: Axios, Zustand, TailwindCSS.
Fase 2: Desarrollo de Vistas y Componentes

Crear las vistas para cada etapa del formulario:
Formulario de información personal
Selección de plan
Complementos (Add-ons)
Revisión y confirmación
Fase 3: Gestión del Estado con Zustand

Crear el store global para almacenar datos del formulario.
Fase 4: Integración con mockable.io

Configurar Axios para enviar datos a la API mock.
Fase 5: Estilización y Ajustes Finales

Aplicar estilos con TailwindCSS para lograr un diseño minimalista.
Fase 6: Pruebas y Validación

Validar cada flujo:
Navegación entre vistas
Comprobación de campos obligatorios
Manejo de errores en peticiones HTTP
