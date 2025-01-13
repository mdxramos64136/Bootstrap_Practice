// Replace text in header...

// selects the first element in the DOM with the replace-me class and 
// stores it in the checkReplace variable.
const checkReplace = document.querySelector('.replace-me');

if(checkReplace !== null){
    /* we have access to this object due the script that we have included (Replace.mim.js)
     * If checkReplace is not null, a new ReplaceMe object is created, 
       passing the checkReplace element and a configuration object as arguments.
     */
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 1000,
        separator: ',',
        loopCount: 'infinite', // how many times will it be repeated? Forever...
        autoRun: true
    });
}


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
            navbar.classList.add('navbar-sticky'); //navbar-sticky is a custom class. Check styles.scss
            navbar.classList.add('border-secondary');
            navbar.classList.add('border-bottom');
            //console.log(window.scrollY);
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
            navbar.classList.remove('border-secondary');
            navbar.classList.remove('border-bottom');
        }
    }); 
}

// the function will run when the DOM is loaded:
document.addEventListener('DOMContentLoaded', userScroll);