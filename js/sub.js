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

  //アコーディオンメニュー
  $('.acordion').click(function(){
    let id = $(this).data('id');
    $(`#${id}`).slideToggle();
    $(this).toggleClass('open');
});

  // onebook3D
  var books = [
		['img/books/cover.jpg','私の本棚'], 
		['img/books/nanjihisinigotoku.jpg','汝、星の如く'], ['img/books/senhabokuwoegaku.jpg','線は僕を描く'],
		['img/books/soragohann.jpg','宙ごはん'], ['img/books/uruunoasagao.jpg','うるうの朝顔'],
    ['img/books/gyal.jpg','鬼強ギャルマインド'], ['img/books/yumewokanaeruzou4.jpg','夢をかなえるゾウ4'],
    ['img/books/programing_book1.jpg','達人プログラマー'], ['img/books/programing_book2.jpg','リーダブルコード'],
    ['img/books/autoput.jpg','アウトプット大全'], ['img/books/end.jpg','私の本棚'], 
		];	

  $('#mybook').onebook(books,{skin:['light','dark'], bgDark:'#56998c',bgLight:'#d97f6f', border:10, cesh:false});
});