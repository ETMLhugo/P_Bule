// @ts-check

export const UNIVERSITIES = [
  "Institut Lovelace",
  "Académie Babbage",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 *
 * @param {string} university - Université à vérifier.
 * @returns {boolean} true si l'université fait partie de UNIVERSITIES, sinon false.
 */
export function isKnownUniversity(university) {
  for (let i = 0; i < UNIVERSITIES.length; i++) {
    if (university === UNIVERSITIES[i]) {
      return true;
    }
  }
  return false;
}

/**
 * Convertit un titre en niveau numérique.
 *
 * @param {string} title - Titre à convertir.
 * @returns {number} 1 pour "Bachelor", 2 pour "Master", 0 pour un titre inconnu.
 */
export function titleLevel(title) {
  switch (title) {
    case "Bachelor":
      return 1;
    case "Master":
      return 2;
    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 *
 * @param {string} university - Université à vérifier.
 * @returns {boolean} true si l'université fait partie de MASTER_REQUIRED, sinon false.
 */
export function requiresMaster(university) {
  for (let i = 0; i < MASTER_REQUIRED.length; i++) {
    if (university === MASTER_REQUIRED[i]) {
      return true;
    }
  }
  return false;
}

/**
 * Indique si un visiteur est considéré comme fiable.
 *
 * @param {string} university - Université du visiteur.
 * @param {string} title - Titre du visiteur.
 * @returns {boolean} true si l'université est connue, le titre valide et le Master présent quand il est exigé, sinon false.
 */
export function isTrusted(university, title) {
  for (let i = 0; i < UNIVERSITIES.length; i++) {
    if ((university === UNIVERSITIES[i] && (title == "Bachelor" || title == "Master") && !(university === MASTER_REQUIRED[i])) || (university === UNIVERSITIES[i] && title == "Master" && university === MASTER_REQUIRED[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 *
 * @param {string} university - Université du visiteur.
 * @param {string} title - Titre du visiteur.
 * @returns {string} "Université inconnue", "Titre inconnu", "Master requis" ou "Bienvenue dans la Citadelle".
 */
export function welcomeMessage(university, title) {
  if (!UNIVERSITIES.includes(university)) {
    return "Université inconnue";
  } else if (title !== "Bachelor" && title !== "Master") {
    return "Titre inconnu";
  } else if (MASTER_REQUIRED.includes(university) && title !== "Master") {
    return "Master requis";
  } else {
    return "Bienvenue dans la Citadelle";
  }
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 *
 * @param {string[]} universities - Université de chaque visiteur.
 * @param {string[]} titles - Titre de chaque visiteur (même ordre que universities).
 * @returns {boolean} true si tous les visiteurs sont fiables (ou si le groupe est vide), sinon false.
 */
export function allTrusted(universities, titles) {
  for (let i = 0; i < universities.length; i++) {
    if (!isTrusted(universities[i], titles[i])) {
      return false;
    }
  }
  return true;
}