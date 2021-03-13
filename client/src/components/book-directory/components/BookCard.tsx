import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Book } from "../../../domain";
import { routes } from "../../../routes";
import { AvailabilityBadge } from "../../book-details/components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    marginTop: "auto",
    justifyContent: "space-between",
  },
}));

export interface BookSummaryProps {
  book: Book;
}
export function BookCard({ book }: BookSummaryProps) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card
      className={classes.root}
      onClick={() => {
        history.push(`${routes.books}/${book._id}`);
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        {book.title}
      </Typography>
      <div className={classes.footer}>
        <Typography variant="subtitle2" component="h2">
          {book.author}
        </Typography>
        <AvailabilityBadge available />
      </div>
    </Card>
  );
}
