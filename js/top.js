//top返回顶部
//页面滚动条滚动事件
$(window).scroll(function () {
  //滚动条距离顶部的高度
  var height = $(this).scrollTop()
  console.log(height)
  if (height >= 350) {
    $(".top").fadeIn(500)
  } else {
    $(".top").fadeOut(500)
  }
})
$(".top").click(function () {
  //带动画的返回顶部
  $("body,html").animate({ scrollTop: "0" }, 300)
})
