// popup.js
(function($) {
  var body = $('body');
  // body내부에 팝업상자 만들기
  body.prepend('<div id="popupBox"><div class="pop_in"><button tabindex="1" type="button">close</button><p></p></div></div>');

  var popup = $('#popupBox');
  var popIn = popup.children('.pop_in');


  popup.css({position:'fixed', top:0, left:0, zIndex:5000, backgroundColor:'rgba(255,255,255,0.9)', width:'100%', height:'auto', boxSizing:'border-box', padding:'1rem'});
  popIn.css({width:'auto', maxWidth:'1000px', margin:'auto'});
  var closeBtn = popIn.find('button');
  closeBtn.css({padding:'0.5rem', backgroundColor:'#d1000a', color:'#fff', fontWeight:'bold', borderRadius:'0.3rem', float:'right'});

  closeBtn.on('focus',function() {
    $(this).css({backgroundColor:'#F6A7BA'});
  });
  closeBtn.on('blur',function() {
    $(this).css({backgroundColor:'#d1000a'});
  });

  closeBtn.on('click',function(e) {
    e.preventDefault();
    popup.remove();
  });

  var narr = popIn.find('p');
  narr.html('본 사이트는 베타테스트 중인 불라툰의 임시 사이트입니다. <a tabindex="1" href="http://boolatoon.com/" target="_blank">사이트 바로가기<a>');
  narr.find('a').css({color:'#d1000a', fontWeight:'bold'});
  narr.find('a').on('focus',function() {
    $(this).css({color:'#fff', outline:0, padding:'0.3rem', borderRadius:'0.2rem'}); 
  });
  narr.find('a').on('blur',function() {  
    $(this).css({color:'#d1000a'}); 
  });

  $(window).on('scroll',function() {
    var scrollResult = $(this).scrollTop();
    if(scrollResult >= 50){
      popup.slideUp(300);
    }else{
      popup.slideDown(300);
    }
  });
})(this.jQuery);