// $("button").click(func1);

// function func1() {
//     $("#img1").css('width', '500px');
//     $("#img1").css('height', '500px');
// }

// cleaner way
// $("button").click(function(){
//     $("#img1").css('width', '500px');
//     $("#img1").css('height', '500px');
// });


// $("#btn").click(function(){
//     $("#img1").css('width', '500px');
//     $("#img1").css('height', '500px');
// });

// use ready event for good practice
$("document").ready(function(){
    $("#btn").click(function(){
        $("#img1").css('width', '500px');
        $("#img1").css('height', '500px');
    });
});