import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={text}
        placeholder="Type some text here"
        onChange={(event) => setText(event.target.value)}
      />
      <CopyToClipboard text={text} onCopy={onCopyText}>
        <div className="copy-area">
          <button>Copy to Clipboard</button>
          <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
            Copied!
          </span>
        </div>
      </CopyToClipboard>
    </div>
  );
}