import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Input } from 'umbrella-ui';
import 'umbrella-ui/dist/tailwind.css';

const App = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div>
      <Input />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
