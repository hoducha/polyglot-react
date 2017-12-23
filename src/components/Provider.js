import React, { Component, Children } from "react";
import PropTypes from 'prop-types';
import Polyglot from 'node-polyglot';

class Provider extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    phrases: PropTypes.object.isRequired
  };

  static childContextTypes = {
    polyglot: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);

    this._polyglot = new Polyglot({
      locale: props.locale,
      phrases: props.phrases,
    });
  }

  getChildContext() {
    return { polyglot: this._polyglot };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default Provider;
