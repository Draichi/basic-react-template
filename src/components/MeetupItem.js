import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";

const MeetupItem = (props) => {
  return (
    <Card>
      <CardContent>
        <CardMedia image={props.image} title={props.title} />
        <Typography component="h3">{props.title}</Typography>
        <Typography color="textSecondary" component="address">
          {props.address}
        </Typography>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button>To Favorites</Button>
      </CardActions>
    </Card>
  );
};

export default MeetupItem;
