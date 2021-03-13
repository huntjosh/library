import { makeStyles, Button } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
}));

export interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const classes = useStyles();
  const { itemsPerPage, totalItems, onPageChange } = props;
  const [currentPage, setPage] = useState(1);
  const hasMorePages = totalItems > itemsPerPage * currentPage;

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        disabled={currentPage === 1}
        onClick={() => {
          setPage(currentPage - 1);
          onPageChange(currentPage - 1);
        }}
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          setPage(currentPage + 1);
          onPageChange(currentPage + 1);
        }}
        variant="contained"
        color="primary"
        disabled={!hasMorePages}
      >
        Next
      </Button>
    </div>
  );
};
