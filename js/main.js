$(document).ready(function() {

	function show_modal(project){
        var modal = $('.modal-container#modal-'+project)[0];

        $('.main.home').fadeOut(300, function(){
			$(modal).fadeIn(300);
        });
    }
    
    $('#open-project1').click(function(){ show_modal('project1') });
    
    $('.modal-close').click(function(){ 
    	$('.modal-container').fadeOut(300, function(){
			$('.main.home').fadeIn(300);
        })
    });
    
})