import * as THREE from "three";

export default class TileContainer extends THREE.Group {
  constructor(scene: any) {
    super();
    scene.add(this);
  }
}
