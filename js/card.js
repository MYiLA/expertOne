"use strict";$(".expert-one .biography__btn-collapse").on("click",(function(){$(this).parent().toggleClass("active")}));var videoSlider=new Glide(".video__glide",{type:"carousel",startAt:0,perView:3,gap:30,hoverpause:!0,animationTimingFunc:"cubic-bezier(.36,.39,.31,1.02)",dragThreshold:50,animationDuration:1e3,breakpoints:{1220:{perView:2},820:{perView:1}}});videoSlider.mount(),$(".expert-one .video__play").on("click",(function(){$(this).parent().parent().addClass("active")}));