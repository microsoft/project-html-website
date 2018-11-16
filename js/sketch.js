console.log('DEBUG');

$('.line-1').css('opacity', '0');
$('.line-2').css('opacity', '0');

new TypeIt('.success-text', {
   speed: 50,
   autoStart: true,
   callback: function () {
      $('.success-text').find('.ti-cursor').remove();
      $('.line-1').css('opacity', '1');
      new TypeIt('.line-1', {
         speed: 50,
         autoStart: true,
         callback: function () {
            $('.line-1').find('.ti-cursor').remove();
            $('.line-2').css('opacity', '1');
            new TypeIt('.line-2', {
               speed: 50,
               autoStart: true,
               cursor: true,
               callback: function () {}
            });
         }
      });
   }
});