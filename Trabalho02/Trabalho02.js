let contatos = [
    { 
      usuario: "joao03",
      mensagens: [
       {
         usuario: "joao03",
         texto: "Tudo bem?"
       },
       {
         usuario: "victor23",
         texto: "Tudo Tranqs"
       },
       {
          usuario: "joao03",
          texto: "Que bom"
        }
      ]
     },
     { 
       usuario: "maria2000",
       mensagens: [
         {
           usuario: "maria2000",
           texto: "Na paz?"
         },
         {
           usuario: "victor23",
           texto: "Show"
         },
         {
           usuario: "maria2000",
           texto: "Que bom"
         }
       ]
     },
     { 
       usuario: "robson_alves",
       mensagens: [
         {
           usuario: "victor03",
           texto: "Bom?"
         },
         {
           usuario: "robson_alves",
           texto: "Bom"
         },
         {
           usuario: "victor03",
           texto: "Que bom"
         }
       ]
     }
   ];
   
   
   let contactsList = document.querySelector(".contacts-list");
   let messages = document.querySelector(".messages");
   let nameContact = document.querySelector(".name-contact");
   let contatosHtml = [];
   
   function mostrarMensagens(contato){
     let mensagens = contato.mensagens;
     let name = document.createTextNode(contato.usuario);
    
     nameContact.innerHTML = "";
     messages.innerHTML = "";
     
     nameContact.appendChild(name);
     
     for(let i = 0, size = mensagens.length; i < size; i++){
       let mensagem = mensagens[i];
       let message = document.createElement("div");
       let span = document.createElement("span");
       let text = document.createTextNode(mensagem.texto);
       
       span.appendChild(text);
       message.classList.add("message");
       
       message.appendChild(span);
       
       if(contato.usuario != mensagem.usuario){
         message.classList.add("me");
       }
       
       messages.appendChild(message);
     }
   }
   
   function mostrarContato(contato){
     let contact = document.createElement("div");
     let icone = document.createElement("div");
     let img = document.createElement("img");
     let nameContact = document.createElement("span");
     let textName = document.createTextNode(contato.usuario);
     
     nameContact.classList.add("name");
     nameContact.appendChild(textName);
     img.src = "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png";
     icone.classList.add("icon");
     icone.appendChild(img);
     contact.appendChild(nameContact);
     contact.appendChild(icone);
     contact.classList.add("contact");
     
     contactsList.appendChild(contact);
     contatosHtml.push(contact);
     
     contact.addEventListener("click", function(){
       mostrarMensagens(contato);
       
       for(let i = 0, size = contatosHtml.length; i<size; i++){
         contatosHtml[i].classList.remove("active");
       }
       
       this.classList.add("active");
     });
   }
   
   
   window.addEventListener("load", function(){
     for(let i=0, size = contatos.length; i<size; i++){
       mostrarContato(contatos[i]);
     }
   });