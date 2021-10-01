const income = (state = [], action: any) => {
  switch (action.type) {
    case "ADD_INCOME":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    default:
      return state;
  }
};

export default income;
