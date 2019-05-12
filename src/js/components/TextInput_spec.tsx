/* eslint-env mocha */

import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import TextInput from "./TextInput";

Enzyme.configure({ adapter: new Adapter() });

describe("TextInput", () => {
  it("render", () => {
    const textInput = <TextInput label="sample" />;
    const nameInput = shallow(textInput);
    expect(nameInput).to.be.an("object");
  });
});
