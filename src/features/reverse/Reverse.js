import { useSelector, useDispatch } from "react-redux";
import { reverse } from "./reverseSlice";

export function Reverse() {
  const dispatch = useDispatch();
  const reversedStr = useSelector((state) => state.reverse.reversedString);
  return (
    <div>
      <input type="text" onInput={(e) => {dispatch(reverse(e.target.value))}}/>
      <div>{reversedStr}</div>
    </div>
  );
}
