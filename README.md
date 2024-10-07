
# Eldar

### Deploy
TODO


### Objetivo
Facilitar una aplicación web   con autenticación avanzada, manejo de roles, y una arquitectura optimizada para proyectos escalables.


### Variables de entorno.
Las variables de entorno, por seguridad, fueron enviadas por correo electronico a quien corresponda.


--- 

### Instalacion
- Instalar las dependencias del proyecto (npm i ) en la carpeta raiz 
- Ubicar el archivo '.env' en la carpeta raiz del proyecto.
- Luego ejecutar el script **npm run dev**.


---

### Estructura del Proyecto

Este proyecto sigue una estructura de carpetas organizada para facilitar la escalabilidad, el mantenimiento y la reutilización de componentes. 
A continuación se describe cada una de las carpetas y archivos principales:

**eldar/** <br>
├── public/ <br>
│   └── index.html    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          * Archivo HTML principal <br>
├── **src/**  <br>
│   ├── **api/**           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        * Funciones y servicios para interactuar con las APIs <br>
│   ├── assets/        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         * Archivos estáticos (imágenes, fuentes, etc.) <br>
│   ├── **components/**     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        * Componentes reutilizables específicos <br>
│   │   ├── Generals/    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       * Componentes globales utilizados en toda la aplicación <br>
│   │   └── Toasts/     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        * Componentes reutilizables para notificaciones y alertas (Toasts) <br>
│   ├── **hooks/**          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        * Hooks personalizados con lógica específica <br>
│   ├── **interfaces/**   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        * Definiciones de tipos e interfaces TypeScript <br>
│   ├── **pages/**         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         * Páginas principales de la aplicación <br>
│   ├── **redux/**         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         * Estado global gestionado con Redux <br>
│   ├── styles/       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          * Estilos y temas de la aplicación <br>
│   ├── utils/        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          * Funciones utilitarias y helpers <br>
│   ├── **App.tsx**        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         * Componente principal de la aplicación <br>
│   └── main.tsx       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         * Punto de entrada de la aplicación <br>
├── **.env**                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        * Archivo para variables de entorno (no versionado por seguridad) <br>
├── package.json       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         * Configuración de dependencias y scripts del proyecto <br>
└── readme             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         * Archivo para la documentación del proyecto <br>






--- 

### Descripcion
El proyecto es una aplicación web desarrollada en React con TypeScript que implementa autenticación avanzada y gestión de roles. Los usuarios pueden iniciar sesión con credenciales y acceder a diferentes funcionalidades según su rol: los "users" solo pueden visualizar datos de una API, mientras que los "admins" tienen la capacidad de crear y editar datos. La aplicación es responsiva, cuenta con una interfaz atractiva usando Material UI y está diseñada siguiendo buenas prácticas de escalabilidad, utilizando Redux para manejar el estado global y Axios para la comunicación con la API. 

---

### Librerias utilizadas

- React-router-dom

- Vite@latest 

- Redux - toolkit

- Material UI

- Typescript 

- Axios

 
 ### Estilos:
 - Material UI
 - Font awesome icons


### Patrones de diseño utilizados

- Render Props
- Componentes diferentes y reutilizables.
- Custom Hooks 
- Redux ( Estado global gestionado )
- Interfaces/Model
- Carpetacion modular y arquitectura optimizada para garantizar el proyecto escalable.
- Arquitectura modular y reutilizable para separar la lógica de presentación y de negocio.

### Otras caracteristicas

- Implementacion Login:  autenticación avanzada 
- Implementacion de tokens JWT ( para la autenticacion) (simulado)
- Manejo de roles
- Persistencia datos (usuario)
- Aplicacion totalmente RESPONSIVA.



---

### Imagenes de Uso

**Web**
![Web](https://i.postimg.cc/cJzjgdmW/app.png)

**Login**
![Login](https://i.postimg.cc/QC3T0Wbq/login.png)

**Home**
![Home](https://i.postimg.cc/ncnmmBMF/home.png)

**Create**
![Create](https://i.postimg.cc/zDCW30z2/create.png)

**Edit**
![Edit](https://i.postimg.cc/NFkrVfCv/edit.png)



### Resumen

Características Notables
- Estructura del Proyecto: Utiliza React y TypeScript, lo que sugiere un enfoque en la escalabilidad y tipado fuerte para evitar errores comunes de JavaScript.
- Parece tener un enfoque modular con la separación de componentes y hooks.
- Funcionalidad: una aplicación que requiere asignar y gestionar ubicaciones o entregas.
- Incluye modales y pop-ups para la interacción del usuario, que son comunes en aplicaciones que requieren gestión de datos complejos. 
- Contiene una excelente documentacion y comentarios necesarios.
- Solido manejo de estados: mediante redux.
- Codigo optimizado
- Arquitectura modular y reutilizable para separar la lógica de presentación y de negocio.



## Creado por [fcurrao](https://www.linkedin.com/in/federicocurrao/ "fcurrao")
