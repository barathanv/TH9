({
	init : function(component) {
        var params = this.getUrlParams();
        var platform = params.platform;
        var that = this;

        if(platform){
            platform = platform.toLowerCase();
        }

        component.set('v.platform', platform);        
    } ,
    getUrlParams: function() {
        let urlParams,
            match,
            pl = /\+/g,
            search = /([^&=]+)=?([^&]*)/g,
            decode = function(s) { return decodeURIComponent(s.replace(pl, " ")); },
            query = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query)) {
            urlParams[decode(match[1])] = decode(match[2]);
        }

        return urlParams;
    }
	    	
})