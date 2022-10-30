import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, ThemeProvider, extendTheme } from 'umbrella-ui';
import 'umbrella-ui/dist/tailwind.css';

const App = () => {
  const [enabled, setEnabled] = React.useState(false);
  const theme = extendTheme({
    brand: {
      100: '#fff'
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Button title='123' />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
