import { css, Theme } from "@emotion/react";
import headShot from "../../assets/headshot.jpeg";

export const styles = (theme: Theme) => ({
  topSection: css({
    overflow: "auto",
    width: "100%",
    height: "100vh",
    backgroundColor: theme.colors.black,
  }),
  topSectionContent: css({
    color: "#fff",
    background: `url(${headShot}) no-repeat center top fixed, #050505`,
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "contain",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "66.64%",
    "@media (min-width: 709px)": {
      paddingTop: "0",
      height: "100%",
    },
  }),
  topSectionNameContainer: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    "@media (min-width: 709px)": {
      height: "100%",
    },
  }),
  topSectionNameBlock: css({
    fontSize: "min(8vw, 4rem)",
    padding: "4vw 7vw",
  }),
  topSectionFirstName: css({
    fontFamily: "Goldman Sans Medium",
  }),
  topSectionLastName: css({
    fontFamily: "Goldman Sans Light",
  }),
  topSectionNameLine: css({
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: "2px",
    margin: "2vw 0",
    width: "15vw",
  }),
  topSectionIntro: css({
    display: "flex",
    flexDirection: "column",
    maxWidth: "365px",
    padding: "13vw 5vw",
  }),
  topSectionIntroHello: css({
    color: theme.colors.primary,
    fontWeight: "bold",
    marginBottom: "0.5rem",
    fontSize: "min(4vw, 1.125rem)",
  }),
  topSectionIntroHighlight: css({
    marginBottom: "1.5rem",
    fontSize: "1.75rem",
  }),
  topSectionIntroDetail: css({
    marginBottom: "2rem",
    fontSize: "1.125rem",
    color: "rgba(255, 255, 255, 0.7)",
  }),
  topSectionIntroSocial: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "6rem",
    "& svg:hover path": {
      fill: theme.colors.primary,
    },
    "& a": {
      textDecoration: "none",
    },
  }),
  topSectionIntroSocialIcon: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "6rem",
  }),
  topSectionIntroSocialResume: css({
    fontFamily: "Goldman Sans Medium",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    color: "#000",
    borderRadius: "2px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    "&:hover": {
      color: "#FFF",
    },
  }),
});
