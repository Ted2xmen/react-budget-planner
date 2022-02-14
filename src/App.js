import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import Header from "./components/Header"
import { AppProvider } from "./context/AppContext";

function App() {
  const [showing, setShowing] = useState(true);

  return (
    <AppProvider>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </nav>
      <div className="container p-5">
      <Header />
      </div>
  
      <div className="container">
        <h1 className="mt-3">Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
        </div>
        <h3 className="mt-3">Expenses {showing} </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-5 text-center">Add Expenses</h3>
        <div className="row mt-4">
          <button
            onClick={() => {
              setShowing(!showing);
            }}
            className="btn btn-primary"
          >
            {showing ? "Formu Gizle" : "Formu Göster"}
          </button>
          {showing ? (
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
