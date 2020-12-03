export default function (props) {
    if (props.test) {
        return props.children //Tudo o que passou para ser filho, será retornado
    } else {
        return false
    }
}

//Não precisa importa react porque não estamos usando jsx