/* eslint-env mocha */

import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import NameInput from './NameInput';

Enzyme.configure({ adapter: new Adapter() });

describe('NameInput', () => {
  it('render', () => {
    const props = {};
    const nameInput = shallow(<NameInput {...props} />);
    expect(nameInput).to.be.an('object');
  });
});
