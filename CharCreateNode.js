function Character(name, profession, gender, age, strength, hitpoints) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitpoints = hitpoints;
	
	//prints the stats for a character
	this.printStats = function() {
		console.log("Name : " + this.name);
		console.log("Profession : " + this.profession);
		console.log("Gender : " + this.gender);
		console.log("Age : " + this.age);
		console.log("Strength : " + this.strength);
		console.log("Hitpoints : " + this.hitpoints.toFixed(2) + "\n");
	}

	//checks if character has any hitpoints left
	this.isAlive = function() {
		if(this.hitpoints > 0) {
			console.log(this.name + " is still alive and has " + this.hitpoints.toFixed(2) + " hp left.");
			console.log("\n-------------\n");
			return true;
		}else {
			console.log(this.name + " has died! Game Over!");
			return false;
		}
		
	};
	
	// method which takes in a second object and decreases their "hitpoints" by this character's strength
	this.attack = function(character2) {
    	character2.hitpoints -= this.strength;
  	};

  	// method which increases this character's stats when called
  	this.levelUp = function() {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  };

};

//creates two characters using the "Character" constructor
var boss = new Character("Tony Montana", "Kingpin", "male", 28, 18.7, 250);
var power = new Character("Ghost", "Entrepreneur", "male", 33, 20, 230);

boss.printStats();
power.printStats();

boss.attack(power);
power.printStats();
power.isAlive();

boss.levelUp();
boss.printStats();


// while loop that continues to run so long as both characters' "hitpoints" are above zero
while (boss.isAlive() === true && power.isAlive() === true) {
  // characters deal damage to one another
  boss.attack(power);
  power.attack(boss);
  // prints stats to show changes
  boss.printStats();
  power.printStats();
}