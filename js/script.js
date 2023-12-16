$(function () {
  const box = document.getElementById('cercle');
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;

  for(let i =0; i < 10; i++) {
    // ボックスを作る
    const createitBox = () => {
      const newBox = document.createElement('p');
      box.appendChild(newBox);
    };

    // ランダムな位置に配置する
    const coordinates = () => {
      const pArray = document.querySelectorAll('#cercle p');

        pArray.forEach(p => {
          let randumWidth = Math.random() * boxWidth-100;
          let randumHeight = Math.random() * boxHeight;
          p.style.top = randumHeight+'px';
          p.style.left = randumWidth+'px';

          // ボックスにアニメーションをつける
          const boxMove = [
            {transform: 'translate(20px, 0) rotate(-360deg)'},
            {transform: 'translate(-20px,0) rotate(-180deg)'},
            {transform: 'translate(20px, 0) rotate(0deg)'},
          ];

          p.animate(boxMove,{
            duration: 5000,
            // direction:"alternate",
            iterations: Infinity,
          });
        });                         
    };
      createitBox();
      coordinates();
}
  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });
  
  // ハンバーガーメニュー
  $('.openbtn1').on('click',() => {
    $('.openbtn1').toggleClass('active');
    $('#g-nav').toggleClass('active');
  });

  //タブ切り替え
  $('.work-menu').on('click',function(e){
    e.preventDefault();
    let id = $(this).data('id');
    $('.work-menu').removeClass('active-menu');
    $('.works-list').removeClass('active');
    $(this).addClass('active-menu');
    $(`#${id}`).addClass('active');
  });
});
