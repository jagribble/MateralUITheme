import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';

import Theme from './Theme';
import AppBar from './AppBar';
import { useThemeContextProvider } from './Providers/Theme';

export default function Root(){
    const [open, setOpen] = React.useState(false);
    const {getTheme } = useThemeContextProvider();
    return (
        <ThemeProvider theme={getTheme()}>
        <Router>
            <Route render={p => (
                  <AppBar 
                  clipped 
                  rightToolbar={
                    <Tooltip title="Open in GitHub">
                      <GitHubIcon onClick={() => { window.location.href = "https://github.com/jagribble/MateralUITheme" }} />
                    </Tooltip>}
                    menuItems={[]}
                    open={open}
                    handleDrawerToggle={() => setOpen(!open)}
                    {...p}
                  />
            )} />
            <Switch>
                <Route path="/" render={p => <Theme {...p}/>}/>
            </Switch>
        </Router>
        </ThemeProvider>
    );
}