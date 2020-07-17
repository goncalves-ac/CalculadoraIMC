var inputRangeAltura = null;
var inputRangePeso =  null;


window.addEventListener('load', () => {

    inputRangeAltura = document.querySelector('#inputRangeAltura');
    spanAltura = document.querySelector('#spanAltura');
    inputRangeAltura.addEventListener('input', () => {
        spanAltura.innerHTML = inputRangeAltura.value;
    });
    
    inputRangePeso = document.querySelector('#inputRangePeso');
    spanPeso = document.querySelector('#spanPeso');
    inputRangePeso.addEventListener('input', () => {
        spanPeso.innerHTML = inputRangePeso.value;
    });

});

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('open');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'close'){
                modal.classList.remove('open');
                limpar();
            }
        });
    }
}

function calcularIMC () {
    var nome = inputName.value;
    var peso = inputRangePeso.value;
    var alt = inputRangeAltura.value;
    var sexo = document.querySelector('.inputSexo:checked').value;
    var imc = peso / (alt ** 2);
    
    if (imc <= 17) {
        resultado="Você está muito abaixo do peso.";
        image = myIMG("image/imc17.png", "Muito abaixo do peso");
    } else if (imc <= 18.49) {
        resultado="Você está abaixo do peso.";
        image = myIMG("image/imc185.png", "Abaixo do peso");
    } else if (imc <= 24.99) {
        resultado="Você está com o peso normal";
        image = myIMG("image/imc250.png", "Peso normal");
    } else if (imc <= 29.99) {
        resultado="Você está acima do peso.";
        image = myIMG("image/imc300.png", "Acima do peso");
    } else if (imc <= 34.99) {
        resultado="Você está com obesidade grau I.";
        image = myIMG("image/imc350.png", "Obesidade Grau I");
    } else if (imc <= 39.99) {
        resultado="Você está com obesidade grau II.";
        image = myIMG("image/imc400.png", "Obesidade Grau II");
    } else {
        resultado="Você está com obesidade grau III.";
        image = myIMG("image/imc401.png", "Obesidade Grau III");
    }

    var putName = document.querySelector('h2');
    putName.innerHTML = nome;
    var putAltura = document.querySelector('#altura span');
    putAltura.innerHTML = alt;
    var putPeso = document.querySelector('#peso span');
    putPeso.innerHTML = peso;
    var putSexo = document.querySelector('#sexo span');
    putSexo.innerHTML = sexo;
    var putIMC = document.querySelector('#imc span');
    putIMC.innerHTML = imc.toFixed(2);
    var putResp = document.querySelector('#resp span');
    putResp.innerHTML = resultado;
    document.getElementById("img-modal").appendChild(image);
    iniciaModal('modalIMC');
}

function limpar (){
    document.querySelector("#formIMC").reset();
    document.querySelector('#spanAltura').innerHTML = '';
    document.querySelector('#spanPeso').innerHTML = '';
    document.getElementById("img-modal").innerHTML = '';
}

function myIMG(src, alt) {
    var x = document.createElement("IMG");
    x.setAttribute("src", src);
    x.setAttribute("alt", alt);
    return x;
}
