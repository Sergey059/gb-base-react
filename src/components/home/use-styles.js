import { makeStyles } from "@mui/styles";
import Image from "../../images/back.png";
export const useStyles = makeStyles((ctx) => {
  return {
    home: {
      width: "100%",
    },
    wrapper: {
      backgroundImage: `url('${Image}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "95vh",
      width: "100%",
    },
    list: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      alignItems: "center",
    },
    heading: {
      fontWeight: "500",
      textAlign: "center",
      color: `${ctx.palette.text.heading}`,
      textTransform: "uppercase",
      fontSize: "2rem",
      userSelect: "none",
    },
    link: {
      paddingTop: "1%",
      textDecoration: "none",
      userSelect: "none",
      display: "block",
      padding: "12%",
      textAlign: "center",
      "& li": {
        color: `${ctx.palette.text.main}`,
      },
      "&:hover li": {
        color: `${ctx.palette.secondary.light}`,
      },
    },
    itemText: {
      letterSpacing: "0.25em",
      fontWeight: "600",
      fontSize: "1.5rem",
      transition: "color 0.2s linear",
    },
    welcome: {
      color: "white",
      textTransform: "uppercase",
      fontSize: "4rem",
      letterSpacing: "0.25em",
      fontWeight: "800",
      textAlign: "center",
      userSelect: "none",
      marginTop: "2%",
    },
  };
});
