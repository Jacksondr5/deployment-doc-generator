import React from 'react';
import { Grid, withStyles, createStyles, WithStyles } from '@material-ui/core';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const styles = createStyles({
  editor: { height: '100%' },
  root: { flexGrow: 1 },
  tempEditorBox: { height: 500, width: 600 },
});

export interface AppProps extends WithStyles<typeof styles> {}
interface AppState {
  editor: monaco.editor.IStandaloneCodeEditor;
  root: object;
}

class App extends React.Component<AppProps, AppState> {
  constructor(params: any) {
    super(params);
  }

  componentDidMount() {
    this.setState({
      editor: monaco.editor.create(document.getElementById('editor')!, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
          '\n',
        ),
        language: 'javascript',
      }),
    });
  }

  render() {
    const { classes } = this.props;
    return (
      // <Grid container spacing={16} className={classes.root}>
      // <Grid item xs={6}>
      <div id="tempEditorBox" className={classes.tempEditorBox}>
        <div id="editor" className={classes.editor} />
      </div>
      // </Grid>
      // <Grid item xs={6} />
      // </Grid>
    );
  }
}

export default withStyles(styles)(App);
