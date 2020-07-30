import { shallow, mount } from "enzyme";
import CounterButton from "./CounterButton";
import React from "react";
import sinon from "sinon";

describe("CounterButton", () => {
  const sandbox = sinon.createSandbox();

  afterEach(function () {
    sandbox.restore();
  });

  it("renders the CounterButton UI", () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
  });

  it("has an initial count of 1", () => {
    const wrapper = mount(<CounterButton />);
    expect(wrapper.state("count")).toBe(1);
  });

  it("increases count by 1 when clicked", () => {
    sandbox.spy(CounterButton.prototype, "shouldComponentUpdate");
    const wrapper = mount(<CounterButton />);
    wrapper.find("button").simulate("click");
    expect(wrapper.state("count")).toBe(2);
    expect(CounterButton.prototype.shouldComponentUpdate).toHaveProperty(
      "callCount",
      1
    );
    expect(CounterButton.prototype.shouldComponentUpdate.returned(true)).toBe(
      true
    );
  });

  it("does not update if nextState's count is the same as the current state's count", () => {
    sandbox.spy(CounterButton.prototype, "shouldComponentUpdate");
    const wrapper = mount(<CounterButton />);
    wrapper.setState({ count: 1 });
    expect(CounterButton.prototype.shouldComponentUpdate).toHaveProperty(
      "callCount",
      1
    );
    expect(CounterButton.prototype.shouldComponentUpdate.returned(false)).toBe(
      true
    );
  });
});
