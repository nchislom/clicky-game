import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

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
    console.log('Card id: ' + id);
    console.log(guessedCards);
    if(guessedCards.includes(id)){
      console.log('You Lose!');
    } else {
      guessedCards.push(id);
      // Filter this.state.friends for friends with an id not equal to the id being removed
      // const friends = this.state.friends.filter(friend => friend.id !== id);
  
      // Set this.state.friends equal to the new friends array
      this.setState({ friends });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    this.state.friends = shuffleArray(this.state.friends);
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCard={this.clickCard}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
