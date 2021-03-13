import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BookDetails, BookDirectory, Header } from "./components";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { routes } from "./routes";
import { BasketProvider } from "./domain/Basket";
import { BorrowedBooks } from "./components/borrowed-books";
import { Login } from "./components/login";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    display: "flex",
    flex: 1,
  },
  pageContentBackground: {
    flex: 1,
    padding: theme.spacing(4),
    backgroundColor: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
  },
  pageContent: {
    maxWidth: "60rem",
    flex: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <BasketProvider>
          <Header />
          <div className={classes.content}>
            <Divider orientation="vertical" />
            <div className={classes.pageContentBackground}>
              <div className={classes.pageContent}>
                <Switch>
                  <Route exact path={`${routes.books}/:id`}>
                    <BookDetails />
                  </Route>
                  <Route exact path={routes.borrowedBooks}>
                    <BorrowedBooks />
                  </Route>
                  <Route path="/">
                    <BookDirectory />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </BasketProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
