console.log("🅱️ SCRIPT STARTED 🅱️");
try {
  document.getElementById("graphics-paywall-overlay").style.display = "none";
  document.getElementsByTagName("html")[0].style.overflow = "scroll";
} catch (ex) {
  console.log("Error: " + ex.message);
}
console.log("🅱️ SCRIPT ENDED 🅱️");
