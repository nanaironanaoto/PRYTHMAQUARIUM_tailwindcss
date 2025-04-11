//ローディング画面の表示
$(function() {
  var h = $(window).height();
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});
 
//2秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',200);
});
 
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}

$(function() {
    $('.menu-trigger').on('click', function() {
        $(this).toggleClass('hm_active');
        $('.sidebar_area').toggleClass('hm_active');
        $('.sidebar_sp_hidden_area').toggleClass('hm_active');
    });
});

//flickityのオプション設定　消すとなぜか崩れる
// $('.product_flickity').flickity({
//   // options
//   contain: true
// });

// 製品ギャラリー用のSwiper初期化
const productSwiper = new Swiper('.product-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//画像ホバー時のズームエフェクト
$(function() {
  $('.zoom_img').hover(
    // マウスポインターが画像に乗った時の動作
    function(e) {
      $(this).css('transform', 'scale(1.05)');
    },
    // マウスポインターが画像から外れた時の動作
    function(e) {
      $(this).css('transform', 'scale(1)');
    }
  );
});

//ボタンホバー時の反転エフェクト
$(function() {
  $('.sidebar_area ul li:nth-child(7) div span').hover(
    // マウスポインターが画像に乗った時の動作
    function(e) {
      $(this).addClass('active_btn_online_store_btn');
    },
    // マウスポインターが画像から外れた時の動作
    function(e) {
      $(this).removeClass('active_btn_online_store_btn');
    }
  );
});

$(function() {
  $('.sidebar_area ul li div span').hover(
    // マウスポインターが画像に乗った時の動作
    function(e) {
      $(this).addClass('active_btn');
    },
    // マウスポインターが画像から外れた時の動作
    function(e) {
      $(this).removeClass('active_btn');
    }
  );
});

// メインビジュアルのアニメーション
const mvObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      if (element.classList.contains('mv_bg01')) {
        element.style.height = '82vh';
        element.style.top = '0';
        element.style.opacity = '1';
      } else if (element.classList.contains('mv_bg02')) {
        element.style.right = '0';
        element.style.opacity = '1';
      } else if (element.classList.contains('mv_bg03')) {
        element.style.top = '0';
        element.style.opacity = '1';
        element.classList.add('mv_bg03_para01');
      }
      mvObserver.unobserve(element);
    }
  });
}, {
  threshold: 0.2
});

// バナーエリアのアニメーション
const bannerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.banner_area_inner, .banner_area_inner div').forEach(el => {
        el.style.opacity = '1.0';
      });
      bannerObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

// フッターのドミノ効果
const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      var ft_int = setInterval(() => ft_doFade(ft_i), 150);
      footerObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

// DOMContentLoadedイベントで監視を開始
document.addEventListener('DOMContentLoaded', () => {
  // メインビジュアルの要素を監視
  document.querySelectorAll('.mv_bg01, .mv_bg02, .mv_bg03').forEach(element => {
    mvObserver.observe(element);
  });

  // バナーエリアの要素を監視
  const bannerTrigger = document.querySelector('.hfadeIn_sub01_trigger');
  if (bannerTrigger) {
    bannerObserver.observe(bannerTrigger);
  }

  // フッターの要素を監視
  const footer = document.querySelector('#footer');
  if (footer) {
    footerObserver.observe(footer);
  }
});

// IntersectionObserver を使用したフェードイン実装
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      if (element.classList.contains('hfadeIn')) {
        element.classList.add('active_hfadeIn');
      } else if (element.classList.contains('vfadeIn')) {
        element.classList.add('active_vfadeIn');
      } else if (element.classList.contains('fadeIn')) {
        element.classList.add('active_fadeIn');
      }
      fadeInObserver.unobserve(element);
    }
  });
}, {
  threshold: 0.2
});

// 要素の監視を開始
document.querySelectorAll('.hfadeIn, .vfadeIn, .fadeIn').forEach(element => {
  fadeInObserver.observe(element);
});

// Swiperの初期化
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 500,
  
  // ページネーション
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // ズームエフェクト
  on: {
    slideChangeTransitionStart: function () {
      const activeSlide = this.slides[this.activeIndex];
      activeSlide.classList.remove('active-zoom');
    },
    slideChangeTransitionEnd: function () {
      const activeSlide = this.slides[this.activeIndex];
      activeSlide.classList.add('active-zoom');
    },
  },
});

// $('#product_area').on('inview', function() {
//   $('body').css('background','#fff');
//   $('*').css('color','#000');
// });

//sidebarのリスト要素が順番に表示される
$(function(){ 
$('.dominoFade li').hide(); 
}); 
var i = 0; 
var int=0; 
$(window).bind("load", function() { //load後にbind
var int=setInterval("doFade(i)",150); 
}); 
function doFade() { 
var list = $('.dominoFade li').length; 
if (i >= list) { 
clearInterval(int); 
} 
$('.dominoFade li').eq(i).fadeIn(500); 
i++; 
} 

//footerのリスト要素が順番に表示される

$(function(){ 
$('.ft_dominoFade li').hide(); 
}); 
var ft_i = 0; 
var ft_int=0; 
$('#footer').on('inview', function(){ //#footerまでスクロールされたら実行
var ft_int=setInterval("ft_doFade(ft_i)",150); 
}); 
function ft_doFade() { 
var ft_list = $('.ft_dominoFade li').length; 
if (ft_i >= ft_list) { 
clearInterval(ft_int); 
} 
$('.ft_dominoFade li').eq(ft_i).fadeIn(500); 
ft_i++; 
} 

//遅延スクロール（パララックス）
$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  if (winW <= devW) {
    //767px以下の時の処理
  $(function($){
    $(window).scroll(function(){
      var y = $(this).scrollTop();
      $('.about_img01').css('top', parseInt( y / -10 ) + 200 - 40 + 'px');
      $('.about_img02').css('top', parseInt( y / -15 ) + 150 + 61  + 'px');
    });
  });    
  } else {
    //768pxより大きい時の処理
  $(function($){
    $(window).scroll(function(){
      var y = $(this).scrollTop();
      $('.about_img01').css('top', parseInt( y / -10 ) + 180 - 63  + 'px');
      $('.about_img02').css('top', parseInt( y / -15 ) + 100 + 125  + 'px');
    });
  });    
  }
});