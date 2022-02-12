import { useSelector, useDispatch } from "react-redux";
import { reverse, reverseSelector } from "./reverseSlice";

export function Reverse() {
  const dispatch = useDispatch();
  const reversedStr = useSelector(reverseSelector);
  return (
    <section className="reverse input-area">
      <h2>Reverse String</h2>
      <input type="text" onInput={(e) => {dispatch(reverse(e.target.value))}}/>
      <div>{reversedStr}</div>
    </section>
  );
}
