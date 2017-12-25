import React, { Component } from 'react';
import Polyglot from 'node-polyglot';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider, withPolyglot } from '../../src/index';

const TestComp = () => <div />;

describe('withPolyglot', () => {
  it('should pass polyglot as a prop using higher order components', () => {
    const TestCompContainer = withPolyglot()(TestComp);
    const wrapper = mount((
      <Provider locale="en" phrases={{ foo: "foo" }}>
        <TestCompContainer />
      </Provider>
    ));

    const stub = wrapper.find(TestComp).getElement(0);
    expect(stub.props).to.have.keys(['polyglot']);
  });

  it('should pass polyglot as a prop using decorators', () => {
    @withPolyglot()
    class TestCompContainer extends Component {
      render() {
        return <TestComp {...this.props} />;
      }
    }

    const wrapper = mount((
      <Provider locale="en" phrases={{ foo: "foo" }} >
        <TestCompContainer />
      </Provider>
    ));

    const stub = wrapper.find(TestComp).getElement(0);
    expect(stub.props).to.have.keys(['polyglot']);
  });
});