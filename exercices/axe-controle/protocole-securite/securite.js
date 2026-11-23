// @ts-check

/**
 * Valide une quantité d'énergie.
 *
 * @param {number} energy - Quantité d'énergie à valider.
 * @returns {number} L'énergie, si elle est valide (supérieure ou égale à 0).
 * @throws {Error} Si l'énergie est négative ("Énergie invalide").
 */
export function validateEnergy(energy) {
  if (energy < 0) {
    throw new Error("Énergie invalide");
  } else return energy;
}

/**
 * Vérifie une énergie sans propager l'exception.
 *
 * @param {number} energy - Quantité d'énergie à vérifier.
 * @returns {string} "Énergie valide" si l'énergie est valide, sinon "Énergie invalide".
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
 *
 * @param {string} code - Code de porte à valider ("ALPHA", "BETA" ou "OMEGA").
 * @returns {string} Le code, s'il est autorisé.
 * @throws {Error} Si le code n'est pas autorisé ("Code inconnu").
 */
export function validateGateCode(code) {
  switch (code) {
    case "ALPHA":
      return "ALPHA";
    case "BETA":
      return "BETA";
    case "OMEGA":
      return "OMEGA";
    default:
      throw new Error("Code inconnu");
  }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 *
 * @param {string} code - Code de porte à vérifier.
 * @returns {string} "Code accepté" si le code est autorisé, sinon "Code refusé".
 */
export function safeGateCheck(code) {
  try {
    validateGateCode(code);
    return "Code accepté";
  } catch (error) {
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 *
 * @param {string} text - Suite de caractères à analyser, une tentative par caractère.
 * @returns {number} Le nombre de caractères égaux à "A" ou "B".
 */
export function countValidAttempts(text) {
  let count = 0;
  for (let i of text) {
    if (i == "A" || i == "B") {
      count++;
    }
  }
  return count;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 *
 * @param {string} sequence - Suite de tentatives : "V" pour une réussite, "X" pour un échec.
 * @returns {number} Le nombre de tentatives ("V" et "X") effectuées jusqu'au 3e "X" (inclus), ou jusqu'à la fin de la séquence.
 */
export function attemptsBeforeLock(sequence) {
  let count = 0;
  let limite = 0;
  for (let i of sequence) {
    if (i == "V") {
      count++;
    }
    if (i == "X") {
      count++;
      limite++;
    }
    if (limite >= 3) {
      return count;
    }
  }
  return count;
}