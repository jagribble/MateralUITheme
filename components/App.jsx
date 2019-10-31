import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Markdown from 'react-markdown';

import { useThemeContextProvider } from './Providers/Theme';
import { SketchPicker } from 'react-color';

import AppBar from './AppBar';

const useStyles = makeStyles({
  card: {
    margin: 10,
    padding: 10,
  },
});

export default function App() {
  const classes = useStyles();
  const { getTheme, getType, getPrimary, getError, getSecondary, setPrimary, setSecondary, setError } = useThemeContextProvider();
  const source = `
  # Theme
  \`\`\`
  {
    palette: {
        type: '${getType() ? 'dark': 'light'}',
        primary: {
            main: '${getPrimary()}',
        },
        secondary: {
            main: '${getSecondary()}',
        },
        error: {
            main: '${getError()}',
        }
      }
  }
  \`\`\`
  `;
  return (
    <ThemeProvider theme={getTheme()}>
      <AppBar />
      <Card className={classes.card}>
        <Markdown source={source} />
        <Typography color="primary" variant="h4">Primary</Typography>
        <SketchPicker color={getPrimary()} onChangeComplete={(c) => setPrimary(c.hex)} />
        <Typography color="secondary" variant="h4">Secondary</Typography>
        <SketchPicker color={getSecondary()} onChangeComplete={(c) => setSecondary(c.hex)} />
        <Typography color="error" variant="h4">Error</Typography>
        <SketchPicker color={getError()} onChangeComplete={(c) => setError(c.hex)} />
      </Card>
    </ThemeProvider>
  );
}
