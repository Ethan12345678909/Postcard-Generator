let states = document.getElementById('states');
states.onchange = function() {
    //Gives list number in console. Joining string 'states index' to selected dropdown number.
    console.log('states index: ' + states.selectedIndex);
    //Gives states full name in console. Joining string 'states index' to selected option TEXT.
    console.log('states index: ' + states.options[states.selectedIndex].text);
    //Gives the title to the specific image of selected state in console. 
    console.log('img/' + states.value + '@2x.jpg');
    //Goes into the postcard and changes the background css to the selected state through a string value.
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)'; 
    //selects the HTML element with the ID of state-heading and assign it the new value of selected state from the drop down menu.
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text
    //changes from default to set message, foes into HTML and changes it. Not dynamic.
    document.getElementById('greeting').innerHTML = 'Greetings from'
}

