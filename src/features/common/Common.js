import {useSelector} from "react-redux";

export function Common () {
  const shuffledStr = useSelector((state) => state.shuffle.shuffledString);
  const reversedStr = useSelector((state) => state.reverse.reversedString);

  return (
    <div>
      <div>
        {shuffledStr}
      </div>
      <div>
        {reversedStr}
      </div>
    </div>
  )
}
