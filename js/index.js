let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})

// for progress bar
$(document).ready(function(){
	progress_bar();
});

function progress_bar() {
	var items = $('.progress_bar').find('.progress_bar_item');
    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
		
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item_value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },20);
    });
}


// for testimonial slider
$('.testimonial_slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  prevArrow: "<button class='testimonial_prev_btn'><svg width=\"40\" height=\"41\" viewBox=\"0 0 40 41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.15 33.8665L14.2834 22.9998C13 21.7165 13 19.6165 14.2834 18.3332L25.15 7.46649\" stroke=\"#1F1F1F\" stroke-width=\"3\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></button>",
  nextArrow: "<button class='testimonial_next_btn'><svg width=\"40\" height=\"41\" viewBox=\"0 0 40 41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.85 33.8665L25.7167 22.9998C27 21.7165 27 19.6165 25.7167 18.3332L14.85 7.46649\" stroke=\"#1F1F1F\" stroke-width=\"3\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});