import * as THREE from "three";
import { App } from "./app"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export class GLTFSample extends App {
    dirLight: THREE.DirectionalLight;
    ambLight: THREE.AmbientLight;
    obj: THREE.Group;

    init() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        
        this.dirLight = new THREE.DirectionalLight(0xFFFFFF, 2);
        this.ambLight = new THREE.AmbientLight(0xFFFFFF, 0.8);

        this.dirLight.translateZ(3)

        this.scene.add(this.camera);
        this.scene.add(this.dirLight);
        this.scene.add(this.ambLight);

        const gltfLoader = new GLTFLoader();

        gltfLoader.load(
            "./test.gltf",
            (gltf) => { this.scene.add(gltf.scene); this.obj = gltf.scene; },
        )

        this.camera.translateZ(3);
    }

    update(deltaTime: number) {
        if (this.obj) {
            this.obj.rotateY(deltaTime * 2.5);
        }
    }
}
