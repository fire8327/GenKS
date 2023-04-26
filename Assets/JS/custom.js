/*jshint esnext: true */
$("#toggler1, #toggler2").click(() => {
  $("#toggle").toggleClass("-translate-x-[calc(100%-14px)]");
  $("#toggle").toggleClass("w-1/2");
  $("#toggler1").toggleClass("text-white");
  $("#toggler2").toggleClass("text-white");
});
$("#toggler1").click(()=>{
  $(".sum").each((i,el)=>{
    $(el).find(".price").text("1 845 ₽");
    $(el).find(".month").find(".year").toggleClass("hidden");
  });
  $(".sum2").find(".price").text("9 235 ₽");
  $(".sum2").find(".month").find(".year").toggleClass("hidden");
});
$("#toggler2").click(()=>{
  $(".sum").each((i,el)=>{
    $(el).find(".price").text("1 582 ₽");
    $(el).find(".month").find(".year").toggleClass("hidden");
  });
  $(".sum2").find(".price").text("7 916 ₽");
  $(".sum2").find(".month").find(".year").toggleClass("hidden");
});