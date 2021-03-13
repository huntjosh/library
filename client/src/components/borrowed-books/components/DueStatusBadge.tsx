import { makeStyles, Typography } from "@material-ui/core";
import isPast from "date-fns/isPast";
import format from "date-fns/format";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
    border: "1px solid",
    borderRadius: "50px",
    display: "inline-block",
  },
  onTime: {
    borderColor: theme.palette.success.light,
    backgroundColor: theme.palette.success.light,
    color: "#fff",
  },
  overdue: {
    borderColor: theme.palette.error.light,
    backgroundColor: theme.palette.error.light,
    color: "#fff",
  },
}));

export interface DueStatusBadgeProps {
  dueDate: string;
}

export function DueStatusBadge({ dueDate }: DueStatusBadgeProps) {
  const classes = useStyles();
  const due = new Date(dueDate);
  const overdue = isPast(due);
  return (
    <div
      className={`${classes.root} ${
        overdue ? classes.overdue : classes.onTime
      }`}
    >
      <Typography variant="subtitle2">
        {overdue
          ? `Was due on ${format(due, "do LLL yyyy")}`
          : `Due on ${format(due, "do LLL yyyy")}`}
      </Typography>
    </div>
  );
}
