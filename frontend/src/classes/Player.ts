import * as THREE from "three";

export default class Player {
  obj: any;
  x: number;
  y: number;
  z: number;
  d: number;
  lives: number;
  constructor(scene: any, x: number, y: number, z: number) {
    /* Init Vars */
    this.obj = null;
    this.x = x;
    this.y = y;
    this.z = z;
    this.d = 0;
    this.lives = 3;

    /* Add player to Scene */
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.obj = new THREE.Mesh(geometry, material);
    this.obj.scale.set(0.03, 0.03, 0.03);
    scene.add(this.obj);
  }

  setPosition(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  update() {
    this.obj.position.set(-(this.x - 4.5), this.y - 1.5, -(this.z - 4.5));
  }
}
