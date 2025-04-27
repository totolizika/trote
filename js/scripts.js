function calcular(){
    // variaveis
    // em js as variaveis não possuem tipagem
    let mascote = Number(document.getElementById("mascote").value) || 0;
    let leite = Number(document.getElementById("leite").value) || 0;
    let homenagem = Number(document.getElementById("homenagem").value) || 0;
    let kit = Number(document.getElementById("kit").value) || 0;
    let suplemento = Number(document.getElementById("suplemento").value) || 0;
    let sangue = Number(document.getElementById("sangue").value) || 0;
    let equipe = document.getElementById("equipe").value;
    
    let soma = 0;
    
    // Pontuação base
    soma = mascote + homenagem + (2 * leite);
    //somatória dos kits por equipe
    
    if (equipe == "Laranja"){
        if (kit >= 97 && suplemento >= 49){
            soma = soma + 5000 + ((kit - 97 ) * 30) + ((suplemento - 49)) * 15
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit - 78 ) * 30) + ((suplemento - 39)) * 15
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit - 49 ) * 30) + ((suplemento - 25)) * 15
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 19 ) * 30) + ((suplemento - 10)) * 15
        }
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49)* 20)
        }
    }
    if (equipe == "Preta"){
        if (kit >= 103 && suplemento >= 52){
            soma = soma + 5000 + ((kit - 103 ) * 30) + ((suplemento - 52)) * 15
        }
        else if (kit >= 82 && suplemento >= 42){
            soma = soma + 4000 + ((kit - 82 ) * 30) + ((suplemento - 42)) * 15
        }
        else if (kit >= 52 && suplemento >= 26){
            soma = soma + 2500 + ((kit - 52 ) * 30) + ((suplemento - 26)) * 15
        }
        else if (kit >= 21 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 21 ) * 30) + ((suplemento - 10)) * 15
        }
        if (sangue >= 52){
            soma = soma + 2500 + ((sangue - 52)* 20)
        }
    }
    if (equipe == "Roxa"){
        if (kit >= 102 && suplemento >= 52){
            soma = soma + 5000 + ((kit - 102 ) * 30) + ((suplemento - 51)) * 15
        }
        else if (kit >= 82 && suplemento >= 41){
            soma = soma + 4000 + ((kit - 82 ) * 30) + ((suplemento - 41)) * 15
        }
        else if (kit >= 51 && suplemento >= 26){
            soma = soma + 2500 + ((kit - 51 ) * 30) + ((suplemento - 26)) * 15
        }
        else if (kit >= 20 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 20 ) * 30) + ((suplemento - 10)) * 15
        }
        if (sangue >= 51){
            soma = soma + 2500 + ((sangue - 51)* 20)
        }
    }
    if (equipe == "Verde"){
        if (kit >= 88 && suplemento >= 44){
            soma = soma + 5000 + ((kit - 88 ) * 30) + ((suplemento - 44)) * 15
        }
        else if (kit >= 70 && suplemento >= 35){
            soma = soma + 4000 + ((kit - 70 ) * 30) + ((suplemento - 35)) * 15
        }
        else if (kit >= 44 && suplemento >= 22){
            soma = soma + 2500 + ((kit - 44 ) * 30) + ((suplemento - 22)) * 15
        }
        else if (kit >= 18 && suplemento >= 9){
            soma = soma + 1000 + ((kit - 18 ) * 30) + ((suplemento - 9)) * 15
        }
        if (sangue >= 44){
            soma = soma + 2500 + ((sangue - 44)* 20)
        }
    }
    if (equipe == "Vermelho"){
        if (kit >= 93 && suplemento >= 47){
            soma = soma + 5000 + ((kit - 93 ) * 30) + ((suplemento - 47)) * 15
        }
        else if (kit >= 74 && suplemento >= 38){
            soma = soma + 4000 + ((kit - 74 ) * 30) + ((suplemento - 38)) * 15
        }
        else if (kit >= 47 && suplemento >= 24){
            soma = soma + 2500 + ((kit - 47 ) * 30) + ((suplemento - 24)) * 15
        }
        else if (kit >= 19 && suplemento >= 9){
            soma = soma + 1000 + ((kit - 19 ) * 30) + ((suplemento - 9)) * 15
        }
        if (sangue >= 47){
            soma = soma + 2500 + ((sangue - 47)* 20)
        }
    }
    
    document.getElementById("soma").innerHTML = `Resultado: ${soma}`//retorna o valor ao html
    }
    
    function limpar() {
        // Reseta os valores dos inputs para 0 (ou "")
        document.getElementById("mascote").value = "0";
        document.getElementById("leite").value = "0";
        document.getElementById("homenagem").value = "0";
        document.getElementById("kit").value = "0";
        document.getElementById("suplemento").value = "0";
        document.getElementById("sangue").value = "0";
        // Limpa o resultado
        document.getElementById("soma").innerHTML = "Resultado: ";
    }