const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
    // break;
  }

  //! OR
  // if (action.type === 'INCREMENT') {
  //   return (state = state + 1);
  // } else if (action.type === 'DECREMENT') {
  //   return (state = state - 1);
  // } else {
  //   return;
  // }
};

export default changeTheNumber;
