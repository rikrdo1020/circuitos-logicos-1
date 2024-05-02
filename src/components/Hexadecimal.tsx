import { Stack, Typography } from "@mui/material";

export const Hexadecimal = () => {
  return (
    <Stack textAlign={"left"}>
      <Typography variant="h4" gutterBottom>
        Sistema Hexadecimal
      </Typography>
      <Typography variant="body1" paragraph>
        El sistema hexadecimal es un sistema de numeración posicional que
        utiliza la base 16. En este sistema, además de los diez dígitos
        numéricos habituales (0 al 9), se utilizan las primeras seis letras del
        alfabeto inglés para representar los valores del 10 al 15. Por lo tanto,
        los dígitos en hexadecimal van de 0 a 9, y luego de A a F, representando
        respectivamente los valores decimales del 10 al 15.
      </Typography>
      <Typography variant="body1">
        Por ejemplo, el número hexadecimal 1A3 es igual a:
      </Typography>
      <Typography variant="body1" paragraph>
        1 * 16^2 + 10 * 16^1 + 3 * 16^0 = 419
      </Typography>
      <Typography variant="body1" paragraph>
        En el sistema hexadecimal, los números pueden representarse utilizando
        los dígitos del 0 al 9 y las letras de la A a la F. Para convertir un
        número hexadecimal a decimal, se multiplican los dígitos por las
        potencias correspondientes de 16 y se suman los resultados.
      </Typography>
      <Typography variant="body1">
        Del mismo modo, para convertir un número decimal a hexadecimal, se
        realizan divisiones sucesivas entre 16 y se escriben los residuos
        obtenidos en orden inverso, utilizando los dígitos hexadecimales
        adecuados.
      </Typography>
      <Stack>
        <img
          src="https://www.matesfacil.com/ESO/sistemas-numeracion/base-hexadecimal/HexaP9-1.png"
          alt="Hexadecimal"
          width={"400px"}
        />
      </Stack>
    </Stack>
  );
};
