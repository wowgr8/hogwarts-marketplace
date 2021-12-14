import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $("#user").submit(function(event) {
    event.preventDefault();
    const first = $("input#first").val();
    const last = $("input#last").val();
    const addr = $("input#addr").val();

    $(".first-span").text(first);
    $(".last-span").text(last);
    $(".addr-span").text(addr);

    $("#receipt").show();
  });
});