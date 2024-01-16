    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");



    function opentab (tabname){
        
    for( tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for( tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

   event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu (){
    document.getElementById("menu").style.right="0";
    document.getElementById("bar").style.display="none";
    
}
function closemenu (){
    document.getElementById("menu").style.right="-200px";
    document.getElementById("bar").style.display="block";


}
