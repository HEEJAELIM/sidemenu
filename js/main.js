$(function () {
  var $aside = $("aside"),
    $button = $aside.find("button"),
    $duration = 300;

  $button.click(function () {
    $aside.toggleClass("open");
    // A.hasClass('b')는 조건문에서만 사용 a요소에 b라는 클래스 있으면 true, 없으면 false

    // 속성 변경하기, 속성의 값 변환
    // var c = A.attr('href') = a라는 요소의 b라는 속성 값을 변수명 c에 저장
    // A.attr('b','c') a라는 요소의 b라는 속성의 값을 c로 변경
    console.log($button.find("img").attr("src"));

    if ($aside.hasClass("open")) {
      // $aside.stop().animate({ left: 0 }, $duration, "easeOutBack");
      $button.find("img").attr("src", "img/btn_close.png");
    } else {
      // $aside.stop().animate({ left: "-350px" }, $duration, "easeInBack");
      $button.find("img").attr("src", "img/btn_open.png");
    }
  });
});
