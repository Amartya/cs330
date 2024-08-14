/*jshint strict:false */
/*jshint esversion: 8 */
/*global console*/

// setting up a click handler on the menu-wrapper with the hamburger icon to show/hide the panel.
document.querySelector("#menu-wrapper").addEventListener("click", (event)=>{
  document.querySelector(".nav-panel").classList.toggle("show");
});