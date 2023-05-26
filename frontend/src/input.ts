import { OrbitControls } from "three-orbitcontrols-ts";
import { tileList } from "./data/tileList";

export const initEditorControls = () => {
  document.onkeydown = function (e) {
    let x = manager.cursor.x;
    let y = manager.cursor.y;
    let z = manager.cursor.z;
    switch (e.key.toLowerCase()) {
      case "a":
        x = x + 1;
        if (x > 9) x = 9;
        break;
      case "d":
        x = x - 1;
        if (x < 0) x = 0;
        break;
      case "w":
        z = z + 1;
        if (z > 9) z = 9;
        break;
      case "x":
        z = z - 1;
        if (z < 0) z = 0;
        break;
      case "e":
        y = y + 1;
        if (y > 3) y = 3;
        break;
      case "q":
        y = y - 1;
        if (y < 0) y = 0;
        break;
      case "[":
        tileSelector.prev();
        break;
      case "]":
        tileSelector.next();
        break;
      case "s":
        let index =
          tileSelector.selectedTileIndex === -1
            ? null
            : tileSelector.selectedTileIndex;
        map.tiles[y][z][x][0] = index;
        map.save(currentMap);
        map.clear();
        map.build();
        break;
      case "p":
        player.setPosition(x, y, z);
        map.player.start.x = x;
        map.player.start.y = y;
        map.player.start.z = z;
        map.save(currentMap);
        break;
      default:
    }
    manager.cursor.x = x;
    manager.cursor.y = y;
    manager.cursor.z = z;
  };

  const controls = new OrbitControls(manager.camera, renderer);
  controls.target.set(0, 0, 0);
};
