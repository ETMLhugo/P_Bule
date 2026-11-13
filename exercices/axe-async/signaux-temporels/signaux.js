// @ts-check

/**
 * Exécute un callback après un délai.
 */
export function runLater(callback, delay) {
  const myTimeout = setTimeout(callback, delay);
  return myTimeout;
}

/**
 * Transmet un message à un callback après un délai.
 */
export function sendSignal(message, delay, callback) {
  const myTimeout = setTimeout(callback, delay, message);
  return myTimeout;
}
/**
 * Double une valeur puis la transmet à un callback après un délai.
 */
export function doubleLater(value, delay, callback) {
  const myTimeout = setTimeout(callback, delay, value * 2);
  return myTimeout;
}

/**
 * Construit un statut puis le transmet après un délai.
 */
export function delayedStatus(name, delay, callback) {
  const myTimeout = setTimeout(callback, delay, `${name} prêt`);
  return myTimeout;
}
