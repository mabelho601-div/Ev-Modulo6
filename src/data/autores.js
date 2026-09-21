export const autores = {
  '1': {
    nombre: 'Gabriel García Márquez',
    bio: 'Escritor colombiano, premio Nobel de Literatura 1982, referente del realismo mágico.',
    libros: [
      { titulo: 'Cien años de soledad', categoria: 'Novela' },
      { titulo: 'El coronel no tiene quien le escriba', categoria: 'Novela' },
      { titulo: 'Vivir para contarla', categoria: 'Memoria' }
    ]
  },
  '2': {
    nombre: 'Isabel Allende',
    bio: 'Escritora chilena, una de las autoras en español más leídas del mundo.',
    libros: [
      { titulo: 'La casa de los espíritus', categoria: 'Novela' },
      { titulo: 'Paula', categoria: 'Memoria' }
    ]
  },
  '3': {
    nombre: 'Jorge Luis Borges',
    bio: 'Escritor argentino, referente de la literatura fantástica y el ensayo.',
    libros: [
      { titulo: 'Ficciones', categoria: 'Novela' },
      { titulo: 'El Aleph', categoria: 'Novela' }
    ]
  }
}

export function existeAutor(id) {
  return Object.prototype.hasOwnProperty.call(autores, id)
}

export const librosIniciales = [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    categoria: 'Ficción',
    descripcion: 'Una de las obras maestras de la literatura hispanoamericana y del realismo mágico.'
  },
  {
    id: 2,
    titulo: 'La casa de los espíritus',
    autor: 'Isabel Allende',
    categoria: 'Ficción',
    descripcion: 'Historia familiar marcada por las pasiones, el amor y la política en Chile.'
  },
  {
    id: 3,
    titulo: 'Ficciones',
    autor: 'Jorge Luis Borges',
    categoria: 'Ficción',
    descripcion: 'Antología de cuentos sobre laberintos, bibliotecas y paradojas.'
  }
]