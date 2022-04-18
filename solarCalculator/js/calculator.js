/*******************************************************
 * calculator.js
 * Oluwafemi Faleye
 *
 * This file contains programs that supports the calculator web page.
 *******************************************************/


var field = document.getElementById('field'); //the html form element
var calcButton = document.createElement('input'); //calculate button

calcButton.setAttribute('type', 'button');
calcButton.setAttribute('class', 'btn btn-primary ml-2 b-hei');
calcButton.setAttribute('value', 'Calculate');
//calcButton.setAttribute('onclick', "window.location.href='#text-area';");


var panels = {
        12: [50, 100, 150, 200],
        24: [150, 200, 250, 330],
        36: [250, 300, 330, 400],
        48: [300, 330, 400, 450],
        60: [330, 360, 440, 500],
    } //object containing solar panels. Voltage is property, value is wattage.
var suitablePanel = []; // array of suitable panels
var panelQty = []; // array of quantities of each suitable panels


// This function create input field in the web page.
function createField(form) {
    var selectedAppliances = []; //list of selected options value
    var appliances; //select control for appliances
    let i = 0; //initialize i for iteration
    appliances = form.elements['appliances']; //select control for appliances

    field.innerHTML = ''; //    make the form element empty

    if (!form.checkValidity()) { //check if no option is selected
        document.getElementById('error').style.display = 'block';
        document.querySelector('.addInput').disabled = true;
        return;
    } else { //when option is selected
        document.getElementById('error').style.display = 'none';
        document.querySelector('.addInput').disabled = false;

    }

    //iterate over selected options and store in selectedAppliances list
    for (let option of appliances.selectedOptions) {
        selectedAppliances[i] = option.value;
        i += 1;
    }
    console.log(selectedAppliances);

    //create three input field for each appliances selected
    for (let j = 0; j < selectedAppliances.length; j++) {

        var col = document.createElement('div');
        var table = document.createElement('table');
        var tr1 = document.createElement('tr');
        var tr2 = document.createElement('tr');
        var tr3 = document.createElement('tr');
        var tr4 = document.createElement('tr');
        var th = document.createElement('th');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var qtyInput = document.createElement('input'); //quantity input control
        var wattInput = document.createElement('input'); //watt input control
        var hourInput = document.createElement('input'); //hour input control

        //the div element is used as a column
        col.setAttribute('class', 'col-sm-3 col-md-4 w-50 col-lg-2 text-light bg-dark');

        //assign class attribute for css class selector 
        table.setAttribute('class', 'table-field bg-primary');


        //assigning attributes for quantity input control 
        qtyInput.setAttribute('class', 'valu-input'); //for css class selector
        qtyInput.setAttribute('step', '1');
        qtyInput.setAttribute('required', '');
        qtyInput.setAttribute('type', 'number');
        qtyInput.setAttribute('placeholder', 'Quantity');
        qtyInput.setAttribute('min', '1');

        //assigning attributes for watt input control
        wattInput.setAttribute('class', 'valu-input');
        wattInput.setAttribute('step', '0.01');
        wattInput.setAttribute('required', '');
        wattInput.setAttribute('type', 'number');
        wattInput.setAttribute('placeholder', 'Watt');
        wattInput.setAttribute('min', '1');

        //assigning attributes for hour input control
        hourInput.setAttribute('class', 'valu-input');
        hourInput.setAttribute('step', '0.01');
        hourInput.setAttribute('required', '');
        hourInput.setAttribute('type', 'number');
        hourInput.setAttribute('placeholder', 'Hour');
        hourInput.setAttribute('min', '0.1');

        //assign appliance name to each set of input
        th.innerHTML = selectedAppliances[j];

        td1.appendChild(qtyInput);
        td2.appendChild(wattInput);
        td3.appendChild(hourInput);

        tr1.appendChild(th);
        tr2.appendChild(td1);
        tr3.appendChild(td2);
        tr4.appendChild(td3);
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        col.appendChild(table); //append table to column
        field.appendChild(col); //append column to the form element

        //if it's the last item in the selected appliances array
        if (j == selectedAppliances.length - 1) {
            var buttonCol = document.createElement('div'); //create new column
            buttonCol.setAttribute('class', 'col-sm-3 col-md-4 w-50 col-lg-2 text-info bg-dark');
            buttonCol.appendChild(calcButton); //append calculate button into column
            field.appendChild(buttonCol); //append last column into form element
            window.location.href = '#field'; //jump to input field on the page
        }

    }
} //end of createField

//This function add new appliance input field on the web page
function addAppliance(form) {

    var newAppliance = form.elements['additional-input'].value; //assign the input text
    var col = document.createElement('div');
    var table = document.createElement('table');
    var tr1 = document.createElement('tr');
    var tr2 = document.createElement('tr');
    var tr3 = document.createElement('tr');
    var tr4 = document.createElement('tr');
    var th = document.createElement('th');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var qtyInput = document.createElement('input');
    var wattInput = document.createElement('input');
    var hourInput = document.createElement('input');


    if (newAppliance != '') { //if there is text in the input
        col.setAttribute('class', 'col-sm-3 col-md-4 w-50 col-lg-2 text-light bg-dark');
        table.setAttribute('class', 'table-field bg-primary');

        qtyInput.setAttribute('class', 'valu-input');
        //qtyInput.setAttribute('size', '10');
        qtyInput.setAttribute('step', '1');
        qtyInput.setAttribute('required', '');
        qtyInput.setAttribute('type', 'number');
        qtyInput.setAttribute('placeholder', 'Quantity');

        wattInput.setAttribute('class', 'valu-input');
        //wattInput.setAttribute('size', '10');
        wattInput.setAttribute('step', '0.01');
        wattInput.setAttribute('required', '');
        wattInput.setAttribute('type', 'number');
        wattInput.setAttribute('placeholder', 'Watt');

        hourInput.setAttribute('class', 'valu-input');
        //hourInput.setAttribute('size', '10');
        hourInput.setAttribute('step', '0.01');
        hourInput.setAttribute('required', '');
        hourInput.setAttribute('type', 'number');
        hourInput.setAttribute('placeholder', 'Hour');

        th.innerHTML = titleCase(newAppliance); //titleCase the text 

        td1.appendChild(qtyInput);
        td2.appendChild(wattInput);
        td3.appendChild(hourInput);

        tr1.appendChild(th);
        tr2.appendChild(td1);
        tr3.appendChild(td2);
        tr4.appendChild(td3);
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        col.appendChild(table);

        field.insertBefore(col, field.childNodes[0]); //insert the column
        form.elements['additional-input'].value = ''; //empty the input
    } else { //if there is no text
        return;
    }
} //end of addAppliance

//here calculation is performed on the clicking of calculate button
calcButton.onclick = function() {
        var form = field.elements; //retreive and assign all input elements to form
        var textArea = document.getElementById('text-area');
        var appliQty = []; //appliance quantity array
        var appliWatt = []; //appliance watt array
        var appliHour = []; //appliance hour array
        var wattHour = 0; //initialize wattHour
        var actualLoad = 0; //initialize actual load or real load
        var panelWatt; //total panel wattage
        var inverterRating; //inverter VA rating
        var voltSystem; // inverter voltage system
        var battCurrent; // battery current rating
        var chgContCurrent; // charge controller current rating
        var chgContVolt; // charge controller voltage rating
        var battVoltage; //battery voltage 

        textArea.value = ''; //clear text area


        if (!field.checkValidity()) { //if there is invalid input
            //set the calculate button to toggle a modal
            calcButton.setAttribute('data-toggle', 'modal');
            //set the calculate button to target a modal dialog
            calcButton.setAttribute('data-target', '#modal');
        } else { //if all inputs are valid
            // empty the attribute to prevent dialog pop-up
            calcButton.setAttribute('data-toggle', '');
            calcButton.setAttribute('data-target', '');


            for (var i = 0; i < form.length - 1; i++) {
                console.log(form[i].value);
            }
            //form.length-1: to avoid the last input element which is of type button
            for (var i = 0; i < form.length - 1; i += 3) {
                let val = form[i].value;
                val = parseInt(val);
                appliQty.push(val); // push quantity to array
            }
            for (var i = 1; i < form.length - 1; i += 3) {
                let val = form[i].value;
                val = parseFloat(val);
                appliWatt.push(val); // push watt to array
            }
            for (var i = 2; i < form.length - 1; i += 3) {
                let val = form[i].value;
                val = parseInt(val);
                appliHour.push(val); // push hour to array
            }

            console.log(appliQty);
            console.log(appliWatt);
            console.log(appliHour);

            for (var i = 0; i < appliQty.length; i++) {
                wattHour = wattHour + (appliQty[i] * appliWatt[i] * appliHour[i]);
                actualLoad = actualLoad + (appliQty[i] * appliWatt[i]);
            }
            console.log(wattHour);
            console.log(actualLoad);

            panelWatt = wattHour / 5; // Total watthour divided by peak sun hours
            panelWatt = Math.round(panelWatt * 1.2); // Total panel wattage needed * factor of 1.2
            inverterRating = Math.round(actualLoad / 0.8); // Actual load divided by 0.8 inverter efficiency gives inverter size
            voltSystem = systemVoltage(inverterRating);
            battCurrent = wattHour / voltSystem; // Total watthour divided by voltage system gives batt. current needed
            battCurrent = Math.round(battCurrent / 0.8); // Final batt. current (divided by 0.8 battery depth of discharge
            battVoltage = voltSystem; // battery voltage
            chgContCurrent = Math.round(panelWatt / voltSystem); // Current rating for charge controller
            chgContVolt = voltSystem; // Voltage rating of charge controller
            sysPanel(panelWatt, voltSystem);
            console.log(voltSystem);
            console.log(suitablePanel);
            console.log(panelQty);
            console.log(battCurrent);
            console.log(inverterRating);

            textArea.style.display = 'block'; //make the text area visible
            window.location.href = '#text-area'; //jump to text area location on the page 
            inverterRating = wattToKVA(inverterRating); //return KVA if rating is greater than 1000
            textArea.value = '                     Generated Solar Report\n' +
                `Your total load is ${actualLoad}Watt.\n` +
                `Your daily watt/hour is ${wattHour}WH. \n` +
                `Total panel wattage needed is ${panelWatt}Watt (for off-grid). \n\n` +
                `${inverterRating} @ ${voltSystem}V inverter is required for your load. ` +
                `For installation, you can select from the list of suitable ${voltSystem}V ` +
                `panels below:\n` +
                `   a.  ${panelQty[0]} of ${suitablePanel[0]}Watt panel can be used\n` +
                `   b.  ${panelQty[1]} of ${suitablePanel[1]}Watt panel can be used\n` +
                `   c.  ${panelQty[2]} of ${suitablePanel[2]}Watt panel can be used\n` +
                `   d.  ${panelQty[3]} of ${suitablePanel[3]}Watt panel can be used\n` +
                `note: The exact panel you need may be unavailable, panels can be ` +
                `connected in series, parallel and also series-parallel to achieve ` +
                `the desired voltage system and current. See Series/Parallel in the ` +
                `navigation bar to learn more or consult a professional in this field.\n\n` +
                `Battery having ${battCurrent}A @ ${battVoltage}V capacity is ` +
                `requried. Batteries come in 12V, series connection will be necessary ` +
                `to achieve higher voltage ratings. For a battery current that is not ` +
                `available, batteries can be connected in parallel to achieve higher ` +
                `current. Click series/parallel in the navigation bar to learn more.\n\n` +
                `A ${chgContVolt}V charge controller is required. Total panel wattage ` +
                `divided by panel's open circuit voltage(Voc) will give charge controller ` +
                `current.\n` +
                `note: If the current is 40amps, you would pick the controller with the ` +
                `next higher current rating. \n\n` +
                `The above calculations are based on off-grid system. For an hybrid ` +
                `(semi-off-grid) system, cost can be reduced  by dividing total number ` +
                `of solar panels needed by two and also the total battery capacity by ` +
                `two.\n` +
                `   Click All Solar in the navigation section to learn more about installation.`;



        } // end of else
    } // end of function

// The function takes inverter rating as argument and return the
// inverter voltage system
function systemVoltage(rating) {
    var voltSystem = 12; // initialize voltage system to 12
    var count = 2; // initialize variable count to 2
    var val = rating / 12;

    //125 is used here to compliment wire current guage
    while (val > 125) { //execute this block only when val is greater than 125
        voltSystem = 12 * count; //
        val = rating / voltSystem;
        count = count + 1;
    }
    return voltSystem;
} // end of systemVoltage

// The function takes in the Watt/hour and voltage system and use
// these values to determine panel quantity and suitable panel 
function sysPanel(panelWatt, voltSys) {
    if (voltSys > 60) voltSys = 60;
    panels[voltSys].forEach((element, index) => {
        panelQty[index] = Math.round(panelWatt / element);
        suitablePanel[index] = element;
    })

} // end of sysPanel

//This function convert string to titlecase
function titleCase(string) {
    var sentence = string.toLowerCase().split(' ');
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    sentence = sentence.join(' ');
    return sentence;
} //end of titleCase

// The function convert Watt to kVA only if Watt>1000. Else, convert to VA 
function wattToKVA(rating) {
    if (rating >= 1000) {
        rating = rating / 1000;
        rating = rating.toFixed(1);
        return rating + 'KVA';
    } else return rating + 'VA';
} // end of wattToKVA