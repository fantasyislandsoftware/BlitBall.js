import * as THREE from "three";

export default class IsoCamera extends THREE.OrthographicCamera {
  constructor(scene: any) {
    super();
    const aspect = window.innerWidth / window.innerHeight;
    const d = 6;    
    this.left = -d * aspect;
    this.right = d * aspect;
    this.top = d;
    this.bottom = -d;
    this.near = 1;
    this.far = 1000;
    this.position.set(20, 10, 20);
    this.lookAt(scene.position);
    this.updateProjectionMatrix()
    scene.add(this);
  }
}
