import * as THREE from 'three';
import vertexShader from './shaders/vertexShaders.glsl';
import fragmentShader from './shaders/fragmentShaders.glsl';
import gsap from 'gsap';

// Detect desktop vs mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isDesktop = window.innerWidth >= 1024;

if (!isMobile && isDesktop) {
    const scene = new THREE.Scene();
    const distance = 20;
    const fov = 2 * Math.atan((window.innerHeight / 2) / distance) * (180 / Math.PI);
    const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = distance;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('canvas'),
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const images = document.querySelectorAll('img');
    const planes = [];

    images.forEach((image, index) => {
      const rect = image.getBoundingClientRect();
      const texture = new THREE.TextureLoader().load(image.src);
      const material = new THREE.ShaderMaterial({
          uniforms: {
              uTexture: { value: texture },
              uMouse: { value: new THREE.Vector2(0.5, 0.5) },
              uHover: { value: 0 },
              uIsColored: { value: index === 0 ? 1.0 : 0.0 } // first plane colored
          },
          vertexShader,
          fragmentShader,
          transparent: true
      });
      const geometry = new THREE.PlaneGeometry(rect.width, rect.height);
      const plane = new THREE.Mesh(geometry, material);
  
      plane.position.set(
          rect.left - window.innerWidth / 2 + rect.width / 2,
          -rect.top + window.innerHeight / 2 - rect.height / 2,
          0
      );
      planes.push(plane);
      scene.add(plane);
  });

    function updatePlanesPosition() {
        planes.forEach((plane, i) => {
            const rect = images[i].getBoundingClientRect();
            plane.geometry.dispose();
            plane.geometry = new THREE.PlaneGeometry(rect.width, rect.height);
            plane.position.set(
                rect.left - window.innerWidth / 2 + rect.width / 2,
                -rect.top + window.innerHeight / 2 - rect.height / 2,
                0
            );
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        updatePlanesPosition();
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
            scene.clear();
            renderer.dispose();
            images.forEach(img => (img.style.opacity = '1'));
            return;
        }

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.fov = 2 * Math.atan((window.innerHeight / 2) / distance) * (180 / Math.PI);
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        updatePlanesPosition();
    });

    window.addEventListener('mousemove', e => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(planes);

        planes.forEach(plane => {
            gsap.to(plane.material.uniforms.uHover, {
                value: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        if (intersects.length > 0) {
            const intersect = intersects[0];
            const uv = intersect.uv;
            gsap.to(intersect.object.material.uniforms.uMouse.value, {
                x: uv.x,
                y: uv.y,
                duration: 0.2,
                ease: 'power2.out'
            });
            gsap.to(intersect.object.material.uniforms.uHover, {
                value: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        }
    });
} else {
    // Mobile fallback: show images normally
    document.querySelectorAll('img').forEach(img => (img.style.opacity = '1'));
}
