// JavaScript Document
window.onload = function(){ 
  var mySwiper = new Swiper('.swiper-container',{
	speed:400,
	/*mode : 'vertical',*/ 
	resistance:'100%',
	loop:true,
	/*mousewheelControl : true,*/
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: 1500,
	autoplayDisableOnInteraction: false,
	/*grabCursor: true,*/
	pagination: '.pagination',
  paginationClickable: true,
	onFirstInit:function(){
		$('.slide1').addClass('ani-slide');
		}
  })
  
mySwiper.wrapperTransitionEnd(function () {//隐藏方法
	$('.ani-slide').removeClass('ani-slide')
	$('.swiper-slide').eq(mySwiper.activeIndex).addClass('ani-slide')
	},true);
}