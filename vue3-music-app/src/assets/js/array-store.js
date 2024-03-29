import storage from "good-storage";

function interArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare);
  if (index > -1) return;
  arr.unshift(val);
  if (maxLen && arr.length > maxLen) arr.pop();
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare);
  if (index > -1) arr.splice(index, 1);
}

export function save(item, key, compare, maxLen) {
  const items = storage.get(key, []);
  interArray(items, item, compare);
  storage.set(key, items);
  return items;
}

export function remove(key, compare) {
  const items = storage.get(key, []);
  deleteFromArray(items, compare);
  storage.set(key, items);
  return items;
}

export function load(key) {
  return storage.get(key, []);
}
