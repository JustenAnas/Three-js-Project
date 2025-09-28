import "./style.css";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import gsap from "gsap";
import 'ldrs/ring'
// Get the canvas element
const canvas = document.getElementById("canvas");

// Create the renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

// Create the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  100 
);
camera.position.z = 9;

//throttle wheel 
let lastWheelTime = 0;
let scrollCount = 0;
function throttledWheelHandler(event) {
  const now = Date.now();
  if (now - lastWheelTime > 2000) {
    lastWheelTime = now;
    const direction = event.deltaY > 0 ? "Down" : "Up"

    scrollCount = (scrollCount+1) % 4

    const headings = document.querySelectorAll('.heading')
    gsap.to(headings,{
      duration : 1,
      y : `-=${100}%`,
      ease: "power2.inOut"
    });

    gsap.to(spheres.rotation,{
      duration : 1,
      y : `-=${Math.PI/2}%`,
      ease: "power2.inOut"
    });

    if(scrollCount===0){
      gsap.to(headings,{
        duration : 1,
        y : `0`,
        ease: "power2.inOut"
      });
    }
  }
}
window.addEventListener("wheel", throttledWheelHandler);

// Create a simple gradient background instead of HDRI
const loader = new RGBELoader();
loader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/docklands_01_1k.hdr', function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  // scene.background = texture;
  scene.environment = texture;
});

const radius = 1.3;
const segments = 64;
const orbitRadius = 4.5;
const textures = ['./csilla/color.png', './earth/map.jpg', './venus/map.jpg', './volcanic/color.png'];
const spheres = new THREE.Group();

// Create a big sphere with a star texture as the background
const starTexture = new THREE.TextureLoader().load('./stars.jpg'); 
const bigSphereGeometry = new THREE.SphereGeometry(50, 64, 64);
const bigSphereMaterial = new THREE.MeshPhysicalMaterial({
  map: starTexture,
  side: THREE.BackSide // Render inside of sphere
});
starTexture.colorSpace = THREE.SRGBColorSpace;
const bigSphere = new THREE.Mesh(bigSphereGeometry, bigSphereMaterial);
scene.add(bigSphere);

const sphereAnimation = [];

for (let i = 0; i < 4; i++) {

  // Load a texture and apply it to the sphere's material
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textures[i]);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Add a basic mesh (sphere)
  const geometry = new THREE.SphereGeometry(radius, segments, segments);
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, material);
 
  spheres.add(sphere);
 
  sphereAnimation.push(sphere);

  spheres.rotation.x = .1;
  spheres.position.y = -.8;

  const angle = (i / 4) * Math.PI * 2;
  sphere.position.x = Math.cos(angle) * orbitRadius;
  sphere.position.z = Math.sin(angle) * orbitRadius;
}

scene.add(spheres);

const clock = new THREE.Clock();
// Animation loop
function animate() {
  requestAnimationFrame(animate);
  for (let i = 0; i < sphereAnimation.length; i++) {
    const sphere = sphereAnimation[i];
    sphere.rotation.y = clock.getElapsedTime() * 0.02;
  }
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
