import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Book, useBasket } from "../../../domain";
import { AvailabilityBadge } from "../../book-details/components";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
    cursor: "pointer",
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    justifyContent: "space-between",
    marginRight: theme.spacing(1),
  },
  removeIcon: {
    padding: 0,
    alignSelf: "center",
    marginLeft: "auto",
  },
}));

export interface BookSummaryProps {
  book: Book;
}
export function BookSummary({ book }: BookSummaryProps) {
  const classes = useStyles();
  const basket = useBasket();
  return (
    <div className={classes.root}>
      <div className={classes.summary}>
        <Typography variant="subtitle1" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="subtitle2">{book.author}</Typography>
      </div>
      <IconButton
        aria-label="remove-from-basket"
        className={classes.removeIcon}
        onClick={() => basket.removeFromBasket(book)}
      >
        <HighlightOffOutlinedIcon />
      </IconButton>
    </div>
  );
}
