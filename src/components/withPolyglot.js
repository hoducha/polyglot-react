import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';

export default function connect() {
  return function(ReactComponent) {
    return class extends Component {
      static contextTypes = {
        polyglot: PropTypes.object
      }

      constructor(props, context) {
        super(props, context);
      }

      render() {
        return createElement(ReactComponent, {
          ...this.props,
          polyglot: this.context.polyglot
        });
      }
    }
  }
}