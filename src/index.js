import CoinService from './coinService';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
window.onload = function () {
    var coinService = new CoinService();

    const dollarBtn = document.getElementById('dollar');
    dollarBtn.onclick = coinService.InsertDollar;

    const quarterBtn = document.getElementById('quarter');
    quarterBtn.onclick = coinService.InsertQuarter;

    const dimeBtn = document.getElementById('dime');
    dimeBtn.onclick = coinService.InsertDime;

    const nickelBtn = document.getElementById('nickel');
    nickelBtn.onclick = coinService.InsertNickel;

    const canadianQuarterBtn = document.getElementById('canadian');
    canadianQuarterBtn.onclick = coinService.InsertCanadianQuarter;
};