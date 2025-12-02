# 🔌 Circuito AR - Visualizador de Circuitos Electrónicos en 3D

![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-orange.svg)

**Circuito AR** es una Progressive Web App que te permite visualizar circuitos electrónicos en 3D mediante códigos QR. Observa cómo fluye la corriente a través de los componentes con animaciones realistas.

## ✨ Características

- 📸 **Escaneo de Códigos QR** - Usa la cámara de tu celular
- 🎨 **5 Circuitos Predefinidos** - Listos para explorar
- ⚡ **Animación de Flujo de Corriente** - Partículas en movimiento
- 🎯 **Componentes 3D Realistas** - Batería, resistencias, LEDs, capacitores
- 💡 **Interfaz Premium** - Diseño moderno con glassmorphism
- 📱 **PWA Instalable** - Funciona como app nativa

## 🚀 Demo en Vivo

**👉 [Ver Demo](https://tu-usuario.github.io/circuito-ar/)**

## 📚 Circuitos Disponibles

### 1. 🔵 LED Básico
- Circuito simple: Batería 9V + Resistencia 220Ω + LED Rojo
- Ideal para principiantes

### 2. 🔴🟢 LEDs en Serie
- Dos LEDs conectados en serie con resistencias de 330Ω
- Aprende sobre caída de voltaje

### 3. 🔵🟡 LEDs en Paralelo
- Dos ramales independientes con LEDs azul y amarillo
- Mayor corriente total

### 4. ⚙️ Divisor de Voltaje
- Resistencias de 1kΩ y 2kΩ para reducir voltaje
- Aplicación: Sensores y mediciones

### 5. ⏱️ LED Intermitente
- Circuito con capacitor de 100µF
- Efecto de parpadeo (conceptual)

## 🎯 Cómo Usar

### Opción 1: Escanear QR desde la App

1. **Abre `index.html`** en tu navegador
2. **Haz clic en "Escanear QR"**
3. **Permite acceso a la cámara**
4. **Apunta al código QR impreso**
5. **¡Disfruta de la visualización 3D!**

### Opción 2: Ver Ejemplos Directamente

1. **Haz clic en "Ver Ejemplos"**
2. **Selecciona cualquier circuito**
3. **Haz clic en "Ver en AR"**
4. **Explora la visualización interactiva**

## 🛠️ Tecnologías

- **HTML5 + CSS3** - Estructura y estilos modernos
- **JavaScript ES6+** - Lógica de la aplicación
- **Three.js** - Renderizado 3D
- **jsQR** - Detección de códigos QR
- **QRCode.js** - Generación de códigos QR
- **PWA** - Progressive Web App

## 📁 Estructura del Proyecto

```
circuito-ar/
├── index.html          # Página principal
├── style.css           # Estilos (glassmorphism + animaciones)
├── script.js           # Lógica (QR scanner + 3D rendering)
├── manifest.json       # Configuración PWA
├── README.md           # Documentación
└── .gitignore          # Archivos ignorados
```

## 🎨 Capturas de Pantalla

### Pantalla Principal
![Splash](screenshots/splash.png)

### Galería de Circuitos
![Examples](screenshots/examples.png)

### Visualización 3D
![AR View](screenshots/ar-view.png)

## 💻 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/circuito-ar.git

# Entrar al directorio
cd circuito-ar

# Abrir con un servidor local (recomendado)
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js (npx)
npx serve

# Opción 3: VS Code Live Server
# Clic derecho en index.html > "Open with Live Server"

# Visita: http://localhost:8000
```

**Nota**: Se requiere HTTPS o localhost para acceder a la cámara.

## 📱 Instalar como PWA

### En Android (Chrome):
1. Abre la aplicación en Chrome
2. Menú (⋮) > "Agregar a pantalla de inicio"
3. Confirma la instalación

### En iOS (Safari):
1. Abre la aplicación en Safari
2. Toca el botón Compartir
3. "Añadir a pantalla de inicio"

## 🎓 Uso Educativo

Esta app es perfecta para:

- ✅ **Estudiantes** aprendiendo electrónica básica
- ✅ **Profesores** explicando circuitos de forma visual
- ✅ **Talleres** de electricidad y electrónica
- ✅ **Makers** y entusiastas de Arduino/Raspberry Pi

## 🔧 Personalización

### Agregar un Nuevo Circuito

Edita `script.js` y agrega un nuevo objeto en `CIRCUITS`:

```javascript
'mi-circuito': {
    id: 'mi-circuito',
    name: 'Mi Circuito Personalizado',
    description: 'Descripción del circuito',
    components: [
        {
            type: 'battery',
            voltage: '9V',
            position: { x: -8, y: 0, z: 0 },
            specs: { Voltaje: '9V' }
        },
        // ... más componentes
    ],
    path: [
        { x: -7, y: 0, z: 0 },
        // ... más puntos del camino
    ],
    stats: { Voltaje: '9V', Corriente: '20mA' }
}
```

Luego agrega una card en `index.html` en la sección de ejemplos.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📋 TODO / Roadmap

- [ ] Más circuitos (amplificador, temporizador 555, etc.)
- [ ] Etiquetas flotantes 3D para componentes
- [ ] Modo educativo con explicaciones paso a paso
- [ ] Exportar visualización como video
- [ ] Soporte para transistores y chips
- [ ] Calculadora de valores (Ley de Ohm integrada)
- [ ] Modo oscuro/claro
- [ ] Múltiples idiomas

## 🐛 Problemas Conocidos

- Safari iOS requiere interacción del usuario antes de acceder a la cámara
- En algunos dispositivos Android antiguos el escaneo QR puede ser lento

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tu-email@ejemplo.com

## 🙏 Agradecimientos

- [Three.js](https://threejs.org/) - Motor 3D
- [jsQR](https://github.com/cozmo/jsQR) - Lector de QR
- [QRCode.js](https://davidshimjs.github.io/qrcodejs/) - Generador de QR
- Comunidad de desarrolladores de PWAs

## 📞 Soporte

¿Tienes preguntas o problemas?
- 🐛 [Reportar un bug](https://github.com/tu-usuario/circuito-ar/issues)
- 💡 [Solicitar una característica](https://github.com/tu-usuario/circuito-ar/issues)
- 📧 Enviar email a: tu-email@ejemplo.com

---

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**

Hecho con ❤️ y ⚡ para la comunidad de electrónica
