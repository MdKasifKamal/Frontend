var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");  
btn.addEventListener('click', function(){
var arr = [{team : "CSK",
             primary:"yellow",
             secondary:"blue"
          },
          {
            team:"MI",
            primary:"blue",
            secondary:"white"
          },
          {
            team:"RCB",
            primary:"red",
            secondary:"black"
          },
          {
            team:"SRH",
            primary:"green",
            secondary:"yellow"
          },
         {   team:"KKR",
             primary:"purple",
             secondary:"gold"}
            ];
          var a = Math.floor(Math.random()*arr.length);
          h1.innerHTML = arr[a].team;
          h1.style.backgroundColor = arr[a].primary;
          body.style.backgroundColor = arr[a].secondary;
        })