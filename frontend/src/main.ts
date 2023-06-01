import * as THREE from "three";
import "./global.js";
import { loadAssets } from "./functions/rig.js";
import MainScene from "./classes/MainScene.js";
import Map from "./classes/Map.js";
import { enumMode } from "./types/enums.js";
import { initEditorControls, initGameControls } from "./input.js";

app = {
  width: window.innerWidth,
  height: window.innerHeight,
  renderer: new THREE.WebGL1Renderer({
    canvas: document.getElementById("app") as HTMLCanvasElement,
  }),
  mode: enumMode.editor,
  currentMap: "001",
};
app.renderer.setSize(app.width, app.height);

await loadAssets();

manager.map = new Map();
await manager.map.load();
//map.init();
//map.save(currentMap);

manager.mainScene = new MainScene();

manager.map.build();

/* Controls */
if (app.mode === enumMode.editor) {
  initEditorControls();
} else {
  initGameControls();
}

const tick = () => {
  manager.mainScene.update();
  app.renderer.render(manager.mainScene, manager.camera);
  requestAnimationFrame(tick);
};

tick();
