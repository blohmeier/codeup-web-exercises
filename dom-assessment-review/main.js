/**
 * Write your solutions here
 */
"use strict";
/*Item 1 - When the button with the id of change-bg-color is clicked the background of the page should turn blue.*/
$('#change-bg-color').click(function() {
    $("body").css( "background-color", "blue");
});
/*Item 2 - When a button that belongs to the btn class is clicked, change the background color of that button to this color: #93f2e5.*/
$('.btn').click(function() {
    $(this).css('background-color', '#93f2e5');
});
/*Item 3 - When the button with the id of reset-btn is clicked make sure it reloads the page and restores everything back to the initial state.*/
$('#reset-btn').click(function() {
    location.reload();
});
/*Item 4 - When a star is being hovered by the mouse: get the selected data attribute value from the star being hovered and display it in the element with the id of review-result.*/
$('.star').hover(function () {
        let currentStarValue = $(this).attr('data-value');
        $('#review-result').text(currentStarValue);
    },
    function() {
        $('review-result').empty();
    });
/*Item 5 - When the button with the id of go-to-btn is clicked change the window location to the url specified in the URL input with the id of custom-url. Consider adding http:// to your URLS if you want to test external domains.*/
$('#go-to-btn').click(function() {
    let customURL = $('#custom-url').val();
    location = customURL;
});

/*Item 6 - When the button with an id of append-to-ul is clicked, append an li with the content of text to the ul with the id of append-to-me.*/
$("#append-to-ul").click(function(){
    $("#append-to-me").append('<li>text</li>');
});

/*Item 7 - Whenever a list item inside of the ul with the id of font-grow is double clicked, the font size of the list item that was clicked should be doubled. Example: If the current font-size is 12px double-clicking would turn it into 24, 48...*/

$('#font-grow').children().dblclick(function () {
    // get current size
    let currentSize = $(this).css('font-size');
    console.log(currentSize);
    // double the current size
    let doubled = parseFloat(currentSize) * 2;
    console.log(doubled);
    // reset as doubled size
    $(this).css('font-size' , doubled + 'px')

});

/*Item 8 - When the button with the id of upcase-name is clicked, the element with the id of output should display the text Your uppercase name is: + the value of the input element with the id of input transformed to uppercase.*/
$('#upcase-name').click(function () {
    let upcasedInput = $('#input').val().toUpperCase();
    $('#output').text(upcasedInput);
});

/*Item 9 - When a list item inside of the ul with the id of hl-toggle is first clicked, the background of the li that was clicked should change to yellow. When a list item that has a yellow background is clicked, the background should toggle back to the original background. Hint: you should use the yellow-bg class for this.*/

$('#hl-toggle li').click(function(){
    $(this).toggleClass('yellow-bg');
});

/*Item 10 - When an li with the class of sibling-clicker is clicked, set the font-weight of the li below it to bold. All other lis with the class of sibling-clicker should be normal. When the bottom-most li with the class of sibling-clicker is clicked, set the top-most sibling-clicker li to a font-weight of bold. Hint: Notice that the text of the bottom-most li is different.*/

$('.sibling-clicker').click(function () {

    if ($(this).text() === 'I am the last sibling') {
        $('.sibling-clicker').css('font-weight', 'normal');
        $(this).parent().children().first().css('font-weight', 'bold');
    } else {
        $('.sibling-clicker').css('font-weight', 'normal');
        $(this).next().css('font-weight', 'bold');
    }

})