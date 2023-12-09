const personas = [

  new Persona('Juan', 'Perez'),
  new Persona('Luis', 'Melendez'),
  new Persona('Maria', 'Rodriguez'),
  new Persona('Jorge', 'Garcia'),
  new Persona('Juan', 'Felix'),
  new Persona('Pedro', 'Paez'),
  new Persona('Alejandra', 'Rodriguez'),
  new Persona('Heidy', 'Lamar')
]

function mostrarPersonas () {
  let texto = ''
  for (const persona of personas) {
    console.log(persona)
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`
  }
  document.getElementById('personas').innerHTML = texto
}
function agregarPersona () {
  const forma = document.forms.forma
  const nombre = forma.nombre
  const apellido = forma.apellido
  if (nombre.value != "" && apellido.value != ""){
  const persona = new Persona(nombre.value, apellido.value)
  console.log(persona)
  personas.push(persona)
  mostrarPersonas()
}
else{
  console.log('no hay informacion que  agregar');
}
}