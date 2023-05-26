import { tileList } from "../data/tileList";
import {
  deg2Rad,
  getMatByName,
  getMdlByName,
} from "../functions/objectFunctions";

export default class Map {
  width: number;
  length: number;
  height: number;
  tiles: any;
  player: {
    current: { x: number; y: number; z: number };
    start: { x: number; y: number; z: number };
    lives: number;
  };
  constructor() {
    this.width = 10;
    this.length = 10;
    this.height = 4;
    this.tiles = [];
    this.player = {
      current: { x: 0, y: 0, z: 0 },
      start: { x: 0, y: 0, z: 0 },
      lives: 3,
    };
  }

  init() {
    /* Create array */
    for (let z = 0; z < this.height; z++) {
      const grid = new Array();
      for (let y = 0; y < this.length; y++) {
        const line = new Array();
        for (let x = 0; x < this.width; x++) {
          const tile = new Array(null, null);
          line.push(tile);
        }
        grid.push(line);
      }
      this.tiles.push(grid);
    }

    /* Create default floor */
    for (let y = 0; y < this.length; y++) {
      for (let x = 0; x < this.width; x++) {
        this.tiles[0][y][x][0] = 0;
      }
    }
  }

  async load(name: string) {
    const response = await fetch(`http://localhost:5101/loadMap?name=${name}`);
    const json = await response.json();
    const { tiles, playerStart } = JSON.parse(json.data);
    console.log(playerStart);
    this.tiles = tiles;
    this.player.start = playerStart;    
  }

  async save(name: string) {
    const saveData = { tiles: this.tiles, playerStart: this.player.start };
    console.log(saveData)
    const response = await fetch(`http://localhost:5101/saveMap?name=${name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveData),
    });
    const json = await response.json();
    console.log(json);
  }

  build() {
    let obj: any;
    let tileIndex: any;
    let tile: any;
    for (let z = 0; z < map.height; z++) {
      for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map.width; x++) {
          for (let l = 0; l < 2; l++) {
            tileIndex = map.tiles[z][y][x][l];
            if (tileIndex !== null) {
              tile = tileList[tileIndex];
              obj = getMdlByName(tiles.data, tile.mdl);
              if (obj) {
                const instance = obj.clone();
                instance.material = getMatByName(tile.mat);
                instance.position.set(4.5 - x, z - 1.5, 4.5 - y);
                instance.rotation.set(
                  deg2Rad(tile.rx),
                  deg2Rad(tile.ry),
                  deg2Rad(tile.rz)
                );
                manager.tileContainer.add(instance);
              }
            }
          }
        }
      }
    }
  }

  clear() {
    for (let n = manager.tileContainer.children.length; n >= 0; n--) {
      manager.tileContainer.remove(manager.tileContainer.children[n]);
    }
  }
}
