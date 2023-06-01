function submit() {
    var radios = document.getElementsByName('rating');

    var selectedValue;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValue = radios[i].value;
        break;
      }
    }

    if(selectedValue > 0) {
        document.querySelector('#principal').innerHTML = `
        <div class="container-ty"> 
            <img src="src/images/illustration-thank-you.svg" alt="" class="icon"> 
            <span id="rateArea">You selected ${selectedValue} out of 5</span> 
            <h1>Thank you!</h1> 
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p> 
        </div>`;
    } else {
        let spanError = document.querySelector('.error');
        spanError.innerText = 'Please select an option.';
    } 
}