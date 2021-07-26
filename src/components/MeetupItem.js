import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { useContext } from "react";
import FavoritesContext from "store/favorites-context";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  media: {
    height: "20em",
  },
}));

const MeetupItem = (props) => {
  const favoritesContext = useContext(FavoritesContext);

  const isItemFavorite = favoritesContext.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (isItemFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({ ...props });
    }
  };

  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
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
        <Button onClick={toggleFavoriteStatusHandler}>
          {isItemFavorite ? "Remove from favorites" : "To favorites"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MeetupItem;
