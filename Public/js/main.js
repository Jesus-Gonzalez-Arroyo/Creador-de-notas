const btn_crear = document.querySelector('#btn_crear')
const container_notas = document.querySelector('#lista-tareas')
const titulo = document.querySelector('#titulo')
const description = document.querySelector('#descripcion')

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

    //le quitamos el valor a los inputs cuando acabe de crear los elementos

    titulo.value = ''
    description.Text = ''

    //le damos la funcion de borrar al boton correspondiente
    
    btn_borrar.addEventListener('click', (e)=>{
        container_notas.removeChild(e.target.parentElement)
    })
})








