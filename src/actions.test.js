import * as actions from "./actions";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const payload = [{ name: "Ted" }];

const mockStore = configureStore([thunkMiddleware]);

describe("setSearchField", () => {
  it("should create an action to search robots", () => {
    const payload = "Ted";
    const expected = {
      type: CHANGE_SEARCHFIELD,
      payload,
    };
    expect(actions.setSearchField(payload)).toEqual(expected);
  });
});

describe("requestRobots", () => {
  it("should create an action to request robots and a success action", async () => {
    expect.assertions(2);
    const store = mockStore();
    const mockFetch = jest.fn(() => Promise.resolve(payload));
    await store.dispatch(actions.requestRobots(mockFetch));
    const action = store.getActions();

    expect(action[0]).toEqual({
      type: REQUEST_ROBOTS_PENDING,
    });
    expect(action[1]).toEqual({
      type: REQUEST_ROBOTS_SUCCESS,
      payload,
    });
  });

  it("should create a failed action if an error occurs while fetching", async () => {
    expect.assertions(1);
    const store = mockStore({});
    const expected = new Error("Failed to fetch robots!");
    const mockFetch = jest.fn(() => Promise.reject(expected));
    await store.dispatch(actions.requestRobots(mockFetch));

    expect(store.getActions()[1]).toEqual({
      type: REQUEST_ROBOTS_FAILED,
      payload: expected,
    });
  });
});
