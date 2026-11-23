// @ts-check

/**
 * Exécute un callback après un délai.
 *
 * @param {() => void} callback - Fonction appelée une fois le délai écoulé.
 * @param {number} delay - Délai en millisecondes avant l'appel.
 * @returns {ReturnType<typeof setTimeout>} L'identifiant du timer (utilisable avec clearTimeout).
 */
export function runLater(callback, delay) {
  const myTimeout = setTimeout(callback, delay);
  return myTimeout;
}

/**
 * Transmet un message à un callback après un délai.
 *
 * @param {string} message - Message transmis au callback.
 * @param {number} delay - Délai en millisecondes avant l'envoi du message.
 * @param {(message: string) => void} callback - Fonction qui reçoit le message.
 * @returns {ReturnType<typeof setTimeout>} L'identifiant du timer (utilisable avec clearTimeout).
 */

export function sendSignal(message, delay, callback) {
  const myTimeout = setTimeout(callback, delay, message);
  return myTimeout;
}
/**
 * Double une valeur puis la transmet à un callback après un délai.
 *
 * @param {number} value - Valeur à doubler.
 * @param {number} delay - Délai en millisecondes avant l'appel.
 * @param {(result: number) => void} callback - Fonction qui reçoit la valeur doublée.
 * @returns {ReturnType<typeof setTimeout>} L'identifiant du timer (utilisable avec clearTimeout).
 */

export function doubleLater(value, delay, callback) {
  const myTimeout = setTimeout(callback, delay, value * 2);
  return myTimeout;
}

/**
 * Construit un statut "<name> prêt" puis le transmet à un callback après un délai.
 *
 * @param {string} name - Nom utilisé pour construire le statut.
 * @param {number} delay - Délai en millisecondes avant l'appel.
 * @param {(status: string) => void} callback - Fonction qui reçoit le statut (ex. "Serveur prêt").
 * @returns {ReturnType<typeof setTimeout>} L'identifiant du timer (utilisable avec clearTimeout).
 */
export function delayedStatus(name, delay, callback) {
  const myTimeout = setTimeout(callback, delay, `${name} prêt`);
  return myTimeout;
}
