import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const MainStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: "50px",
      [theme.breakpoints.down(1200)]: {
        flexDirection: "column",
      },
    },
    header: {
      background: "#fff",
      fontFamily: "Montserrat",
      color: "#000",
      width: "100%",
      fontWeight: 800,
      fontSize: "50px",
      textAlign: "center",
      padding: "20px",
    },
    playField: {
      position: "relative",
      padding: "100px",
      minWidth: "960px",
    },
    dashboard: {
      flexGrow: 1,
      textAlign: "center",
      padding: "50px",
      [theme.breakpoints.down(1200)]: {
        display: "none",
      },
      "& :last-child": {
        borderBottom: "none",
      },
    },
    dashboardDown: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      padding: "20px",
      [theme.breakpoints.up(1200)]: {
        display: "none",
      },
    },
    dashboardTitle: {
      minWidth: "100px",
      textAlign: "center",
      borderRight: "2px solid #fff",
    },
    dashboardDownBody: {
      flexGrow: 1,
      textAlign: "center",
    },
    resultHeader: {
      fontSize: "24px",
      fontFamily: "Montserrat",
      color: "#fff",
      width: "100px",
      textAlign: "center",
    },
    column: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      borderBottom: "2px solid #fff",
    },
    divDot: {
      fontSize: "16px",
      fontFamily: "Lato",
      color: "#fff",
    },
    item: {
      fontSize: "16px",
      fontFamily: "Lato",
      color: "#fff",
      width: "100%",
    },
    itemDiv: {
      height: "2px",
      background: "#fff",
      width: "100%",
    },
    itemDown: {
      fontSize: "16px",
      fontFamily: "Lato",
      color: "#fff",
      padding: "20px",
    },
  })
);
