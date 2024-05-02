import {
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { convertirA8Bits } from "../utils/operations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Result {
  binario: string;
  octal: string;
  hexadecimal: string;
}
export const Convertion = () => {
  const [result, setResult] = useState<Result | null>(null);

  const handleConvert = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita que el formulario se envíe
    const form = event.currentTarget;
    const decimalValue = form.elements.namedItem("decimal") as HTMLInputElement;
    const inputValue = Number(decimalValue.value);

    try {
      const result = convertirA8Bits(inputValue);
      setResult(result);
    } catch (error) {
      console.error(error);
      toast(
        "El número proporcionado excede el máximo representable con 8 bits (255).",
        { position: "top-center", type: "error" }
      );
      setResult(null);
    }
  };
  return (
    <Paper>
      <Stack p={10} gap={2}>
        <Stack>
          <Typography variant="h2" fontSize={"26px"} fontWeight={700}>
            Problema 1
          </Typography>
          <Typography variant="h2" fontSize={"24px"} pb={3}>
            Conversor de decimal a binario, octal y hexadecimal
          </Typography>
        </Stack>
        <form onSubmit={handleConvert}>
          <Stack direction={"row"} gap={1}>
            <TextField name="decimal" label="Decimal" type="number" />
            <Button variant="contained" type="submit">
              Convertir
            </Button>
          </Stack>
        </form>

        <Stack gap={2}>
          <Card>
            <CardContent>
              <Typography fontSize={14} color={"#5e5e5edd"}>
                Binario
              </Typography>
              <Typography>{result?.binario || "--"}</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography fontSize={14} color={"#5e5e5edd"}>
                Octal
              </Typography>
              <Typography>{result?.octal || "--"}</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography fontSize={14} color={"#5e5e5edd"}>
                Hexadecimal
              </Typography>
              <Typography>{result?.hexadecimal || "--"}</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Paper>
  );
};
