const reqURl = "https://api.github.com/users/sanketpatel22"
const req = new XMLHttpRequest();
req.open("GET", reqURl, true);
req.onload = function() {
    if (req.status >= 200 && req.status < 300) {
        const data = JSON.parse(req.responseText);
        const name = data.name;
        console.log(name);
        document.getElementById("userName").innerHTML = name;

        const img = data.avatar_url;
    } else {
        console.error("Error fetching data:", req.statusText);
    }
};
req.onerror = function() {
    console.error("Network error occurred.");
};

req.send();
