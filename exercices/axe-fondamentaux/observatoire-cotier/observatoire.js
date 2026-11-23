// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 *
 * @param {unknown} value - Donnée dont on veut connaître le type.
 * @returns {string} Le type de la donnée, tel que renvoyé par typeof ("number", "string", "undefined", "object"…).
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 *
 * @param {number | null | undefined} count - Comptage d'oiseaux à tester.
 * @returns {boolean} true si le comptage vaut undefined (non transmis), sinon false.
 */
export function isNotTransmitted(count) {
  return count === undefined;
}

/**
 * Indique si le comptage vaut null.
 *
 * @param {number | null | undefined} count - Comptage d'oiseaux à tester.
 * @returns {boolean} true si le comptage vaut null (capteur hors ligne), sinon false.
 */
export function isOffline(count) {
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 *
 * @param {number | null | undefined} count - Comptage d'oiseaux à tester.
 * @returns {boolean} true si le comptage n'est ni null ni undefined, sinon false.
 */
export function hasBirdCount(count) {
  return count !== null && count !== undefined;
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 *
 * @param {number | null | undefined} northCount - Comptage du nord.
 * @param {number | null | undefined} southCount - Comptage du sud.
 * @returns {number} La somme des deux comptages (null ou undefined comptent pour 0).
 */
export function totalBirds(northCount, southCount) {
  let value1 = northCount ?? 0;
  let value2 = southCount ?? 0;
  return value1 + value2;
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 *
 * @param {unknown} height - Hauteur de vague à vérifier.
 * @returns {boolean} true si la hauteur est un number différent de NaN, sinon false.
 */
export function isValidWaveHeight(height) {
  return height === Number(height);
}