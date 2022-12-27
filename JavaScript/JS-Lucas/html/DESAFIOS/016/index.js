window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.querySelector("h1").className = "none";
  } else {
    document.querySelector("h1").className = "";
  }
  console.log(document.documentElement.scrollTop)
}