function checkPalyndrome(word) {
    
    var reversedWord = "";
    for (var sayac = word.length - 1; sayac >= 0; sayac--) {
        reversedWord += word[sayac];
        console.log("22. satır: " + sayac + "-" + word[sayac]);
    }
    var result = false;
    if (word == reversedWord) {
        result = true;
    }
    return result;
}

function buttonClick() {
    var input = document.getElementById("input");
    var result = document.getElementById("result");
    var inputWord = input.value;
    var isPalyndrome = checkPalyndrome(inputWord);
    console.log("36.satır is palyndrome: " + isPalyndrome)
    if (isPalyndrome) {
        result.innerHTML = "<strong> This is a palyndrome! </strong>";
    }
    else {
        result.innerHTML = "<strong> This isn't a palyndrome. </strong>";
    }
}