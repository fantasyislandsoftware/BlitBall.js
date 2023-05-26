import * as THREE from "three";
import "./global.js";
import { loadAssets } from "./functions/rig.js";
import GameScene from "./classes/GameScene";
import { enumMode } from "./types/enums.js";
import EditorScene from "./classes/EditorScene.js";
import GameMap from "./classes/Map.js";

const mode: number = enumMode.editor;

app = { width: window.innerWidth, height: window.innerHeight };

const renderer = new THREE.WebGL1Renderer({
  canvas: document.getElementById("app") as HTMLCanvasElement,
});
renderer.setSize(app.width, app.height);

await loadAssets();

currentMap = "001";

map = new GameMap();
await map.load(currentMap);
//map.init();
//map.save(currentMap);

mode === enumMode.game
  ? (mainScene = new GameScene())
  : (mainScene = new EditorScene());

map.build();

const tick = () => {
  mainScene.update();
  renderer.render(mainScene, manager.camera);
  requestAnimationFrame(tick);
};

tick();
