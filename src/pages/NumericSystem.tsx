import { Paper, Stack } from "@mui/material";
import Slider from "react-slick";
import { Decimals } from "../components/Decimals";
import { Binaries } from "../components/Binaries";
import { Octal } from "../components/Octal";
import { Hexadecimal } from "../components/Hexadecimal";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export function NumericSystem() {
  return (
    <Stack maxWidth={"1000px"}>
      <Slider {...settings}>
        <Stack>
          <Paper>
            <Stack maxHeight={"560px"} sx={{ overflowY: "auto" }} p={5}>
              <Decimals />
            </Stack>
          </Paper>
        </Stack>
        <Stack>
          <Paper>
            <Stack maxHeight={"560px"} sx={{ overflowY: "auto" }} p={5}>
              <Binaries />
            </Stack>
          </Paper>
        </Stack>
        <Stack>
          <Paper>
            <Stack maxHeight={"560px"} sx={{ overflowY: "auto" }} p={5}>
              <Octal />
            </Stack>
          </Paper>
        </Stack>
        <Stack>
          <Paper>
            <Stack maxHeight={"560px"} sx={{ overflowY: "auto" }} p={5}>
              <Hexadecimal />
            </Stack>
          </Paper>
        </Stack>
      </Slider>
    </Stack>
  );
}
