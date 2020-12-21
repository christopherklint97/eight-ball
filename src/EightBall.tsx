import './EightBall.css'
import { useState } from "react";

/**
 * The EightBall should take a single property, answers, 
 * which should be an array of objects, with each object 
 * having a key for msg and color.
 */

type Answers = { msg: string, color: string }[]
type AnswerProps = { answers: Answers };

function EightBall(props: AnswerProps) {

  const [color, setColor] = useState('black');
  const [msg, setMsg] = useState('Think of a Question');

  function handleClick() {
    const answer = chooseAnswer(props.answers)
    setColor(answer.color);
    setMsg(answer.msg);
  };

  function chooseAnswer(answers: Answers) {
    const index = Math.floor(Math.random() * answers.length);
    return answers[index];
  };

  const divStyle = {
    backgroundColor: color,
  }

  return (
    <div style={divStyle} id='eightball' onClick={handleClick}>
      <h2>{msg}</h2>
    </div>
  );
};

export default EightBall;