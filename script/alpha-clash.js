// function play(){
//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground-section')
//         playGroundSection.classList.remove('hidden')
// }
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