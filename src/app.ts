import * as THREE from "three";


export class App {
    then: number;

    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;

    constructor() {
        this.then = 0.;

        this.renderer = new THREE.WebGLRenderer();
        
        this.scene = new THREE.Scene();

        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.init()

        this.renderer.setAnimationLoop((now: number) => { this.appUpdate(now) })
    }

    appUpdate(now: number) {
        now *= 0.001;

        const deltaTime = now - this.then;
        this.then = now;

        this.update(deltaTime);

        if (this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    init() {
        // Override this method in order to init stuff 
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        this.scene.add(this.camera);
    }

    update(deltaTime: number) {
        // Override this method in order to put the things to update at each frame 
    }
}
