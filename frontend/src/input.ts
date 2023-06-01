import { OrbitControls } from "three-orbitcontrols-ts";

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
        manager.tileSelector.prev();
        break;
      case "]":
        manager.tileSelector.next();
        break;
      case "s":
        let index =
          manager.tileSelector.selectedTileIndex === -1
            ? null
            : manager.tileSelector.selectedTileIndex;
        manager.map.tiles[y][z][x][0] = index;
        manager.map.save(currentMap);
        manager.map.clear();
        manager.map.build();
        break;
      case "p":
        manager.player.setPosition(x, y, z);
        manager.map.player.start.x = x;
        manager.map.player.start.y = y;
        manager.map.player.start.z = z;
        manager.map.save(currentMap);
        break;
      default:
    }
    manager.cursor.x = x;
    manager.cursor.y = y;
    manager.cursor.z = z;
  };

  const controls = new OrbitControls(manager.camera, app.renderer.domElement);
  controls.target.set(0, 0, 0);
};

export const initGameControls = () => {
  var down = false;
  document.addEventListener(
    "keydown",
    function () {
      if (down) return;
      down = true;

      console.log("keydown");
    },
    false
  );
  document.addEventListener(
    "keyup",
    function () {
      down = false;
    },
    false
  );
};
