// Replace text in header...
const checkReplace = document.querySelector('.replace-me');

if(checkReplace !== null){
    // we have access to this object due the script that we have included (Replace.mim.js)
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 1000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true
    });
}