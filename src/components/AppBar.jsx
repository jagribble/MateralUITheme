import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useThemeContextProvider } from './Providers/Theme';

const useStyles = makeStyles({
  title: {
    marginLeft: 5,
    flexGrow: 1,
  },
});

export default function Navigation() {
  const classes = useStyles();
  const { toggleType, getType } = useThemeContextProvider();
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <MenuIcon />
        <Typography variant="h6" className={classes.title}>
     Theme generator
        </Typography>
        { getType() ? 
        <Brightness7Icon onClick={() => toggleType() } /> : 
        <Brightness4Icon onClick={() => toggleType() }  />
        }
      </Toolbar>
    </AppBar>
  );
}
