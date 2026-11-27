// @ts-check

/**
 * Double une charge.
 */
/**
 *
 * @param {number} charge la charge
 * @returns {number} retourne le double de la charge reçue.
 */
export function doubleCharge(charge) {
  return charge * 2;
}

/**
 * Calcule une puissance à partir d'une base et d'un multiplicateur.
 */
/**
 *
 * @param {number} base  la charge
 * @param {number} multiplier le multiplieur
 * @returns {number}  retourne le total de base * multiplier
 */
export function forgePower(base, multiplier) {
  return base * multiplier;
}

/**
 * Stabilise une énergie avec un facteur, égal à 2 par défaut.
 */
/**
 *
 * @param {number} energy l energie
 * @param {number} factor le factor
 * @returns {number} retourne le total de energy * factor
 */
export function stabilizeEnergy(energy, factor = 2) {
  return energy * factor;
}

/**
 * Construit un message de la Forge.
 */
/**
 *
 * @param {string} element nom de l'element
 * @param {string} prefix nom du prefix
 * @returns {string} retourne le prefix qui vas a quelle ellement
 */
export function forgeMessage(element, prefix = "Forge") {
  return prefix + " : " + element;
}

/**
 * Calcule l'énergie restante après une perte.
 */
/**
 *
 * @param {number} energy l'energie
 * @param {number} loss combien perdu
 * @returns {number} retourne combien il reste a l'energie apres le loss
 */
export function calculateOutput(energy, loss) {
  return energy - loss;
}

/**
 * Calcule puis amplifie l'énergie restante.
 */
/**
 *
 * @param {number} energy l'energie
 * @param {number} loss combien perdu
 * @param {number} factor combien le factor
 * @returns {number} retourne le resulta final
 */
export function boostedOutput(energy, loss, factor = 2) {
  let output = 0;
  output = calculateOutput(energy, loss);
  output = stabilizeEnergy(output, factor);
  return output;
}
