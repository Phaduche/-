import { useState } from "react";
import "./ListGroup.css";

function ListGroup() {
  const choices = ["가위", "바위", "보"];
  const [result, setResult] = useState<string | null>(null);
  const [myChoice, setMyChoice] = useState<string>("");
  const [winner, setWinner] = useState<string | null>(null);

  const getWinner = (user: string, computer: string) => {
    if (user === computer) return "무승부!";
    if (
      (user === "가위" && computer === "보") ||
      (user === "바위" && computer === "가위") ||
      (user === "보" && computer === "바위")
    ) {
      return "사용자 승!";
    }
    if (choices.includes(user)) {
      return "컴퓨터 승!";
    }
    return "잘못된 입력입니다.";
  };

  const handleClick = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setResult(randomChoice);
    setWinner(getWinner(myChoice, randomChoice));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyChoice(e.target.value);
    setResult(null);
    setWinner(null);
  };

  return (
    <div className="game-container">
      <h1 className="game-title">가위 바위 보 게임</h1>
      <input
        className="game-input"
        type="text"
        placeholder="내가 낸 것을 입력하세요 (가위, 바위, 보)"
        value={myChoice}
        onChange={handleInputChange}
        style={{
          fontSize: "1.2rem",
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
          border: "1px solid #5865F2",
          marginBottom: "1.5rem",
          outline: "none",
        }}
      />
      <button
        className="game-button"
        onClick={handleClick}
        disabled={!choices.includes(myChoice)}
      >
        시작
      </button>
      {myChoice && (
        <div className="game-mychoice">
          내가 낸 것: {myChoice}
        </div>
      )}
      {result && (
        <div className="game-result">
          컴퓨터: {result}
        </div>
      )}
      {winner && (
        <div className="game-winner">
          {winner}
        </div>
      )}
    </div>
  );
}

export default ListGroup;
