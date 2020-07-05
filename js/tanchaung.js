//弹窗
var flagOne = false
$(".menu a").click(function () {
  if (!flagOne) {
    $(".menu .before").css(
      "transform",
      "rotate(45deg) translate(4px,9px)"
    )
    $(".menu .after").css(
      "transform",
      "rotate(-45deg) translate(0px,-4px)"
    )
    $(".menu-toggle").css("opacity", "0")
    $(".classify").slideDown(50)
    flagOne = true
  } else {
    $(".menu .before").css("transform", "none")
    $(".menu .after").css("transform", "none")
    $(".menu-toggle").css("opacity", "1")
    $(".classify").slideUp(50)
    flagOne = false
  }
})
