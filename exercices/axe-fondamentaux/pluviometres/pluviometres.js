// @ts-check

/**
 * Convertit un relevé en nombre.
 */
export function readRainfall(value) {
  return Number(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 */
export function totalRainfall(morning, evening) {
  let a = Number(morning);
  let b = Number(evening);
  return a + b;
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 */
export function isScheduledHour(hour) {
  return hour % 3 == 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 */
export function isFaultyReading(value) {
  return Number.isNaN(Number(value));
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 */
export function isConfirmedReading(manual, automatic) {
  return Number(manual) == Number(automatic);
}
