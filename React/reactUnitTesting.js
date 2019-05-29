import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import MiComponent from "./MiComponent/MiComponent";

describe("<MiComponent />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MiComponent />);
  });

  it("should do something", () => {
    expect(wrapper.find(".something")).toHaveLength(1);
  });
});
