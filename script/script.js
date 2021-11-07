import { dailyCard, monthlyCard, weeklyCard } from "./card.js";
import fetchData from "./fetchData.js";
// selecting parents of button
const btn = document.querySelector("#navLinks");

// adding event listner to current button 
btn.addEventListener('click', async (e) => {
    
    if(e.target.tagName === 'BUTTON'){

        const currentButton = e.target;
        
        if(currentButton.textContent === 'Daily'){
            const dailyReport = await fetchData('data.json');
            dailyCard(dailyReport);

           
        }
        if(currentButton.textContent === "Weekly"){
            const weeklyReport = await fetchData('data.json');
            weeklyCard(weeklyReport);

        }
        if(currentButton.textContent === "Monthly"){
            const monthlyReport = await fetchData('data.json');
            monthlyCard(monthlyReport);

        }
        const activeButton = btn.querySelector('.active');
        console.log(activeButton)
        if(activeButton){
            activeButton.classList.remove('active');
        }
        currentButton.classList.add('active');
    }
})

