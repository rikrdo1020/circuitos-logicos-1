export function calcularCRC(mensaje: string, polinomio: string): string {
  const mensajeBits = mensaje.split("").map((bit) => parseInt(bit));
  const polinomioBits = polinomio.split("").map((bit) => parseInt(bit));

  const mensajeExtendido = mensajeBits.concat(
    new Array(polinomioBits.length - 1).fill(0)
  );

  for (let i = 0; i < mensajeBits.length; i++) {
    if (mensajeExtendido[i] === 1) {
      for (let j = 0; j < polinomioBits.length; j++) {
        mensajeExtendido[i + j] ^= polinomioBits[j];
      }
    }
  }

  const crc = mensajeExtendido.slice(-polinomioBits.length + 1).join("");

  return crc;
}

export function generarMensajeTransmitido(
  mensaje: string,
  polinomio: string
): string {
  const crc = calcularCRC(mensaje, polinomio);

  const mensajeTransmitido = mensaje + crc;

  return mensajeTransmitido;
}

export function verificarCRC(
  mensajeTransmitido: string,
  polinomio: string
): boolean {
  const mensaje = mensajeTransmitido.slice(0, -polinomio.length + 1);
  const crcRecibido = mensajeTransmitido.slice(-polinomio.length + 1);

  const crcCalculado = calcularCRC(mensaje, polinomio);

  return crcCalculado === crcRecibido;
}
