//@ts-ignore
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default class Tiles {
  public data: any = null;
  constructor() {}
  async load(path: string) {
    const objLoader = new OBJLoader();
    this.data = await objLoader.loadAsync(path);
    return this.data;
  }
}
