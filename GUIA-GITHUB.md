# 📤 Guía para Subir Circuito AR a GitHub

## Paso 1: Instalar Git (Si no lo tienes)

### Descargar Git:
👉 https://git-scm.com/download/win

Descarga e instala Git para Windows. Durante la instalación, acepta las opciones predeterminadas.

## Paso 2: Configurar Git (Primera vez)

Abre PowerShell o Git Bash y ejecuta:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

## Paso 3: Crear Repositorio en GitHub

1. Ve a https://github.com
2. Haz clic en el botón **"+"** (arriba a la derecha)
3. Selecciona **"New repository"**
4. **Nombre del repositorio**: `circuito-ar` (o el que prefieras)
5. **Descripción**: "Visualizador de circuitos electrónicos en 3D con códigos QR"
6. Visibilidad: **Public** (o Private si prefieres)
7. ❌ **NO** marques "Add a README file" (ya tenemos uno)
8. Haz clic en **"Create repository"**

GitHub te mostrará las instrucciones, pero aquí están adaptadas:

## Paso 4: Subir el Proyecto

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
# Navega a la carpeta del proyecto
cd "c:\PROYECTOS PWA\mi-animacion-navidad"

# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Crear el primer commit
git commit -m "🎉 Versión inicial de Circuito AR con 5 circuitos de ejemplo"

# Cambiar el nombre de la rama a 'main' (si es necesario)
git branch -M main

# Conectar con tu repositorio de GitHub
# ⚠️ IMPORTANTE: Reemplaza 'TU-USUARIO' con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/circuito-ar.git

# Subir los archivos
git push -u origin main
```

### Si GitHub te pide autenticación:

GitHub ya no acepta contraseñas. Usa un **Personal Access Token**:

1. Ve a https://github.com/settings/tokens
2. Clic en **"Generate new token"** > **"Generate new token (classic)"**
3. Dale un nombre (ej: "Circuito AR")
4. Marca el checkbox **"repo"** (acceso completo a repositorios)
5. Scroll abajo y clic en **"Generate token"**
6. **COPIA EL TOKEN** (no podrás verlo de nuevo)
7. Cuando Git te pida contraseña, pega el token

## Paso 5: Habilitar GitHub Pages (Para Demo en Vivo)

1. Ve a tu repositorio en GitHub
2. Clic en **"Settings"** (⚙️)
3. En el menú lateral, clic en **"Pages"**
4. En **"Source"**, selecciona **"main"** branch
5. Carpeta: **"/ (root)"**
6. Clic en **"Save"**

**¡Listo!** En 1-2 minutos tu app estará disponible en:
```
https://TU-USUARIO.github.io/circuito-ar/
```

## Paso 6: Actualizar el README con tu Información

Edita `README.md` y reemplaza:

- ` tu-usuario` → Tu nombre de usuario de GitHub
- `tu-email@ejemplo.com` → Tu email
- `Tu Nombre` → Tu nombre real

Luego haz commit y push:

```bash
git add README.md
git commit -m "📝 Actualizar información de contacto"
git push
```

## 📱 Compartir los Códigos QR

Los códigos QR se generan automáticamente en la app. Para imprimirlos:

1. Abre la app en `index.html`
2. Haz clic en "Ver Ejemplos"
3. **Captura de pantalla** o usa la herramienta de impresión del navegador
4. Imprime en papel blanco
5. ¡Ya puedes escanear los QR con tu celular!

## 🔄 Futuros Cambios

Cada vez que hagas cambios:

```bash
# Ver qué archivos cambiaron
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción del cambio"

# Subir a GitHub
git push
```

## 🎯 Comandos Git Útiles

```bash
# Ver historial de commits
git log --oneline

# Ver cambios antes de hacer commit
git diff

# Deshacer cambios en un archivo
git checkout -- nombre-archivo.html

# Ver ramas
git branch

# Crear nueva rama
git checkout -b nueva-caracteristica

# Cambiar a rama main
git checkout main

# Fusionar rama
git merge nueva-caracteristica
```

## 🆘 Problemas Comunes

### Error: "fatal: not a git repository"
```bash
git init
```

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/circuito-ar.git
```

### Error: "failed to push"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Ver URL del repositorio remoto
```bash
git remote -v
```

## ✅ Checklist Final

- [ ] Git instalado y configurado
- [ ] Repositorio creado en GitHub
- [ ] Código subido (`git push` exitoso)
- [ ] GitHub Pages habilitado
- [ ] README actualizado con tu información
- [ ] App funcionando en GitHub Pages
- [ ] QR codes impresos y probados

---

**¡Felicidades! 🎉 Tu proyecto ya está en GitHub**

Ahora puedes compartir:
- URL del repositorio: `https://github.com/TU-USUARIO/circuito-ar`
- URL de la demo: `https://TU-USUARIO.github.io/circuito-ar/`
