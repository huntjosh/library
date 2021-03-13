import { Button, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { BorrowedBook } from "../../../domain";
import { routes } from "../../../routes";
import { DueStatusBadge } from "./DueStatusBadge";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  bookwormDetails: {
    display: "flex",
    marginTop: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
}));

export interface BookSummaryProps {
  borrowedBook: BorrowedBook;
}
export const BorrowedBookCard = ({ borrowedBook }: BookSummaryProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography variant="h6" component="h2" gutterBottom>
        {borrowedBook.book.title}
      </Typography>
      <Typography variant="subtitle2" component="h2" gutterBottom>
        {borrowedBook.book.author}
      </Typography>
      <div className={classes.bookwormDetails}>
        <Typography variant="subtitle2" component="h2">
          Bookworm: {borrowedBook.bookWorm.firstName}{" "}
          {borrowedBook.bookWorm.lastName}
        </Typography>
        <DueStatusBadge dueDate={borrowedBook.dueDate} />
      </div>
      <Button color="primary" variant="contained">
        Process Return
      </Button>
    </Card>
  );
};
