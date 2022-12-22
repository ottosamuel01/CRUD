var selectedRow = null;

// mostrar alerta
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000)
}

  // limpar todos os campos
    function clearFields(){
        document.querySelector("#firstName").value = "";
        document.querySelector("#lastName").value = "";
        document.querySelector("#rollNo").value = "";
    }

    // adicionar dados
    document.querySelector("#student-form").addEventListener("submit", (e) =>{
        e.preventDefault();

        // Obter valores de formulário
        const firstName = document.querySelector("#firstName").value;
        const lastName = document.querySelector("#lastName").value;
        const rollNo = document.querySelector("#rollNo").value;

        // validade
        if (firstName == "" || lastName == "" || rollNo == "") {
            showAlert("Por favor preencha todos os campos 👍", "danger");
        }
        else{
            if (selectedRow == null) {
                const list = document.querySelector("#student-list");
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${rollNo}</td>
                    <td>
                    <a href="#" class="btn btn-warning btn-sm edit">edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                `;
                list.appendChild(row);
                selectedRow = null;
                showAlert("Estudante adicionado", "success");
            }
            else{
                selectedRow.children[0].textContent = firstName;
                selectedRow.children[1].textContent = lastName;
                selectedRow.children[2].textContent = rollNo;
                selectedRow = null;
                showAlert("Estudante editado", "info");
            }

            clearFields();
        }
    });

    // Editar dados

    document.querySelector("#student-list").addEventListener("click", (e) =>{
        target = e.target;
        if(target.classList.contains("edit")){
            selectedRow = target.parentElement.parentElement;
            document.querySelector("#firstName").value = selectedRow.children[0].textContent;
            document.querySelector("#lastName").value = selectedRow.children[1].textContent;
            document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
        }
    })

    //  deletar dados

  document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("estudante deletado", "danger");
    }
  });

  // MENU

  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').scr = "menu_white_36dp.svg";
    }else{
        menuMobile.classList.add('open');
    }
  }

  // Botão Inicio

  function inicio() {
    var resetar = document.querySelector("#student-list").innerHTML = "";
  }

  // projetos

   var project = document.querySelector('firstName,lastName,rollNo').innerHTML = href = "projetos.html";