// $(document).ready(function () {
//   $("button").click(function () {
//     $(this).css("color", "red");
//     $("p").hide(1000,function(){$("span").toggle()});
//   });
//   $("button").hover(function () {
//     $(this).css("color", "green")
//     },function () {
//     $(this).css("color", "blue")
//     });
// });


//........................login...........................................

// $(document).ready(function(){
//     $(".log").animate({
//         top : "50px"
//     },700);

//     $(".log").animate({
//         width : "+=100px"
//     },700);

//     $(".log").animate({
//         height : "250px"
//     },500);

//     $(".log").animate({
//         borderRadius : "25px"
//         //when boreder raduis finish start fedein
//     },700,function(){
//         $("h2").fadeTo(700,0.5,function(){
//         $("p").fadeTo(2000,1);
//         $("#name").slideDown(1000);
//         $("#pass").slideDown(1000);
//         });
//         $("h2").fadeTo(1000,1,function(){

//             $("button").animate({
//                 right : "30px"
//             },750);
//             $("label").animate({
//                 left : "35px"
//             },750);
//             $("#remember").animate({
//                 left : "15px"
//             },750);
//         });
//     });
// });

 // .............................future event.......................................

// $(document).ready(function(){
//     $("body").on("click",".btn", function(){
//         $("<div></div>").insertAfter($(this));
//         $("div").addClass("created");
//     });

//     $("body").on("click", ".created", function(){
//         $("<p>i am a future created p </p>").appendTo($(this));

//     });
// });

 // ....................text selected and copied................................................

// $(document).ready(function(){
//     $("button").hover(
//         function(){
//         $(this).css({
//             "color":"#e91e63",
//             "backgroundColor": "#eee"
//         });
//         },
//         function(){
//         $(this).css({
//             "color":"#eee",
//             "backgroundColor": "#e91e63"
//         });
//     }).on("click",function(){
//         $("textarea").select();
//         navigator.clipboard.writeText($("textarea").text());
//         $("span").fadeIn(700).fadeOut(3000);
//     });

// });

/*  ..........................scroll Up............................................  */

// $(document).ready(function(){

//     $(window).scroll(function(){
//         let Y = $(window).scrollTop();
//         if(Y > 1000){ // 1000 can be =>  $("div").offset().top
//             $("div").fadeIn(1000);
//         }
//         else{
//             $("div").fadeOut(1000);
//         }
//         $("div").on("click", function(){
//             $("HTML, body").animate({
//                 "scrollTop" : 0
//             },1000);
//         });
//     });
// });


let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*  .........................clone.............................................  */

// $(document).ready(function(){
//     $("div").hover(function(){
//         $(this).css("color","red")
//     },function(){
//         $(this).css("color","black")
//     });

//     $("button").one("click", function(){
//         $("div").clone(true).appendTo("body");
//     });
// });

/*  ..........................replaceWith............................................  */

// $(document).ready(function(){
//        $("body").on("click","div", function(){
//         $(this).replaceWith("<input type='text' value='" + $(this).text() + "'>");
//         $("button").fadeIn(1000);
//        });

//        $("button").on("click", function(){
//         $("input").replaceWith("<div>"+ "your name is "  + $("input").val() +  "</div>");
//         $(this).fadeOut(1000);
//        });

//     });

    /*  ......................................................................  */

    