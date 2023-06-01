import * as THREE from "three";
import Player from "./Player";
import Cursor from "./Cursor";
import World from "./World";
import IsoCamera from "./IsoCamera";
import { enumMode } from "../types/enums";

export default class MainScene extends THREE.Scene {
  camera: any;
  tileContainer: any;
  currentTileIndex: number;
  constructor() {
    super();

    /* Init Vars */
    this.currentTileIndex = -1;  

    manager.world = new World(this, {
      showBoundary: app.mode === enumMode.editor,
    });
    manager.camera = new IsoCamera(this);
    if (app.mode === enumMode.editor) {
      manager.cursor = new Cursor(this);
    }
    manager.player = new Player(
      this,
      manager.map.player.start.x,
      manager.map.player.start.y,
      manager.map.player.start.z
    );
  }

  update() {
    app.mode === enumMode.editor && manager.cursor.update();
    manager.player.update();
  }
}
