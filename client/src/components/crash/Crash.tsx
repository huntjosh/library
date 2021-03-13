import { Card, CardContent, Typography } from "@material-ui/core";

export function Crash() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>
          Sorry, something went wrong.
        </Typography>
      </CardContent>
    </Card>
  );
}
