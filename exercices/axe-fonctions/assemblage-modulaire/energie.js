// @ts-check

/**
 * Calcule une énergie en ajoutant un bonus.
 */
/**
 *
 * @param {number} base combien d energie il a de base
 * @param {number} bonus combien d energie il a en bonus
 * @returns {number} retourne le total d energie
 */
export function calculateEnergy(base, bonus = 0) {
  return base + bonus;
}

/**
 * Multiplie une énergie par un facteur.
 */
/**
 *
 * @param {number} energy combien d energie il a de base
 * @param {number} factor quelle est le factor de multiplication
 * @returns {number} retourne combien l energie a d energie
 */
export function multiplyEnergy(energy, factor = 2) {
  return energy * factor;
}
