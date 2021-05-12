import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Receipt } from "@material-ui/icons";
import { Fade } from "react-reveal";
import CustomButton from "../../common/CustomButton";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: 10,
      paddingBottom: 35,
      paddingTop: 35,
    },
  },
  background2: {
    padding: 80,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      padding: 10,
      paddingBottom: 35,
      paddingTop: 35,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    // textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 40,
    // textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  button: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "15px 30px 15px 30px",
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  title: {
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  imageContainer: {
    width: 500,
    height: "auto",
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: "auto",
    },
  },
  focusContainer: {
    border: "1px solid #888888",
    padding: 10,
    width: "100%",
    borderRadius: "7px",
    marginRight: 10,
    marginBottom: 10,
    height: 110,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  textContainer: {
    maxWidth: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      marginTop: 100,
      marginLeft: 30,
      // alignItems: "center",
    },
  },
  number: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: theme.palette.pbr.primary,
    color: "#f9f9f9",
    textAlign: "center",
    verticalAlign: "baseline",
    paddingTop: 5,
    marginBottom: 20,
  },
}));
export default function About() {
  const classes = useStyles();

  return (
    <>
      <section>
        <div className={classes.background}>
          <div className={classes.textContainer}>
            <Fade left>
              <h3 className={classes.number}>1</h3>
              <h6 className={classes.heading}>
                What is <strong className={classes.highlight}>CORGIB?</strong>
              </h6>
              <p className={classes.para}>
                We are a part of the newly emerging Tiger family!
              </p>

              <CustomButton
                className={classes.button}
                title={"Find out more"}
              ></CustomButton>
            </Fade>
          </div>

          <Fade right>
            <div>
              <img
                src="https://sanshuinu.finance/assets/images/sanshu-5.png"
                alt="explain"
                className={classes.imageContainer}
              />
            </div>
          </Fade>
        </div>
      </section>

      <section>
        <div className={classes.background2}>
          <Fade right>
            <div>
              <img
                src="https://sanshuinu.finance/assets/images/sanshu-4.png"
                alt="explain"
                className={classes.imageContainer}
              />
            </div>
          </Fade>

          <div className={classes.textContainer}>
            <Fade left>
              <h3 className={classes.number}>2</h3>
              <h6 className={classes.heading}>
                A fully{" "}
                <strong className={classes.highlight}>
                  deflationary token
                </strong>{" "}
                that appreciates every single transaction
              </h6>
              <p className={classes.para}>
                We are a part of the newly emerging Tiger family!
              </p>

              <CustomButton
                className={classes.button}
                title={"See all features"}
              ></CustomButton>
            </Fade>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.background}>
          <div className={classes.textContainer}>
            <Fade left>
              <h3 className={classes.number}>3</h3>
              <h6 className={classes.heading}>
                Why choose us?{" "}
                <strong className={classes.highlight}>CORGIB?</strong> is fully
                decentralized, had a fair launch and an exciting roadmap.
              </h6>
              {/* <p className={classes.para}>
                We are a part of the newly emerging Tiger family!
              </p> */}

              <CustomButton
                className={classes.button}
                title={"View our roadmap"}
              ></CustomButton>
            </Fade>
          </div>

          <Fade right>
            <div>
              <img
                src="https://sanshuinu.finance/assets/images/sanshu-6.png"
                alt="explain"
                className={classes.imageContainer}
              />
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
