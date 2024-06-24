// document.getElementById("m-navbar_button").addEventListener("click", () => {
//     document.querySelector(".nav").classList.toggle("hidden");
//     document.querySelector(".m-navbar").classList.add("hidden");
//   });
//    document.getElementById("exit_button").addEventListener("click", () => {
//      document.querySelector(".m-navbar").classList.toggle("hidden");
//      document.querySelector(".nav").classList.toggle("hidden");
//    });

   console.log("hello world");
document.getElementById("m-navbar_button").addEventListener("click", () => {
  document.querySelector(".m-navbar").classList.toggle("active");
  document.querySelector(".nav").classList.add("block");
});
document.getElementById("exit_button").addEventListener("click", () => {
  document.querySelector(".m-navbar").classList.toggle("active");
  document.querySelector(".nav").classList.remove("block");
});