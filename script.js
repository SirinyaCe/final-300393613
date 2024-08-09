// get the date from the input field
function getDate() {
    var date = document.getElementById('birthday').value;
    console.log("date : " + date);
    return date
}

// start the countdown
function start() {

    // Set the date we're counting down to
    var birthday = getDate()
    var countDownDate = new Date(birthday).getTime();
    console.log("countdown date : " + countDownDate);
    // Update the count down every 0.1 second
    setInterval("start()",100);

        // Get today's date and time
        var now = new Date()

        // Find the distance between now and the count down date
        var timeDistance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(timeDistance/1000/60/60/24)
        var hours = Math.floor(timeDistance % (1000*60*60*24)/1000/60/60)
        var mins = Math.floor(timeDistance % (1000*60*60)/1000/60)
        var secs = Math.floor(timeDistance % (1000*60)/1000)
        var dicsecs = Math.floor(timeDistance % (1000*60)/100)
        console.log('days: ',days)
        console.log('hours: ',hours)
        console.log('mins: ',mins)
        console.log('secs: ',secs)
        console.log('dicsecs: ',dicsecs)
        
        // Output the result in an element with id="demo"

        document.getElementById('days').innerHTML = days;
        document.getElementById('hrs').innerHTML = hours;
        document.getElementById('mins').innerHTML = mins;
        document.getElementById('secs').innerHTML = secs;
        document.getElementById('dicsecs').innerHTML = dicsecs;

        // If the count down is over, write some text 

        if (timeDistance < 0)
         document.getElementById('demo').innerHTML = 'Expired'

        
}

