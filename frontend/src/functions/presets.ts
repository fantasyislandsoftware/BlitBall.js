import * as THREE from "three";

export const getIsoCam = (scene: any) => {
  const aspect = window.innerWidth / window.innerHeight;
  const d = 6;
  const camera = new THREE.OrthographicCamera(
    -d * aspect,
    d * aspect,
    d,
    -d,
    1,
    1000
  );
  camera.position.set(20, 10, 20);
  camera.lookAt(scene.position);
  return camera;
};

export const getDefaultLight = () => {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(4, 4, 4);
  return light;
};

export const getAmbientLight = () => {
  const light = new THREE.AmbientLight( 0x404040 );
  return light;
}

export const getLineCube = (
  width: number,
  length: number,
  height: number,
  color: string | number
) => {
  const geometry = new THREE.BoxGeometry(width, length, height);
  const edges = new THREE.EdgesGeometry(geometry);
  const cube = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: color })
  );
  return cube;
};
