

function Eleve(id, prenom, nom, sexe, age) {
	this.id = id;
	this.prenom = prenom;
	this.nom = nom;
	this.sexe = sexe;
	this.age = age;

	this.affiche = function() {
		if (this.sexe === "M") {
			console.log("Monsieur " + prenom + " " + nom);
		} 
		else if(this.sexe === "F") {
			console.log("Madame " + prenom + " " + nom);
		}
	}	
}




function Classe(){
	this.curIdEleve = 1;
	this.eleves = [];

	this.addEleve = function (prenom, nom, sexe, age){
		var eleve = new Eleve(this.curIdEleve, prenom, nom, sexe, age);
		this.eleves.push(eleve);
		this.curIdEleve++;

	}

	this.compteEleve = function(sexe) {

		var count = 0;		
		if(sexe === "A") {
			return this.eleves.length;
		}
		for(var i=0; i < this.eleves.length; i++) {

			if(this.eleves[i].sexe === sexe) {
				count++;
			}
		}
		return count;
	}


	this.afficheEleve = function() {
		for(var i=0; i < this.eleves.length; i++) {
			 this.eleves[i].affiche();
		}
	}
	

//Une méthode afficheStatClasse qui affiche le nombre total de la classe, 
//le nombre de femme, le nombre d'homme, la moyenne d'age	

	this.afficheStatClasse = function() {
		var sommeAge = 0;
		for(var i=0; i<this.eleves.length; i++) {
			sommeAge += this.eleves[i].age;
		}
		var moyenne = sommeAge / this.eleves.length;

		console.log("Il y a "+ this.eleves.length + " élèves en tout, " + this.compteEleve("F") + " fille(s) et " + 	this.compteEleve("M") + " garçon(s). La moyenne d'âge est de " +  Math.floor(moyenne) + " ans.");

	}
	
}

// var baptiste = new Eleve("", "Baptiste", "Tiramani", "M", 9);
// baptiste.affiche();

var cm1 = new Classe ();

cm1.addEleve("Baptiste", "tiramani", "M", 9);
cm1.addEleve("Jeanne", "tiramani", "F", 39);
cm1.addEleve("Jean", "Nemarre", "M", 18);
cm1.addEleve("Sara", "Fraichit", "F", 13);
cm1.addEleve("Paul", "Ochon", "M", 34);
cm1.addEleve("Jean", "Bonnot", "M", 23);


// affichage duu nombre de filles
console.log(cm1.compteEleve("M"));


// affichage de tous les élèves
cm1.afficheEleve();

// affiche les stats
cm1.afficheStatClasse();



