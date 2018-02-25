$(document).ready(function(){
        
        var userfeed = new Instafeed({
            get: 'user',
            userId: '679855155',
            resolution: 'standard_resolution',
            accessToken: '679855155.1677ed0.3b220213d9804c989fc97297951debbc',
            sortBy: 'most-recent',
            template: '<div class="col-lg-3 gallery Instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}"" alt="{{caption}}" class="img-fluid"/></a></div>',

        });
        userfeed.run();

});