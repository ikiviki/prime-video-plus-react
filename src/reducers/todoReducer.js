/**
 * Reducer
 * ========
 * A function that takes in state and action as params.
 * It must return state.
 * Action is an object. it must have type property and an optional payload property.
 * Action types are the possible actions that will occur in the feature.
 * Example action types are 'ADD_TODO' and 'LIST_TODOS', 'EDIT_TODO', 'DELETE_TODO'.
 * Action can also have payload property.
 * The reducer function will never be called directly from component.
 * There's only one way to call the reducer fn.. THE component must dispatch an action.
 *
 */

const todoReducer = (state = [], action) => {
  // console.log(`action: ${act}`);
  // console.log(`state: ${state}`); // state logic - array of object for maintaining list of todos.

  switch (action.type) {
    case "LIST_TODOS":
      return state;

    case "ADD_TODO":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoReducer;
