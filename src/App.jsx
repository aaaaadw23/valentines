import { useState } from "react";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPos, setNoPos] = useState({ top: 0, left: 0 });
  const [runawayCount, setRunawayCount] = useState(0);

  const phrases = [
    "No",
    "Are you sure? 🥺",
    "Really sure? 😢",
    "Think again 💭",
    "Please? 💕",
    "Don't break my heart 💔",
    "Last chance 😭",
  ];

  const yesSize = 18 + noCount * 15;

  // Move No button randomly inside screen
  function handleNoHover() {
    if (runawayCount >= 2) return; // limit to 2 times
    const maxTop = window.innerHeight - 80; // keep button fully inside
    const maxLeft = window.innerWidth - 150;
    const top = Math.floor(Math.random() * maxTop);
    const left = Math.floor(Math.random() * maxLeft);
    setNoPos({ top, left });
    setRunawayCount(runawayCount + 1);
  }

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
        background: "linear-gradient(to bottom right, #ffe6f0, #ffccd5)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {yesPressed ? (
        <>
          <h1>YAYYYY ❤️🥳</h1>
          <img
            src="https://media.tenor.com/Ejtftpv2f40AAAAM/excited-love.gif"
            alt="excited love"
            width="300"
          />
          <p>
            You just made me the happiest person alive , I LOVE YOU SM , you
            mean the world to me 💖
          </p>
        </>
      ) : (
        <>
          <h1>Will you be my Valentine Mari, Hayati, Chemo Guli 💘</h1>

          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyZXBjbWU3dWw3eTRscXpnbXJnM212anZiZm85dW84cXFjZzBoaTY2ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KztT2c4u8mYYUiMKdJ/200w.gif"
            alt="cute valentine"
            width="250"
          />

          <div
            style={{ marginTop: "30px", position: "relative", height: "150px" }}
          >
            <button
              onClick={() => setYesPressed(true)}
              style={{
                fontSize: `${yesSize}px`,
                padding: "12px 25px",
                marginRight: "20px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#ff4d6d",
                color: "white",
                cursor: "pointer",
              }}
            >
              Yes 💘
            </button>

            <button
              onMouseEnter={handleNoHover}
              onClick={handleNoClick}
              style={{
                position: "absolute",
                top: `${noPos.top}px`,
                left: `${noPos.left}px`,
                fontSize: "16px",
                padding: "12px 25px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#888",
                color: "white",
                cursor: "pointer",
                transition: "top 0.2s, left 0.2s",
              }}
            >
              {phrases[Math.min(noCount, phrases.length - 1)]}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
