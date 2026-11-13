// @ts-check

/**
 * Valide une quantité d'énergie.
 */
export function validateEnergy(energy) {
  if (energy < 0) {
    throw new Error("Énergie invalide");
  } else return energy;
}
/**
 * Vérifie une énergie sans propager l'exception.
 */
export function safeEnergyCheck(energy) {
  try {
    validateEnergy(energy);
  } catch (error) {
    return "Énergie invalide";
  }
  return "Énergie valide";
}

/**
 * Valide un code de porte autorisé.
 */
export function validateGateCode(code) {
  // TODO
}

/**
 * Vérifie un code de porte sans propager l'exception.
 */
export function safeGateCheck(code) {
  // TODO
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 */
export function countValidAttempts(text) {
  // TODO
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 */
export function attemptsBeforeLock(sequence) {
  // TODO
}
