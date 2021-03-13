import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
    border: "1px solid",
    borderRadius: "50px",
    display: "inline-block",
  },
  available: {
    borderColor: theme.palette.success.light,
    backgroundColor: theme.palette.success.light,
    color: "#fff",
  },
  unavailable: {
    borderColor: theme.palette.error.light,
    backgroundColor: theme.palette.error.light,
    color: "#fff",
  },
}));

export interface AvailabilityBadgeProps {
  available: boolean;
}

export function AvailabilityBadge({ available }: AvailabilityBadgeProps) {
  const classes = useStyles();

  return (
    <div
      className={`${classes.root} ${
        available ? classes.available : classes.unavailable
      }`}
    >
      <Typography variant="subtitle2">
        {available ? "Available" : "Unavailable"}
      </Typography>
    </div>
  );
}
