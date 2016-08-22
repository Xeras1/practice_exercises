var maxTurns = 10;


var Viking = function(name){
	this.life = Math.floor((Math.random() * 10) + 95);
	this.strength = Math.floor((Math.random() * 7) + 9);
	this.name = name;
	this.attack = function(value){
		return this.strength * (value)
	}
	this.getLife = function(){
		return this.life
	}
	this.getName = function(){
		return this.name
	}
}
// var a = new Viking('a')
// console.log(a.attack())
// console.log(a.attack())
// console.log(a.attack())
// console.log(a.attack())
// console.log(a.attack())


var Pit = function(vikingOne, vikingTwo){
	var i = 0;
	var result = "";
	this.vikingOne =  vikingOne; 
	this.vikingTwo = vikingTwo;
	// viking1Attack = this.vikingOne.attack()
	// viking1Attack = this.vikingOne.attack()

	this.training = function(){
		console.log(this.vikingOne.name + " (life:" + this.vikingOne.life + "): 'for Thor!'" +this.vikingOne.attack())
		console.log(this.vikingTwo.name + " (life:" + this.vikingTwo.life + "): 'say my wife i love her!'" + this.vikingTwo.attack())
		// var nextAttackPlayer1 = this.vikingOne.attack();
		// var nextAttackPlayer2 = this.vikingTwo.attack();
		
		while (i <= maxTurns ) {
			var attackOne = this.vikingOne.attack(Math.floor(Math.random() * 2) + 1)
			var attackTwo = this.vikingTwo.attack(Math.floor(Math.random() * 2) + 1)
			if (this.vikingTwo.life <= attackOne || this.vikingOne.life <= attackTwo) {
				break;
				// console.log("1   " + attackOne + attackOne)
				// console.log("2   " + attackTwo + attackTwo)
			}
			else {

			this.vikingOne.life -= attackTwo;
			this.vikingTwo.life -= attackOne;
			// console.log("11   " + attackOne)
			// console.log("22   " + attackTwo)
			console.log("ROUND: " + (i + 1))
			console.log(this.vikingOne.name + " has " + this.vikingOne.life + " life and recieves " + attackTwo + " points of damage" );
			console.log(this.vikingTwo.name + " has " + this.vikingTwo.life + " life and recieves " + attackOne + " points of damage" );
			
		}
			i++;
		}

			
		if (this.vikingOne.life > this.vikingTwo.life) {
			result = "The winner is " + this.vikingOne.name + "(life: " + this.vikingOne.life + ")" + "!!!!" + this.vikingTwo.life
		}
		else if (this.vikingOne.life === this.vikingTwo.life) {
			"brave man are hard to find, congrats"
		}
		else {
			result = "The winner is " + this.vikingTwo.name + "(life: " + this.vikingTwo.life + ")" + "!!!!" + this.vikingOne.life
		}
		return result
	}

}
var rocis = new Viking("rocis")
var juanchi = new Viking("juanchi")
var pitFights = new Pit(juanchi, rocis)



// console.log(thor.life)
// console.log(thor.strength)
// console.log(thor.name)
// console.log(thor.attack())
// console.log(thor.getLife())
// console.log(thor.getName())
console.log(pitFights.training())
