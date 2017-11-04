let messages = document.querySelector(".messages");
let groupsList = document.querySelector(".groups-list");
let nameGroup = document.querySelector(".name-group");
let groupsHtml = [];

function showMessages(group){
    // console.log(group);
    let name = group.groupName;
    let id = group.groupID;
    // console.log(name, id);
    let groupName = document.createTextNode(name);
    nameGroup.innerHTML = "";
    messages.innerHTML = "";

    nameGroup.appendChild(groupName);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState==4){
            let obj = JSON.parse(xhttp.responseText);
            // console.log(obj);
            for(let i = 0, size = obj.length; i < size; i++){
                // console.log(obj[i].message);
                let msg = obj[i].message;
                let contact = obj[i].userName;
                // console.log(contact);
                let message = document.createElement("div");
                let container = document.createElement("div")
                let nameContact = document.createElement("div");
                let messageContact = document.createElement("div");
                let name = document.createElement("span");
                let messageSpan = document.createElement("span");
                let textName = document.createTextNode(contact);
                let textMessage = document.createTextNode(msg);

                name.appendChild(textName);
                messageSpan.appendChild(textMessage);
                nameContact.appendChild(name);
                nameContact.classList.add("name-contact");
                messageContact.appendChild(messageSpan);
                messageContact.classList.add("message-contact");
                container.appendChild(nameContact);
                container.appendChild(messageContact);
                container.classList.add("message-container")
                message.appendChild(container);
                message.classList.add("message");

                messages.appendChild(message);
            }
        }
    }

    xhttp.open('GET','https://rest.learncode.academy/api/Bruna/'+id, true);
    xhttp.send();

}

function showGroups(nameGroup){
    let group = document.createElement("div");
    let name_group = document.createElement("span");
    let icon = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createTextNode(nameGroup.groupName);

    img.src = "icone.png";

    name_group.classList.add("name");
    name_group.appendChild(text);
    group.appendChild(name_group);
    icon.classList.add("icon");
    icon.appendChild(img);
    group.appendChild(icon);
    group.classList.add("group");

    groupsList.appendChild(group);
    groupsHtml.push(group);

    group.addEventListener("click", function(){
        // console.log(nameGroup.groupID);
        showMessages(nameGroup);

        for(let i = 0, size = groupsHtml.length; i<size; i++){
            groupsHtml[i].classList.remove("active");
        }

        this.classList.add("active");
    })
}

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(xhttp.readyState==4){
        let obj_parsed = JSON.parse(xhttp.responseText);
        for(let i=0; i<obj_parsed.length; i++){
            showGroups(obj_parsed[i]);
            // console.log(obj_parsed[i])
        }
    }
}
xhttp.open('GET','https://rest.learncode.academy/api/Bruna/groups', true);
xhttp.send();