/* eslint-env mocha */

import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import TextInput from "./TextInput";

Enzyme.configure({ adapter: new Adapter() });

describe("NameInput", () => {
  it("render", () => {
    const nameInput = shallow(<TextInput />);
    expect(nameInput).to.be.an("object");
  });
});
