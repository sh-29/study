
// 예습삼아 재미삼아 스크립트 노가다...

$(function () {
  $("section.bi").css("display", "none");
  $("section.news").css("display", "none");
  $("section.brand_pr").css("display", "none");
  $("section.award").css("display", "none");
  $("section.result").css("display", "none");
  $(".sec_menu li:nth-child(1) p").css("display", "block");

  $(".sec_menu li:nth-child(1)").click(function () {
    $("section.brand_story").css("display", "block");
    $("section.bi").css("display", "none");
    $("section.news").css("display", "none");
    $("section.brand_pr").css("display", "none");
    $("section.award").css("display", "none");
    $("section.result").css("display", "none");
  });

  $(".sec_menu li:nth-child(2)").click(function () {
    $("section.brand_story").css("display", "none");
    $("section.bi").css("display", "block");
    $("section.news").css("display", "none");
    $("section.brand_pr").css("display", "none");
    $("section.award").css("display", "none");
    $("section.result").css("display", "none");
  });

  $(".sec_menu li:nth-child(3)").click(function () {
    $("section.brand_story").css("display", "none");
    $("section.bi").css("display", "none");
    $("section.news").css("display", "block");
    $("section.brand_pr").css("display", "none");
    $("section.award").css("display", "none");
    $("section.result").css("display", "none");
  });

  $(".sec_menu li:nth-child(4)").click(function () {
    $("section.brand_story").css("display", "none");
    $("section.bi").css("display", "none");
    $("section.news").css("display", "none");
    $("section.brand_pr").css("display", "block");
    $("section.award").css("display", "none");
    $("section.result").css("display", "none");
  });

  $(".sec_menu li:nth-child(5)").click(function () {
    $("section.brand_story").css("display", "none");
    $("section.bi").css("display", "none");
    $("section.news").css("display", "none");
    $("section.brand_pr").css("display", "none");
    $("section.award").css("display", "block");
    $("section.result").css("display", "none");
  });

  $(".sec_menu li:nth-child(6)").click(function () {
    $("section.brand_story").css("display", "none");
    $("section.bi").css("display", "none");
    $("section.news").css("display", "none");
    $("section.brand_pr").css("display", "none");
    $("section.award").css("display", "none");
    $("section.result").css("display", "block");
  });
});