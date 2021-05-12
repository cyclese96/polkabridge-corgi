import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pulse from "react-reveal/Pulse";
import CustomButton from "../../common/CustomButton";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "100%",
    width: "auto",
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(233, 233, 233, 1) ),url("https://img.freepik.com/free-vector/variety-cute-shapes-abstract-background_23-2148544989.jpg?size=626&ext=jpg&ga=GA1.2.1991903213.1616889600")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  notice: {
    fontWeight: 400,
    verticalAlign: "baseline",
    margin: 0,
    paddingBottom: 15,
    color: theme.palette.pbr.primary,
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    width: "auto",
    textAlign: "center",
    fontSize: "52px",

    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",
    padding: "0px 12px",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  },
  headerContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexWrap: "wrap",
    paddingTop: 100,
    [theme.breakpoints.down("md")]: {
      paddingTop: 300,
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 100,
      flexDirection: "column-reverse",
    },
  },
  imageContainer: {
    width: 550,
    height: "auto",

    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: "auto",
    },
  },
  textContainer: {
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
  subheading: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 18,
    fontWeight: 400,
    fontColor: theme.palette.pbr.textLight,
    // marginTop: 25,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.header}>
        <div className={classes.headerContainer}>
          <Pulse>
            <img
              src="images/sanshu_party.png"
              alt=""
              className={classes.imageContainer}
            />
          </Pulse>
          <div className={classes.textContainer}>
            <h5 className={classes.notice}>CORGIB Finance</h5>
            <h2>The NFT MarketPlace for Meme coins</h2>
            <p className={classes.subheading}>
              CORGIB is fully decentralized, and all decisions are made by the
              community.
            </p>
            <div>
              <CustomButton title={"Buy on uniswap"}></CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
