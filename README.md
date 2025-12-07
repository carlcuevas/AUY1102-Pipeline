# Evaluación Parcial 3: Pipeline DevSecOps con GitHub Actions

Este repositorio contiene la entrega práctica de la Evaluación Parcial N° 3 para la asignatura **AUY1102 - Aseguramiento de Calidad de Software**.

El proyecto implementa un flujo de trabajo de Integración y Despliegue Continuo (CI/CD) enfocado en la calidad y seguridad del código (DevSecOps), utilizando contenedores Docker y herramientas de análisis estático.

## 👥 Integrantes del Grupo
* **Carlos Cuevas**
* **Daniel Tapia**

---

## 🚀 Descripción del Pipeline

El pipeline automatizado (`.github/workflows/main.yml`) se dispara en eventos `push` a la rama `develop` y `pull_request` a `main`, ejecutando las siguientes fases:

### 1. Construcción y Pruebas (Build & Test)
* **Dockerización:** Se construye la imagen de la aplicación utilizando un `Dockerfile` optimizado con Node.js 20.
* **Pruebas en Contenedor:** Se ejecutan las pruebas unitarias (`Jest`) **directamente dentro del contenedor Docker** para asegurar que el entorno de ejecución es inmutable.
    * *Comando:* `docker run --rm ... npm test`
* **Publicación:** Si (y solo si) las pruebas pasan correctamente, la imagen se sube automáticamente a **Docker Hub**.

### 2. Seguridad y Calidad (Sec & Quality)
Se han integrado múltiples herramientas para garantizar la integridad del software:
* **SonarCloud:** Análisis de calidad de código, detección de bugs, code smells y cobertura técnica.
* **Snyk:** Escaneo de vulnerabilidades en las dependencias del proyecto (SCA).
* **GitHub Advanced Security:** Revisión de dependencias en los Pull Requests.
* **Docker Scout:** Análisis rápido de vulnerabilidades en la imagen Docker construida.

---

## 🛠️ Stack Tecnológico

| Herramienta | Uso en el Proyecto |
| :--- | :--- |
| **GitHub Actions** | Orquestación del Pipeline CI/CD |
| **Docker** | Contenerización de la aplicación |
| **Docker Hub** | Registro de imágenes (Registry) |
| **Node.js & TypeScript** | Lenguaje base del proyecto |
| **Jest** | Framework de pruebas unitarias |
| **SonarCloud** | Análisis estático de código (SAST) |
| **Snyk** | Seguridad de dependencias |

---

## 📋 Instrucciones de Ejecución Local

Si deseas correr este proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/carlcuevas/AUY1102-Pipeline.git](https://github.com/carlcuevas/AUY1102-Pipeline.git)
    cd AUY1102-Pipeline
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar pruebas:**
    ```bash
    npm test
    ```

4.  **Construir y correr con Docker:**
    ```bash
    docker build -t auy1102-app .
    docker run -p 3000:3000 auy1102-app
    ```

---
**Institución:** Duoc UC
**Asignatura:** Ciclo de vida del Software I (AUY1102)
