let marka = [
    'BMW',
    'Opel',
    'Toyota',
    'Mercedes'
];
let model = [
['X5','M5','X6'],
['Astra','Vectra','Omega'],
['Camry','Prius','Corolla'],
['E190','E class','S class'],
]

let image = [
    ['X5.jpg', 'M5.jpg', 'X6.jpg'],
    ['OpelAstra.jpg', 'OpelVectra.jpg', 'OpelOmega.jpg'],
    ['Camry.jpg', 'Prius.jpg', 'Corolla.jpg'],
    ['190.jpg', 'Eclass.jpg', 'sclass.jpg']
  ];

let markaS=document.getElementById('marka');
let modelS=document.getElementById('model');
let imageS=document.getElementById('carImage');

function markaselect(){
    let data = `<option value="" disable selected>Marka select</option>`;
    for( let i=0; i <marka.length;i++){
        data += `<option value="${i}">${marka[i]}</option>`;
    }
    markaS.innerHTML= data;
}

function modelselect(){
    let markaValue = markaS.value;
    let modelValue = modelS.value;
    
    let data = `<option value="" disable selected>Model select</option>`;
    for( let i=0; i <model[markaValue].length;i++){
        data += `<option value="${i}">${model[markaValue][i]}</option>`;
    }
    modelS.innerHTML= data;

  
    imageS.src = `./${image[markaValue][modelValue]}`;
}

markaselect();
