function menu(){
    var checkBox = document.getElementById("checkBox");
    var menu = document.getElementById("mobileContainer");
    var close = document.getElementById("close-menu");
    var open = document.getElementById("open-menu");

    if(checkBox.checked == true){
        menu.style.right = "0%";
        close.style.display = "block";
        open.style.display = "none";
    }else{
        menu.style.right = "-50%";
        close.style.display = "none";
        open.style.display = "block";
    }
}



var planet = document.getElementById("planet");
var active = "100%"
var disable = "40%"
function moon(){
    planet.style.backgroundImage = "url(assets/destination/image-moon.png)";
    document.getElementById("moon").style.opacity = active;
    document.getElementById("mars").style.opacity = disable;
    document.getElementById("europa").style.opacity = disable;
    document.getElementById("titan").style.opacity = disable;

    document.getElementById("moon").classList.add("p-active");
    document.getElementById("mars").classList.remove("p-active");
    document.getElementById("europa").classList.remove("p-active");
    document.getElementById("titan").classList.remove("p-active");

    document.getElementById("p-title").innerHTML = "Moon";
    document.getElementById("p-description").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    document.getElementById("p-distance").innerHTML = "384,400 Km";
    document.getElementById("p-days").innerHTML = "3 Days";
}
function mars(){
    planet.style.backgroundImage = "url(assets/destination/image-mars.png)";
    document.getElementById("moon").style.opacity = disable;
    document.getElementById("mars").style.opacity = active;
    document.getElementById("europa").style.opacity = disable;
    document.getElementById("titan").style.opacity = disable;

    document.getElementById("moon").classList.remove("p-active");
    document.getElementById("mars").classList.add("p-active");
    document.getElementById("europa").classList.remove("p-active");
    document.getElementById("titan").classList.remove("p-active");

    document.getElementById("p-title").innerHTML = "Mars";
    document.getElementById("p-description").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    document.getElementById("p-distance").innerHTML = "225 Mil. Km";
    document.getElementById("p-days").innerHTML = "9 Months";
}
function europa(){
    planet.style.backgroundImage = "url(assets/destination/image-europa.png)";
    document.getElementById("moon").style.opacity = disable;
    document.getElementById("mars").style.opacity = disable;
    document.getElementById("europa").style.opacity = active;
    document.getElementById("titan").style.opacity = disable;

    document.getElementById("moon").classList.remove("p-active");
    document.getElementById("mars").classList.remove("p-active");
    document.getElementById("europa").classList.add("p-active");
    document.getElementById("titan").classList.remove("p-active");

    document.getElementById("p-title").innerHTML = "Europa";
    document.getElementById("p-description").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    document.getElementById("p-distance").innerHTML = "628 Mil. Km";
    document.getElementById("p-days").innerHTML = "3 Years";
}
function titan(){
    planet.style.backgroundImage = "url(assets/destination/image-titan.png)";
    document.getElementById("moon").style.opacity = disable;
    document.getElementById("mars").style.opacity = disable;
    document.getElementById("europa").style.opacity = disable;
    document.getElementById("titan").style.opacity = active;

    document.getElementById("moon").classList.remove("p-active");
    document.getElementById("mars").classList.remove("p-active");
    document.getElementById("europa").classList.remove("p-active");
    document.getElementById("titan").classList.add("p-active");

    document.getElementById("p-title").innerHTML = "Titan";
    document.getElementById("p-description").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    document.getElementById("p-distance").innerHTML = "1.6 Bil. Km";
    document.getElementById("p-days").innerHTML = "7 Years";
}



function p1(){
    document.getElementById("role").innerHTML = "COMMANDER";
    document.getElementById("name").innerHTML = "DOUGLAS HURLEY";
    document.getElementById("description").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    document.getElementById("c-img").src = "assets/crew/image-douglas-hurley.png";

    document.getElementById("p1").classList.add("s-active");
    document.getElementById("p2").classList.remove("s-active");
    document.getElementById("p3").classList.remove("s-active");
    document.getElementById("p4").classList.remove("s-active");
}
function p2(){
    document.getElementById("role").innerHTML = "Mission Specialist";
    document.getElementById("name").innerHTML = "MARK SHUTTLEWORTH";
    document.getElementById("description").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    document.getElementById("c-img").src = "assets/crew/image-mark-shuttleworth.png";

    document.getElementById("p1").classList.remove("s-active");
    document.getElementById("p2").classList.add("s-active");
    document.getElementById("p3").classList.remove("s-active");
    document.getElementById("p4").classList.remove("s-active");
}
function p3(){
    document.getElementById("role").innerHTML = "PILOT";
    document.getElementById("name").innerHTML = "VICTOR GLOVER";
    document.getElementById("description").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    document.getElementById("c-img").src = "assets/crew/image-victor-glover.png";

    document.getElementById("p1").classList.remove("s-active");
    document.getElementById("p2").classList.remove("s-active");
    document.getElementById("p3").classList.add("s-active");
    document.getElementById("p4").classList.remove("s-active");
}
function p4(){
    document.getElementById("role").innerHTML = "FLIGHT ENGINEER";
    document.getElementById("name").innerHTML = "ANOUSHEH ANSARI";
    document.getElementById("description").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    document.getElementById("c-img").src = "assets/crew/image-anousheh-ansari.png";

    document.getElementById("p1").classList.remove("s-active");
    document.getElementById("p2").classList.remove("s-active");
    document.getElementById("p3").classList.remove("s-active");
    document.getElementById("p4").classList.add("s-active");
}


function bt1(){
    document.getElementById("t-title").innerHTML = "LAUNCH VEHICLE";
    document.getElementById("t-description").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

    document.getElementById("t-img").src = "assets/technology/image-launch-vehicle-portrait.jpg";

    document.getElementById("b1").classList.add("b-active");
    document.getElementById("b2").classList.remove("b-active");
    document.getElementById("b3").classList.remove("b-active");
}
function bt2(){
    document.getElementById("t-title").innerHTML = "SPACEPORT";
    document.getElementById("t-description").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

    document.getElementById("t-img").src = "assets/technology/image-spaceport-portrait.jpg";

    document.getElementById("b1").classList.remove("b-active");
    document.getElementById("b2").classList.add("b-active");
    document.getElementById("b3").classList.remove("b-active");
}
function bt3(){
    document.getElementById("t-title").innerHTML = "SPACE CAPSULE";
    document.getElementById("t-description").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

    document.getElementById("t-img").src = "assets/technology/image-space-capsule-portrait.jpg";

    document.getElementById("b1").classList.remove("b-active");
    document.getElementById("b2").classList.remove("b-active");
    document.getElementById("b3").classList.add("b-active");
}