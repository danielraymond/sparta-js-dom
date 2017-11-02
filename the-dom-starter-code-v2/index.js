$(function(event) {
  console.log("DOM is ready");

  var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];

    function addListItem(value) {

      $(listItems).each(function (index, items) {

        $('#list').append($("<li>" + items + "</li>"))

      })

    }

    addListItem();

    function changeClass() {

      $('li:odd').addClass('even');
      
    }

    changeClass();

    function listCount() {

      $('#count').html($("li").length);

    }

    listCount();















})
