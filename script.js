let counter = 0;
$("button").click(function() {


    let kaiju1 = $(".kaiju-answer-1").val();
    console.log(kaiju1);


    let kaiju2 = $(".kaiju-answer-2").val();
    console.log(kaiju2);

    $(".results").text("");
    $(".results").append("<div>Your favortie kaiju is " + kaiju1 + "</div>");


    $(".results").append("<div>Your favortie kaiju has " + kaiju2 + "</div>");

    counter = counter + 1;
    $(".results").append(counter);

    if (kaiju1 === "50" && kaiju2 === "atomic/thunder breath") {
        $(".results").append("Your favorite kaiju  is Godzila!");
    } else if (kaiju1 === "100" && kaiju2 === "atomic/thunder breath") {
        $(".results").append("Your favorite kaiju  is Ghidorah!");
    } else if (kaiju1 === "50" && kaiju2 === "melee attacks") {
        $(".results").append("Your favorite kaiju  is King Kong!");
    } else if (kaiju1 === "100" && kaiju2 === "melee attacks") {
        $(".results").append("Your favorite kaiju  is M.U.T.O!");
    }


});