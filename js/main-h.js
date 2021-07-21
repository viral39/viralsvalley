$(document).ready(function(){
    // $(function() {
    //     $("html, body").mousewheel(function(event, delta) {
    //         this.scrollLeft -= (delta * 30);
    //         event.preventDefault();
    //     });
    // });
    resizeDiv();
    	$('section[data-type="background"]').each(function(){
    		var $bgobj = $(this); // assigning the object
          
        });

		// $(window).scroll(function() {
  //           $("html, body").mousewheel(function(event, delta) {
  //               this.scrollLeft -= (delta * 30);
  //               event.preventDefault();
  //           });
                // var xPos = -($window.scroll() / $bgobj.data('speed'));
                // // Put together our final background position
                // var coords = xPos+ '50%' + 'px';
                //  // Move the background
                // $bgobj.css({ backgroundPosition: coords });   
	//     });                              
                
});

window.onresize = function(event) {
    resizeDiv();
}
function resizeDiv() {


    var wwidth = $(window).width();
    var wheight = $(window).height();

    var dwidth = $(document).width();
    var dheight = $(document).height();

   // var actualheight = wheight-dheight;
    //alert("window height : " +wheight + "document height : " +dheight + "height: "+ actualheight);
    $('#home').css({'height': wheight + 'px'});

}