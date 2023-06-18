const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const btnmode =document.getElementById("btn-mode");
const modetext = document.getElementById("mode-text");
const modeicon =document.getElementById("mode-icon");
const root = document.documentElement.style;
$("#first").html(window.localStorage.FirstName);
$("#a").html(window.localStorage.Age);
$("#w").html(window.localStorage.Weight);
$("#h").html(window.localStorage.Height +"(cm)");
document.querySelector("#body").innerHTML +=
 "<tr><td>Name</td><td>"+window.localStorage.FirstName+"</td></tr><tr><td>Mob no</td><td>"+window.localStorage.No+"</td></tr> <tr><td>Email</td><td>"+window.localStorage.Email+"</td></tr><tr><td>Age</td><td>"+window.localStorage.Age+"</td></tr><tr><td>Weight</td><td>"+window.localStorage.Weight+"</td></tr><tr><td>Height</td><td>"+window.localStorage.Height+"(cm)</td></tr>";
 let pro=true;
 $("main").removeClass("main2");
 $(".profile").click(function(){
	if(pro==true){
	$("main").removeClass("main2");
		$("#progress").show();
	pro=false;
	}
	else{
		$("main").addClass("main2");
		$("#progress").hide();

		pro=true
	}
  });
 function prog(){
	var pro=document.getElementById("goal2").value;
	 document.querySelector(".goalset").innerHTML +="Your Goal : "+pro+"";
 }

	// if(pro==false){
	// 	$(".profile").click(function(){
	// 	   $("main").addClass("main2");
		  
	// 	   pro=true;
	// 	 });
	// 	}
 
allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});
function addproduct(){
var act=document.getElementById("activity").value;
var due=document.getElementById("duration").value;

  document.querySelector(".add").innerHTML +=
  "<tr><td><p>"+act+"</p></td><td>"+due+" minutes</td><td><pre>Pending</pre></td></tr>";
}
let darkMode = false;
btnmode.addEventListener("click", function () {
	if (darkMode == false) {
	  darkModeProperties();
	} else {
	  lightModeProperties();
	}
  });


function darkModeProperties() {
	root.setProperty("--light", "#0C0C1E");
	root.setProperty("--grey", "#060714");
	root.setProperty("--dark", "#FBFBFB");
	// root.setProperty("--blue", "#1E2A47");
	// root.setProperty("--orenge", "rgba(70,88,109,0.15)");
	modetext.innerText = "LIGHT";
	modetext.style.color="white";
	document.getElementById("progress").style.color="white";
	modeicon.src = "./img/sun-icon.svg";
	root.setProperty("--lm-icon-bg", "brightness(1000%)");
	darkMode = true;
	console.log("darkmode changed to " + darkMode);
	localStorage.setItem("dark-mode", true);  console.log("setting dark mode to false");
  
	console.log("setting dark mode to true");
  
  }

  function lightModeProperties() {
	root.setProperty("--light", "#F9F9F9");
	root.setProperty("--blue", "#3C91E6");
	root.setProperty("--grey", "#eee");
	root.setProperty("--dark", "#2B3442");
	root.setProperty("--orenge", "rgba(70, 88, 109, 0.25)");
	modeicon.src = "./img/moon-icon.svg";
	root.setProperty("--lm-icon-bg", "brightness(100%)");
	document.getElementById("progress").style.color="black";
	modetext.innerText = "DARK";
	modetext.style.color="black";
	darkMode = false;
	console.log("darkmode changed to " + darkMode);
  
	localStorage.setItem("dark-mode", false);
	console.log("setting dark mode to false");
  }


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})


