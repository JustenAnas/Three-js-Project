const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let geometry = new THREE.BoxGeometry(1, 1, 1, 6, 6, 6); ;
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }); ;
const cube = new THREE.Mesh(geometry, material) ;
scene.add(cube);

camera.position.z = 5;

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({canvas : canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
 

function animate() {
  cube.rotation.x += 0.04;
  cube.rotation.y += 0.04;
  cube.rotation.z += 0.04;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
