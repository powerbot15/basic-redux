import {useSelector} from "react-redux";

export function Common () {
  const shuffledStr = useSelector((state) => state.shuffle.shuffledString);
  const reversedStr = useSelector((state) => state.reverse.reversedString);

  return (
    <section className="common">
      <h2>Results from both</h2>
      <div>
        {shuffledStr}
      </div>
      <div>
        {reversedStr}
      </div>
    </section>
  )
}
