# Sistemas Numéricos App

Esta aplicación es una herramienta para trabajar con diferentes sistemas numéricos, realizar conversiones entre ellos, realizar operaciones aritméticas binarias y aplicar códigos de detección y corrección de errores.

## Características

### 1. Sistemas Numéricos

- **Decimal:** Representación estándar de números utilizando 10 dígitos (0 al 9).
- **Binario:** Sistema de numeración binario utilizando solo los dígitos 0 y 1.
- **Octal:** Sistema de numeración octal utilizando dígitos del 0 al 7.
- **Hexadecimal:** Sistema de numeración hexadecimal utilizando dígitos del 0 al 9 y letras A-F.

### 2. Conversión entre Sistemas

- **Decimal a Binario, Octal y Hexadecimal:** Permite convertir un número decimal a su equivalente en binario, octal y hexadecimal. La restricción es trabajar con el máximo número que se puede representar con 8 bits.

### 3. Aritmética Binaria

- **Suma de Números Binarios:** Permite realizar la suma de dos números binarios de 5 bits cada uno.

### 4. Código Gray

- **Conversión a Código Gray:** Implementa la conversión de un número binario a su equivalente en código Gray. Trabaja con una entrada binaria de 5 bits.

### 5. Redundancia Cíclica (CRC)

- **Detección y Corrección de Errores:** Aplica un código de detección y corrección de errores utilizando redundancia cíclica. Se limita la cantidad de bits en la información y en el grado del polinomio generado.

## Requisitos de Ejecución

- Se requiere tener instalado [Node.js](https://nodejs.org/) para ejecutar la aplicación.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/rikrdo1020/circuitos-logicos-1.git
   ```

2. Entra en el directorio del proyecto:

   ```bash
   cd sistemas-numericos-app
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

Una vez instaladas las dependencias, puedes ejecutar la aplicación con el siguiente comando:

```bash
npm run dev
```
