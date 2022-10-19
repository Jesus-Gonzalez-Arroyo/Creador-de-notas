const btn_crear = document.querySelector('#btn_crear')
const container_notas = document.querySelector('.container-tareas')

btn_crear.addEventListener('click', async ()=>{

    //tomar los valores del formulario
    const form = document.forms['form']
    let valores = []
    for (const valor of form) {
        valores.push(valor.value)
    }
    
    //creamos los elementos

    const div = document.createElement('div')
    const title = document.createElement('h2')
    const description = document.createElement('p')
    const btn_borrar = document.createElement('button')

    //le damos valores al boton de borrar
    div.className = 'nota'
    btn_borrar.append(document.createTextNode('X'))
    btn_borrar.id = 'Borrar'

    //introducimos la informacion del formulario a los elementos

    title.appendChild(document.createTextNode(valores[0]))

    description.appendChild(document.createTextNode(valores[1]))

    //utilizamos el div para ponerlo los dos elementos
    div.appendChild(btn_borrar)
    div.appendChild(title)
    div.appendChild(description)

    //le ponemos una clase al div para darle estilos
    div.classList.add('nota')
    
    //agregamos todo al div donde se va a mostrar en el html
    container_notas.appendChild(div)
})

const borrar = document.querySelector('#Borrar')

borrar.addEventListener('click', (e)=>{
    const notas = document.querySelector('.nota')
    container_notas.removeChild(notas)
})






