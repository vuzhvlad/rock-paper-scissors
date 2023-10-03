const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error');
    }
  }
  
  const getComputerChoice = () => {
      let number = Math.floor(Math.random() * 3);
      if ( number === 0 ) {
        return 'scissors';
      } else if (number === 1 ) {
        return 'paper';
      } else {
        return 'rock';
      }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie';
    }
    if ( userChoice === 'rock') {
      if  (computerChoice === 'paper') {
      return 'The Computer Won !';
    } else {
      return "You Won !"
    }
    }
  if (userChoice === 'paper') {
    if ( computerChoice === 'rock') {
    return 'You Won !';
  } else {
    return 'The Computer Won';
  }
  }
  if (userChoice === 'scissors') {
   if (computerChoice === 'paper') {
    return 'You Won !';
  } else {
    return 'The Computer Won !';
  }
  }
  if (userChoice === 'bomb') {
    if (computerChoice === 'paper' || computerChoice === 'scissors' || computerChoice === 'rock' ) {
      return 'You Won !'
    }
  }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice =  getComputerChoice();
    console.log('You threw : ' + userChoice);
    console.log('Computer chose : ' + computerChoice);
    return determineWinner(userChoice, computerChoice);
  }
  console.log(playGame());
  
  
  