// @ts-check

/**
 * Additionne un nombre variable de fragments d'énergie.
 */
/**
 *
 * @param  {...any} fragments
 * @returns {number} retourne le total des element
 */
export function sumFragments(...fragments) {
  let total = 0;
  for (const element of fragments) {
    total += element;
  }
  return total;
}

/**
 * Compte le nombre de fragments reçus.
 */
/**
 *
 * @param  {...any} fragments
 * @returns {number} retourne combien il y a d'element dans fragment
 */
export function countFragments(...fragments) {
  let total = 0;
  for (const element of fragments) {
    total++;
  }
  return total;
}

/**
 * Calcule la moyenne des fragments reçus.
 */
/**
 *
 * @param  {...any} fragments
 * @returns {number} retourne la moyen des fragments
 */
export function averageFragments(...fragments) {
  let total = 0;
  total = sumFragments(...fragments) / countFragments(...fragments);
  return total;
}

/**
 * Ajoute la somme des fragments à une valeur de base.
 */
/**
 *
 * @param {string} base
 * @param  {...any} fragments
 * @returns {number} retourne le total des fragment en plus de ceux de base
 */
export function totalWithBase(base, ...fragments) {
  let total = 0;
  for (const element of fragments) {
    total += element;
  }
  total += base;
  return total;
}

/**
 * Construit un libellé indiquant le nombre de valeurs.
 */
/**
 *
 * @param {string} name nom du fragment
 * @param  {...any} values
 * @returns {string} retourne le nom avec son total de fragment
 */
export function formulaLabel(name, ...values) {
  let total = 0;
  for (const element of values) {
    total++;
  }
  return name + " : " + total + " valeurs";
}

/**
 * Prépare un résumé contenant la somme des valeurs.
 */
/**
 *
 * @param {string} name
 * @param  {...any} values
 * @returns {number} retourne chaque nom vaut combien
 */
export function prepareMixture(name, ...values) {
  let total = 0;
  for (const element of values) {
    total += element;
  }
  return name + " = " + total;
}
