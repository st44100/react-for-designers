/**
 * Generate random Integer
 * @param {Number} max Max. if max is less than 0, it will clip to 0.
 * @param {Number} min Min. if min is less than 0, it will clip to 0.
 * @return {Number} Random Integer.
 */
export function randomInt(max = 0, min = 0) {
  max = max > 0 ? max : 0;
  min = min > 0 ? min : 0;
  return Math.floor(Math.random() * Math.floor(max - min)) + min;
}
