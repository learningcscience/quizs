




	let questions = ["What is the standard distance between the target and archer in Olympics?", "How much wood could a woodchuck chuck if a woodchuck would chuck wood?", "Which is the seventh planet from the sun?", "Which is the largest ocean on Earth?", "When was albert einstein born?", "How many permanent teeth does a adult dog have?"];

	let options = [["50 meters", "100 meters", "90 meters", "70 meters"], ["400 pounds", "700 pounds", "900 pounds", "550pounds"], ["Jupitar", "Earth", "Uranus", "Pluto"], ["Atlantic ocean", "Pacific ocean", "Arctic ocean", "Indian ocean"], ["March 14 1879", "April 20 1819", "August 3 1850", " March 15 1920"], ["29", "36", "40", "42"]];

	let correctAns = ["70 meters", "700 pounds", "Uranus", "Pacific ocean", "March 14 1879", "42"];
	
	let score = 0;
	
	let correctAudio = document.querySelector("#correct-audio");

	let incorrectAudio = document.querySelector("#incorrect-audio");

	let point = 0;

	let audio = document.getElementById("audio");
	let icons = document.querySelector("#onbtn");

      
	let index = 0;

     function loadQuestion(QuestionIndex){	
	document.querySelector("#question").innerText = questions[index];

	document.querySelector("#opt1").innerText = options[QuestionIndex][0];
	document.querySelector("#opt2").innerText = options[QuestionIndex][1];
	document.querySelector("#opt3").innerText = options[QuestionIndex][2];
	document.querySelector("#opt4").innerText = options[QuestionIndex][3];


     }

	//load first question
	loadQuestion(0);



	document.querySelector("#confirm").addEventListener("click", function(){


	let correctAnswer = correctAns[index];

	let selectedAns = "";


	if(document.querySelector("#opt-1").checked == true){
		selectedAns = document.querySelector("#opt1").innerText;
	}

	else if(document.querySelector("#opt-2").checked == true){
		selectedAns = document.querySelector("#opt2").innerText;
	}

	else if(document.querySelector("#opt-3").checked == true){
		selectedAns = document.querySelector("#opt3").innerText;
	}

	else if(document.querySelector("#opt-4").checked == true){
		selectedAns = document.querySelector("#opt4").innerText;
	}
	


	//check whether selected answer is correct or incorrect
	if(correctAnswer == selectedAns){

		//make correct section visible and hide incorrect section
		document.querySelector(".correct").style.display = "block";
		document.querySelector(".incorrect").style.display = "none";	


		//play correct audio sound effect
		if(correctAudio.paused){
			correctAudio.play();
		}
		
		//increase the score point
		score = score+1;
		document.querySelector("#score").innerText = "Score : " + score ;



		point+= 1;
		highlight(point);

		function highlight(id){
			let row = document.querySelectorAll("td");

			for(let i = 0; i<row.length; i++){
				row[i].style.backgroundColor = "#fff";
			}

			if(point >= row.length){
				point = 0;
			}
			document.getElementById(id).style.backgroundColor = "#0275d8";
		
		}


	}

	else{

		document.querySelector(".correct").style.display = "none";	
		document.querySelector(".incorrect").style.display = "block";	

		if(incorrectAudio.paused){
			incorrectAudio.play();
		}
		score = 0;
		index = 0;	
		loadQuestion(index);
	}

	});

	
	//Change question
	document.querySelector("#changeQuestion").addEventListener("click", function(){

		document.querySelector(".correct").style.display = "none";
		document.querySelector(".incorrect").style.display = "none";

		index+= 1;

		if(index >= questions.length){
			index = 0;
			score = 0;
		}

		loadQuestion(index);

	});







//function to play and pause background audio

function play(){

	audio.volume = 0.1;

	if(audio.paused){
		audio.play();
		icons.src= "images/on.png";
	}
	else{
		audio.pause();
		icons.src= "images/off.png";
	}

}

