import React from "react";
import { App } from "./App.js";
import { render as ReactRender, cleanup } from "@testing-library/react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

afterEach(cleanup);
Enzyme.configure({ adapter: new Adapter() });

/* Both React Testing library and Enzyme is set up for you */
describe("<App/>", () => {
  it("App renders without crashing (React Testing Library)", () => {
    ReactRender(<App />);
  });

});
