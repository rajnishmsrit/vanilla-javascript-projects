import { createElement, render } from './utils';

const App = () => {
  return (
    <h1>Hello, JSX!</h1>
  );
};

render(createElement(<App />), document.getElementById('root'));
