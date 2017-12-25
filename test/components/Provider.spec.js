import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from '../../src/index';

describe('Provider', () => {

  it('should have `locale` and `phrases` props to the Provider', () => {
    const wrapper = mount((
      <Provider locale="en" phrases={{ foo: "foo" }}>
        <div />
      </Provider>
    ));

    expect(wrapper.prop('locale')).to.equal("en");
    expect(wrapper.prop('phrases').foo).to.equal("foo");
  });
});