var username = new Vue({
    el:'#username',
    data:{
        content: ''
    }
});

var password = new Vue({
    el:'#password',
    data:{
        content: ''
    }
});

var loginButton = new Vue({
    el:'#login',
    data:{},
    methods: {
        userLogin: async function(){
            location.href = './index 2.html';
        },

        insert: async function(){
            try{
                let res = await axios.get('http://127.0.0.1:8789');
                console.log(res);
            }catch(err){
                console.log(err);
            }
        }
    }
});

var registerModel = new Vue({
    el: '#registerModel',
    data:{
        show:false,
    },
    methods: {
        cancelRegister: function(){
            this.show = false;
        }
    }
})

var registerButton = new Vue({
    el:'#toregister',
    data:{
    },
    methods: {
        userRegister: async function(){
            registerModel.show = true;
        },
    }
});


var usernameR = new Vue({
    el:'#usernameR',
    data:{
        content: ''
    }
});

var passwordR1 = new Vue({
    el:'#passwordR1',
    data:{
        content: ''
    }
});

var passwordR2 = new Vue({
    el:'#passwordR2',
    data:{
        content: ''
    }
});






