//fetch covid data from api
function fetchData() {
    fetch("https://api.covid19api.com/summary")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("TotalConfirmed").innerHTML = "TotalConfirmed: " + data.Global.TotalConfirmed;
            document.getElementById("NewConfirmed").innerHTML = "NewConfirmed: " + data.Global.NewConfirmed;
            document.getElementById("TotalDeaths").innerHTML = "TotalDeaths: " + data.Global.TotalDeaths;
            document.getElementById("NewDeaths").innerHTML = "NewDeaths: " + data.Global.NewDeaths;
            // get today's date
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;
            document.getElementById("date").innerHTML = "Date: " + today;

        })
        .catch((error) => {
            console.error(error);
        });
}
fetchData();
