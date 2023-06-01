//@ts-ignore
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { materialList } from "../data/materialList";
import * as THREE from "three";

export default class Materials {
  data: any;
  constructor() {
    this.data = [];
  }

  async load() {
    materialList.map((material: any) => {
      const texture = new THREE.TextureLoader().load(
        `/assets/textures/${material.texture}`
      );
      const mat = new THREE.MeshBasicMaterial({
        name: material.name,
        color: material.color,
        map: texture,
      });
      this.data.push(mat);
    });
    return true;
  }
}
