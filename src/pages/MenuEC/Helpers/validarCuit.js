function validarYConvertirCUIT(cuit) {
    // Asegúrate de que el CUIT sea una cadena de texto
    cuit = cuit.toString();
  
    // Eliminar guiones y espacios en blanco
    cuit = cuit.replace(/[-\s]/g, '');
  
    // Verificar que el CUIT tenga 11 dígitos
    if (cuit.length !== 11) {
      return "CUIT inválido";
    }
  
    // Verificar que todos los caracteres sean dígitos numéricos
    if (!/^\d{11}$/.test(cuit)) {
      return "CUIT inválido";
    }
  
    // Calcular el dígito verificador esperado
    const cuitSinVerificador = cuit.slice(0, 10);
    const cuitArray = cuitSinVerificador.split('').map(Number);
    const pesos = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    let suma = 0;
    for (let i = 0; i < 10; i++) {
      suma += cuitArray[i] * pesos[i];
    }
    const resultado = 11 - (suma % 11);
  
    // Comparar el dígito verificador con el esperado
    if (resultado === 11) {
      if (cuit[10] === '0') {
        return cuit;
      }
    } else if (resultado === 10) {
      if (cuit[10] === '9') {
        return cuit;
      }
    } else if (cuit[10] == resultado) {
      return cuit;
    }
  
    return "CUIT inválido";
  }