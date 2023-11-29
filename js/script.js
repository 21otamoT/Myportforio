$(function () {
  const box = document.getElementById('cercle');
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;

  for(let i =0; i < 20; i++) {
    // ボックスを作る
    const clieitBox = () => {
      const newBox = document.createElement('p');
      box.appendChild(newBox);
    };

    // ランダムな位置に配置する
    const coordinates = () => {
      const pArray = document.querySelectorAll('#cercle p');

        pArray.forEach(p => {
          let randumWidth = Math.random() * boxWidth;
          let randumHeight = Math.random() * boxHeight;
          p.style.top = randumWidth+'px';
          p.style.left = randumHeight+'px';

          // ボックスにアニメーションをつける
          const boxMove = [
            {transform: 'translate(20px, 0)'},
            {transform: 'translate(-20px,0)'},
          ];

          p.animate(boxMove,{
            duration: 3000,
            direction:"alternate",
            iterations: Infinity,
            
          });
          console.log(`'pWidth'${randumWidth}+'pHeight${randumHeight}`);
        });                         
    };
      clieitBox();
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
});
