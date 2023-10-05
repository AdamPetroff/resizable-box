import { useState } from "react";
import ResizableBox from "react-auto-resizable-box";

function SmallBox() {
  return (
    <div className="border-2 border-red-500 rounded-md py-2 h-10">
      This is a Small box
    </div>
  );
}

function BigBox() {
  return (
    <div className="border-2 border-red-500 rounded-md py-2 h-20">
      This is a biiiiiiiiiig box
    </div>
  );
}

function App() {
  const [texts, setTexts] = useState(["text0"]);

  const [boxSwitch, setBoxSwitch] = useState(true);

  return (
    <>
      <div>test</div>
      <div className="bg-slate-300 overflow-hidden">
        <ResizableBox className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <button
              className="border border-black rounded-md p-2"
              onClick={() => {
                setTexts((val) => [...val, "text" + val.length]);
              }}
            >
              Make bigger
            </button>
            <button
              className="border border-black rounded-md p-2"
              onClick={() => {
                setTexts((val) => val.slice(0, val.length - 1));
              }}
            >
              Make smaller
            </button>
          </div>

          {texts.map((text, index) => (
            <div className="border-2 rounded-md py-2" key={index}>
              {text}
            </div>
          ))}
        </ResizableBox>
      </div>

      <div className="flex flex-col items-stretch gap-8">
        <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-4">
          <button
            className="border border-black rounded-md p-2"
            onClick={() => {
              setBoxSwitch(true);
            }}
          >
            Make bigger
          </button>
          <button
            className="border border-black rounded-md p-2"
            onClick={() => {
              setBoxSwitch(false);
            }}
          >
            Make smaller
          </button>
        </div>
        <div className="bg-slate-200 w-auto">
          <ResizableBox duration={1} contentId={boxSwitch ? "big" : "small"}>
            {boxSwitch ? <BigBox /> : <SmallBox />}
          </ResizableBox>
        </div>

        <div className="bg-slate-200 mt-4">
          <ResizableBox
            duration={1}
            contentId={boxSwitch ? "big" : "small"}
            animation="crossFade"
            className="mb-4"
          >
            {boxSwitch ? <BigBox /> : <SmallBox />}
          </ResizableBox>
        </div>
      </div>

      <div className="max-w-[200px]">
        You can see that when you click make bigger this text doesn{"'"}t blink
        to a new place instantly, but moves there nicely
      </div>
    </>
  );
}

export default App;
