function func1()
{
    // select element by tag name / element:
    // in js -> document.getElementsByTagName(Element name)
    // in jq -> $(element name).action()
    // $("div").css('background-color', 'orange');

    // select element by id attribute. Unique.:
    // $("#div1").css('background-color', 'green');
    // $("#div2").css('background-color', 'red').fadeToggle(3000);
    $("#p1").css('font-style', 'italic');
    
    // select element by class. 
    // all item with this class attribute will be effected.
    $(".para").css('color', 'white');

    // select 2 Element,
    // $("#div1, #div2").css('background-color', 'orange');
    $("#div1, li").css('background-color', 'orange');
}