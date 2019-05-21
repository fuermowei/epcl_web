var app1 = new Vue({
    el: '#app1',
    data:{
        message: 'hello'
    }
});

var app2 = new Vue({
    el: '#app2',
    data:{
        message: '当前时间: '+ new Date().toLocaleDateString()
    }
});

var app3 = new Vue({
    el: '#app3',
    data:{
        lists:[
            {text: 'this is'},
            {text: 'my first'},
            {text: 'use of Vue'}
        ]
    }
});

var app4 = new Vue({
    el: '#app4',
    data:{
        message: 'hello world'
    },
    methods: {
        echoHello: function(){
            alert(this.message);
        }
    },
});

var app5 = new Vue({
    el: '#app5',
    data:{
        myinput: 'I see'
    }
});

var appbtn = new Vue({
    el: '#insertimg',
    data:{
        totalImg: 0
    },
    methods:{
        insert: function(){
            if(this.totalImg>2){
                alert('too many imgs !');
            }else{
                app6.imgList.push({id:this.totalImg, src: `./imgs/${this.totalImg}.jpg`});
            }
            this.totalImg++;
        }
    }
});

Vue.component('test-item', {
    props: ['myimg'], //此为模板中的一个单元
    // 内插属性已移除
    template: `<li><img :src="myimg.src" width="300px"></li>` //此为具体内容
});

var app6 = new Vue({
    el: '#app6',
    data:{
        imgList:[
            //{id:0, src: './imgs/0.jpg'},
        ]
    }
});