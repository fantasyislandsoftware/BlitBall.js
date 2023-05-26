import * as THREE from "three";
import { initEditorControls } from "../input";
import { OrbitControls } from "three-orbitcontrols-ts";
import Player from "./Player";
import Cursor from "./Cursor";
import World from "./World";
import IsoCamera from "./IsoCamera";
import TileContainer from "./TileContainer";

export default class EditorScene extends THREE.Scene {
  camera: any;
  tileContainer: any;
  currentTileIndex: number;
  constructor() {
    super();

    /* Init Vars */
    this.currentTileIndex = -1;

    manager.world = new World(this, { showBoundary: true });
    manager.camera = new IsoCamera(this);
    manager.cursor = new Cursor(this);
    player = new Player(
      this,
      map.player.start.x,
      map.player.start.y,
      map.player.start.z
    );

    /* Editor Controls */
    initEditorControls();
  }

  update() {
    manager.cursor.update();
    player && player.update();
  }
}
