import { useSelector, useDispatch } from "react-redux";
import { shuffle } from "./shuffleSlice";

export function Shuffle() {
  const dispatch = useDispatch();
  const shuffledStr = useSelector((state) => state.shuffle.shuffledString);
  return (
    <div>
      <input type="text" onInput={(e) => {dispatch(shuffle(e.target.value))}}/>
      <div>{shuffledStr}</div>
    </div>
  );
}
