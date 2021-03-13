import { Typography, makeStyles } from "@material-ui/core";
import { BorrowedBook, borrowedBooksEndpoint } from "../../domain";
import { useApi } from "../../hooks/useApi";
import Skeleton from "@material-ui/lab/Skeleton";
import { Crash } from "../crash";
import { useState } from "react";
import { Pagination } from "../common/Pagination";
import { BorrowedBookCard } from "./components/BorrowedBookCard";

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

export function BorrowedBooks() {
  const { data, error, isLoading } = useApi<{books: BorrowedBook[]}>(
    borrowedBooksEndpoint
  );
  const books = data?.books;
  const [currentPage, setCurrentPage] = useState(1);
  const classes = useStyles();

  if (error) {
    return <Crash />;
  }

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Borrowed books
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
                return <BorrowedBookCard borrowedBook={book} key={book.id} />;
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
