import Vue from "vue";
/**
 * Deep clone
 * @param obj
 * @returns {[]|{}}
 */
function deepClone(obj) {
  if (obj === null) {
    return;
  }
  const newObj = obj.push ? [] : {}; // 如果obj有push方法则 定义newObj为数组，否则为对象。
  for (const attr in obj) {
    if (typeof obj[attr] === "object") {
      newObj[attr] = deepClone(obj[attr]);
    } else {
      newObj[attr] = obj[attr];
    }
  }
  return newObj;
}

/**
 * Get the first element of the object
 * @param obj
 * @returns {*}
 */
export function getFirst(obj) {
  for (const key in obj) {
    return obj[key];
  }
}

export default deepClone;