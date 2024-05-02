export function convertirA8Bits(numero: number): {
  binario: string;
  octal: string;
  hexadecimal: string;
} {
  if (numero > 255) {
    throw new Error(
      "El número proporcionado excede el máximo representable con 8 bits (255)."
    );
  }

  let binario = "";
  let tempNumber = numero;
  for (let i = 0; i < 8; i++) {
    binario = (tempNumber % 2) + binario;
    tempNumber = Math.floor(tempNumber / 2);
  }

  let octal = "";
  tempNumber = numero;
  for (let i = 0; i < 3; i++) {
    octal = (tempNumber % 8) + octal;
    tempNumber = Math.floor(tempNumber / 8);
  }

  let hexadecimal = "";
  tempNumber = numero;
  for (let i = 0; i < 2; i++) {
    const remainder = tempNumber % 16;
    if (remainder < 10) {
      hexadecimal = remainder + hexadecimal;
    } else {
      hexadecimal = String.fromCharCode(remainder + 55) + hexadecimal;
    }
    tempNumber = Math.floor(tempNumber / 16);
  }

  return { binario, octal, hexadecimal };
}

export function convertirBinarioADecimal(binario: string): number {
  if (!/^[01]+$/.test(binario)) {
    throw new Error("La cadena binaria solo debe contener 0s y 1s.");
  }

  let decimal = 0;
  const longitud = binario.length;

  for (let i = 0; i < longitud; i++) {
    decimal += parseInt(binario[i]) * Math.pow(2, longitud - 1 - i);
  }

  return decimal;
}

export function sumarNumerosBinarios(
  binario1: string,
  binario2: string
): string {
  if (binario1.length > 5 || binario2.length > 5) {
    throw new Error("Solo se permiten numeros hasta 5 bits");
  }
  const decimal1 = convertirBinarioADecimal(binario1);
  const decimal2 = convertirBinarioADecimal(binario2);

  const sumaDecimal = decimal1 + decimal2;

  return sumaDecimal.toString(2);
}

export function binarioAGray(binario: string): string {
  if (!/^[01]+$/.test(binario)) {
    throw new Error("La cadena binaria solo debe contener 0s y 1s.");
  }

  let gray = binario[0];

  for (let i = 1; i < binario.length; i++) {
    const bitActual = parseInt(binario[i]);
    const bitAnterior = parseInt(binario[i - 1]);
    const bitGray = bitActual ^ bitAnterior;
    gray += bitGray.toString();
  }

  return gray;
}
