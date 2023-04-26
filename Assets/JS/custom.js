/*jshint esnext: true */
$("#toggler1, #toggler2").click(() => {
  $("#toggle").toggleClass("-translate-x-[calc(100%-14px)]");
  $("#toggle").toggleClass("w-1/2");
  $("#toggler1").toggleClass("text-white");
  $("#toggler2").toggleClass("text-white");
});