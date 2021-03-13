import { Typography, makeStyles, Paper, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    padding: theme.spacing(2),
  },
}));

export function Login() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Login
      </Typography>
      <Paper className={classes.loginContainer}>
        <TextField name="email" type="email" required />
      </Paper>
    </>
  );
}
