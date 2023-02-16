import * as THREE from "three";
import { App } from "./app"


export class BoxSample extends App {
    box: THREE.Mesh;
    light: THREE.DirectionalLight;
    
    init() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

        this.light = new THREE.DirectionalLight(0xFFFFFF, 1);
        this.light.translateZ(2)

        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const boxMaterial = new THREE.MeshLambertMaterial({ color: 0x2E8FD8 });

        this.box = new THREE.Mesh(boxGeometry, boxMaterial);
        
        this.scene.add(this.camera);
        this.scene.add(this.light);
        this.scene.add(this.box);

        this.camera.translateZ(2);
    }

    update(deltaTime: number) {
        this.box.rotateX(deltaTime);
        this.box.rotateY(deltaTime * 0.5);
    }
}
