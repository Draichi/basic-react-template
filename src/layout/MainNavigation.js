import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
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
        <Typography>
          <Button component={Link} to={"/favorites"} color="inherit">
            Favorites
          </Button>
        </Typography>
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
