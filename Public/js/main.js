const btn_crear = document.querySelector('#btn_crear')
const btn_borarr = document.querySelector('#btn_borrar')
const container_notas = document.querySelector('.container-tareas')


btn_crear.addEventListener('click', ()=>{

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
    btn_borrar.append(document.createTextNode('X'))
    btn_borrar.setAttribute('id', 'btn_borrar')

    //introducimos la informacion del formulario a los elementos

    title.appendChild(document.createTextNode(valores[0]))

    description.appendChild(document.createTextNode(valores[1]))

    //utilizamos el div para ponerlo los dos elementos
    div.appendChild(btn_borrar)
    div.appendChild(title)
    div.appendChild(description)

    //le ponemos una clase al div para darle estilos

    div.classList.add('nota')

    container_notas.appendChild(div)
})


btn_borarr.addEventListener('click', ()=>{
    div_nota.remove()
})