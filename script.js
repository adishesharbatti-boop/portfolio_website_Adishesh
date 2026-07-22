console.log("JavaScript is connected! 🚀");
// display the current year in the footer
let footerYear= document.querySelector('.footer-year');
if(footerYear) {
    footerYear.textContent = new Date().getFullYear();      
}
 
//3. Greeting based on time of day
function getGreeting(){
    const hour =new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening"
}
 
const heroTitle = document.querySelector('.hero-section h1');
if (heroTitle){
    heroTitle.textContent = `${getGreeting()}, I'm Adishesh 👋`;
}
 