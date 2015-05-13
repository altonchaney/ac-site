$(document).ready(function() {

	function showModal(project){
        var $modal = $('.modal-container#modal-'+project);

        $('.main.home').fadeOut(300, function(){
			$modal.fadeIn(300);
        });
    }
    
    $('#open-project1').click(function(){ showModal('project1') });
    
    $('.modal-close').click(function(){ 
    	$('.modal-container').fadeOut(300, function(){
			$('.main.home').fadeIn(300);
        })
    });
    
    function filterProjects(type){
        var $projectType = $('.home-project.'+type);
        var $projectTypeSelector = $('.selector-'+type);
        
        if ($projectType.css('display') == 'none') {
        	$projectType.fadeIn(300);
        } else {
        	$projectType.fadeOut(300);
        }
		
		if ($projectTypeSelector.css('opacity') == '1') {
        	$projectTypeSelector.animate({opacity: '.5'}, 300);
        } else {
        	$projectTypeSelector.animate({opacity: '1'}, 300);
        }
    }
    
    $('.selector-art').click(function(){ filterProjects('art') });
    $('.selector-design').click(function(){ filterProjects('design') });
    $('.selector-execution').click(function(){ filterProjects('execution') });
    
})