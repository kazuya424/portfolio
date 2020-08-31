new Vue({
    el:'#top',
    methods:{
        scrollTop:function(){
            window.scrollTo({
                top:200,
                behavior:"smooth"
            });
        }
    }
})