
import { useState } from 'react';
import myImg from '/img.jpeg';
import './App.css';

const App = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  return (
    <div className="d1">
      <h3>TEXT EDITOR</h3>

      <div className="editor">
        <div className="box">
          <img src={myImg} width="45%" height="90%" alt="Editor" />

          <div className="b">
            <div className="text-block">

              <div className="p-2">
                <button
                  type="button"
                  className="my-btn mr-2 ml-2"
                  onClick={() => setIsBold(!isBold)}
                >
                  B
                </button>

                <button
                  type="button"
                  className="my-btn mr-2 ml-2"
                  onClick={() => setIsItalic(!isItalic)}
                >
                  I
                </button>

                <button
                  type="button"
                  className="my-btn mr-2 ml-2"
                  onClick={() => setIsUnderline(!isUnderline)}
                >
                  U
                </button>
              </div>

              <hr />

              <div>
                <textarea
                  id="content"
                  className="textbox"
                  style={{
                    fontWeight: isBold ? 'bold' : 'normal',
                    fontStyle: isItalic ? 'italic' : 'normal',
                    textDecoration: isUnderline ? 'underline' : 'none'
                  }}
                  placeholder="Type your text here..."
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;