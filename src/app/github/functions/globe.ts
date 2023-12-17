import ThreeGlobe from "three-globe";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import globeTexture from '../constants/custom.geo.json';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass';

type CanvasDimensions = {
    width: number,
    height: number
}

let globe: ThreeGlobe;
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let control: OrbitControls;
let composer: EffectComposer;

const initScene: (canvasDim: CanvasDimensions) => HTMLCanvasElement = (canvasDim) => {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance", stencil: false, depth: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasDim.width, canvasDim.height, true);
    renderer.toneMapping = THREE.ReinhardToneMapping;

    scene = new THREE.Scene();
    
    
    let ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);
    scene.background = new THREE.Color("#0c1019");
    scene.fog = new THREE.Fog(0xffffff, 355, 450)
    

    camera = new THREE.PerspectiveCamera();
    camera.updateProjectionMatrix();

    initGlobe();
    
    let light1 = new THREE.SpotLight(0xffffff, 3, 0, Math.PI/6, 0.2, 0);
    light1.position.set(-100, 100, -230);

    let light2 = new THREE.SpotLight(0xff21a9, 1, 0, Math.PI/10, 0.7, 0);
    light2.position.set(100, 300, -200);

    let light3 = new THREE.SpotLight(0xffffff, 0.5, 0, Math.PI/10, 0.5, 0);
    light3.position.set(-30, -40, -110);

    camera.add(light1, light2, light3)

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 400;

    scene.add(camera);

    control = new OrbitControls(camera, renderer.domElement);
    control.enableDamping = true;
    control.enablePan = false;
    control.enableZoom = false;
    control.rotateSpeed = 0.55;
    control.autoRotateSpeed = 0.25;
    control.autoRotate = true;
    control.minPolarAngle = Math.PI / 5;
    control.maxPolarAngle = Math.PI - Math.PI / 3;

    (function animate() {
        control.update();
        // renderer.render(scene, camera);
        composer.render();
        requestAnimationFrame(animate);
    })();

    return renderer.domElement;
}

const initGlobe = () => {

    const N = 300;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      height: 3,
    }));

    globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
    })
    .hexPolygonsData(globeTexture.features)
    .hexPolygonDotResolution(12)
    .hexPolygonMargin(0.7)
    .hexPolygonColor(() => "#ecdfff")
    .hexPolygonAltitude(0.001)
    .hexPolygonUseDots(true)
    .showAtmosphere(false)
    .pointRadius(0.2)
    .pointResolution(3)
    .pointColor(() => "#5279ff")
    
    setTimeout(() => {
        globe.pointsData(gData);
    }, 2000);

    const globeMaterial = globe.globeMaterial() as THREE.MeshPhongMaterial;
    globeMaterial.color = new THREE.Color(0x4d3edf);
    globeMaterial.shininess = 0.7;
    globeMaterial.fog = true;

    const archShape = new THREE.Shape();
    archShape.moveTo(53, 77.8);
    archShape.bezierCurveTo(31, 101, -39, 108, -76, 60);
    archShape.bezierCurveTo(-108, 20, -100.5, -38, -64.5, -70);
    archShape.moveTo(-64, -70);
    archShape.bezierCurveTo(-100.5, -38, -107, 20, -74.3, 60);
    archShape.bezierCurveTo(-39, 106, 31, 101.8, 53, 77 );
    const archGeometry = new THREE.ShapeGeometry(archShape, 30)
    const archMaterial = new THREE.MeshLambertMaterial({ color: new THREE.Color(0xbfddff), fog: false });
    const arch = new THREE.Mesh(archGeometry, archMaterial);
    arch.position.set(0, 0, -370);
    camera.add(arch);

    const outlinePass = new OutlinePass(new THREE.Vector2(900, 900), scene, camera);
    const outputPass = new OutputPass();

    outlinePass.edgeThickness = 0.5;
    outlinePass.edgeStrength = 0.8;
    outlinePass.edgeGlow = 10;
    outlinePass.visibleEdgeColor = new THREE.Color(0x3b71ff);
    outlinePass.hiddenEdgeColor = new THREE.Color(0x000000);
    outlinePass.selectedObjects = [arch];

    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(outlinePass);
    composer.addPass(outputPass);

    scene.add(globe)
}

export default initScene