let something = 44;
function functionBugParent() {
    let something = 9;
    console.log(something);
    console.log(lesNews);


    function functionBugEnfant() {
        let lesNews = `il est 99h67`;
    }
};
functionBugParent();
console.log(something);