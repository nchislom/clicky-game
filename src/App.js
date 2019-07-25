import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ScoreBoard from "./components/ScoreBoard";

let currentScore = 0;
let highestScore = 0;
let guessedCards = [];

// Function used to take array of cards, shuffle, and return altered array
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  clickCard = id => {
    if(guessedCards.includes(id)){
      if(currentScore > highestScore){
        highestScore = currentScore;
      }
      currentScore = 0;
      guessedCards = [];
      this.setState({ friends });
    } else {
      guessedCards.push(id);
      currentScore++;
      this.setState({ friends });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    this.state.friends = shuffleArray(this.state.friends);
    return (
      <Wrapper>
        <Title>Clicky Game
        <ScoreBoard
          current={currentScore}
          high={highestScore}
        />
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCard={this.clickCard}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
