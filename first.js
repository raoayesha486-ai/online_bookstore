 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop:true,
      });
      var swiper = new Swiper(".recommendedSwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  var swiper4= new Swiper(".BookOnSalesSwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
 var swiper5= new Swiper(".TestimonialsSwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
     pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
    const sb= ScrollReveal({
      duration:2500,
      delay:800,
      mobile:false,
      origin:'bottom',
      distance:'60px'
    })
    sb.reveal('.nav-container,.features-container  .col,.product-card');
    sb.reveal('.hero-container .col:nth-child(1).trending-container .col:nth-child(1),.new-launch-container.col.col:nth-child(1)',{origin:'left'});
    sb.reveal('.hero-container .col:nth-child(2).trending-container .col:nth-child(2).new-launch-container.col.col:nth-child(2)',{origin:'right'});
    sb.reveal('.title-container h4',{delay:200,origin:'left'});
    sb.reveal('.title-container h1',{delay:500,origin:'left'});
    sb.reveal('.title-container p',{delay:800,origin:'left'});
    