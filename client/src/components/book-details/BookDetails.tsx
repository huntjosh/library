import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Book, booksEndpoint, useBasket } from "../../domain";
import { useApi } from "../../hooks";
import { routes } from "../../routes";
import { Crash } from "../crash";
import { AvailabilityBadge } from "./components";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      marginBottom: 0,
    },
  },
  actionContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export function BookDetails() {
  const basket = useBasket();
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useApi<{book: Book}>(
    `${booksEndpoint}/${id}`
  );
  const book = data?.book;
  const bookIsInBasket = basket.books.some(
    (currentBook) => currentBook.id === book?.id
  );
  const bookIsAvailable = true;
  if (error) {
    return <Crash />;
  }

  // todo - add skeleton for loading state
  return (
    <Card>
      <CardContent>
        {isLoading ? (
          <Typography variant="h5" component="h1">
            Loading
          </Typography>
        ) : (
          book && (
            <>
              <div className={classes.headerContainer}>
                <Breadcrumbs className={classes.breadcrumbs}>
                  <Link to={routes.books}>
                    <Typography color="textPrimary">Books</Typography>
                  </Link>
                  <Typography color="textPrimary">{book?.title}</Typography>
                </Breadcrumbs>
                <AvailabilityBadge available={bookIsAvailable} />
              </div>

              <Typography variant="h4" component="h1" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                By {book?.author}
              </Typography>
              <Typography variant="body1">
                {book.synopsis.replace(/(<([^>]+)>)/gi, "")}
              </Typography>
            </>
          )
        )}
      </CardContent>
      {!isLoading && book && (
        <CardActions className={classes.actionContainer}>
          {bookIsInBasket ? (
            <Button
              variant="contained"
              onClick={() => basket.removeFromBasket(book)}
            >
              Remove from basket
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              disabled={!bookIsAvailable}
              onClick={() => basket.addToBasket(book)}
            >
              Add to basket
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}
