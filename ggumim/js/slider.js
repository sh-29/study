/* 슬라이더 */
$(document).ready(function () {
  var n = 0;
    var pos = 0;
    setInterval(function () {
      n = n + 1;
      pos = -1 * (100) * n;

      $("#slider1 .slider").animate({ "left": pos+'%' }, 300, function () {
        if (n == 3) {
          n = 0;
          pos = 0;
          $("#slider1 .slider").css({ "left": pos+'%' });
        }
      });
  }, 3000);

  /* section3 슬라이더 */
  $('#section3 .prev_next button').on('click',function () {
    var btnIdx = $(this).index();
    // console.log(btnIdx);
    var moveEle = $('#section3 .list');
    if(moveEle.is(':animated')) return false;
    if(btnIdx === 0) { //이전 버튼 클릭시
      // moveEle.animate({marginLeft:0});
      moveEle.prepend(moveEle.children().last().clone()).css('margin-left','-250px').animate({'margin-left':'0px'},function(){
        $(this).children().last().remove();
        ariaHidden();
      })
    } else { //다음 버튼 클릭시
      moveEle.append(moveEle.children().first().clone()).animate({'margin-left':'-250px'},function(){
        $(this).css('margin-left','0px').children().first().remove();
        ariaHidden();
      })
    }
    // 접근성 제어 위해
    function ariaHidden(){
      // 이미지 전부 읽혀지지 못하도록
      moveEle.children().attr('aria-hidden',true);
      // 앞에부터 4개만 읽혀지도록 //0,1,2,3
      moveEle.children().slice(0,4).attr('aria-hidden',false);
    }
    //로딩시 한번 호출?
    ariaHidden();
  });
  
  
  // /* 네비게이션 */
  $('#gnb .sub2, .shadow').hide();
  $('#gnb .main_menu li').on({'mouseenter click':function () {

    $('#gnb .sub2, .shadow').stop().slideDown();
    // $('#gnb .sub2, .shadow').stop().animate({height:600});
    return false;
  }  
  });

  $('#gnb .sub2, .shadow').on({'mouseleave focusout blur':function () {
    $('#gnb .sub2, .shadow').stop().slideUp();
        // $('#gnb .sub2, .shadow').stop().animate({height:0});
    return false;
  }});

});

