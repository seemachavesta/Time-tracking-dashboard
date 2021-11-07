const userPanel = document.querySelector('.user-panel');
import fetchData from "./fetchData.js";

// monthly card report
export function monthlyCard(data){
   let boxContent = "";
    data.forEach(data => {
        const  {current, previous} = data.timeframes.monthly;
        boxContent += `<div class="panel-box weekly ${data.title.toLowerCase()}">
        <div class="box-content">
            <div class="row1">
                <h1>${data.title}</h1>
                <span><img src="./images/icon-ellipsis.svg" alt=""></span>
                
            </div>
            <div class="row2">
                 <p class="current">${current}hrs</p>
                <p class="pervious">
                    last week - ${previous}hrs
                </p>
            </div>
        </div>
    </div>`
        
    userPanel.innerHTML = boxContent;
});
}



// Weakly card report
export function weeklyCard(data){
    let boxContent = "";
    data.forEach(data => {
        const  {current, previous} = data.timeframes.weekly;
        boxContent += `<div class="panel-box weekly ${data.title.toLowerCase()}">
        <div class="box-content">
            <div class="row1">
                <h1>${data.title}</h1>
                <span><img src="./images/icon-ellipsis.svg" alt=""></span> 
            </div>

            <div class="row2">
               <p class="current">${current}hrs</p>
                <p class="pervious">
                    last week - ${previous}hrs
                </p>
            </div>
        </div>
    </div>`
        
    // userPanel.innerHTML = boxContent;
});
userPanel.innerHTML = boxContent;
}

fetchData('data.json').then(data => weeklyCard(data));




export function dailyCard(data){
    let boxContent = "";
    data.forEach(data => {
        
        const  {current, previous} = data.timeframes.daily;
        boxContent += `<div class="panel-box weekly ${data.title.toLowerCase()}">
        <div class="box-content">
            <div class="row1">
                <h3>${data.title}</h3>
                <span><img src="./images/icon-ellipsis.svg" alt=""></span>   
            </div>

            <div class="row2">
                <p class="current">${current}hrs</p>
                <p class="pervious">
                    last week - ${previous}hrs
                </p>
            </div>
        </div>
    </div>`
        
    userPanel.innerHTML = boxContent;
});
}