function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function createDaysOfDecember() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const listOfDays = document.getElementById("days");
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let createDay = document.createElement("li");
        createDay.className = "day";
        if (decemberDaysList[index] == 24 || decemberDaysList[index] == 25 || decemberDaysList[index] == 31) {
            createDay.classList.add("holiday");
        }
        if (decemberDaysList[index] == 4 || decemberDaysList[index] == 11 || decemberDaysList[index] == 18 || decemberDaysList[index] == 25) {
            createDay.classList.add("friday");
        }
        createDay.innerText = decemberDaysList[index];
        listOfDays.appendChild(createDay);
    }
  }

  createDaysOfDecember();

  function createButton(Feriados) {
    let localizaButtonContainer = document.getElementsByClassName("buttons-container");
    let buttonFeriados = document.createElement("button");
    if (Feriados == "Feriados") {
        buttonFeriados.setAttribute("id", "btn-holiday");
    } else if (Feriados == "Sexta-Feira") {
        buttonFeriados.setAttribute("id", "btn-friday");
    }
    buttonFeriados.innerText = Feriados;
    localizaButtonContainer[0].appendChild(buttonFeriados);
  }

  createButton("Feriados");

  function clickMudaCor() {
    let listOfHolidays = document.getElementsByClassName("holiday");
    for (let index = 0; index < listOfHolidays.length; index += 1) {
        if (listOfHolidays[index].style.color == "green") {
            listOfHolidays[index].style.color = "#777";
        } else {
            listOfHolidays[index].style.color = "green";
        }
    }
  }

  function mudarCorFundoFeriado() {
    let localizaButton = document.getElementById("btn-holiday");
    localizaButton.addEventListener("click", clickMudaCor);
  }

  mudarCorFundoFeriado();

  createButton("Sexta-Feira");

  function clickSexta() {
    let listFridayFixed = [4, 11, 18, 25];
    let listOfSexta = document.getElementsByClassName("friday");
    for (let index = 0; index < listOfSexta.length; index += 1) {
        if(listOfSexta[index].innerText == "Sextou") {
            listOfSexta[index].innerText = listFridayFixed[index];
        } else {
            listOfSexta[index].innerText = "Sextou";
        }
    }

  }

  function mudarSexta() {
    localizaButton = document.getElementById("btn-friday");
    localizaButton.addEventListener("click", clickSexta);
  }

  mudarSexta();

  function mouseZoom(evento) {
    if (evento.type == "mouseover") {
        evento.target.style.fontSize = "30px";
        evento.target.style.fontWeight = "600";
    } else {
        evento.target.style.fontSize = "20px";
        evento.target.style.fontWeight = "200";
    }
  }

  function mudarZoom() {
    let localizaDias = document.getElementsByClassName("day");
    for (let index = 0; index <localizaDias.length; index += 1) {
        localizaDias[index].addEventListener("mouseover", mouseZoom);
        localizaDias[index].addEventListener("mouseleave", mouseZoom);
    }
  }

  mudarZoom();

  function adicionarTarefas(tarefa) {
    let localizaTarefas = document.getElementsByClassName("my-tasks");
    let tarefaAdicionada = document.createElement("span");
    tarefaAdicionada.innerText = tarefa;
    localizaTarefas[0].appendChild(tarefaAdicionada);
  }

  adicionarTarefas("Cozinhar");

  function adicionarLegenda(cor) {
    let localizaTarefas = document.getElementsByClassName("my-tasks");
    let legendaAdicionada = document.createElement("div");
    legendaAdicionada.className = "task";
    legendaAdicionada.style.backgroundColor = cor;
    localizaTarefas[0].appendChild(legendaAdicionada);
  }

  adicionarLegenda("purple");

  function adicionarSelecao() {
    let localizaTask = document.querySelector(".task");
    let localizaTaskSelected = document.getElementsByClassName("task selected");
    localizaTask.addEventListener("click",function (event) {
        if (localizaTaskSelected.length === 0) {
            event.target.className = "task selected"
        } else {
            event.target.className = "task";
        }
        adicionarDiaLegenda(localizaTask.style.backgroundColor);
    });
  }

adicionarSelecao();

function adicionarDiaLegenda(cor) {
    let localizaDias = document.getElementsByClassName("day");
    let localizaTaskSelected = document.getElementsByClassName("task selected");
    for (let index = 0; index < localizaDias.length; index += 1) {
        localizaDias[index].addEventListener("click",function() {
            if (localizaTaskSelected.length > 0 && localizaDias[index].style.color !== cor) {
                localizaDias[index].style.color = cor;
            } else {
                localizaDias[index].style.color = "#777";
            }
        });
    }
}

function adicionaCompromisso() {
  let respostaCompromisso = document.querySelector("input");
  let respostaButton = document.getElementById("btn-add");
  let listaTask = document.getElementsByClassName("task-list");
  respostaButton.addEventListener("click", function() {
    if(respostaCompromisso.value.length>0) {
      let newLi = document.createElement("li");
      newLi.innerText = respostaCompromisso.value;
      listaTask[0].appendChild(newLi);
      respostaCompromisso.value = '';
    } else {
      alert("Digite 1 caracter pelo menos");
    }
  });
  respostaCompromisso.addEventListener("keyup", function(event) {
    if(event.key === 'Enter' && respostaCompromisso.value.length>0) {
      let newLi = document.createElement("li");
      newLi.innerText = respostaCompromisso.value;
      listaTask[0].appendChild(newLi);
      respostaCompromisso.value = '';
    }
  });
}

adicionaCompromisso();
