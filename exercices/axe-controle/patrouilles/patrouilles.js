// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 */
export function sumRounds(numberOfRounds) {
  let a = 0;
  for (let i = 1; i <= numberOfRounds; i++) {
    a = a + i;
  }
  return a;
}

/**
 * Compte le nombre de caractères d'un code.
 */
export function countSymbols(code) {
  let result = 0;
  for (let x of code) {
    result++;
  }
  return result;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 */
export function countX(code) {
  let result = 0;
  for (let x of code) {
    if (x == "X") result++;
  }
  return result;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 */
export function turnsBeforeEmpty(energy, consumption) {
  let i = 0;
  while (energy >= consumption) {
    i++;
    energy = energy - consumption;
  }
  return i;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
  let a = 1;
  let i = 1;
  while (a <= limit) {
    a = a + i;
    i++;
  }
  return i;
}
