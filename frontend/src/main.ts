import * as THREE from "three";
import "./global.js";
import { loadAssets } from "./functions/rig.js";
import MainScene from "./classes/MainScene.js";
import Map from "./classes/Map.js";
import { enumMode } from "./types/enums.js";
import { initEditorControls, initGameControls } from "./input.js";
import WaveSurfer from "wavesurfer.js";

const wavesurfer = WaveSurfer.create({
  container: document.getElementById("test"),
  //backend: "WebAudio",
  backend: 'MediaElement',
  fillParent: true,
  //height: 49,
  normalize: true,
  waveColor: "#4787b8",
  progressColor: "#333",
  url: "/test.mp3",
});

wavesurfer.on('interaction', () => {
  //wavesurfer.play()
})

setInterval(() => {
  console.log('play');
  wavesurfer.play();
}, 1000);

app = {
  width: window.innerWidth,
  height: window.innerHeight,
  renderer: new THREE.WebGL1Renderer({
    canvas: document.getElementById("app") as HTMLCanvasElement,
  }),
  deltaTime: 0,
  mode: enumMode.game,
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

var clock = new THREE.Clock();

const tick = () => {
  app.deltaTime = clock.getDelta();
  manager.mainScene.update();
  app.renderer.render(manager.mainScene, manager.camera);
  requestAnimationFrame(tick);
};

tick();
