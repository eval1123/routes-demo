;(function(w,d){
    w.routes = routes = {};
    routes = {
        init : function(param){
            let path = location.hash.substr(1) || param;
            this.toChangeUrl(path);
        },
        toChangeUrl : function(path){
            if(!path){ return; }
            let data = routes_datas[path].data;
            document.querySelector('.cont').innerHTML = data;
        }
    };
    w.addEventListener('hashchange',function(){
        let path = location.hash.substr(1);
        routes.toChangeUrl(path);
    },false);
})(window,document);