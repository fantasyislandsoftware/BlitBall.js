declare global {
  var app: any;
  var renderer: any;
  var materials: any;
  var tiles: any;
  var mainScene: any;
  var map: any;
  var currentMap: string | undefined;
  //var cursor: any;
  var player: any;
  var tileSelector: any;
  var manager: { world: any; camera: any; cursor: any; tileContainer : any };
}
globalThis.app = undefined;
globalThis.renderer = undefined;
globalThis.materials = undefined;
globalThis.tiles = undefined;
globalThis.mainScene = undefined;
globalThis.map = undefined;
globalThis.currentMap = undefined;
globalThis.player = undefined;
//globalThis.cursor = undefined;
globalThis.tileSelector = undefined;
globalThis.manager = {
  world: undefined,
  camera: undefined,
  cursor: undefined,
  tileContainer: undefined,
};
export {};
