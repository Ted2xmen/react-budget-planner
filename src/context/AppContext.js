import { createContext, useReducer } from "react" ;

const AppReducer = (state, action) => {
    switch (action.type) {
      case "ADD_EXPENSE":
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };

      case "SET_BUDGET":
        return {
            ...state,
          budget: action.payload,
        };

      case "DELETE_EXPENSE":
        return {
          ...state,
          expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload
          ),
        };
      default:
        return state;
    }
}

const initalState = {
    budget: 5000,
    expenses: [
     { id: 12, name: 'market', cost: 200},
        // { id: 23, name: 'faturalar', cost: 520},
        // { id: 232, name: 'aidat', cost: 120},
        // { id: 53, name: 'sinema & kitap & yemek', cost: 315},
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
    }}>
        {props.children}
    </AppContext.Provider>)
};

export default AppReducer;