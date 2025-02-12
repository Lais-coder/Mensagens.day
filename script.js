function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var frase = window.document.getElementById('frase')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = '1.png'
        document.body.style.background = '#7f6349'
        frase.innerHTML = 'BOM DIA! <br> A disciplina é a ponte entre metas e realizações. A cada passo firme e decidido, você se aproxima da vitória. Acredite no seu potencial e vá em frente '
    }else if (hora >= 12 && hora < 18){
        img.src = '2.png'
        document.body.style.background = '#d95838'  
        frase.innerHTML = 'BOA TARDE! <br>Lembre-se de que até os guerreiros mais determinados precisam de uma pausa. Aproveite este momento para descansar, se hidratar e recarregar suas energias. Seu corpo e mente agradecem! '
    } else {
        img.src = '3.png'
        document.body.style.background = '#693620'
        frase.innerHTML = 'BOA NOITE! <br> Que você tenha um descanso reparador e tranquilo. Aproveite para relaxar, renovar as energias e sonhar com um amanhã cheio de possibilidades. Durma bem! '  
    }
}
