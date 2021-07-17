import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  media: {
    height: "20em",
  },
}));

const MeetupItem = (props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <Typography component="h3" gutterBottom variant="h3">
          {props.title}
        </Typography>
        <Typography color="textSecondary" component="address">
          {props.address}
        </Typography>
        <Typography variant="body1">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button>To Favorites</Button>
      </CardActions>
    </Card>
  );
};

export default MeetupItem;
