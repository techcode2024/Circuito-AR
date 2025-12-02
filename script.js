// ========================================
// CONFIGURACIÓN DE CIRCUITOS
// ========================================

const CIRCUITS = {
    'led-basico': {
        id: 'led-basico',
        name: 'LED Básico',
        description: 'Circuito simple con un LED, resistencia y batería de 9V',
        components: [
            {
                type: 'battery',
                name: 'Batería',
                voltage: '9V',
                position: { x: -8, y: 0, z: 0 },
                specs: { Voltaje: '9V', Tipo: 'Alcalina' }
            },
            {
                type: 'resistor',
                name: 'Resistencia',
                value: '220Ω',
                position: { x: 0, y: 2, z: 0 },
                specs: { Resistencia: '220Ω', Potencia: '1/4W', Tolerancia: '5%' }
            },
            {
                type: 'led',
                name: 'LED Rojo',
                color: 'red',
                position: { x: 8, y: 0, z: 0 },
                specs: { Color: 'Rojo', Voltaje: '2V', Corriente: '20mA' }
            }
        ],
        path: [
            { x: -7, y: 0, z: 0 },
            { x: -3, y: 0, z: 0 },
            { x: -1, y: 2, z: 0 },
            { x: 1, y: 2, z: 0 },
            { x: 3, y: 0, z: 0 },
            { x: 7, y: 0, z: 0 },
            { x: 8, y: -1, z: 0 },
            { x: 0, y: -3, z: 0 },
            { x: -8, y: -1, z: 0 },
            { x: -7, y: 0, z: 0 }
        ],
        stats: { Voltaje: '9V', Corriente: '~32mA', Potencia: '~0.3W' }
    },

    'leds-serie': {
        id: 'leds-serie',
        name: 'LEDs en Serie',
        description: 'Dos LEDs conectados en serie con resistencias',
        components: [
            {
                type: 'battery',
                name: 'Batería',
                voltage: '9V',
                position: { x: -10, y: 0, z: 0 },
                specs: { Voltaje: '9V', Tipo: 'Alcalina' }
            },
            {
                type: 'resistor',
                name: 'Resistencia 1',
                value: '330Ω',
                position: { x: -4, y: 2, z: 0 },
                specs: { Resistencia: '330Ω', Potencia: '1/4W' }
            },
            {
                type: 'led',
                name: 'LED Rojo',
                color: 'red',
                position: { x: 0, y: 0, z: 0 },
                specs: { Color: 'Rojo', Voltaje: '2V' }
            },
            {
                type: 'resistor',
                name: 'Resistencia 2',
                value: '330Ω',
                position: { x: 4, y: 2, z: 0 },
                specs: { Resistencia: '330Ω', Potencia: '1/4W' }
            },
            {
                type: 'led',
                name: 'LED Verde',
                color: 'green',
                position: { x: 10, y: 0, z: 0 },
                specs: { Color: 'Verde', Voltaje: '2.2V' }
            }
        ],
        path: [
            { x: -9, y: 0, z: 0 },
            { x: -6, y: 0, z: 0 },
            { x: -5, y: 2, z: 0 },
            { x: -3, y: 2, z: 0 },
            { x: -1, y: 0, z: 0 },
            { x: 2, y: 0, z: 0 },
            { x: 3, y: 2, z: 0 },
            { x: 5, y: 2, z: 0 },
            { x: 9, y: 0, z: 0 },
            { x: 10, y: -1, z: 0 },
            { x: 0, y: -4, z: 0 },
            { x: -10, y: -1, z: 0 },
            { x: -9, y: 0, z: 0 }
        ],
        stats: { Voltaje: '9V', Corriente: '~15mA', Potencia: '~0.14W' }
    },

    'leds-paralelo': {
        id: 'leds-paralelo',
        name: 'LEDs en Paralelo',
        description: 'Dos LEDs conectados en paralelo',
        components: [
            {
                type: 'battery',
                name: 'Batería',
                voltage: '9V',
                position: { x: -10, y: 0, z: 0 },
                specs: { Voltaje: '9V', Tipo: 'Alcalina' }
            },
            {
                type: 'resistor',
                name: 'Resistencia 1',
                value: '220Ω',
                position: { x: -2, y: 3, z: 0 },
                specs: { Resistencia: '220Ω', Potencia: '1/4W' }
            },
            {
                type: 'led',
                name: 'LED Azul',
                color: 'blue',
                position: { x: 4, y: 3, z: 0 },
                specs: { Color: 'Azul', Voltaje: '3.2V' }
            },
            {
                type: 'resistor',
                name: 'Resistencia 2',
                value: '220Ω',
                position: { x: -2, y: -3, z: 0 },
                specs: { Resistencia: '220Ω', Potencia: '1/4W' }
            },
            {
                type: 'led',
                name: 'LED Amarillo',
                color: 'yellow',
                position: { x: 4, y: -3, z: 0 },
                specs: { Color: 'Amarillo', Voltaje: '2V' }
            }
        ],
        path: [
            { x: -9, y: 0, z: 0 },
            { x: -6, y: 0, z: 0 },
            { x: -6, y: 3, z: 0 },
            { x: -3, y: 3, z: 0 },
            { x: -1, y: 3, z: 0 },
            { x: 3, y: 3, z: 0 },
            { x: 10, y: 3, z: 0 },
            { x: 10, y: 0, z: 0 },
            { x: 10, y: -3, z: 0 },
            { x: 3, y: -3, z: 0 },
            { x: -1, y: -3, z: 0 },
            { x: -3, y: -3, z: 0 },
            { x: -6, y: -3, z: 0 },
            { x: -6, y: 0, z: 0 },
            { x: -10, y: 0, z: 0 },
            { x: -9, y: 0, z: 0 }
        ],
        stats: { Voltaje: '9V', Corriente: '~64mA', Potencia: '~0.6W' }
    },

    'divisor-voltaje': {
        id: 'divisor-voltaje',
        name: 'Divisor de Voltaje',
        description: 'Circuito divisor de voltaje con dos resistencias',
        components: [
            {
                type: 'battery',
                name: 'Batería',
                voltage: '9V',
                position: { x: -8, y: 0, z: 0 },
                specs: { Voltaje: '9V', Tipo: 'Alcalina' }
            },
            {
                type: 'resistor',
                name: 'R1 (1kΩ)',
                value: '1000Ω',
                position: { x: 0, y: 3, z: 0 },
                specs: { Resistencia: '1kΩ', Potencia: '1/4W' }
            },
            {
                type: 'resistor',
                name: 'R2 (2kΩ)',
                value: '2000Ω',
                position: { x: 0, y: -2, z: 0 },
                specs: { Resistencia: '2kΩ', Potencia: '1/4W' }
            },
            {
                type: 'led',
                name: 'LED Indicador',
                color: 'green',
                position: { x: 8, y: 0, z: 0 },
                specs: { Color: 'Verde', Voltaje: '2.2V', Nota: 'Vout ≈ 6V' }
            }
        ],
        path: [
            { x: -7, y: 0, z: 0 },
            { x: -3, y: 0, z: 0 },
            { x: -1, y: 3, z: 0 },
            { x: 1, y: 3, z: 0 },
            { x: 1, y: 0, z: 0 },
            { x: 7, y: 0, z: 0 },
            { x: 7, y: -2, z: 0 },
            { x: 1, y: -2, z: 0 },
            { x: -1, y: -2, z: 0 },
            { x: -3, y: 0, z: 0 },
            { x: -8, y: 0, z: 0 },
            { x: -7, y: 0, z: 0 }
        ],
        stats: { 'Vin': '9V', 'Vout': '~6V', Corriente: '~3mA' }
    },

    'led-intermitente': {
        id: 'led-intermitente',
        name: 'LED Intermitente',
        description: 'Circuito con capacitor para efecto intermitente (conceptual)',
        components: [
            {
                type: 'battery',
                name: 'Batería',
                voltage: '9V',
                position: { x: -8, y: 0, z: 0 },
                specs: { Voltaje: '9V', Tipo: 'Alcalina' }
            },
            {
                type: 'capacitor',
                name: 'Capacitor',
                value: '100µF',
                position: { x: 0, y: 3, z: 0 },
                specs: { Capacitancia: '100µF', Voltaje: '16V' }
            },
            {
                type: 'resistor',
                name: 'Resistencia',
                value: '470Ω',
                position: { x: 4, y: 0, z: 0 },
                specs: { Resistencia: '470Ω', Potencia: '1/4W' }
            },
            {
                type: 'led',
                name: 'LED Verde',
                color: 'green',
                position: { x: 8, y: -2, z: 0 },
                specs: { Color: 'Verde', Voltaje: '2.2V', Efecto: 'Intermitente' }
            }
        ],
        path: [
            { x: -7, y: 0, z: 0 },
            { x: -2, y: 0, z: 0 },
            { x: -1, y: 3, z: 0 },
            { x: 1, y: 3, z: 0 },
            { x: 2, y: 0, z: 0 },
            { x: 3, y: 0, z: 0 },
            { x: 5, y: 0, z: 0 },
            { x: 7, y: -2, z: 0 },
            { x: 8, y: -3, z: 0 },
            { x: 0, y: -4, z: 0 },
            { x: -8, y: -1, z: 0 },
            { x: -7, y: 0, z: 0 }
        ],
        stats: { Voltaje: '9V', Frecuencia: '~2Hz', Corriente: '~15mA' }
    }
};

// ========================================
// ESTADO DE LA APLICACIÓN
// ========================================

const state = {
    currentScreen: 'splash',
    currentCircuit: null,
    cameraStream: null,
    qrScanner: null,
    arScene: null,
    animationRunning: false,
    showLabels: true
};

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    console.log('🚀 Inicializando Circuito AR...');

    setupEventListeners();
    generateQRCodes();
    showScreen('splash');
}

function setupEventListeners() {
    // Navegación principal
    document.getElementById('scan-qr-btn').addEventListener('click', startQRScanner);
    document.getElementById('examples-btn').addEventListener('click', () => showScreen('examples'));
    document.getElementById('back-to-home').addEventListener('click', () => showScreen('splash'));

    // Scanner
    document.getElementById('close-scanner').addEventListener('click', closeScanner);

    // Botones de ejemplo
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const circuitId = e.target.dataset.circuit;
            loadCircuit(circuitId);
        });
    });

    // Controles AR
    document.getElementById('toggle-animation').addEventListener('click', toggleAnimation);
    document.getElementById('toggle-labels').addEventListener('click', toggleLabels);
    document.getElementById('reset-view').addEventListener('click', resetARView);
    document.getElementById('close-ar').addEventListener('click', closeAR);
}

// ========================================
// GESTIÓN DE PANTALLAS
// ========================================

function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(`${screenName}-screen`);
    if (targetScreen) {
        setTimeout(() => {
            targetScreen.classList.add('active');
            state.currentScreen = screenName;
        }, 100);
    }
}

// ========================================
// GENERACIÓN DE CÓDIGOS QR
// ========================================

function generateQRCodes() {
    Object.keys(CIRCUITS).forEach(circuitId => {
        const qrContainer = document.getElementById(`qr-${circuitId}`);
        if (qrContainer) {
            // Generar QR con el ID del circuito
            QRCode.toCanvas(
                circuitId, // El dato que se codifica
                {
                    width: 200,
                    height: 200,
                    margin: 1,
                    color: {
                        dark: '#000000',
                        light: '#ffffff'
                    }
                },
                (error, canvas) => {
                    if (error) {
                        console.error('Error generando QR:', error);
                        return;
                    }
                    qrContainer.innerHTML = '';
                    qrContainer.appendChild(canvas);
                }
            );
        }
    });

    console.log('✅ Códigos QR generados');
}

// ========================================
// SCANNER DE QR
// ========================================

async function startQRScanner() {
    try {
        showNotification('Iniciando cámara...', 'success');

        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
        });

        state.cameraStream = stream;
        const video = document.getElementById('camera-feed');
        video.srcObject = stream;
        await video.play();

        showScreen('scanner');
        startQRDetection();
        showNotification('Apunta la cámara al código QR', 'success');

    } catch (error) {
        console.error('Error al iniciar cámara:', error);
        showNotification('No se pudo acceder a la cámara', 'error');
    }
}

function startQRDetection() {
    const video = document.getElementById('camera-feed');
    const canvas = document.getElementById('qr-canvas');
    const ctx = canvas.getContext('2d');

    const scanQR = () => {
        if (state.currentScreen !== 'scanner') return;

        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code && code.data) {
                // QR detectado
                updateScannerStatus('¡QR detectado!', true);
                handleQRCode(code.data);
                return;
            } else {
                updateScannerStatus('Buscando código QR...', false);
            }
        }

        requestAnimationFrame(scanQR);
    };

    scanQR();
}

function handleQRCode(data) {
    console.log('QR detectado:', data);

    // Verificar si el QR corresponde a un circuito
    if (CIRCUITS[data]) {
        showNotification(`Circuito detectado: ${CIRCUITS[data].name}`, 'success');
        closeScanner();
        setTimeout(() => {
            loadCircuit(data);
        }, 500);
    } else {
        showNotification('QR no reconocido. Usa uno de los ejemplos.', 'error');
    }
}

function updateScannerStatus(text, isActive) {
    const statusText = document.getElementById('scanner-status-text');
    const indicator = document.querySelector('.scanner-status .status-indicator');

    statusText.textContent = text;

    if (isActive) {
        indicator.classList.add('active');
    } else {
        indicator.classList.remove('active');
    }
}

function closeScanner() {
    if (state.cameraStream) {
        state.cameraStream.getTracks().forEach(track => track.stop());
        state.cameraStream = null;
    }
    showScreen('splash');
}

// ========================================
// CARGA Y VISUALIZACIÓN DE CIRCUITOS
// ========================================

function loadCircuit(circuitId) {
    const circuit = CIRCUITS[circuitId];
    if (!circuit) {
        showNotification('Circuito no encontrado', 'error');
        return;
    }

    state.currentCircuit = circuit;
    showNotification(`Cargando ${circuit.name}...`, 'success');

    setTimeout(() => {
        initializeAR(circuit);
    }, 500);
}

function initializeAR(circuit) {
    showScreen('ar');

    // Actualizar título y stats
    document.getElementById('circuit-title').textContent = circuit.name;

    const statsContainer = document.getElementById('circuit-stats');
    statsContainer.innerHTML = Object.entries(circuit.stats).map(([key, value]) => `
        <div class="stat-item">
            <span class="stat-label">${key}:</span>
            <span class="stat-value">${value}</span>
        </div>
    `).join('');

    // Inicializar escena 3D
    createARScene(circuit);

    showNotification('¡Visualización 3D lista!', 'success');
}

function createARScene(circuit) {
    const canvas = document.getElementById('ar-canvas');

    // Limpiar escena anterior
    if (state.arScene) {
        state.arScene.renderer.dispose();
    }

    // Configurar escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);

    // Cámara
    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 8, 20);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ff88, 1.2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00d4ff, 0.8, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Crear componentes del circuito
    const componentMeshes = [];
    circuit.components.forEach(comp => {
        const mesh = createComponent(comp);
        if (mesh) {
            mesh.position.set(comp.position.x, comp.position.y, comp.position.z);
            scene.add(mesh);
            componentMeshes.push({ mesh, data: comp });
        }
    });

    // Crear cables
    const wires = createWires(circuit.path);
    wires.forEach(wire => scene.add(wire));

    // Crear partículas de flujo
    const particles = createFlowParticles(scene, circuit.path);

    // Guardar estado
    state.arScene = {
        scene,
        camera,
        renderer,
        components: componentMeshes,
        particles,
        time: 0,
        circuit
    };

    state.animationRunning = true;
    animateAR();

    // Responsive
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ========================================
// CREACIÓN DE COMPONENTES 3D
// ========================================

function createComponent(comp) {
    switch (comp.type) {
        case 'battery':
            return createBattery();
        case 'resistor':
            return createResistor(comp.value);
        case 'led':
            return createLED(comp.color);
        case 'capacitor':
            return createCapacitor();
        default:
            return null;
    }
}

function createBattery() {
    const group = new THREE.Group();

    const bodyGeometry = new THREE.CylinderGeometry(1, 1, 3, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({
        color: 0x00ff88,
        emissive: 0x00ff88,
        emissiveIntensity: 0.3
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);

    const terminalGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 16);
    const terminalMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
    const positiveTerminal = new THREE.Mesh(terminalGeometry, terminalMaterial);
    positiveTerminal.position.y = 1.75;
    group.add(positiveTerminal);

    const glowGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.2
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    group.userData.glow = glow;
    return group;
}

function createResistor(value) {
    const group = new THREE.Group();

    const bodyGeometry = new THREE.CylinderGeometry(0.4, 0.4, 3, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xd4a574 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.z = Math.PI / 2;
    group.add(body);

    // Bandas de color según el valor
    const getBandColors = (val) => {
        if (val === '220Ω') return [0xff0000, 0xff0000, 0x8b4513, 0xffd700];
        if (val === '330Ω') return [0xff8800, 0xff8800, 0x8b4513, 0xffd700];
        if (val === '470Ω') return [0xffff00, 0x9400d3, 0x8b4513, 0xffd700];
        if (val === '1000Ω' || val === '1kΩ') return [0x8b4513, 0x000000, 0xff0000, 0xffd700];
        if (val === '2000Ω' || val === '2kΩ') return [0xff0000, 0x000000, 0xff0000, 0xffd700];
        return [0xff0000, 0xff0000, 0x8b4513, 0xffd700]; // default
    };

    const colors = getBandColors(value);
    colors.forEach((color, i) => {
        const bandGeometry = new THREE.CylinderGeometry(0.41, 0.41, 0.2, 32);
        const bandMaterial = new THREE.MeshPhongMaterial({ color });
        const band = new THREE.Mesh(bandGeometry, bandMaterial);
        band.rotation.z = Math.PI / 2;
        band.position.x = -1 + (i * 0.6);
        group.add(band);
    });

    return group;
}

function createLED(color) {
    const group = new THREE.Group();

    const colorMap = {
        'red': 0xff6b6b,
        'green': 0x6bcf7f,
        'blue': 0x4da6ff,
        'yellow': 0xffd93d
    };

    const ledColor = colorMap[color] || 0xff6b6b;

    const bodyGeometry = new THREE.ConeGeometry(0.8, 2, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({
        color: ledColor,
        transparent: true,
        opacity: 0.8,
        emissive: ledColor,
        emissiveIntensity: 0.5
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);

    const lightGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const lightMaterial = new THREE.MeshBasicMaterial({
        color: ledColor,
        transparent: true,
        opacity: 0.8
    });
    const light = new THREE.Mesh(lightGeometry, lightMaterial);
    light.position.y = 0.5;
    group.add(light);

    const glowGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: ledColor,
        transparent: true,
        opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    group.userData.glow = glow;
    group.userData.light = light;
    group.userData.color = ledColor;

    return group;
}

function createCapacitor() {
    const group = new THREE.Group();

    const plateGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 32);
    const plateMaterial = new THREE.MeshPhongMaterial({ color: 0x4da6ff });

    const plate1 = new THREE.Mesh(plateGeometry, plateMaterial);
    plate1.position.y = 0.3;
    group.add(plate1);

    const plate2 = new THREE.Mesh(plateGeometry, plateMaterial);
    plate2.position.y = -0.3;
    group.add(plate2);

    const glowGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x4da6ff,
        transparent: true,
        opacity: 0.2
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    group.userData.glow = glow;
    return group;
}

function createWires(path) {
    const wires = [];
    const wireMaterial = new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        linewidth: 3
    });

    for (let i = 0; i < path.length - 1; i++) {
        const points = [
            new THREE.Vector3(path[i].x, path[i].y, path[i].z),
            new THREE.Vector3(path[i + 1].x, path[i + 1].y, path[i + 1].z)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const wire = new THREE.Line(geometry, wireMaterial);
        wires.push(wire);
    }

    return wires;
}

function createFlowParticles(scene, path) {
    const particles = [];
    const particleGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.9
    });

    for (let i = 0; i < 30; i++) {
        const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone());
        const progress = i / 30;
        const position = getPositionOnPath(path, progress);
        particle.position.copy(position);
        particle.userData.progress = progress;
        particle.userData.path = path;
        scene.add(particle);
        particles.push(particle);
    }

    return particles;
}

function getPositionOnPath(path, progress) {
    const totalPoints = path.length - 1;
    const scaledProgress = progress * totalPoints;
    const index = Math.floor(scaledProgress);
    const localProgress = scaledProgress - index;

    if (index >= totalPoints) {
        return new THREE.Vector3(path[0].x, path[0].y, path[0].z);
    }

    const start = path[index];
    const end = path[index + 1];

    return new THREE.Vector3(
        start.x + (end.x - start.x) * localProgress,
        start.y + (end.y - start.y) * localProgress,
        start.z + (end.z - start.z) * localProgress
    );
}

// ========================================
// ANIMACIÓN AR
// ========================================

function animateAR() {
    if (!state.animationRunning || !state.arScene) return;

    requestAnimationFrame(animateAR);

    const { scene, camera, renderer, components, particles } = state.arScene;
    state.arScene.time += 0.016;
    const t = state.arScene.time;

    // Animar componentes
    components.forEach(({ mesh, data }) => {
        mesh.rotation.y += 0.005;

        if (data.type === 'led' && mesh.userData.glow) {
            const pulse = Math.sin(t * 3) * 0.5 + 0.5;
            mesh.userData.glow.scale.setScalar(1 + pulse * 0.3);
            mesh.userData.glow.material.opacity = 0.2 + pulse * 0.2;
            mesh.userData.light.material.opacity = 0.6 + pulse * 0.4;
        }

        if (mesh.userData.glow) {
            const pulse = Math.sin(t * 2) * 0.5 + 0.5;
            mesh.userData.glow.material.opacity = 0.1 + pulse * 0.1;
        }
    });

    // Animar partículas
    particles.forEach(particle => {
        particle.userData.progress += 0.002;
        if (particle.userData.progress > 1) {
            particle.userData.progress = 0;
        }

        const newPosition = getPositionOnPath(particle.userData.path, particle.userData.progress);
        particle.position.copy(newPosition);

        const pulse = Math.sin(t * 4 + particle.userData.progress * Math.PI * 2) * 0.5 + 0.5;
        particle.scale.setScalar(1 + pulse * 0.5);
        particle.material.opacity = 0.6 + pulse * 0.4;
    });

    // Rotación suave de cámara
    camera.position.x = Math.sin(t * 0.15) * 3;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
}

// ========================================
// CONTROLES AR
// ========================================

function toggleAnimation() {
    state.animationRunning = !state.animationRunning;

    const btn = document.getElementById('toggle-animation');
    if (state.animationRunning) {
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
        animateAR();
        showNotification('Animación reanudada', 'success');
    } else {
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        showNotification('Animación pausada', 'success');
    }
}

function toggleLabels() {
    state.showLabels = !state.showLabels;
    showNotification(state.showLabels ? 'Etiquetas activadas' : 'Etiquetas desactivadas', 'success');
}

function resetARView() {
    if (state.arScene) {
        state.arScene.camera.position.set(0, 8, 20);
        state.arScene.camera.lookAt(0, 0, 0);
        state.arScene.time = 0;
        showNotification('Vista reiniciada', 'success');
    }
}

function closeAR() {
    state.animationRunning = false;

    if (state.arScene) {
        state.arScene.renderer.dispose();
        state.arScene = null;
    }

    showScreen('examples');
}

// ========================================
// UTILIDADES
// ========================================

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

console.log('✅ Circuito AR inicializado');
