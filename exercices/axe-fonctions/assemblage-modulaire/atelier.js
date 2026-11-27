// @ts-check

// TODO : importer calculateEnergy et multiplyEnergy depuis energie.js
import { calculateEnergy } from "./energie";

import { multiplyEnergy } from "./energie";

// TODO : importer formatResult depuis messages.js
import { formatResult } from "./messages";
/**
 * Crée une synthèse à partir d'une énergie de base et d'un bonus.
 */
/**
 *
 * @param {string} name nom de l energie
 * @param {number} base combien d energie il a de base
 * @param {number} bonus combien d energie il a en bonus
 * @returns {string} retourne combien l energie a d energie
 */
export function createSynthesis(name, base, bonus = 0) {
  let total = 0;
  total = calculateEnergy(base, bonus);
  return formatResult(name, total);
}

/**
 * Crée une synthèse avec une énergie multipliée.
 */
/**
 *
 * @param {string} name nom de l energie
 * @param {number} base combien d energie il a de base
 * @param {number} factor quelle est le factor de multiplication
 * @returns {number} retourne combien l energie a d energie
 */
export function createBoostedSynthesis(name, base, factor = 2) {
  let total = 0;
  total = multiplyEnergy(base, factor);
  return formatResult(name, total);
}

/*
pourquoi calculateEnergy se trouve dans energie.js ;
car calculate energey est dans une autre page a part

pourquoi formatResult se trouve dans messages.js ;
car comme sa si on veut changer le message on a que a aller dans messages.js et sa change pour tout le monde

pourquoi atelier.js doit importer ces fonctions ;
car c depuis ici que on a des valeur des energie

la différence entre export et import.
export c pour exporter quellque part puis import c pour importer quelque chose qui a ete exporte pour le recuperer


*/
