$(document).ready(function() {

	function showModal(project){
        var $modal = $('.modal-container#modal-'+project);

        $('.main.home').fadeOut(300, function(){
			$modal.fadeIn(300);
        });
    }
    
    $('#open-virtualtryon').click(function(){ showModal('virtualtryon') });
    $('#open-backwords').click(function(){ showModal('backwords') });
    $('#open-ww2timeline').click(function(){ showModal('ww2timeline') });
    $('#open-tgpio').click(function(){ showModal('tgpio') });
    $('#open-planetkungfu').click(function(){ showModal('planetkungfu') });
    $('#open-olympicgames').click(function(){ showModal('olympicgames') });
    $('#open-urbansprawl').click(function(){ showModal('urbansprawl') });
    $('#open-socialtvinfographs').click(function(){ showModal('socialtvinfographs') });
    $('#open-gameoverride').click(function(){ showModal('gameoverride') });
    $('#open-iconcollages').click(function(){ showModal('iconcollages') });
    
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