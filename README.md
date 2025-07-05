# Gestión de Bolsos (Fullstack)

Este proyecto es una aplicación web full-stack diseñada para la gestión de bolsos. Incluye un frontend desarrollado con Angular y un backend construido con Spring Boot, utilizando una base de datos H2 para el almacenamiento de datos en modo de desarrollo.

## Estructura del Proyecto

El repositorio está organizado de la siguiente manera:

  - `gestion-bolsos-frontend/`: Contiene el código fuente de la aplicación Angular (frontend).
  - `gestion-bolsos-backend/`: Contiene el código fuente de la aplicación Spring Boot (backend).

## Tecnologías Utilizadas

### Frontend (Angular)

  - **Angular**: Framework para construir interfaces de usuario.
  - **TypeScript**: Lenguaje de programación.
  - **HTML5 / CSS3**: Estructura y estilos.
  - **Angular CLI**: Herramienta de línea de comandos para el desarrollo de Angular.

### Backend (Spring Boot)

  - **Spring Boot**: Framework para construir aplicaciones Java.
  - **Java**: Lenguaje de programación.
  - **Maven/Gradle**: Herramienta de construcción y gestión de dependencias (asumiendo uno de los dos).
  - **H2 Database**: Base de datos en memoria para el desarrollo.
  - **Spring Data JPA**: Para la persistencia de datos.
  - **RESTful API**: Para la comunicación entre frontend y backend.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

  - **Node.js y npm**: Necesarios para el frontend Angular.
      - [Descargar Node.js](https://nodejs.org/) (npm se instala con Node.js)
  - **Java Development Kit (JDK) 17 o superior**: Necesario para el backend Spring Boot.
      - [Descargar OpenJDK](https://www.google.com/search?q=https://openjdk.java.net/install/index.html)
  - **Maven o Gradle**: Herramientas de construcción para el backend.
      - [Descargar Maven](https://maven.apache.org/download.cgi)
      - [Descargar Gradle](https://gradle.org/install/)
  - **Angular CLI**:
    
    npm install -g @angular/cli
    
  - **Git**: Para clonar el repositorio.
      - [Descargar Git](https://github.com/Fralopala2/gestion-bolsos.git)

## Configuración y Ejecución del Proyecto

Sigue estos pasos para poner en marcha la aplicación:

### 1\. Clonar el Repositorio


git clone https://github.com/tu-usuario/gestion-bolsos.git
cd gestion-bolsos


*(Reemplaza `tu-usuario` con tu nombre de usuario de GitHub y `gestion-bolsos` con el nombre de tu repositorio)*.

### 2\. Configurar y Ejecutar el Backend

1.  **Navega a la carpeta del backend:**

    
    cd gestion-bolsos-backend
    

    *(Asegúrate de que esta sea la ruta correcta a tu carpeta de backend. Si se llama diferente, ajústala.)*

2.  **Construye y ejecuta la aplicación Spring Boot:**

      - **Usando Maven:**
        
        mvn clean install
        mvn spring-boot:run
        
      - **Usando Gradle:**
        
        ./gradlew build
        ./gradlew bootRun
        

    El backend se iniciará, por defecto, en `http://localhost:8080`.

3.  **Acceder a la Consola H2 (opcional, para ver la base de datos):**
    Si el backend está ejecutándose, puedes acceder a la consola de la base de datos H2 en tu navegador:
    `http://localhost:8080/h2-console`
    Asegúrate de que la "JDBC URL" coincida con la de tu `application.properties` (normalmente `jdbc:h2:mem:testdb`). Podrás ejecutar `SELECT * FROM BOLSO;` para ver los datos.

### 3\. Configurar y Ejecutar el Frontend

1.  **Navega a la carpeta del frontend:**

    
    cd ../gestion-bolsos-frontend
    

    *(Vuelve al directorio raíz del proyecto y luego entra en la carpeta del frontend)*

2.  **Instala las dependencias de Node.js:**

    
    npm install
    

3.  **Inicia la aplicación Angular:**

    
    ng serve --open
    

    La aplicación se abrirá automáticamente en tu navegador, por defecto en `http://localhost:4200/`.

## Uso de la Aplicación

1.  Asegúrate de que tanto el backend como el frontend están en ejecución.
2.  En la interfaz del frontend, podrás añadir nuevos bolsos rellenando el formulario y haciendo clic en "Añadir Bolso".
3.  Los bolsos añadidos se mostrarán en la "Lista de Bolsos" (una vez que la funcionalidad de mostrar esté implementada o refresques la página).

-----
