import React from "react";

function AddExpenseForm() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required="required"
            id="name"
            className="form-control"
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost Value</label>
          <input
            type="text"
            required="required"
            id="cost"
            className="form-control"
          />
        </div>
        <div className="col-sm gap-3 mt-3 d-flex justify-content-start align-items-end">
          <button type="submit" className="btn btn-primary px-5">
            Save{" "}
          </button>
          <button type="submit" className="btn btn-primary px-5">
            Hide
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExpenseForm;
