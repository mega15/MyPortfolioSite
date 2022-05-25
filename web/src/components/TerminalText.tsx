import { useEffect, useState } from "react";

import 'terminal.css'
import "./TerminalText.css";

export default function TerminalText(props:{texts:string[]}) {
    const fowardSpeed = 90;
    const backwardsSpeed = 70;
    const finalOfWord = 1400;

    const [screenText, setScreenText] = useState<string>("");
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [isFowards, setIsFowards] = useState<boolean>(true);
    const [speed, setSpeed] = useState<number>(fowardSpeed);

    function delay(milliseconds:number){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
    
    useEffect( () => {

        const interval = setInterval(async () => {

            if(wordIndex < props.texts.length){
                let word = props.texts[wordIndex];

                if(isFowards && charIndex < word.length){
                    setScreenText(screenText+word[charIndex]);
                    setCharIndex(charIndex+1);
                }
                else if (isFowards && charIndex === word.length){
                    await delay(finalOfWord);
                    setSpeed(backwardsSpeed);
                    setIsFowards(false);
                }
                else if (!isFowards && charIndex > 0){
                    setScreenText(screenText?.substring(0, screenText.length-2));
                    setCharIndex(charIndex-1);
                }
                else{
                    setSpeed(fowardSpeed);
                    setWordIndex(wordIndex+1);
                    setIsFowards(true);
                }
            }
            else{
                setWordIndex(0);
            }

          }, speed); 
        
          return () => clearInterval(interval);
    });

    return (
        <div className="terminal-word terminal-prompt">
            <span className="active-terminal">
                {screenText}
            </span>
        </div>
    );
}