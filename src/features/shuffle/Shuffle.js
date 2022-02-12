import { useSelector, useDispatch } from "react-redux";
import { shuffle, shuffleSelector } from "./shuffleSlice";

export function Shuffle() {
  const dispatch = useDispatch();
  const shuffledStr = useSelector(shuffleSelector);
  return (
    <section className="shuffle input-area">
      <h2>Shuffle String</h2>
      <input type="text" onInput={(e) => {dispatch(shuffle(e.target.value))}}/>
      <div>{shuffledStr}</div>
    </section>
  );
}
