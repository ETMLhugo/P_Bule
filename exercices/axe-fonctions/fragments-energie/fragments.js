// @ts-check

/**
 * Additionne un nombre variable de fragments d'énergie.
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
export function averageFragments(...fragments) {
  let total = 0;
  total = sumFragments(...fragments) / countFragments(...fragments);
  return total;
}

/**
 * Ajoute la somme des fragments à une valeur de base.
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
export function prepareMixture(name, ...values) {
  let total = 0;
  for (const element of values) {
    total += element;
  }
  return name + " = " + total;
}
