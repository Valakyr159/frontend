const apiMock = {
  header: {
    title: 'Javier Eduardo Morón Mendoza',
  },
  about: {
    title: 'Web Developer',
    items: ['Dirección', 'Correo', 'GitHub'],
    description: ['Bogotá, Colombia', 'javiermoron159@hotmail.com', 'github.com/Valakyr159'],
  },
  profile: {
    title: 'Mi Perfil',
    description: 'Me dedico a construír mi carrera como desarrollador web, soy un estudiante apasionado de Platzi desde hace más de 1 año y comparto la filosofía de nunca parar de aprender. Me encanta resolver problemas y soy excelente haciéndolo, sobretodo cuando se trata de desarrollar mi creatividad, también me encanta enseñar y compartir mi saber a otros. ',
  },
  experience: {
    title: 'Proyectos',
    items: ['Diablo 3 Profile Finder', 'Platzi-Exchange', 'Platzi-Music'],
    description: ['Buscador de perfiles de Diablo 3, está integrado con la API oficial de Blizzard y utiliza Vue y Bootstrap.', 'Exchange hace uso de Vue, Tailwind y muestra precios actualizados de criptomonedas.', 'Music usa Vue y Bulma, busca y reproduce previews de Spotify.'],
  },
  academic: {
    title: 'Educación',
    items: ['Bachiller Académico', 'Ingeniería de Sistemas', 'Platzi'],
    description: ['Colegio San Felipe Neri', 'Escuela Colombiana de Ingeniería Julio Garavito - Sin Completar - 5 Semestres', 'Más de 50 Cursos completados'],
  },
  skills: {
    title: 'Habilidades',
    items: ['Javascript, HTML & CSS', 'Vue.js', 'React.js'],
  },
  interest: {
    title: 'Intereses',
    items: ['Videojuegos', 'Libros y películas', 'Viajes'],
    description: ['Disfruto mucho los videojuegos, tengo experiencia en títulos como World of Warcraft que han desarrolado mis habilidades de comunicación, liderazgo y trabajo en equipo', 'Me gusta mucho la fantasía, como El Señor de los Anillos y Harry Potter, aunque actualmente me encuentro leyendo Soft Skills de John Sonmez', 'Me gusta mucho la idea de viajar, planeo en un futuro visitar muchos países y disfrutar de la gastronomía y conocer muchas culturas'],
  },
  languages: {
    title: 'Idiomas',
    items: ['Español', 'Inglés'],
    description: ['Nativo', 'Avanzado C1'],
  },
};

export default apiMock;
