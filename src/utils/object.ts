// deep clone a value which might has nested objects or arrays
export const deepClone = (obj: any): Object | any[] | null => {
  if (obj === null) return null;
  let clone = { ...obj };
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};

// get the index of the object in an array by its property value matched with the given value
export const findByProp = (array: any[], prop: string, value: unknown) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][prop] === value) {
      return i;
    }
  }
  return -1;
};
