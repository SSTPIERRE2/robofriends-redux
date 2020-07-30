import { shallow } from "enzyme";
import Card from "./Card";
import React from "react";

it("renders the Card UI", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
