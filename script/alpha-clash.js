// function play(){
//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground-section')
//         playGroundSection.classList.remove('hidden')
// }
function handleKeyboardKeyPress(event){
    const gamerPresed = event.key
     console.log('gamer pressed' ,gamerPresed)

    //get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase()
    console.log(gamerPresed,expectedAlphabet)

    //checked macth or not
    if(gamerPresed === expectedAlphabet){
        console.log('you got a  point')
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore)
        // // 2. increse the score by 1

        // const newScore = currentScore + 1;
        // // 3. show the update score
        // currentScoreElement.innerText = newScore ;

        //start a new round
        removeBackgroundById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('you lost a life')
        // 1.get cuurent life number
           const currentLifeNumber = document.getElementById('current-life')
           const currentLifeText =currentLifeNumber.innerText
           const currentLife = parseInt(currentLifeText)
        // 2.decrese the life count 
          const newLife = currentLife - 1;
        // 3.display the update life count
          currentLifeNumber.innerText= newLife;

    }


}
//capture keyboard key press
document.addEventListener('keyup',handleKeyboardKeyPress )




function continueGame(){
    //genarate a random alphabet
    const alphabet = getARandomAlphabet()
    // console.log('your random alphabet', alphabet)

    //set randomly genareted alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet
    
    // set background color
    setBackgroundColorById(alphabet)

}


function play(){
    hideElementById('home-section')
    showElementById('play-ground-section')
    continueGame()
    
}