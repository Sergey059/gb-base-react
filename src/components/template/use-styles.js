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
      position: "relative",
    },
    linkHome: {
      textDecoration: "none",
      position: "absolute",
      top: "5px",
      left: "5px",
      color: `${ctx.palette.text.heading}`,
    },
    linkProfile: {
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
    messages: {
      width: "80%",
      height: "92%",
      marginLeft: "auto",
    },
  };
});
