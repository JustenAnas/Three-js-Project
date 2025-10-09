 import './style.css'
import * as THREE from 'three';
import vertexShader from '../shaders/vertexShader.glsl';
import fragmentShader from '../shaders/fragmentShader.glsl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

// Create renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'),
  antialias: true, 
  alpha: true });
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 1;


// Shader material
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms:{
    uTime:{
      value: 0,
    },
    uColorChange:{
      value: 0,
    },
  },
});

// Icosahedron geometry
const geometry = new THREE.IcosahedronGeometry(1, 20, 20);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.y = -1.34;

//gsap

var tl = gsap.timeline({
  scrollTrigger:{
    trigger : ".landing",
    start : "top top",
    end : "bottom center",
    scrub:  2,
    // markers:  true
  }
})
tl.to(mesh.position,{
  y: 0,
  z: -1,
  ease: "power2.inOut"
},"a").to(material.uniforms.uColorChange,{
  value: 1,
  ease: "power2.inOut"
}, "a").to(".landing h1",{
  opacity : 0,
},"a").to(".landing p",{
  opacity : 1,
})

// Handle resizing
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

const clock = new THREE.Clock();
// Animation loop
function animate() {
  requestAnimationFrame(animate);  
  material.uniforms.uTime.value = clock.getElapsedTime();
  renderer.render(scene, camera);
}
animate();