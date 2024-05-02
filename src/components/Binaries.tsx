import { Stack, Typography } from "@mui/material";

export const Binaries = () => {
  return (
    <Stack textAlign={"left"}>
      <Typography variant="h4" gutterBottom>
        Sistema Binario
      </Typography>
      <Typography variant="body1" paragraph>
        Este sistema utiliza sólo dos dígitos: 0 y 1. El valor de cada posición
        se obtiene de una potencia de base 2, elevada a un exponente igual a la
        posición del dígito menos uno.
      </Typography>
      <Typography variant="body1" paragraph>
        Su popularidad radica en que es el utilizado por las computadoras y
        dispositivos electrónicos, internamente estos equipos usan el cero para
        inhibir y el 1 para generar impulsos eléctricos en su comunicación
        interna.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Conversión entre números decimales y binarios
      </Typography>
      <Typography variant="body1" paragraph>
        Convertir un número decimal a binario es muy sencillo: basta con
        realizar divisiones sucesivas entre 2 y escribir los residuos obtenidos
        en cada división en orden inverso al que han sido obtenidos.
      </Typography>
      <Stack p={2}>
        <img
          src="https://i0.wp.com/www.areatecnologia.com/electronica/imagenes/Binario-Decimal.png"
          width={"400px"}
        />
      </Stack>
      <Typography variant="body1">
        Por ejemplo, el número decimal 23519:
      </Typography>
      <Typography variant="body1" paragraph>
        23519 / 2 = 11759 Residuo: 1
        <br />
        11759 / 2 = 5879 Residuo: 1
        <br />
        5879 / 2 = 2939 Residuo: 1
        <br />
        2939 / 2 = 1469 Residuo: 1
        <br />
        1469 / 2 = 734 Residuo: 1
        <br />
        734 / 2 = 367 Residuo 0
        <br />
        367 / 2 = 183 Residuo: 1
        <br />
        183 / 2 = 91 Residuo: 1
        <br />
        91 / 2 = 45 Residuo: 1
        <br />
        45 / 2 = 22 Residuo: 1
        <br />
        22/ 2 = 11 Residuo: 0
        <br />
        11 / 2 = 5 Residuo: 1
        <br />
        5 / 2 = 2 Residuo: 1
        <br />
        2 / 2 = 1 Residuo: 0
        <br />1 / 2 = 0 Residuo: 1
      </Typography>
      <Typography variant="body1" paragraph>
        Acomodando los residuos en orden inverso el número decimal 23519 sería
        el 101101111011111 binario.
      </Typography>
    </Stack>
  );
};
