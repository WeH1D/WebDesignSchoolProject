var bookmark_1 = document.getElementById("travel");
var bookmark_2 = document.getElementById("places");
var bookmark_3 = document.getElementById("thoughts");
var bookmark_4 = document.getElementById("info");

var active_1 = false;
var active_2 = false;
var active_3 = false;
var active_4 = false;

var page_1 = document.getElementById("page1");
var page_2 = document.getElementById("page2");

var travelStr = document.getElementById("travelStr");
var placesStr = document.getElementById("placesStr");
var thoughtsStr = document.getElementById("thoughtsStr");
var infoStr = document.getElementById("infoStr");


function choose(id)
{
    switch(id)
    {
        case 1: active_1 = false; active_2 = true; active_3 = true; active_4 = true; break;
        case 2: active_1 = true; active_2 = false; active_3 = true; active_4 = true; break;
        case 3: active_1 = true; active_2 = true; active_3 = false; active_4 = true; break;
        case 4: active_1 = true; active_2 = true; active_3 = true; active_4 = false; break;
    }
   
    if(active_1 == false){
        bookmark_1.style.width = 70 + "px";
        bookmark_1.style.boxShadow = "0px 0px 0px 0px black";
        page_1.style.border = "10px solid chartreuse";
        page_1.style.borderRight = "0";
        page_2.style.border = "10px solid chartreuse";
        page_2.style.borderLeft = "0";
        travelStr.style.display = "block";
        active_1 = true;
        }
    else{
        bookmark_1.style.width = 40 + "px";
        bookmark_1.style.boxShadow = "inset 10px 0px 30px -5px black";
        console.log(bookmark_1.style.boxShadow);
        travelStr.style.display = "none";
        active_1= false;
        } 
       
    if(active_2 == false){
        bookmark_2.style.width = 70 + "px";
        bookmark_2.style.boxShadow = "0px 0px 0px 0px black";
        page_1.style.border = "10px solid blueviolet";
        page_1.style.borderRight = "0";
        page_2.style.border = "10px solid blueviolet";
        page_2.style.borderLeft = "0";
        placesStr.style.display = "block";

        active_2 = true;
        }
    else{
        bookmark_2.style.width = 40 + "px";
        bookmark_2.style.boxShadow = "inset 10px 0px 30px -5px black";
        placesStr.style.display = "none";
        active_2 = false;
        } 
      
    if(active_3 == false){
        bookmark_3.style.width = 70 + "px";
        bookmark_3.style.boxShadow = "0px 0px 0px 0px black";
        page_1.style.border = "10px solid darkorange";
        page_1.style.borderRight = "0";
        page_2.style.border = "10px solid darkorange";
        page_2.style.borderLeft = "0";
        thoughtsStr.style.display = "block";
        active_3 = true;
        }
    else{
        bookmark_3.style.width = 40 + "px";
        active_3 = false;
        thoughtsStr.style.display = "none";
        bookmark_3.style.boxShadow = "inset 10px 0px 30px -5px black";
        } 
      
     if(active_4 == false){
        bookmark_4.style.width = 70 + "px";
        bookmark_4.style.boxShadow = "0px 0px 0px 0px black";
        page_1.style.border = "10px solid lightseagreen";
        page_1.style.borderRight = "0";
        page_2.style.border = "10px solid lightseagreen";
        page_2.style.borderLeft = "0";
        infoStr.style.display = "block";
        active_4 = true;
        }
    else{
        bookmark_4.style.width = 40 + "px";
        bookmark_4.style.boxShadow = "inset 10px 0px 30px -5px black";
        infoStr.style.display = "none";
        active_4 = false;
        }
        
}


function validate()
{
    $.validator.addMethod(
        "regex", 
        function(value, element, regexp) {
             var check = false;
              return this.optional(element) || regexp.test(value);
               },
       "Please check your input."
   );
   

      $("#forma").validate({
           rules:{
               name:{
                   required : true,
                   minlength : 2,
               },
               surname: {
                   required : true,
                   minlength : 2,
               },
               email: {
                   required : true,
                   minlength : 2,
                   regex: /[A-Za-z._-]{1,}@\w{1,5}\.\w{1,5}/
               },
               number:{
                required : true,
                minlength : 2,
                regex:/^\d$/
               }
            }
        
      });
}

