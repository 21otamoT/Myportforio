$(function(){
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: true,
  });

  $('.slick-prev').css({left:'10px'});
  $('.slick-next').css({right:'10px'});

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('.jquery').each(function () {
      const position = $(this).offset().top;
      console.log(`記事のトップ：${position}`);
      console.log(`スクロールの位置：${scrollAmount}`);
      console.log(`スクロール位置より小さかったら${position-windowHeight+100}`);
      if (scrollAmount > position - windowHeight +100) {
        $(this).addClass('fadeIn');
      }
    });
  });
  
  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.md img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
    return false
  });
});