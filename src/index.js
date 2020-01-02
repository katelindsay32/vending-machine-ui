
window.onload = function () {
    const btn = document.getElementById('dollar');
    console.log("found obj " + btn);
    function logMessage() {
        console.log("hi");
        InsertDollar();
    };

    function InsertDollar() {
        console.log("Quarter inserted!");
    }

    btn.onclick = logMessage;
};



