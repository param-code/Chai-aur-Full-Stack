const time = document.getElementById('time');
time.innerText = setInterval(()=> {
    const ans = new Date();
    time.innerText = ans.toLocaleTimeString();

},1000);