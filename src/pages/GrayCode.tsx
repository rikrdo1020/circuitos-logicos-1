import {
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { binarioAGray } from "../utils/operations";
import { useState } from "react";

export const GrayCode = () => {
  const [result, setResult] = useState<string | null>(null);
  const handleGray = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const binario = (form.elements.namedItem("binario") as HTMLInputElement)
      .value;
    const regex = /^[01]+$/;
    if (!regex.test(binario)) {
      toast("El número no es válido.", {
        position: "top-center",
        type: "error",
      });
      return;
    }

    try {
      const result = binarioAGray(binario);
      setResult(result);
    } catch (error) {
      console.error(error);
      toast("La cadena binaria solo debe contener 0s y 1s.", {
        position: "top-center",
        type: "error",
      });
      setResult(null);
    }
  };
  return (
    <Paper>
      <Stack gap={2} p={10}>
        <Stack>
          <Typography variant="h2" fontSize={"26px"} fontWeight={700}>
            Problema 3
          </Typography>
          <Typography variant="h2" fontSize={"24px"} pb={3}>
            Código Gray
          </Typography>
          <form onSubmit={handleGray}>
            <Stack direction={"row"} gap={2}>
              <TextField label="Binario" name="binario" type="number" />
              <Button variant="contained" type="submit">
                Obtener codigo Gray
              </Button>
            </Stack>
          </form>
        </Stack>
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
