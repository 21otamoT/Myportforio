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
      console.log(position);
      console.log(scrollAmount);
      if (scrollAmount > position - windowHeight) {
        $(this).fadeIn();
      }
      else {
         $(this).css({display:'none'});
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