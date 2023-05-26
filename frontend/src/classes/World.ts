import * as THREE from "three";
import { getLineCube } from "../functions/presets";
import TileContainer from "./TileContainer";

export default class World extends THREE.Group {
  constructor(scene: any, settings: any = { showBoundary: false }) {
    super();
    /* Editor Boundary */
    settings.showBoundary && this.add(getLineCube(10, 4, 10, "blue"));

    /* Tile Container */
    manager.tileContainer = new TileContainer(this);
    this.add(manager.tileContainer);

    /* Add World to Scene */
    scene.add(this);
  }
}
