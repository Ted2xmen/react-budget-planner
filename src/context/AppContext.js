import { createContext, useReducer } from "react" ;

const AppReducer = (state, action) => {
    switch(action.type){
        default: 
        return state;
    }
}

const initalState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40},
        { id: 23, name: 'udemy', cost: 40},
        { id: 53, name: 'spotify', cost: 40},
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