// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 */
export function valueType(value) {

return typeof value;
}

/**
 * Indique si la valeur est undefined.
 */
export function isUndefined(value) {
  return value === undefined
}

/**
 * Indique si la valeur est null.
 */
export function isNull(value) {
    if ( value === null )
  {
    return true;
  }
  else{
    return false;
  }
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 */
export function hasKnownValue(value) {
     if ( value ===  null || value === undefined)
  {
    return false;
  }
  else{
    return true;
  }
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  if (energy >= minimumEnergy){
    return true;
  }
  else{
    return false;
  }
}

/**
 * Compare strictement le nom de la zone attendue.
 */
export function isCorrectZone(zone, expectedZone) {
  if (zone === expectedZone){
    return true;
  }
  else{
    return false;
  }
}
