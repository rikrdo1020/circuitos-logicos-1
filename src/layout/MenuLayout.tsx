import { Stack } from "@mui/material";
import { ReactNode } from "react";
import ResponsiveAppBar from "../components/Menu";

export const MenuLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack>
      <Stack>
        <ResponsiveAppBar />
      </Stack>
      <Stack flexGrow={1} p={"2rem"} alignItems={"center"}>
        <Stack maxWidth={"1280px"}>{children}</Stack>
      </Stack>
    </Stack>
  );
};
