// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 let amigos = [];

  function agregarAmigo() {
    //Capturar el valor del campo del texto
    let nombre = document.getElementById("amigo").value.trim();
    //Validacion de campo vacio
    if (nombre === "") {
      alert("Por favor, digite el nombre de sus amigos.");
      return;
    }
    //Actualiza el array con nombre de amigos
    amigos.push(nombre);
    //Mostrar lista de amigos actualizada
    mostrarAmigos();
    //Limpiar el campo de texto de los amigos
    document.getElementById("amigo").value = "";
  }
  function mostrarAmigos() {
    //Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    //bucle de array y suma elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
      // Crear <li> (Lista)
      let li = document.createElement("li");
      li.textContent = amigos[i];
      // Agregar <li> a la lista
      lista.appendChild(li);
    }
    
  }
  function sortearAmigo() {
    if (amigos.length === 0) {
      alert("No hay amigos en la lista para sortear.");
      return;
    }

    // Selecciona un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado
    document.getElementById("resultado").textContent = 
      "🎉 El amigo secreto sorteado es: " + amigoSorteado;
      amigos = [];
  mostrarAmigos();
  }
