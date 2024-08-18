import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./features/counter/Counterslice";
import { addHistory, selectHistory } from "./features/counter/historySlice";

const App = () => {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const history = useSelector(selectHistory);

  const handleIncrement = () => {
    dispatch(increment());
    dispatch(addHistory('Incr'));
  } 

  const handleDecrement = () => {
    dispatch(decrement());
    dispatch(addHistory('Decr'));
  }

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <p>
          {
            history.map((h, index) => (
              <span key={index}>{h + ', '}</span>
            ))
          }
        </p>
      </div>
    </div>
  )
}

export default App;