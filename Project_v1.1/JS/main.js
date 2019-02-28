function autocomplete(inp, arr) {
          
          var currentFocus;
          
          inp.addEventListener("input", function(e) {
              var a, b, i, val = this.value;
              
              closeAllLists();
              if (!val) { return false;}
              currentFocus = -1;
              
              a = document.createElement("DIV");
              a.setAttribute("id", this.id + "autocomplete-list");
              a.setAttribute("class", "autocomplete-items");
              
              this.parentNode.appendChild(a);
              
              for (i = 0; i < arr.length; i++) {
                
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                  
                  b = document.createElement("DIV");
                  b.setAttribute("class", "well well-sm demo");
                  b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                  b.innerHTML += arr[i].substr(val.length);
                  b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                  b.addEventListener("click", function(e) {
                      
                      inp.value = this.getElementsByTagName("input")[0].value;
                      
                      closeAllLists();
                  });
                  a.appendChild(b);
                }
              }
          });
          
          
          function closeAllLists(elmnt) {
            
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
              if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
              }
            }
          }
          
          document.addEventListener("click", function (e) {
              closeAllLists(e.target);
          });
        }
        


function getMovie(value){
    var title = "";
    if(!value){
       title = document.getElementById("searchText").value;
        
    }
    else{
        title = value;
    
    }
     if(!title){
         return false;
     }
    var xhttp = new XMLHttpRequest();
    var resp;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resp = JSON.parse(this.response);
            //alert(resp.Title);
            document.getElementById("movies").innerHTML= "Movie : '" + resp.Title + "'<br>     Year : " + resp.Year;
            addRecent(title);
        }
    };
    xhttp.open("GET", "http://www.omdbapi.com/?apikey=3df7988c&t=" + title, true);
    xhttp.send();
    
}
var arr = [];
function addRecent(title){
    if(arr.length == 5){
        arr.shift();
        if(arr.indexOf(title) == -1){
            arr.push(title);
        }
        else{
            arr.splice(arr.indexOf(title),1);
            arr.push(title);
        }
        
    }
    else{
        if(arr.indexOf(title) == -1){
            arr.push(title);
        }
        else{
            arr.splice(arr.indexOf(title),1);
            arr.push(title);
        }
    }
    
    var i;
    var list = "<ul>";
    var str = "";
    var first = 0;
    var last = 0;
    var popTitle = "";
    var value = "";
    for(i=arr.length-1;i>=0;i--){
        list += "<li> <a href = '#' class = 'request'>"  + arr[i] + "</a><span class='close' data-dismiss='alert' aria-label='close' >&times;</span></li>" ;
    }
    list += "</ul>";
    document.getElementById("recent").innerHTML=list;
    var request = document.getElementsByClassName("request");
    for(i = 0;i<request.length;i++){
        request[i].addEventListener("click",function(){
            
            value = this.parentNode.innerHTML;
            first = value.indexOf(">");
            last = value.indexOf("<",first+1); 
            value = value.slice(first+1,last);
            getMovie(value);
            
        });
    }
    
    
    
    
    
    var closebtns = document.getElementsByClassName("close");
    for (i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
        str = this.parentNode.innerHTML;
        first = str.indexOf(">");
        last = str.indexOf("<",first+1);
          
        popTitle = str.slice(first+1,last);
        var n = arr.indexOf(popTitle);
        arr.splice(n,1);
        
        
       });
    }
}

            
        var movies = ["Jurassic World",
"Star Wars: The Force Awakens",
"Avengers: Age of Ultron",
"Inside Out",
"Furious 7",
"Minions",
"The Hunger Games: Mockingjay - Part 2",
"The Martian",
"Cinderella (2015)",
"Spectre",
"Mission: Impossible - Rogue Nation",
"Pitch Perfect 2",
"Ant-Man",
"Home (2015)",
"Hotel Transylvania 2",
"Fifty Shades of Grey",
"The SpongeBob Movie: Sponge Out of Water",
"Straight Outta Compton",
"San Andreas",
"Mad Max: Fury Road",
"The Divergent Series: Insurgent",
"Kingsman: The Secret Service",
"The Peanuts Movie",
"Spy",
"Trainwreck",
"The Good Dinosaur",
"Creed",
"Tomorrowland",
"Get Hard",
"Terminator: Genisys",
"Taken 3",
"Maze Runner: The Scorch Trials",
"Ted 2",
"Pixels",
"Goosebumps",
"Paddington",
"The Intern",
"Paul Blart: Mall Cop 2",
"Bridge of Spies",
"War Room",
"Magic Mike XXL",
"The Visit",
"The Wedding Ringer",
"Black Mass",
"Vacation",
"The Perfect Guy",
"Fantastic Four",
"Focus (2015)",
"Southpaw",
"Insidious Chapter 3",
"Daddy's Home",
"Alvin and the Chipmunks The Road Chip",
"Poltergeist (2015)",
"Jupiter Ascending",
"Sicario",
"The Man From U.N.C.L.E.",
"McFarland, USA",
"The Gift (2015)",
"Sisters",
"Everest (2015)",
"The Night Before",
"Max (2015)",
"The Age of Adaline",
"Krampus",
"The Longest Ride",
"The Boy Next Door",
"Pan",
"Hot Pursuit",
"The DUFF",
"Woman in Gold",
"The Second Best Exotic Marigold Hotel",
"Unfriended",
"Entourage",
"Paper Towns",
"Chappie",
"Crimson Peak",
"A Walk in the Woods",
"Sinister 2",
"The Last Witch Hunter",
"No Escape",
"Ricki and the Flash",
"The Woman in Black 2: Angel of Death",
"Run All Night",
"Love the Coopers",
"The Lazarus Effect",
"Ex Machina",
"Spotlight",
"The Gallows",
"In the Heart of the Sea",
"Joy",
"Hitman: Agent 47",
"Project Almanac",
"Black or White",
"Aloha",
"The Secret in their Eyes (2015)","The Big Short",
"Shaun the Sheep Movie",
"Brooklyn",
"Still Alice",
"Paranormal Activity: The Ghost Dimension",
"American Sniper",
"The Hunger Games: Mockingjay - Part 1",
"Guardians of the Galaxy",
"Captain America: The Winter Soldier",
"The LEGO Movie",
"The Hobbit: The Battle of the Five Armies",
"Transformers: Age of Extinction",
"Maleficent",
"X-Men: Days of Future Past",
"Big Hero 6",
"Dawn of the Planet of the Apes",
"The Amazing Spider-Man 2",
"Godzilla (2014)",
"22 Jump Street",
"Teenage Mutant Ninja Turtles (2014)",
"Interstellar",
"How to Train Your Dragon 2",
"Gone Girl",
"Divergent",
"Neighbors",
"Ride Along",
"Rio 2",
"Into the Woods",
"Lucy",
"The Fault in our Stars",
"Unbroken",
"Night at the Museum: Secret of the Tomb",
"Mr. Peabody & Sherman",
"300: Rise of An Empire",
"The Maze Runner",
"The Equalizer",
"Noah",
"Edge of Tomorrow",
"Non-Stop",
"Heaven is for Real",
"The Imitation Game",
"Dumb and Dumber To",
"Annie (2014)",
"Fury (2014)",
"Tammy",
"Annabelle",
"The Other Woman (2014)",
"Penguins of Madagascar",
"Let's Be Cops",
"The Monuments Men",
"Hercules (2014)",
"The Purge: Anarchy",
"Alexander and the Terrible, Horrible, No Good, Very Bad Day",
"Think Like a Man Too",
"Exodus: Gods and Kings",
"The Nut Job",
"God's Not Dead",
"Son of God",
"Planes: Fire & Rescue",
"The Grand Budapest Hotel",
"RoboCop (2014)",
"Dracula Untold",
"Horrible Bosses 2",
"The Hundred-Foot Journey",
"No Good Deed (2014)",
"Selma",
"Muppets Most Wanted",
"Ouija",
"The Boxtrolls",
"Jack Ryan: Shadow Recruit",
"If I Stay",
"The Book of Life (2014)",
"About Last Night (2014)",
"Into The Storm",
"The Judge",
"Jersey Boys",
"Blended",
"The Giver",
"St. Vincent",
"Need for Speed",
"A Million Ways to Die in the West",
"John Wick",
"Birdman",
"Dolphin Tale 2",
"The Expendables 3",
"Earth to Echo",
"Sex Tape",
"Wild (2014)",
"Million Dollar Arm",
"The Theory of Everything",
"This is Where I Leave You",
"The Gambler",
"Paranormal Activity: The Marked Ones",
"Nightcrawler",
"Chef",
"Get On Up",
"3 Days to Kill",
"Deliver Us From Evil",
"When the Game Stands Tall",
"Draft Day",
"Oculus",
"The Best of Me",
"A Walk Among the Tombstones",
"That Awkward Moment",
"Boyhood",
"The Hunger Games: Catching Fire",
"Iron Man 3",
"Frozen",
"Despicable Me 2",
"Man of Steel",
"Gravity",
"Monsters University",
"The Hobbit: The Desolation of Smaug",
"Fast & Furious 6",
"Oz The Great and Powerful",
"Star Trek Into Darkness",
"Thor: The Dark World",
"World War Z",
"The Croods",
"The Heat",
"We're the Millers",
"American Hustle",
"The Great Gatsby (2013)",
"The Conjuring"];
    
        
autocomplete(document.getElementById("searchText"), movies);