import { useState } from "react";
import { addExpenseAction } from "./store/expense-slice";
import { useDispatch, useSelector } from "react-redux";

export function AgeCounter(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const dispatch = useDispatch();
  const [age, setAge] = useState(30);
  function increase() {
    setAge(age + 1);
    dispatch(addExpenseAction(age));
    console.log("list:", expenseList);
  }
  return (
    <>
      <button
        onClick={() => increase()}
        style={{ height: 70, width: 100, backgroundColor: "#efdf43" }}
      >
        increase Age
      </button>
      <p>Age value {age}</p>
    </>
  );
}
