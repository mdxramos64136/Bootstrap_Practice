function userScroll(){
    const navbar = document.querySelector('.navbar');

    // scroll is the event to be listened
    window.addEventListener('scroll', () =>{
        //check where the scroll is. Window obj has a property called
        // (y axis). If that value (scrolY) is above 50, the clas bg-dark 
        // will be add to the navbar, selected by a class in there(.navbar).
        // if not, the class will be removed.
        if(window.scrollY > 80){
            navbar.classList.add('bg-dark');
            //console.log(window.scrollY);
        } else {
            navbar.classList.remove('bg-dark');
        }
    }); 
}

// the function will run when the DOM is loaded:
document.addEventListener('DOMContentLoaded', userScroll);