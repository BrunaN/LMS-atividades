$("#logout").click(function(){
    window.localStorage.removeItem("emailLogin");

    window.location.href = "index.html";
});