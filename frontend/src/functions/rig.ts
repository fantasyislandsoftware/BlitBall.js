import * as THREE from "three";
import Materials from "../classes/Materials";
import Tiles from "../classes/Tiles";
import { getAmbientLight, getIsoCam } from "./presets";

export const initGenericScene = (scene: any) => {
  /* Camera */
  scene.camera = getIsoCam(scene);
  scene.add(scene.camera);

  /* Lights */
  const defaultLight = getAmbientLight();
  scene.add(defaultLight);

/* World container */
scene.worldContainer = new THREE.Group();
scene.add(scene.worldContainer);

/* Tile Container */
scene.tileContainer = new THREE.Group();
scene.worldContainer.add(scene.tileContainer);

};

export const loadAssets = async () => {
  /* Materials */
  materials = new Materials();
  const loadMaterials = materials.load();

  /* Tiles */
  tiles = new Tiles();
  const loadTiles = tiles.load("/assets/mdl/tiles.obj");

  return Promise.all([loadMaterials, loadTiles]);
};
