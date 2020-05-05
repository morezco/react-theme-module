export function differs(obj1: any, obj2: any) {
  for (let key in obj1) {
    if (!obj2[key] || obj2[key] !== obj1[key]) {
      return true;
    }
  }

  return false;
}
