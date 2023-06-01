import { tileList } from "../data/tileList";
import {
  deg2Rad,
  getMatByName,
  getMdlByName,
} from "../functions/objectFunctions";

export default class TileSelector {
  container: any;
  obj: any;
  selectedTileIndex: number;
  constructor(container: any) {
    /* Init Vars */
    this.container = container;
    this.obj = null;
    this.selectedTileIndex = 0;
    this.selectTile();
  }

  selectTile() {
    if (this.container.children.length > 0) {
      this.container.remove(this.container.children[0]);
    }
    if (this.selectedTileIndex > -1) {
      const tile = tileList[this.selectedTileIndex];
      const obj = getMdlByName(assets.tiles.data, tile.mdl);
      obj.material = getMatByName(tile.mat);
      this.obj = obj.clone();
      this.obj.rotation.set(
        deg2Rad(tile.rx),
        deg2Rad(tile.ry),
        deg2Rad(tile.rz)
      );
      this.container.add(this.obj);
      console.log(tile.name);
    } else {
      console.log("No Tile Selected");
    }
  }

  next() {
    if (this.selectedTileIndex < tileList.length - 1) {
      this.selectedTileIndex++;
      this.selectTile();
    }
  }

  prev() {
    if (this.selectedTileIndex > -1) {
      this.selectedTileIndex--;
      this.selectTile();
    }
  }
}
