export const getMdlByName = (parent: any, name: string) => {
  let result: any = undefined;
  parent.children.map((item: any) => {
    if (item.name === name) {
      result = item;
    }
  });
  return result;
};

export const getMatByName = (name : string) => {
  let result: any = undefined;
  materials.data.map((item: any) => {
    if (item.name === name) {
      result = item;
    }
  });
  return result;
};

export const deg2Rad = (deg: number) => {
  return (deg * Math.PI) / 180;
};
