function firstWord(s) {
	let newS = s.trim().split(" ");
	if(newS === ("")){
		return("")
	}else{
	return newS[0]
	}
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
