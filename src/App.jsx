// eslint-disable

import { useState } from "react";
import "./App.css";

// 50 Dog Images

const DogsData = [
  {
    dogID: 1,
    dogURL: "https://images.dog.ceo/breeds/labrador/n02099712_6345.jpg",
    dogClicked: false,
  },
  {
    dogID: 2,
    dogURL: "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4626.jpg",
    dogClicked: false,
  },
  {
    dogID: 3,
    dogURL: "https://images.dog.ceo/breeds/terrier-american/n02093428_5297.jpg",
    dogClicked: false,
  },
  {
    dogID: 4,
    dogURL: "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2574.jpg",
    dogClicked: false,
  },
  {
    dogID: 5,
    dogURL: "https://images.dog.ceo/breeds/kuvasz/n02104029_3991.jpg",
    dogClicked: false,
  },
  {
    dogID: 6,
    dogURL: "https://images.dog.ceo/breeds/retriever-curly/n02099429_1465.jpg",
    dogClicked: false,
  },
  {
    dogID: 7,
    dogURL: "https://images.dog.ceo/breeds/chihuahua/n02085620_8578.jpg",
    dogClicked: false,
  },
  {
    dogID: 8,
    dogURL: "https://images.dog.ceo/breeds/borzoi/n02090622_7663.jpg",
    dogClicked: false,
  },
  {
    dogID: 9,
    dogURL: "https://images.dog.ceo/breeds/kuvasz/n02104029_4340.jpg",
    dogClicked: false,
  },
  {
    dogID: 10,
    dogURL: "https://images.dog.ceo/breeds/spaniel-japanese/n02085782_1724.jpg",
    dogClicked: false,
  },
  {
    dogID: 11,
    dogURL:
      "https://images.dog.ceo/breeds/sheepdog-english/n02105641_13807.jpg",
    dogClicked: false,
  },
  {
    dogID: 12,
    dogURL: "https://images.dog.ceo/breeds/cattledog-australian/IMG_9350.jpg",
    dogClicked: false,
  },
  {
    dogID: 13,
    dogURL: "https://images.dog.ceo/breeds/labrador/n02099712_3430.jpg",
    dogClicked: false,
  },
  {
    dogID: 14,
    dogURL: "https://images.dog.ceo/breeds/bulldog-french/n02108915_481.jpg",
    dogClicked: false,
  },
  {
    dogID: 15,
    dogURL: "https://images.dog.ceo/breeds/rottweiler/n02106550_10588.jpg",
    dogClicked: false,
  },
  {
    dogID: 16,
    dogURL: "https://images.dog.ceo/breeds/terrier-cairn/n02096177_91.jpg",
    dogClicked: false,
  },
  {
    dogID: 17,
    dogURL: "https://images.dog.ceo/breeds/terrier-norwich/n02094258_3467.jpg",
    dogClicked: false,
  },
  {
    dogID: 18,
    dogURL: "https://images.dog.ceo/breeds/pitbull/dog-5437227_640.jpg",
    dogClicked: false,
  },
  {
    dogID: 19,
    dogURL: "https://images.dog.ceo/breeds/bulldog-french/n02108915_8923.jpg",
    dogClicked: false,
  },
  {
    dogID: 20,
    dogURL:
      "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_4098.jpg",
    dogClicked: false,
  },
  {
    dogID: 21,
    dogURL:
      "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_3605.jpg",
    dogClicked: false,
  },
  {
    dogID: 22,
    dogURL: "https://images.dog.ceo/breeds/pointer-germanlonghair/hans1.jpg",
    dogClicked: false,
  },
  {
    dogID: 23,
    dogURL: "https://images.dog.ceo/breeds/spitz-japanese/beet-003.jpg",
    dogClicked: false,
  },
  {
    dogID: 24,
    dogURL: "https://images.dog.ceo/breeds/beagle/n02088364_15093.jpg",
    dogClicked: false,
  },
  {
    dogID: 25,
    dogURL:
      "https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg",
    dogClicked: false,
  },
  {
    dogID: 26,
    dogURL: "https://images.dog.ceo/breeds/cavapoo/lulu2.jpg",
    dogClicked: false,
  },
  {
    dogID: 27,
    dogURL: "https://images.dog.ceo/breeds/hound-english/n02089973_3136.jpg",
    dogClicked: false,
  },
  {
    dogID: 28,
    dogURL: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_12877.jpg",
    dogClicked: false,
  },
  {
    dogID: 29,
    dogURL: "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_3856.jpg",
    dogClicked: false,
  },
  {
    dogID: 30,
    dogURL: "https://images.dog.ceo/breeds/cattledog-australian/IMG_1211.jpg",
    dogClicked: false,
  },
  {
    dogID: 31,
    dogURL: "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
    dogClicked: false,
  },
  {
    dogID: 32,
    dogURL: "https://images.dog.ceo/breeds/segugio-italian/n02090722_002.jpg",
    dogClicked: false,
  },
  {
    dogID: 33,
    dogURL: "https://images.dog.ceo/breeds/terrier-norwich/n02094258_1004.jpg",
    dogClicked: false,
  },
  {
    dogID: 34,
    dogURL: "https://images.dog.ceo/breeds/setter-english/n02100735_4172.jpg",
    dogClicked: false,
  },
  {
    dogID: 35,
    dogURL: "https://images.dog.ceo/breeds/komondor/n02105505_955.jpg",
    dogClicked: false,
  },
  {
    dogID: 36,
    dogURL: "https://images.dog.ceo/breeds/tervuren/yoda_in_garden.jpg",
    dogClicked: false,
  },
  {
    dogID: 37,
    dogURL: "https://images.dog.ceo/breeds/stbernard/n02109525_8312.jpg",
    dogClicked: false,
  },
  {
    dogID: 38,
    dogURL: "https://images.dog.ceo/breeds/affenpinscher/n02110627_13210.jpg",
    dogClicked: false,
  },
  {
    dogID: 39,
    dogURL: "https://images.dog.ceo/breeds/pointer-german/n02100236_4463.jpg",
    dogClicked: false,
  },
  {
    dogID: 40,
    dogURL: "https://images.dog.ceo/breeds/airedale/n02096051_3338.jpg",
    dogClicked: false,
  },
  {
    dogID: 41,
    dogURL:
      "https://images.dog.ceo/breeds/terrier-patterdale/patterdale-terrier-287612805105275kBT.jpg",
    dogClicked: false,
  },
  {
    dogID: 42,
    dogURL: "https://images.dog.ceo/breeds/entlebucher/n02108000_2028.jpg",
    dogClicked: false,
  },
  {
    dogID: 43,
    dogURL: "https://images.dog.ceo/breeds/pyrenees/n02111500_3306.jpg",
    dogClicked: false,
  },
  {
    dogID: 44,
    dogURL: "https://images.dog.ceo/breeds/labrador/n02099712_7533.jpg",
    dogClicked: false,
  },
  {
    dogID: 45,
    dogURL: "https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg",
    dogClicked: false,
  },
  {
    dogID: 46,
    dogURL: "https://images.dog.ceo/breeds/kelpie/n02105412_2355.jpg",
    dogClicked: false,
  },
  {
    dogID: 47,
    dogURL: "https://images.dog.ceo/breeds/samoyed/n02111889_1444.jpg",
    dogClicked: false,
  },
  {
    dogID: 48,
    dogURL: "https://images.dog.ceo/breeds/malamute/n02110063_13837.jpg",
    dogClicked: false,
  },
  {
    dogID: 49,
    dogURL: "https://images.dog.ceo/breeds/terrier-border/n02093754_1861.jpg",
    dogClicked: false,
  },
  {
    dogID: 50,
    dogURL: "https://images.dog.ceo/breeds/terrier-scottish/n02097298_9651.jpg",
    dogClicked: false,
  },
];

let dogClickedTrueCount = 0;
let clickedObjects = [0];
let clickedDogs = [];
let bestScoreArray = [0];

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameover, setGameover] = useState(false);

  const [Dogs, setDogs] = useState(DogsData.slice(0, 2));

  // handle click
  function handleClick(id) {
    validateClick(id);
    const upDateDogs = Dogs.map((dog) => {
      if (dog.dogID === id) {
        dogClickedTrueCount = dogClickedTrueCount + 1;
        setScore((score) => score + 1);

        clickedDogs.push(dog.dogID);
        return { ...dog, dogClicked: true };
      }
      console.log(clickedDogs);
      return dog;
    });

    // validate click
    function validateClick(targetId) {
      if (
        clickedDogs.find((id) => id == targetId) == undefined ||
        clickedDogs.length == 0
      ) {
        return;
      } else {
        [...clickedObjects, clickedDogs.find((dog) => dog.dogID == targetId)];
        setGameover(true);
        bestScoreArray.push(score);
        if (score > bestScoreArray.max) {
          setBestScore(score);
        }
        window.location.reload();
      }
      console.log("Clicked Dogs", clickedObjects);
    }

    // add more images
    if (dogClickedTrueCount == upDateDogs.length) {
      let output = upDateDogs.filter((dog) => dog.dogClicked == true);
      let addDogs = DogsData.slice(
        dogClickedTrueCount,
        dogClickedTrueCount + 5
      );
      output = [...output, ...addDogs];
      setDogs(output);
      console.log("Dogs in Array", output);
    } else {
      const shuffledDogs = [...upDateDogs].sort(() => Math.random() - 0.5);
      setDogs(shuffledDogs);
    }

    // console.log(dogClickedTrueCount);
  }

  return (
    <div className="App">
      <div className="header">
        <h2>Memory Game</h2>
        <div className="scoreBoard">
          <p className="score">Score: {score}</p>
          <p className="highScore">Best Score: {bestScore}</p>
        </div>
        {/* <button onClick={printDogs}>Get Dogs</button> */}
      </div>

      <div className="playArea">
        <div className="cardGrid">
          {Dogs.map((dogObject, index) => {
            return (
              <div className="card" key={index}>
                <img
                  key={dogObject.dogID}
                  src={dogObject.dogURL}
                  onClick={() => handleClick(dogObject.dogID)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {gameover && (
        <div className="alertDisplay">
          {" "}
          <h1 className="displayText">Game Over</h1>
        </div>
      )}
    </div>
  );
};

export default App;
