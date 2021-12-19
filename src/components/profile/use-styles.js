import { makeStyles } from "@mui/styles";
import Image from "../../images/back.png";
export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      backgroundImage: `url('${Image}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "95vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1%",
      paddingTop: "2%",
    },
    linkHome: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      left: "5px",
      color: `${ctx.palette.text.heading}`,
    },
    linkChat: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      right: "5px",
      color: `${ctx.palette.text.heading}`,
    },
    heading: {
      fontWeight: "500",
      textAlign: "center",
      color: `${ctx.palette.text.heading}`,
      textTransform: "uppercase",
      fontSize: "2rem",
      userSelect: "none",
    },
    radioDiv: {
      display: "flex",
      width: "15%",
      justifyContent: "space-between",
      //   flexDirection: "column",
    },
    chats: {
      marginInline: "auto",
      width: "20%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      background: `${ctx.palette.glassmorphism.color}`,
      boxShadow: `${ctx.palette.glassmorphism.shadow}`,
      backdropFilter: `${ctx.palette.glassmorphism.blur}`,
    },
  };
});
