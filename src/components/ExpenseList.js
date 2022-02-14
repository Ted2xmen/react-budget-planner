import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";


function ExpenseList() {
  const { expenses } = useContext(AppContext);

  // hard coded - prev context
  //  const expenses = [
  //     { id: 1223, date: Date(), name: "Shopping", cost: 250 },
  //     { id: 1263, date: Date(), name: "Udemy courses", cost: 50 },
  //     { id: 1213, date: Date(), name: "Spotify", cost: 50 },
  //     { id: 1273, date: Date(), name: "Youtube Premium", cost: 50 },
  //   ];

  return (
 
      
      <div>
        
 
  
      {expenses.length <= 0 ? (
        <div className="alert alert-danger">Hiç harcaman yok</div>
      ) : (
        <ul className="list-group">
          {expenses &&
            expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                date={expense.date}
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
              ></ExpenseItem>
            ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
