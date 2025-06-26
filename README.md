# 🔥 FireChat

![Firebase Hosting](https://img.shields.io/badge/Deployed-Firebase-FFCA28?logo=firebase)

FireChat es una aplicación de chat en tiempo real desarrollada con **Angular 20** y **Firebase**. Permite a los usuarios iniciar sesión con proveedores como Google o Twitter, enviar y recibir mensajes en tiempo real, y almacenar conversaciones en Firestore.

---

## 🚀 Tecnologías utilizadas

- [Angular 20](https://angular.io/)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [Firestore (Realtime Database)](https://firebase.google.com/products/firestore)
- [Firebase Hosting](https://firebase.google.com/products/hosting)
- RxJS, TailwindCSS (si aplica)

---

## 📦 Instalación local

```bash
git clone https://github.com/pajuanes/firechat.git
cd firechat
npm install
ng serve
```

> Asegúrate de tener Angular CLI instalado:  
> `npm install -g @angular/cli`

---

## 🔐 Autenticación

FireChat permite autenticación vía:

- ✅ Google
- ✅ Twitter

El usuario autenticado podrá ver y enviar mensajes en un canal público de chat.

---

## ☁️ Despliegue con Firebase

Para desplegar tu propia versión:

```bash
npm run build
firebase deploy
```

> Recuerda configurar tu entorno con `firebase login` y `firebase init`.

---

## 📁 Estructura básica

```
firechat/
├── src/
│   ├── app/
│   │   ├── chat.service.ts
│   │   ├── auth.service.ts
│   │   └── ...
├── angular.json
├── package.json
└── firebase.json
```

---

## 📝 Licencia

Este proyecto está licenciado bajo los términos de MIT.

---

## 🙌 Contribuciones

¡Se aceptan PRs y sugerencias! Este es un proyecto educativo para explorar el stack Angular + Firebase.
