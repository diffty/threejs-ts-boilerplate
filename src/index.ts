import * as THREE from "three";

let then = 0;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer();

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);

camera.translateZ(2);

scene.add(camera);
scene.add(box);

renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


function animate(now: number) {
    now *= 0.001;

    const deltaTime = now - then;
    then = now;

    box.rotateX(deltaTime)
    box.rotateY(deltaTime*0.5)
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

renderer.setAnimationLoop(animate)
