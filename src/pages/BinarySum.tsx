import {
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sumarNumerosBinarios } from "../utils/operations";
import { useState } from "react";
import { toast } from "react-toastify";

export const BinarySum = () => {
  const [result, setResult] = useState<string | null>(null);
  const handleSum = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita que el formulario se envíe
    const form = event.currentTarget;
    const numero1 = (form.elements.namedItem("numero1") as HTMLInputElement)
      .value;
    const numero2 = (form.elements.namedItem("numero2") as HTMLInputElement)
      .value;

    const regex = /^[01]+$/; // Expresión regular para verificar que la cadena contiene solo 0s y 1s

    if (!regex.test(numero1) || !regex.test(numero2)) {
      toast("Al menos uno de los números no es válido.", {
        position: "top-center",
        type: "error",
      });
      return;
    }
    try {
      const result = sumarNumerosBinarios(numero1, numero2);
      setResult(result);
    } catch (error) {
      console.error(error);
      toast("Solo se permiten numeros hasta 5 bits", {
        position: "top-center",
        type: "error",
      });
      setResult(null);
    }
  };
  return (
    <Paper>
      <Stack p={10} gap={2}>
        <Stack>
          <Typography variant="h2" fontSize={"26px"} fontWeight={700}>
            Problema 2
          </Typography>
          <Typography variant="h2" fontSize={"24px"} pb={3}>
            Suma aritmética
          </Typography>
        </Stack>
        <form onSubmit={handleSum}>
          <Stack direction={"row"} gap={2}>
            <TextField label="Número 1" name="numero1" type="number" />
            <TextField label="Número 2" name="numero2" type="number" />
            <Button variant="contained" type="submit">
              Sumar
            </Button>
          </Stack>
        </form>
        <Stack>
          <Card>
            <CardContent>
              <Typography fontSize={14} color={"#5e5e5edd"}>
                Resultado
              </Typography>
              <Typography>{result || "--"}</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Paper>
  );
};
