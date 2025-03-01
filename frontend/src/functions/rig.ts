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
  assets.materials = new Materials();
  const loadMaterials = assets.materials.load();

  /* Tiles */
  assets.tiles = new Tiles();
  const loadTiles = assets.tiles.load("/assets/mdl/tiles.obj");
  

  const result = await Promise.all([loadMaterials, loadTiles]);
  result.map((item) => {
    if (!item) {
      throw new Error("Error loading assets");    
    }
  });
};
