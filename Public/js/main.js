const btn_crear = document.querySelector('#btn_crear')
const container_notas = document.querySelector('#lista-tareas')
const titulo = document.querySelector('#titulo')
const description = document.querySelector('#descripcion')
const Anuncio = document.querySelector('.anuncio-tarea')

btn_crear.addEventListener('click', ()=>{

    //tomar los valores del formulario
    const form = document.forms['form']
    let valores = []
    for (const valor of form) {
        valores.push(valor.value)
    }

    //creamos los elementos
    const li = document.createElement('li')
    const title = document.createElement('h2')
    const description = document.createElement('p')
    const btn_borrar = document.createElement('button')

    //le damos valores a los elementos
    btn_borrar.append(document.createTextNode('X'))

    //introducimos la informacion del formulario a los elementos
    title.appendChild(document.createTextNode(valores[0] || 'Escribe un titulo'))
    description.appendChild(document.createTextNode(valores[1] || 'Escribe una descripcion'))

    //utilizamos el div para ponerlo los dos elementos
    li.appendChild(btn_borrar)
    li.appendChild(title)
    li.appendChild(description)

    //le ponemos una clase al div para darle estilos
    li.classList.add('nota')
    
    //agregamos todo al div donde se va a mostrar en el html
    container_notas.appendChild(li)

    //le quitamos el valor a los inputs cuando acabe de crear los elementos
    titulo.value = ''
    description.Text = ''

    //creamos un condicional para ver si se pone o no el texto del anuncio

    const tareas = document.querySelectorAll('.nota')

    if(tareas.length === 0){
        Anuncio.style.display = 'block'
    }
    else{
        Anuncio.style.display = 'none'
    }

    //le damos la funcion de borrar al boton correspondiente
    btn_borrar.addEventListener('click', (e)=>{
        container_notas.removeChild(e.target.parentElement)

        const tareas = document.querySelectorAll('.nota')

        if(tareas.length === 0){
            Anuncio.style.display = 'block'
        }
    })

})








