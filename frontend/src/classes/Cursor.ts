import { getLineCube } from "../functions/presets";
import TileSelector from "./TileSelector";

export default class Cursor {
  obj: any;
  x: number;
  y: number;
  z: number;
  constructor(scene: any) {
    /* Init Vars */
    this.obj = null;
    this.x = 0;
    this.y = 0;
    this.z = 0;

    /* Add object to Scene */
    this.obj = getLineCube(1, 1, 1, "blue");
    scene.add(this.obj);

    /* Add Tile Selector */
    tileSelector = new TileSelector(this.obj);
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
