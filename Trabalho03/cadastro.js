let usuarios = [];

$.ajax({
    type:'GET',
    url:'http://rest.learncode.academy/api/Bruna/usuarios/',
    dataType: "json",
    success: function(data){
        usuarios = data;
        console.log(usuarios);
    },
    error: function(error){
        console.log(error);
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function emailCadastrado(email){
    for(let i=0, len = usuarios.length; i < len; i++){
        if(email == usuarios[i].email){
            return true;
        }
    }

    console.log(usuarios);
    return false;
}

$(function(){
    $("#cadastro").submit(function(){
        let $email = $("#email", this);
        let $senha = $("#senha", this); 

        let email = $email.val();
        let senha = $senha.val();
    
        let _this = this;

        console.log(emailCadastrado(email));

        if(emailCadastrado(email) || email.trim().length == 0 || !validateEmail(email)){
            $email.parent().addClass("has-error");
            $email.siblings("p").removeClass("hide");
            return false;
        }else{
            $email.parent().removeClass("has-error");
            $email.siblings("p").addClass("hide");
        }

        if(senha.trim().length == 0){
            $senha.parent().addClass("has-error");
            $senha.siblings("p").removeClass("hide");
            return false;
        }else{
            $senha.parent().removeClass("has-error");
            $senha.siblings("p").addClass("hide");
        }

        $.ajax({
            type:'POST',
            url:'http://rest.learncode.academy/api/Bruna/usuarios/',
            data: {email: email, senha: senha},
            success: function(data){
                usuarios.push({
                    email: email,
                    senha: senha 
                });
                $email.val("");
                $senha.val("");
            }
        });
    
        return false;
    });

    $("#login").submit(function(){
        let $email = $("#email", this);
        let $senha = $("#senha", this);
        
        let email = $email.val();
        let senha = $senha.val();


        if(email.trim().length == 0 || !validateEmail(email)){
            $email.parent().addClass("has-error");
            $email.siblings("p").removeClass("hide");
            return false;
        }else{
            $email.parent().removeClass("has-error");
            $email.siblings("p").addClass("hide");
        }

        if(senha.trim().length == 0){
            $senha.parent().addClass("has-error");
            $senha.siblings("p").removeClass("hide");
            return false;
        }else{
            $senha.parent().removeClass("has-error");
            $senha.siblings("p").addClass("hide");
        }


        let flag = false;

        for(let i=0; i < usuarios.length; i++){
            if(usuarios[i].email==email && usuarios[i].senha==senha){
                window.localStorage.setItem("emailLogin", usuarios[i].email);
                $("#comLogin").show();
                $("#semLogin").hide();
                flag = true;
                break;
            }
        }

        if(!flag){
            $("#falhaNoLogin").removeClass("hide");
        }else{
            $("#falhaNoLogin").addClass("hide");
        }
    
        return false;
    });

    if(verificarLogin()){
        $("#comLogin").show();
        $("#semLogin").hide();
    }else{
        $("#comLogin").hide();
        $("#semLogin").show();
    }
    
});
