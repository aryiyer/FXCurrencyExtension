const afterBtn = document.getElementById("after-btn");

afterBtn.addEventListener('click',  async function(){
    const query = 'API_KEY';
    let resp = await fetch(query);
    const data = await resp.json();
    const popupMsg = document.getElementById('popupMsg');
    const time = document.getElementById('time');

    let userInput = parseInt(currencyInput());
    let fromEur = startingCurrency();
    let toEur = endCurrency();
    fromEur = data.rates[fromEur];
    toEur = data.rates[toEur];

    var convExp;
    if ((isNaN(fromEur)) || (isNaN(toEur)) || (isNaN(userInput) || userInput <= 0)){
        convExp = "Invalid Input";
        popupMsg.innerHTML = convExp;
        const convertMsg = document.getElementById('currency-converted');
        convertMsg.style.display = 'block';
    } else {
        convExp = ((userInput/fromEur)*toEur);
        convExp = 'Converted amount: ' + Math.round(convExp * 100)/100;
        popupMsg.innerHTML = convExp;
        const convertMsg = document.getElementById('currency-converted');
        time.innerHTML = getTime();
        convertMsg.style.display = 'block';
    }
});

function currencyInput(){
    return (document.getElementById('currency-input').value);
};
function startingCurrency(){
    var s = (document.getElementById('currency-from').value);
    s = s.toUpperCase();
    return s;
};
function endCurrency(){
    var s = (document.getElementById('currency-to').value);
    s = s.toUpperCase();
    return s;
};

function getTime(){
    var currentdate = new Date(); 
    var datetime = "Last Updated: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();
    return datetime;
    }
// case insensitivity
