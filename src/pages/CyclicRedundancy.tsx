import {
  Button,
  Card,
  CardContent,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import {
  generarMensajeTransmitido,
  verificarCRC,
} from "../utils/redundanciaCiclica";
import { useState } from "react";

export const CyclicRedundancy = () => {
  const [mensajeTransmitido, setMensajeTransmitido] = useState<string | null>(
    null
  );
  const [comprobacionMensaje, setComprobacionMensaje] = useState<
    string | null
  >();
  const handleComprobarCrc = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLInputElement)
      .value;
    const polinomio = (form.elements.namedItem("polinomio") as HTMLInputElement)
      .value;
    const regex = /^[01]+$/;
    if (!regex.test(mensaje) || !regex.test(polinomio)) {
      toast("Al menos uno de los números no es válido.", {
        position: "top-center",
        type: "error",
      });
      return;
    }

    try {
      const result = verificarCRC(mensaje, polinomio);
      setComprobacionMensaje(
        result
          ? "El mensaje no ha sido alterado durante la transmisión."
          : "El mensaje puede haber sido alterado durante la transmisión."
      );
    } catch (error) {
      console.error(error);
      toast("La cadena binaria solo debe contener 0s y 1s.", {
        position: "top-center",
        type: "error",
      });
      setComprobacionMensaje(null);
    }
  };
  const handleGenerarCrc = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLInputElement)
      .value;
    const polinomio = (form.elements.namedItem("polinomio") as HTMLInputElement)
      .value;
    const regex = /^[01]+$/;
    if (!regex.test(mensaje) || !regex.test(polinomio)) {
      toast("Al menos uno de los números no es válido.", {
        position: "top-center",
        type: "error",
      });
      return;
    }

    try {
      const result = generarMensajeTransmitido(mensaje, polinomio);
      setMensajeTransmitido(result);
    } catch (error) {
      console.error(error);
      toast("La cadena binaria solo debe contener 0s y 1s.", {
        position: "top-center",
        type: "error",
      });
      setMensajeTransmitido(null);
    }
  };
  return (
    <Paper>
      <Stack p={10} gap={2}>
        <Stack>
          <Typography variant="h2" fontSize={"26px"} fontWeight={700}>
            Problema 4
          </Typography>
          <Typography variant="h2" fontSize={"24px"} pb={3}>
            Redundancia Cíclica
          </Typography>
        </Stack>
        <Stack gap={2}>
          <Stack>
            <form onSubmit={handleGenerarCrc}>
              <Stack direction={"row"} gap={2}>
                <TextField label="Mensaje" name="mensaje" type="number" />
                <TextField
                  label="Polinomio Generador"
                  name="polinomio"
                  type="number"
                />
                <Button variant="contained" type="submit">
                  Generar
                </Button>
              </Stack>
            </form>
          </Stack>
          <Stack gap={2}>
            <Card>
              <CardContent>
                <Typography fontSize={14} color={"#5e5e5edd"}>
                  Mensaje transmitido
                </Typography>
                <Typography>{mensajeTransmitido || "--"}</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
        <Divider />
        <Stack pt={2} gap={2}>
          <Stack gap={2}>
            <Typography
              fontSize={"14px"}
              color={"#797979dd"}
              textAlign={"left"}
            >
              Ingrese el mensaje transmitido y el polinomio generador para
              comprobarlo.
            </Typography>
            <form onSubmit={handleComprobarCrc}>
              <Stack direction={"row"} gap={2}>
                <TextField label="Mensaje" name="mensaje" type="number" />
                <TextField
                  label="Polinomio Generador"
                  name="polinomio"
                  type="number"
                />
                <Button variant="contained" type="submit">
                  Comprobar
                </Button>
              </Stack>
            </form>
          </Stack>
          <Stack gap={2}>
            <Card>
              <CardContent>
                <Typography fontSize={14} color={"#5e5e5edd"}>
                  Mensaje transmitido
                </Typography>
                <Typography>{comprobacionMensaje || "--"}</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
