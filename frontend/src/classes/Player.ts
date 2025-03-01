import * as THREE from "three";
import { tileList } from "../data/tileList";
import { enumMode, enumTileAttribute } from "../types/enums";

export default class Player {
  start: { x: number; y: number; z: number; obj: any };
  end: { x: number; y: number; z: number; obj: any };
  lives: number;
  constructor(scene: any, x: number, y: number, z: number) {
    /* Init Vars */
    this.start = { x: x, y: y, z: z, obj: null };
    this.end = { x: x, y: y, z: z, obj: null };
    this.lives = 3;

    /* Add player to Scene */
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.start.obj = new THREE.Mesh(geometry, material);
    this.start.obj.scale.set(0.03, 0.03, 0.03);
    scene.add(this.start.obj);

    this.end.obj = new THREE.Mesh(geometry, material);
    this.end.obj.scale.set(0.01, 0.01, 0.01);
    scene.add(this.end.obj);
  }

  setStartPosition(x: number, y: number, z: number) {
    this.start.x = x;
    this.start.y = y;
    this.start.z = z;
  }

  setEndPosition(x: number, y: number, z: number) {
    this.end.x = x;
    this.end.y = y;
    this.end.z = z;
  }

  moveNorth() {
    const tiles = manager.map.tiles;
    console.log(this.start.z);
    const start_z = Math.floor(this.start.z);
    for (let z = start_z; z <= 10; z++) {
      //console.log(z);
      let att = null;
      try {
        const tile =
          tiles[Math.floor(this.start.y)][Math.floor(z)][
            Math.floor(this.start.x)
          ][0];
        att = tileList[tile].att;
      } catch (error) {}

      if (att === null) {
        att = enumTileAttribute.obstacle;
      }
      if (att === enumTileAttribute.obstacle) {
        this.end.z = z - 1;
        break;
      }
    }
  }

  moveSouth() {
    const tiles = manager.map.tiles;
    const start_z = Math.floor(this.start.z);
    for (let z = start_z; z >= -1; z--) {
      let att = null;
      try {
        const tile =
          tiles[Math.floor(this.start.y)][Math.floor(z)][
            Math.floor(this.start.x)
          ][0];
        att = tileList[tile].att;
      } catch (error) {}

      if (att === null) {
        att = enumTileAttribute.obstacle;
      }
      if (att === enumTileAttribute.obstacle) {
        this.end.z = z + 1;
        break;
      }
    }
  }

  stop() {
    if (this.end.z > this.start.z) {
      this.end.z = Math.floor(this.start.z + 1);
    } else {
      this.end.z = Math.floor(this.start.z);
    }
  }

  update() {
    if (app.mode === enumMode.game) {
      /* Boundary */
      if (this.end.z > 9) {
        this.end.z = 9;
      }
      if (this.end.z < 0) {
        this.end.z = 0;
      }
      /* Move */
      if (this.start.z < this.end.z) {
        this.start.z += 2 * app.deltaTime;
      }
      if (this.start.z > this.end.z) {
        this.start.z -= 2 * app.deltaTime;
      }
    }
    /* Update Position */
    this.start.obj.position.set(
      -(this.start.x - 4.5),
      this.start.y - 1.5,
      -(this.start.z - 4.5)
    );
    this.end.obj.position.set(
      -(this.end.x - 4.5),
      this.end.y - 1.5,
      -(this.end.z - 4.5)
    );
  }
}
