let ingredients = [];
let counter = 0;

$("#searchbar").on('keypress',function(e) {
    if(e.which === 13){
        $("#search-button").click();
    }
});

$("#search-button").on('click', function(e) {

    let newIng = $("#searchbar").val();
    $("#searchbar").val("");
    if(newIng === ""){return}
    $("#ingredients form div").append(`<input type="text" name="ingredients[ing][${counter}]" value="${newIng}">`);
    counter++;
});
