;(function(w,d){
    let routes = w.routes = {};
    let routes_data = {
        home : 'home/',
        product : 'product/',
        case_center : 'case_center/',
        about_us : 'about_us/',
        contact_us : 'contact_us/'
    };
    w.routes = {
        path : routes_data,
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
        w.routes.toChangeUrl(path);
    },false);
})(window,document);