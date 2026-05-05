async function calcular() {
  // Pegar os valores dos campos
  // nome
  const nome = document.getElementById("nome").value.trim();
  // altura
  const altura = parseFloat(document.getElementById("altura").value);
  // peso
  const peso = parseFloat(document.getElementById("peso").value);

  // dar mensagem se tiver faltando sem preencher
  if (nome.length == 0 || isNaN(altura) || isNaN(peso)) {
    alert("Preencher todos os campos");
    return false;
  }

  console.log("Liberado para cadastrar");
  // calcular o imc
  const IMC = calcularIMC(peso, altura);

  // gerar o texto da situação
  const textoSituacao = gerarSituacao(IMC);

  // gerar um Objetos JS com os dados
  const objIMC = {
    nome: nome,
    altura: altura,
    peso: peso,
    IMC: IMC,
    situacao: textoSituacao,
  };

  //   Cadastrar na API
  const dadosGravados = await cadastrarNaAPI(objIMC);
  console.log(dadosGravados);
  
  if ("error" in dadosGravados) {
    alert(dadosGravados.error)
  } else {
      //   Mostrar no html (inserir a linha da tabela)
      carregarCadastros();
  }
} // fim da função calcular


async function carregarCadastros() {
    // fazer o fatch
    // carregar os dados no html
    const retorno = await fetch("http://localhost:3000/imc");//faz uma busca GET
    const dadosCadastrados = await retorno.json();//transforma o json em objeto JS
    
    dadosCadastrados.sort( (a, b) => {
        return a.nome.localeCompare(b.nome)
    });
    
    document.getElementById("cadastro").innerHTML = "";
    dadosCadastrados.forEach( pessoa => {
         mostrarNaTela(pessoa);
    });
}






async function cadastrarNaAPI(objCadastro) {
    // fazer um post na api

    try {
        const retorno = await fetch("http://localhost:3000/imc", {
          method : "POST",
          body : JSON.stringify(objCadastro),
          headers : {
            "Content-Type" : "application/json; charset=UTF-8"
          }
        });

        const dadosGravados = await retorno.json();
        return await dadosGravados;
        
    } catch (error) {
        console.log(error);
        return await {error :  "Problemas para gravar na API"};
        
    }
} //fim da função






function mostrarNaTela(objCadastro) {

//    console.log(objCadastro.nome.toUpperCaser());

    



    // insere uma linha de tabela no HTML
  document.getElementById("cadastro").innerHTML += `<tr>
                                                        <td>${objCadastro.nome}</td>
                                                        <td>${objCadastro.altura}</td>
                                                        <td>${objCadastro.peso}</td>
                                                        <td>${objCadastro.IMC.toFixed(2)}</td>
                                                        <td>${objCadastro.situacao}</td>
                                                    </tr>`;
}

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Menor que 16 – Magreza grave;
// 16 a menor que 17 – Magreza moderada;
// 17 a menor que 18,5 – Magreza leve;
// 18,5 a menor que 25 – Saudável;
// 25 a menor que 30 – Sobrepeso;
// 30 a menor que 35 – Obesidade Grau I;
// 35 a menor que 40 – Obesidade Grau II (considerada severa);
// Maior que 40 – Obesidade Grau III (considerada mórbida).

// A função deverá retornar o texto da situação baseada no IMC
function gerarSituacao(IMC) {
  if (IMC < 16) {
    return "Magreza grave";
  } else if (IMC < 17) {
    return "Magreza moderada";
  } else if (IMC < 18.5) {
    return "Magreza leve";
  } else if (IMC < 25) {
    return "Saudável";
  } else if (IMC < 30) {
    return "Sobrepeso";
  } else if (IMC < 35) {
    return "Obesidade Grau I";
  } else if (IMC < 40) {
    return "Obesidade Grau I";
  } else if (IMC < 40) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
}
