import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import BackgroundImg from "../assets/image/background.jpeg";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${BackgroundImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  })
);
