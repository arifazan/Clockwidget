(function(){const now = new Date();

const month = now.toLocaleString('default', { month: 'long' });
const day = now.toLocaleDateString('default', {weekday: 'short'});


date = day + ", " + now.getUTCDate() + " " + month+ " " + now.getUTCFullYear();

function clock(){
    var time = new Intl.DateTimeFormat('en-GB',{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time.format();
    setInterval(clock,1000);
}});