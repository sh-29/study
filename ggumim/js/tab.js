$(document).ready(function () {
  // 1)초기 설정.
  // 시각 -> 1번 탭이랑 탭패널 보이게 active 부여. 로딩시 한번
  // 접근성 -> 탭 : aria-selected true 나머지는 false, 탭패널: aria-hidden: false 나머지는 true
  // 탭li와 패널div가 포커스 가질 수 있도록 tabIndex 0

  // :first-of-type : 각 부모안에서 같은 타입을 가진 애들중 첫번째 선택가능
  // :first 는 예를 들어 #main_tab1, #main_tab2 두개 있을때 #main_tab1의 첫번째만 선택되
  $('.tab:first-of-type, .tabpanel:first-of-type').addClass('active').attr('tabIndex',0)
  $('.tab:first-of-type').attr('aria-selected',true).siblings().attr('aria-selected',false);
  $('.tabpanel:first-of-type').attr('aria-hidden',false).siblings('.tabpanel').attr('aria-hidden',true);

  // 2)키보드 제어.
  /* 이전37, 다음39, 홈36, 엔드35, enter13, space bar32 
  처음에서 이전누르면 마지막으로. 마지막에서 다음누르면 처음으로
  홈 누르면 기본기능 제거, 탭 처음으로. 
  엔드 누르면 기본기능 제거, 탭 마지막으로.*/
  $('.tab').on('keydown',function(evt){
    var key = evt.keyCode;
    console.log(key);

    switch (key){
      case 37: //이전
        // 내 포커스 제거
        $(this).attr('tabIndex',-1);
        // 내가 처음이면 마지막으로 이동, 아니면 바로 앞으로 포커스 갈수 있게 해놓고 포커스 강제 이동
        if ($(this).hasClass('first')) $(this).siblings('.last').attr('tabIndex',0).focus();
        else {$(this).prev().attr('tabIndex',0).focus();}
        break;

      case 39: //다음
        // 이전 버튼과 동일 형식. 방향 반대로
        $(this).attr('tabIndex',-1);
        if ($(this).hasClass('last')) $(this).siblings('.first').attr('tabIndex',0).focus();
        else {$(this).next().attr('tabIndex',0).focus();}
        break;

      case 36: //home
        //기본기능 차단 후 내 포커스 제거
        evt.preventDefault();
        $(this).attr('tabIndex',-1).siblings('.first').attr('tabIndex',0).focus();
        break;

      case 35: //end
        //기본기능 차단 후 내 포커스 제거
        evt.preventDefault();
        $(this).attr('tabIndex',-1).siblings('.last').attr('tabIndex',0).focus();
        break;

      case 13: //enter 엔터,스페이스 실행함수 똑같을 때 이렇게 연달아 써
      case 32: //space bar
        var _tg = $(this); //펑션 호출할 li. 클릭일으키는 나자신
        tabActive(_tg); //펑션 호출
        break;
      /* default:
        실행문;
        break; */
    }
  });

  // 3)마우스 제어.
  /* 탭버튼 클릭->키보드 누를 때 클릭이벤트랑 똑같으니까, 반복되니까 부르기 쉽게 펑션으로 만들어 */
  $('.tab').on('click',function () {
    var _tg = $(this); //펑션 호출할 li. 클릭일으키는 나자신
    tabActive(_tg);
  });

  // 펑션 만들기
  function tabActive (_tgTab) {
    // console.log(_tgTab);
    var _tgPanel = $('#'+_tgTab.attr('aria-controls'));
    // console.log(_tgPanel, typeof _tgPanel);

    //탭버튼
    _tgTab.addClass('active').attr({'aria-selected':true, tabIndex:0}).focus().siblings().removeClass('active').attr({'aria-selected':false, tabIndex:-1});
    //탭패널
    _tgPanel.addClass('active').attr({'aria-hidden':false, tabIndex:0}).focus().siblings('.tabpanel').removeClass('active').attr({'aria-hidden':true, tabIndex:-1});
  }

});