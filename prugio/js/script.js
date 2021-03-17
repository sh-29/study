// 메인 탑 팝업
$(function () {
  $(".popup").css("height", "70px");
  $(".close").click(function () {
    $(".popup").css("height", "0px");
  });
});

// 로그인 필요하다는 팝업
$(function () {
  $(".popup_myprugio").css("display", "none");
  $(".myprugio").click(function () {
    $(".popup_myprugio").css("display", "block");
  });
});

// 네비 클릭
$(function () {
  $(".navi").css("height", "0px");
  $(".naviclick").click(function () {
    $(".navi").css("height", "500px");
  });
  $(".naviclose").click(function () {
    $(".navi").css("height", "0px");
  });
});
