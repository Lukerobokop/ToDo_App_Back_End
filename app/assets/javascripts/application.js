// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
    console.log("the ship has landed")
    $("#add-to-do-button").click(function(){
        console.log("this Works")
            var NameOfTodo=$("#Add-todo-textbox").val()
              var lengthOfTodo=$("#add-length-textbox").val()
            $("ul").append("<li><input type='checkbox'/>"+NameOfTodo+"<span class= 'time-estimate'> "+lengthOfTodo+" minutes</span></li>")
  

            console.log*(lengthOfTodo)
        
    })
   
    $("input[type='checkbox']").click(function(){
        $(this).closest("li").toggleClass("completed-todo")
    })
})