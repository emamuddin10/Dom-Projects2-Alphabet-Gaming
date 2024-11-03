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
    const lowerAlphabet = currentAlphabet.toLocaleLowerCase()
    console.log(gamerPresed,lowerAlphabet)

    //checked macth or not
    if(gamerPresed === lowerAlphabet){
        console.log('you got a  point')
        continueGame()
    }
    else{
        console.log('you lost a life')
    }


}
//capture keyboard key press
document.addEventListener('keyup',handleKeyboardKeyPress )




function continueGame(){
    //genarate a random alphabet
    const alphabet = getARandomAlphabet()
    console.log('your random alphabet', alphabet)

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