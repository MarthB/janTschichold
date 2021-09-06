let openNav = () =>{
    let nav = document.getElementsByClassName("mainNav")[0];
    if (nav.classList.contains("close")){
        nav.classList.toggle("open");
        nav.classList.toggle("close");
    }else if (nav.classList.contains("open")){
        nav.classList.toggle("open");
        nav.classList.toggle("close");
    }else{
        nav.classList.toggle("open");
    }
    

}

