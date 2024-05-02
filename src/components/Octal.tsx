import { Stack, Typography } from "@mui/material";

export const Octal = () => {
  return (
    <Stack textAlign={"left"}>
      <Typography variant="h4" gutterBottom>
        Sistema Octal
      </Typography>
      <Typography variant="body1" paragraph>
        El sistema octal es un sistema de numeración posicional que utiliza la
        base 8. Esto significa que en el sistema octal, cada posición de un
        número representa una potencia de 8. Los dígitos utilizados en el
        sistema octal van del 0 al 7.
      </Typography>
      <Typography variant="body1">
        Por ejemplo, el número octal 753 es igual a:
      </Typography>
      <Typography variant="body1" paragraph>
        7 * 8^2 + 5 * 8^1 + 3 * 8^0 = 488
      </Typography>
      <Typography variant="body1" paragraph>
        En el sistema octal, los números pueden representarse utilizando los
        dígitos del 0 al 7. Para convertir un número octal a decimal, se
        multiplican los dígitos por las potencias correspondientes de 8 y se
        suman los resultados.
      </Typography>
      <Typography variant="body1">
        Del mismo modo, para convertir un número decimal a octal, se realizan
        divisiones sucesivas entre 8 y se escriben los residuos obtenidos en
        orden inverso.
      </Typography>
      <Stack>
        <img
          src="https://www.matesfacil.com/ESO/sistemas-numeracion/base-octal/Octal-3.png"
          alt="Octal"
          width={"400px"}
        />
      </Stack>
    </Stack>
  );
};
