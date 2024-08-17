const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const show = document.getElementById('results');
    if(height === '' || height < 0 || weight === '' || weight < 0 || isNaN(height) || isNaN(weight)){
        show.innerText = "Please Enter some Valid Values!!";
    }
    else{
        const result = weight / Math.pow(height/100,2);
        show.innerText = result.toFixed(2);
    }
})