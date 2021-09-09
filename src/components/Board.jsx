import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { randomSequence } from "../random";
import data from "../ressources/myData.json"; 
import { AwesomeButton } from "react-awesome-button";
import ReactStoreIndicator from 'react-score-indicator'

import "../App.css";
/////////////////// /
//Score
/////////////// 
/*const Result = () => {
  return <div>{score}</div>;
};*/
/////////////////////
//Board
////////////////////
const synonymsDictionary = data.split(" ");

function range(start, stop) {
  // [start, start + 1, ..., stop - 1]
  return Array.from(Array(stop - start).keys()).map(v => start + v);
}

const LinesCount = 3;
const ColumnsCount = 4;
const SynonymesCount = (LinesCount * ColumnsCount) / 2;

function generateRandomWords() {
  const randomSynonyms = randomSequence(synonymsDictionary).slice(
    0,
    SynonymesCount
  );
  const words = randomSynonyms.flatMap(pair => pair.split("-"));
  const areSynonyms = (word1, word2) => {
    return (
      randomSynonyms.includes(`${word1}-${word2}`) ||
      randomSynonyms.includes(`${word2}-${word1}`)
    );
  };
  const randomWords = randomSequence(words);
  return { randomWords, areSynonyms };
}

function useMemoryBoardGame() {
  // Gamestate
  const [{ randomWords, areSynonyms }, setRandomWords] = useState(
    generateRandomWords
  );
  const [couplechoisi, setCouplechoisi] = useState([]);
  const [completedWords, setCompletedWords] = useState([]);
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);

  // Gameplay
  function choisirMot(mot) {
    if (couplechoisi.length === 2) {
      return;
    }
    setClicks(clicks + 1);
    // mise à jour score / couple choisi
    const nouveauCouplechoisi = [...couplechoisi, mot];
    if (nouveauCouplechoisi.length === 2) {
      const [word1, word2] = nouveauCouplechoisi;
      if (areSynonyms(word1, word2)) {
        // mise à jour du score
        setCompletedWords([...completedWords, [word1, word2]]);
        setScore(score + 1);
      }
    }
    setCouplechoisi(nouveauCouplechoisi);
  }

  // restart game
  function restartGame() {
    //
    setScore(0);
    setClicks(0);
    setCouplechoisi([]);
    setCompletedWords([]);
    setRandomWords(generateRandomWords);
  }

  useEffect(() => {
    // effet de bord
    if (couplechoisi.length === 2) {
      setTimeout(() => setCouplechoisi([]), 1000);
    }
  }, [couplechoisi]);

  return {
    randomWords,
    choisirMot,
    couplechoisi,
    score,
    clicks,
    completedWords,
    restartGame
  };
}

export default function Board() {
  const {
    randomWords,
    choisirMot,
    couplechoisi,
    score,
    clicks,
    completedWords,
    restartGame
  } = useMemoryBoardGame();
  const Result = () => {
    return (
    <div style={{backgroundColor:"#424C55",maxHeight:"10vh",padding:"10px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:15}}>
      <p style={{margin:0}}>Score : {score}</p>
    </div>);
  };
  return (
    <div className="memory-game" style={{display:'flex',alignContent:"center",justifyContent:"center",height:'100%',width:"100%"}}>
      <div className="memory-game" style={{display:'flex',alignContent:"center",justifyContent:"center",height:'100%',width:"100%"}}>
        {range(0, LinesCount).map(line => (
          <div key={String(line)} className="border-row">
            {range(0, ColumnsCount).map(column => {
              const index = line * ColumnsCount + column;
              const text = randomWords[index];
              const isDisplayed =
                couplechoisi.includes(text) ||
                completedWords.some(couple => couple.includes(text));
              return (
                <Cell
                  className="memory-card"
                  key={String(index)}
                  valeur={text}
                  isDisplayed={isDisplayed}
                  onSelected={() => choisirMot(text)}
                />
              );
            })}
          </div>
        ))}
        <div>
        <ReactStoreIndicator
        value={score}
        maxValue={6}
        width={100}
      />
        <AwesomeButton  onPress={restartGame}>Reset</AwesomeButton>
        </div>
      </div>
      
    </div>
  );
}
