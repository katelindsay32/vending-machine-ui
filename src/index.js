import CoinService from './coinService';
import './style.css';

window.onload = function () {
    var coinService = new CoinService();

    const btn = document.getElementById('dollar');
    btn.onclick = coinService.InsertDollar;
};



