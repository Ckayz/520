import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "You accidentally clicked no, right?",
      "I believe another accident",
      "Is it another accident?",
      "Press the green button",
      "Baby no ah",
      "不可以啊",
      "不能按",
      "Nooooooo",
      "Kennottttt",
      "青色青色",
      "不可以不可以",
      "你是不是不爱我",
      "宝贝~",
      "按青青",
      "Plssss",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };


  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900 relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/assets/babe2.mp4" type="video/mp4" />
      </video>

      

      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4 colour-white text-white">
            Yayyyyyyy!!!
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://media.tenor.com/yc06y8VOrpoAAAAi/tkthao219-bubududu.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

