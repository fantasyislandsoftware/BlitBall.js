import { enumMode } from "./types/enums";
import { tjsObject } from "./types/threejs";

/* Delcare global variables */
declare global {
  var app: {
    renderer: any;
    deltaTime : number;
    width: number | undefined;
    height: number | undefined;
    mode: enumMode | undefined;
    currentMap: string | undefined;
  };
  var manager: {
    mainScene: any;
    world: tjsObject;
    camera: any;
    cursor: tjsObject;
    tileSelector: any;
    tileContainer: any;
    map: any;
    player: any;
  };
  var assets: {
    materials: any;
    tiles: any;
  };
}
/* Assign global variables */
globalThis.app = {
  renderer: undefined,
  deltaTime: 0,
  width: window.innerWidth,
  height: window.innerHeight,
  mode: enumMode.game,
  currentMap: undefined,
};
globalThis.manager = {
  mainScene: undefined,
  world: undefined,
  camera: undefined,
  cursor: undefined,
  tileSelector: undefined,
  tileContainer: undefined,
  map: undefined,
  player: undefined,
};
globalThis.assets = {
  materials: undefined,
  tiles: undefined,
};

export {};
