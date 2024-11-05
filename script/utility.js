function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
 
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');

}
function removeBackgroundById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getElementValueTextById(elementId){
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText
    const integerValue = parseInt(elementValueText)
    return integerValue
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')

    const randomNumber =Math.random()*25
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index]
    return alphabet
}






//  function getRandomAlphabet(){
//      //get or create alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
//     const alphabets = alphabetString.split('')
//     // console.log(alphabets)

//    // get a random index between 0 to 25
//    const randomNumber = Math.random()*25
//    const index = Math.round(randomNumber)
   
//    const alphabet = alphabets[index]
//    console.log(index, alphabet)
//   return alphabet


// }
