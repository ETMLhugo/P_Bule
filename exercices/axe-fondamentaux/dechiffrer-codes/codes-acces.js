// @ts-check

/**
 * Convertit une valeur en nombre.
 */
export function convertCode(value) {
  return Number(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 */
export function sameCodeLoose(value1, value2) {
   return (value1 == value2);
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 */
export function sameCodeStrict(value1, value2) {
   return (value1 === value2);
}

/**
 * Indique si un code est pair.
 */
export function isEvenCode(code) {
  if( code % 2 == 0 ){
    return true;
  }
  else 
    {
      return false;
    }
}

/**
 * Indique si la conversion de la valeur produit NaN.
 */
export function isInvalidCode(value) {
 if (isNaN(value)) {
    return true;
  }
  else{
    return false;
  }
}
