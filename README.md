[![npm version](https://badge.fury.io/js/polyglot-react.svg)](https://badge.fury.io/js/polyglot-react)
[![travis-ci](https://travis-ci.org/hoducha/polyglot-react.svg?branch=master)](https://travis-ci.org/hoducha/polyglot-react)

# polyglot-react

A higher order component that makes it easier to use Polyglot in a React application.

This component pass the `polyglot` object down to every connected child components so that you can access to all features provided by Polyglot.

## Installation

```
npm i -S polyglot-react
```

## Usage

The usage is simple:

* Wrap the root component in the `Provider` component. The `Provider` has 2 required props: `locale` and `phrases` which are used to create the Polyglot instance.

* Decorate the child component using `withPolyglot()`. Then you can access to the `polyglot` object from `props` of the child component.

### Wrap the root component

```JavaScript
import { Provider } from 'polyglot-react';
import App from './components/App';

const locale = "en";
const phrases = {
  "home.login": "Login",
  "home.signup": "Sign Up"
}

export default () => (
  <Provider locale={locale} phrases={phrases}>
    <App />
  </Provider>
);
```

**Or if you use Redux:**

```JavaScript
import { Provider } from 'react-redux';
import { Provider as PolyglotProvider } from 'polyglot-react';
import App from './components/App';
import configureStore from './configureStore';

const store = configureStore();
const locale = "en";
const phrases = {
  "home.login": "Login",
  "home.signup": "Sign Up"
}

export default () => (
  <Provider store={store}>
    <PolyglotProvider locale={locale} phrases={phrases}>
      <App />
    </PolyglotProvider>
  </Provider>
);
```

### Decorate the child component

**Using decorator**

```JavaScript
import React, { Component } from 'react';
import { withPolyglot } from 'polyglot-react';

@withPolyglot()
class TodoList extends Component {
  render() {
    const { polyglot } = this.props;
    return (
      <div>
        <h1>{ polyglot.t("list.title") }</h1>
        <ul>
          {this.state.todos.map( todo => <Todo {...todo} /> )}
        </ul>
      </div>  
    );
  }
}

export default TodoList;
```

**Using higher order components**

```Javascript
import React, { Component } from 'react';
import { withPolyglot } from 'polyglot-react';

class TodoList extends Component {
  render() {
    const { polyglot } = this.props;
    return (
      <div>
        <h1>{ polyglot.t("list.title") }</h1>
        <ul>
          {this.state.todos.map( todo => <Todo {...todo} /> )}
        </ul>
      </div>  
    );
  }
}

TodoList = withPolyglot()(TodoList);
export default TodoList;
```

## Contributing

Pull Requests are very welcome!

If you find any issues, please report them via [Github Issues](https://github.com/hoducha/polyglot-react/issues)!

## License

`polyglot-react` is available under the [MIT License](https://opensource.org/licenses/MIT)
