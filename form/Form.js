const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {

    e.preventDefault();
   


    setTimeout(
        () => {
        // document.querySelector("*").remove();
        document.querySelector("form").remove();

        const H_1=document.createElement("h1");
        H_1.append(document.createTextNode("Thank You"));
    console.log("wello jihan");
    document.querySelector("body").classList.add("sub-edit");
         document.querySelector("h1").innerHTML="Thank You" ;
         document.querySelector("p").innerHTML=" Your request has been successfully registered" ;
         document.querySelector("div").classList.add("div-edit");



    } ,1000
    );

});




