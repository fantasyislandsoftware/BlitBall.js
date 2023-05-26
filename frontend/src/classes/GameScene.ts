import * as THREE from "three";
import { initGenericScene } from "../functions/rig";

export default class GameScene extends THREE.Scene {
  camera: any;
  worldContainer: any;
  tileContainer: any;
  constructor() {
    super();

    /* Generic Scene Objects */
    initGenericScene(this);    
  }

  update() {}
}
