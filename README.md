[![npm version](https://badge.fury.io/js/polyglot-react.svg)](https://badge.fury.io/js/polyglot-react)
[![travis-ci](https://travis-ci.org/hoducha/polyglot-react.svg?branch=master)](https://travis-ci.org/hoducha/polyglot-react)

# polyglot-react

A higher order component that makes it easier to use Polyglot in a React application

## Installation

```
npm i -S polyglot-react
```

## Usage

`polyglot-react` exports a wrapper component called `Provider` and a decorator called `withPolyglot`. You are required to wrap your root component with `Provider` and pass on a `locale` string like `"en"` or `"fr"`, and `phrases` object containing the strings.

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
