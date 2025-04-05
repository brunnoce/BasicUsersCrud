# 🧑‍💻 CRUD de Usuarios

Aplicación desarrollada con **React**, **TypeScript** y **Redux Toolkit** para gestionar usuarios.  
Actualmente permite:

---

## ✅ Funcionalidades implementadas

- 🟢 **Agregar usuario**  
  Se puede añadir un nuevo usuario con nombre, email y cuenta de GitHub.

- 🟢 **Eliminar usuario**  
  Se puede eliminar un usuario existente.  
  La acción simula una sincronización con una API (`https://jsonplaceholder.typicode.com`), e incluye rollback en caso de error.

---

## 🕒 Funcionalidades en desarrollo

- 🟡 **Editar usuario** *(no agregada aún)*  
  Se podrá editar la información de un usuario desde la interfaz.

---

## 🧩 Librerías utilizadas

- 🪄 **[Flowbite](https://flowbite.com/)** – Para estilos y componentes UI.
- ⚛️ **[Redux Toolkit](https://redux-toolkit.js.org/)** – Manejo de estado global.
- 🔔 **[Sonner](https://sonner.emilkowal.ski/)** – Para notificaciones de éxito y error.
- 🧠 **[React + TypeScript](https://react.dev/learn/typescript)** – Base tecnológica del proyecto.

---

## 🧪 Datos de prueba

Los datos de usuario **no** provienen de una API externa.  
Se utiliza un **array predefinido de usuarios** cargado desde el archivo `slice.ts`.

---

## 🛠 Cómo ejecutar

1. Clonar el repositorio  
2. Instalar dependencias:

```bash
npm install
npm run dev