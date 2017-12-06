let compras = [];

$.ajax({
    type:'GET',
    url:'http://rest.learncode.academy/api/Bruna/compras',
    dataType: "json",
    success: function(data){
        usuarios = data;
    }
});

// $("#cadastro").submit(function(){
//     let email = $("#email", this).val();
//     let senha = $("#senha", this).val();

//     let _this = this;

//     $.ajax({
//         type:'POST',
//         url:'http://rest.learncode.academy/api/Bruna/login1',
//         data: {email: email, senha: senha},
//         success: function(data){
//             $("#email", _this).val("");
//             $("#senha", _this).val("");
//         }
//     });

//     return false;
// });

// $("#login").submit(function(){
//     let email = $("#email", this).val();
//     let senha = $("#senha", this).val();

//     for(let i=0; i <usuarios.length; i++){
//         if(usuarios[i].email==email && usuarios[i].senha==senha){
//             window.localStorage.setItem("idLogin", usuarios[i].id);
//             let idLogin = window.localStorage.getItem("idLogin");
//             console.log(idLogin);
//             break;
//         }
//     }

//     return false;
// });