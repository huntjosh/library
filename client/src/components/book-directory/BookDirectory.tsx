import { Typography, makeStyles, Button } from "@material-ui/core";
import { Book, booksEndpoint } from "../../domain";
import { useApi } from "../../hooks/useApi";
import { BookCard } from "./components";
import Skeleton from "@material-ui/lab/Skeleton";
import { Crash } from "../crash";
import { useState } from "react";
import { Pagination } from "../common";

const useStyles = makeStyles((theme) => ({
  booksContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    gridAutoRows: "1fr",
    gridColumnGap: theme.spacing(2),
    gridRowGap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paginationContainer: {
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },
}));

const booksPerPage = 10;

export function BookDirectory() {
  const { data, error, isLoading } = useApi<{books: Book[]}>(booksEndpoint);
  const books = data?.books;

  const classes = useStyles();
  // todo server side pagination
  const [currentPage, setCurrentPage] = useState(1);
  if (error) {
    return <Crash />;
  }

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Books
      </Typography>
      <Pagination
        itemsPerPage={booksPerPage}
        totalItems={books?.length || 0}
        onPageChange={setCurrentPage}
      />
      <div className={classes.booksContainer}>
        {isLoading && (
          <>
            {Array.from(Array(25)).map((_, i) => {
              return <Skeleton variant="rect" height="20rem" key={i} />;
            })}
          </>
        )}
        {!isLoading && !error && books && (
          <>
            {books
              .slice(
                (currentPage - 1) * booksPerPage,
                currentPage * booksPerPage
              )
              .map((book) => {
                return <BookCard book={book} key={book.id} />;
              })}
          </>
        )}
      </div>
      <Pagination
        itemsPerPage={booksPerPage}
        totalItems={books?.length || 0}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
