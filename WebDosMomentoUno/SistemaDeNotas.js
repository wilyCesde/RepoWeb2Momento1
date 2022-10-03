//declarar las varibles
let GuardarAlumnos = [];
let Id = document.getElementById("Id");
let Nombre = document.getElementById("Nombre");
let Asignatura = document.getElementById("Asignatura");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
let Definitiva = document.getElementById("Definitiva");
let Observaciones = document.getElementById("Observaciones");
let btnCalcular = document.getElementById("btnCalcular");
let btnLimpiar = document.getElementById("btnLimpiar");
let btnBuscar = document.getElementById("btnBuscar");
let btnListar = document.getElementById("btnListar");
let MostrarR = document.getElementById("btnMostrarR");
let TAlumnos = document.getElementById("TAlumnos");
let MostrarCollecion = document.getElementById("MostrarCollecion");
//crear funciones para oobligacion de campos
Id.onfocus = () => {
  Mensajeid.textContent = " Su Identificacion es Obligatoria";
};
Nombre.onfocus = () => {
  MensajeNombre.textContent = " Campo Obligatorio";
};
Asignatura.onfocus = () => {
  MensajeAsignatura.textContent = " Campo Obligatorio";
};
Id.addEventListener("blur", function () {
  Mensajeid.textContent = "";
});
Nombre.addEventListener("blur", function () {
  MensajeNombre.textContent = "";
});
Asignatura.addEventListener("blur", function () {
  MensajeAsignatura.textContent = "";
});

//programat boton de guardar

//Programar Funcion Acyncrona PAra el Boton de Guardar
btnCalcular.addEventListener("click", () => {
  const formulario = document.getElementById("formulario");
  const inputs = document.querySelectorAll("#formulario input");
  
  let nota_1, nota_2, nota_3, promedio;
  nota_1 = parseFloat(document.formulario1.nota1.value);
  nota_2 = parseFloat(document.formulario1.nota2.value);
  nota_3 = parseFloat(document.formulario1.nota3.value);
  promedio = (nota_1 + nota_2 + nota_3) / 3;
  document.formulario1.Definitiva.value = promedio;


  if (promedio <= 2) {
    document.formulario1.Observaciones.value = "Reprobado";
  }
  if (promedio > 2 && promedio < 2.94) {
    document.formulario1.Observaciones.value =
      "Debe comunicarse con el docente para habilitacion";
  }
  if (promedio >= 3 && promedio <= 5) {
    document.formulario1.Observaciones.value = "Felicitaciones quedas aprobado";
  }

  if (promedio >= 5.1) {
    alert("error numero no permitido");
  }


  
   GuardarAlumnos.push({
      Identificación: Id.value,
      Nombre: Nombre.value,
      Asignatura: Asignatura.value,
      nota1: nota1.value,
      nota2: nota2.value,
      nota3: nota3.value,
      Definitiva: Definitiva.value,
     Observaciones: Observaciones.value,
      
    });
    console.table(GuardarAlumnos);
  
});

//programar botton de limpiar
btnLimpiar.addEventListener("click", () => {
  Id.value = "";
  Nombre.value = "";
  Asignatura.value = "";
  nota1.value = "";
  nota2.value = "";
  nota3.value = "";
  Definitiva.value = "";
  Observaciones.value = "";
  //Enviar el foco a valor 1
  Id.focus();
});

//crear boton listar
btnListar.addEventListener("click", () => {
  let newTable = document.createElement("table");
  newTable.setAttribute("border", "1");
  let newthId = document.createElement("th");
  let newTextthId = document.createTextNode("Id");
  let newthNombre = document.createElement("th");
  let newTextthNombre = document.createTextNode("Nombre");
  let newthAsignatura = document.createElement("th");
  let newTextthAsignatura = document.createTextNode("Asignatura");
  let newthnota1 = document.createElement("th");
  let newTextthnota1 = document.createTextNode("nota1");
  let newthnota2 = document.createElement("th");
  let newTextthnota2 = document.createTextNode("nota2");
  let newthnota3 = document.createElement("th");
  let newTextthnota3 = document.createTextNode("nota3");
  let newthDefinitiva = document.createElement("th");
  let newTextthDefinitiva = document.createTextNode("Definitiva");
  let newthObservaciones = document.createElement("th");
  let newTextthObservaciones = document.createTextNode("Observaciones");

  //agregar los textos a cada encabezado
  newthId.appendChild(newTextthId); //aqui tengo error
  newthNombre.appendChild(newTextthNombre);
  newthAsignatura.appendChild(newTextthAsignatura);
  newthnota1.appendChild(newTextthnota1);
  newthnota2.appendChild(newTextthnota2);
  newthnota3.appendChild(newTextthnota3);
  newthDefinitiva.appendChild(newTextthDefinitiva);
  newthObservaciones.appendChild(newTextthObservaciones);

  //agregar los th ala tabla

  newTable.appendChild(newthId);
  newTable.appendChild(newthNombre);
  newTable.appendChild(newthAsignatura);
  newTable.appendChild(newthnota1);
  newTable.appendChild(newthnota2);
  newTable.appendChild(newthnota3);
  newTable.appendChild(newthDefinitiva);
  newTable.appendChild(newthObservaciones);
  //agregar la tabla a al div TAlumnos

  //recorrer el arreglo para que cada uno sea una fila
  GuardarAlumnos.map((Galumnos) => {
    let newRow = document.createElement("tr");
    let newtdId = document.createElement("td");
    let newTextId = document.createTextNode(Galumnos.Identificación);
    let newtdNombre = document.createElement("td");
    let newTextNombre = document.createTextNode(Galumnos.Nombre);
    let newtdAsignatura = document.createElement("td");
    let newTextAsignatura = document.createTextNode(Galumnos.Asignatura);
    let newtdnota1 = document.createElement("td");
    let newTextNota1 = document.createTextNode(Galumnos.nota1);
    let newtdnota2 = document.createElement("td");
    let newTextNota2 = document.createTextNode(Galumnos.nota2);
    let newtdnota3 = document.createElement("td");
    let newTextNota3 = document.createTextNode(Galumnos.nota3);
    let newtdDefinitiva = document.createElement("td");
    let newTextDefinitiva = document.createTextNode(Galumnos.Definitiva);
    let newtdObservaciones = document.createElement("td");
    let newTextObservaciones = document.createTextNode(Galumnos.Observaciones);
    let caja = document.getElementById("caja"); 
    //agregar a cada  elemento de los tds

    newtdId.appendChild(newTextId);
    newtdNombre.appendChild(newTextNombre);
    newtdAsignatura.appendChild(newTextAsignatura);
    newtdnota1.appendChild(newTextNota1);
    newtdnota2.appendChild(newTextNota2);
    newtdnota3.appendChild(newTextNota3);
    newtdDefinitiva.appendChild(newTextDefinitiva);
    newtdObservaciones.appendChild(newTextObservaciones);

    // agregar los tds
    newRow.appendChild(newtdId);
    newRow.appendChild(newtdNombre);
    newRow.appendChild(newtdAsignatura);
    newRow.appendChild(newtdnota1);
    newRow.appendChild(newtdnota2);
    newRow.appendChild(newtdnota3);
    newRow.appendChild(newtdDefinitiva);
    newRow.appendChild(newtdObservaciones);

    newTable.appendChild(newRow);
  });

  TAlumnos.appendChild(newTable);
});

btnBuscar.addEventListener("click", () => {
  let menBus = document.createElement("p");
  let NewMenBus = document.createTextNode("Buscando identificacion ...");
  menBus.appendChild(NewMenBus);
  MostrarCollecion.appendChild(menBus);

  function getAlumno(Id) {
    let alumnofind = GuardarAlumnos.find(
      (buscar) => buscar.Identificación == Id
    );
    return alumnofind != undefined ? alumnofind : false;
  }

  let searchAlumno = async () => {
    let buscarId = Id.value;
    let idAlumno = await getAlumno(buscarId);
    if (!idAlumno) {
      NewMenBus.textContent = "Identificacion no encontrada...";
    } else {
      Nombre.value = idAlumno.Nombre;
      Asignatura.value = idAlumno.Asignatura;
      nota1.value = idAlumno.nota1;
      nota2.value = idAlumno.nota2;
      nota3.value = idAlumno.nota3;
      Definitiva.value = idAlumno.Definitiva;
      Observaciones.value = idAlumno.Observaciones;
      NewMenBus.textContent = "Busqueda finalizada ...";
    }
  };

  setTimeout(() => {
    searchAlumno();
  }, 2000);
});


window.onload = inicializar;
function inicializar() {
  document
    .getElementById("btnCalcular")
    .addEventListener("click", validarCampo, false);
}
function validarCampo() {
  let caja = document.getElementById("caja");
  caja.innerHTML = "";
  let camposTexto = document.getElementsByClassName("form-control");
  for (let i = 0; i < camposTexto.length; i++) {
    if (camposTexto[i].value == "") {
      caja.style.display = "block";
      caja.innerHTML +=
        "El campo " + camposTexto[i].id + " no puede estar vacío";
    } else {
      caja.style.display = "none";
    }
  }
}









