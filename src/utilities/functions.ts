/**
 * Convierte una lista de modificadores en un un String para configurar la clase del componente
 * @param {String} componentName - Nombre del componente al que se agregará la clase
 * @param {Array<String>} modifiersList - Lista de modificadores a convertir en clase
 * @returns {String} Clase en formato BEM CSS a incluir en la propiedad class
 */
export function modifiersToBem(componentName: String, modifiersList: Array<String | undefined> = []): String {
  if(modifiersList.length > 0) {
    const bemModifiers: Array<String> = []

    modifiersList.forEach(modifier => {
      if(modifier != undefined) {
        bemModifiers.push(`gr-${componentName}--${modifier}`)
      }
    })

    return `gr-${componentName} ${bemModifiers.join(' ')}`
  } else {
    return `gr-${componentName}`
  }
}