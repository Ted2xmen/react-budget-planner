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
import online from './images/online.svg'
import Footer from "./components/Footer";

function App() {
  const [showing, setShowing] = useState(true);

  return (
    <AppProvider>

      <div className="container p-5">
      <Header />
      </div>
      <div className="container">
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
        <div className="row mt-5">
          <div className="col-sm-4 my-5 py-3">
          <img src={online} width="350" className="p-4" alt="" />
          
          </div>
          <div className="col-sm-8">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-2 text-center gradient">Harcama Ekle</h3>
        <div className="row mt-4 mb-5 pb-5">
          <button
            onClick={() => {
              setShowing(!showing);
            }}
            className="btn btn-dark"
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
        <footer className="row my-3 py-3 text-center">
          <Footer />
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
