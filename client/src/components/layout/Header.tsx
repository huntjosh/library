import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BasketMenu } from "../basket";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "5rem",
    backgroundColor: theme.palette.info.dark,
    padding: theme.spacing(2),
    boxShadow: "0px 2px 5px 0 #777",
    zIndex: theme.zIndex.appBar,
  },
  headerText: {
    color: "#fff",
  },
  linkText: {
    color: "#fff",
  },
  headerContent: {
    maxWidth: "60rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
    alignItems: "center",
    "& :not(:last-child)": {
      marginRight: theme.spacing(2),
    },
  },
  icon: {
    color: "#fff",
    cursor: "pointer",
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.headerContent}>
        <Typography
          variant="h4"
          component="span"
          className={classes.headerText}
        >
          Renti's Library
        </Typography>
        <div className={classes.links}>
          <Typography>
            <Link className={classes.linkText} to={routes.books}>
              Books
            </Link>
          </Typography>
          <Typography>
            <Link className={classes.linkText} to={routes.borrowedBooks}>
              Borrowed books
            </Link>
          </Typography>
          <BasketMenu />
        </div>
      </div>
    </header>
  );
}
