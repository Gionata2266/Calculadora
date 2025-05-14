function recebe(tipo,valor){
    if(tipo === "acao"){
        if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "%" || valor === "," || valor === "."){
            document.getElementById("input").value += valor  
        }
        else if(valor === "c"){
            document.getElementById("input").value =""

        }
        else if(valor ==="="){
            let resultado =  eval(document.getElementById("input").value)
            document.getElementById("input").value = resultado
        }

    }
    if(tipo === "numero"){
        document.getElementById("input").value += valor

    }
    
}