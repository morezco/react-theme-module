export function clone(subject: any) {
  const res: any = {};

  for (let key in subject) {
    res[key] =
      subject[key] instanceof Object
        ? clone(subject[key])
        : subject[key] instanceof Array
        ? [...subject[key]]
        : subject[key] instanceof Date
        ? new Date((subject as Date).getTime())
        : subject[key];
  }
  return res;
}
