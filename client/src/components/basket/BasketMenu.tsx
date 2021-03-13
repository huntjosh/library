import {
  Badge,
  Button,
  Divider,
  Paper,
  Popover,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { useState } from "react";
import { useBasket } from "../../domain";
import { BookSummary } from "./components";

const useStyles = makeStyles((theme) => ({
  popoverContent: {
    padding: theme.spacing(2),
    width: "20rem",
    minHeight: "10rem",
    maxHeight: "40rem",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    color: "#fff",
    cursor: "pointer",
  },
  emptyText: {
    margin: "auto",
  },
}));

export function BasketMenu() {
  const classes = useStyles();
  const basket = useBasket();
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Badge
        badgeContent={basket.books.length}
        color="secondary"
        overlap="circle"
      >
        <LocalLibraryIcon className={classes.icon} onClick={handleClick} />
      </Badge>
      <Popover
        id={"basket-menu"}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper className={classes.popoverContent}>
          {basket.books.length === 0 && (
            <Typography
              variant={"body1"}
              align="center"
              className={classes.emptyText}
            >
              Go find some books! 🐛
            </Typography>
          )}
          {basket.books.map((book, i) => {
            return (
              <div key={book.id}>
                <BookSummary book={book} />
                {i < basket.books.length - 1 && <Divider />}
              </div>
            );
          })}
          {basket.books.length > 0 && (
            <Button
              variant="contained"
              color="primary"
              onClick={basket.clearBasket}
            >
              Checkout
            </Button>
          )}
        </Paper>
      </Popover>
    </div>
  );
}
