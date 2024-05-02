import { Stack, Typography } from "@mui/material";

export const Decimals = () => {
  return (
    <Stack direction={"column"} gap={2}>
      <Stack textAlign={"justify"}>
        <Typography variant="h4">Sistema Decimal</Typography>

        <Typography variant="body1" paragraph>
          Es un sistema de numeración posicional en el que las cantidades se
          representan utilizando como base el número diez, por lo que se compone
          de diez dígitos diferentes: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
        </Typography>
        <Typography variant="body1" paragraph>
          El valor de cada dígito está asociado a la posición que ocupa:
          unidades, decenas, centenas, millares, etc. Estas posiciones se
          obtienen asociando cada dígito a una potencia de base 10, que coincide
          con la cantidad de dígitos del sistema decimal, y un exponente igual a
          la posición que ocupa el dígito menos uno, contando desde la derecha.
        </Typography>
        <Stack>
          <img src="https://www.bartolomecossio.com/MATEMATICAS/NUMERACION_01.gif" />
        </Stack>
        <Typography variant="body1">
          Por ejemplo, el número 23519 es igual a:
        </Typography>
        <Typography variant="body1" paragraph>
          2 decenas de millar + 3 unidades de millar + 5 centenas + 1 decena + 9
          unidades
        </Typography>
        <Typography variant="body1">
          Expresándolo en potencias base 10 sería:
        </Typography>
        <Typography variant="body1" paragraph>
          2*10<sup>4</sup> + 3*10<sup>3</sup> + 5*10<sup>2</sup> + 1*10
          <sup>1</sup> + 9*10<sup>0</sup>
        </Typography>
        <Typography variant="body1">Que es igual a:</Typography>
        <Typography variant="body1">20000 + 3000 + 500 + 10 + 9</Typography>
      </Stack>
    </Stack>
  );
};
