// @ts-check

export const DESCENT_SPEED = -10;
export const MAX_WIND = 3;

/**
 * Calcule la vitesse verticale en tenant compte du vent.
 */
/**
 *
 * @param {number} wind la vitesse du vent
 * @returns {number} retourne la vitesse verticale réelle
 */
export function verticalSpeed(wind) {
  return DESCENT_SPEED + wind;
}

/**
 * Calcule l'altitude suivante du drone.
 */
/**
 *
 * @param {number} altitude l'altitude du drone
 * @param {number} wind la vitesse du vent
 * @returns {number} retourne l'altitude après une seconde
 */
export function nextAltitude(altitude, wind) {
  if (altitude <= 10) {
    return 0;
  } else return altitude - 10 + wind;
}

/**
 * Génère une valeur aléatoire de vent.
 */
/**
 *
 * @returns {number}  retourne une force de vent aléatoire
 */
export function randomWind() {
  return Math.random() * (MAX_WIND - 0) + 0;
}

/**
 * Simule un atterrissage et compte sa durée.
 */
/**
 *
 * @param {number} startAltitude l'altitude de depart
 * @returns {number} retourne retourne le nombre de secondes nécessaires pour que le drone touche le sol.
 */
export function landingDuration(startAltitude) {
  let time = 1;
  let wind = randomWind();
  let altitude = startAltitude;
  while (nextAltitude(altitude, wind) > 0) {
    wind = randomWind();

    altitude = nextAltitude(altitude, wind);
    time++;
  }
  if (altitude < 1) {
    time--;
  }
  return time;
}

/**
 * Indique si le drone atterrit avant l'épuisement de sa batterie.
 */
/**
 *
 * @param {number} startAltitude
 * @param {number} battery
 * @returns {boolean} retourne true si le drone s'est posé, sinon false
 */
export function hasGracefullyLanded(startAltitude, battery) {
  let time = 1;
  let wind = randomWind();
  let altitude = startAltitude;
  while (nextAltitude(altitude, wind) > 0 || battery == 0) {
    if (altitude > 0) {
      wind = randomWind();
    }

    altitude = nextAltitude(altitude, wind);
    time++;
    battery--;
  }
  return altitude > 1;
}
