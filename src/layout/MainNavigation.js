import { AppBar, Toolbar, Typography, Button, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "store/favorites-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Meetups
        </Typography>
        <Typography>
          <Button component={Link} to={"/"} color="inherit">
            All meetups
          </Button>
        </Typography>
        <Badge badgeContent={favoritesContext.totalFavorites} color="secondary">
          <Typography>
            <Button component={Link} to={"/favorites"} color="inherit">
              Favorites
            </Button>
          </Typography>
        </Badge>
        <Typography>
          <Button component={Link} to={"/new-meetup"} color="inherit">
            New meetup
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
