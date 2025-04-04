export default {
  global: {
    Name: 'Fibras e hilos',
    Description:
      'Las fibras textiles han evolucionado desde naturales a artificiales, permitiendo características como impermeabilidad y resistencia, esenciales para satisfacer necesidades personales y laborales en la confección. La innovación en fibras ha mejorado la durabilidad y funcionalidad de las prendas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fibras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición fibras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Propiedades de las fibras textiles',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de las fibras',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de fibras',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ventajas de acuerdo con el uso',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Tendencia',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Hilos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Propiedades y características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de hilos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de hilos según su aplicación en la industria',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Recomendaciones para la selección del hilo',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Fibras textiles naturales sustentables y nuevos hábitos de consumo.',
      referencia:
        'Marín, C. V., & Monroy, B. G. (2013). Fibras textiles naturales sustentables y nuevos hábitos de consumo. Revista Legado de Arquitectura y Diseño, (13), 31-45.',
      tipo: 'PDF',
      link: 'https://www.redalyc.org/pdf/4779/477947372003.pdf',
    },
    {
      tema: 'Hilos y sus propiedades.',
      referencia:
        'Ticona Apaza, L. & Humpiri Flórez, M.E. (2020). Aprendizaje de la resistencia a la tracción de hilos industriales en estudiantes de Ingeniería Téxtil. ÑAWPARISUN – Revista de Investigación Científica, 3 (1), 49-58.',
      tipo: 'PDF',
      link: 'https://www.unaj.edu.pe/revista/index.php/vpin/article/view/126',
    },
  ],
  glosario: [
    {
      termino: 'Acetato',
      significado:
        'fibra textil sintética derivada de la celulosa, conocida por su brillo y suavidad, utilizada en telas ligeras y elegantes.',
    },
    {
      termino: 'Asbesto',
      significado:
        'fibra mineral resistente al calor y al fuego, utilizada en aplicaciones industriales y de aislamiento.',
    },
    {
      termino: 'Diámetro',
      significado:
        'medida del grosor de una fibra textil, expresada en micras, que influye en la textura y suavidad del tejido.',
    },
    {
      termino: 'Elastano',
      significado:
        'fibra sintética altamente elástica, también conocida como <i>spandex</i> o lycra, utilizada en prendas deportivas y ajustadas.',
    },
    {
      termino: 'Fibra',
      significado:
        'unidad básica de los textiles, de origen natural o sintético, que se hila para formar hilos y tejidos.',
    },
    {
      termino: 'Filamento',
      significado:
        'fibra continua de gran longitud que puede ser natural (como la seda) o sintética.',
    },
    {
      termino: 'Hilo',
      significado:
        'conjunto de fibras hiladas que se utiliza en la confección de tejidos y costuras.',
    },
    {
      termino: 'Lana',
      significado:
        'fibra natural de origen animal obtenida de ovejas, conocida por su calidez y elasticidad.',
    },
    {
      termino: 'Lino',
      significado:
        'fibra natural de origen vegetal obtenida del tallo del lino, caracterizada por su frescura y resistencia.',
    },
    {
      termino: 'Longitud',
      significado:
        'distancia entre los extremos de una fibra textil, determinando su clasificación en filamentos, fibras cortas o cables de filamentos continuos.',
    },
    {
      termino: 'Microfibra',
      significado:
        'fibra sintética extremadamente fina, utilizada en textiles de alto rendimiento debido a su suavidad y capacidad de absorción.',
    },
    {
      termino: 'Monofilamento',
      significado:
        'hilo formado por un único filamento continuo, utilizado en aplicaciones industriales y textiles específicos.',
    },
    {
      termino: 'Nailon',
      significado:
        'fibra sintética resistente y elástica, utilizada en ropa deportiva, medias y textiles industriales.',
    },
    {
      termino: 'Poliéster',
      significado:
        'fibra sintética ampliamente utilizada en la industria textil por su resistencia, durabilidad y fácil mantenimiento.',
    },
    {
      termino: 'Resistencia',
      significado:
        'capacidad de una fibra o tejido para soportar tensiones sin romperse o deformarse.',
    },
    {
      termino: 'Seda',
      significado:
        'fibra natural producida por el gusano de seda, apreciada por su brillo, suavidad y resistencia.',
    },
    {
      termino: 'Yute',
      significado:
        'fibra vegetal gruesa y resistente, utilizada en la fabricación de sacos, alfombras y cordeles.',
    },
  ],
  referencias: [
    {
      referencia: 'Coats. (s.f.). Todo sobre hilos. España. Recuperado de',
      link: 'https://www.coats.com/en-us/products/yarns/',
    },
    {
      referencia:
        'Coats. (s.f.). Todo sobre compuestos. España. Recuperado de ',
      link: 'https://www.coats.com/en-us/products/composites/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2009). Perfiles de 15 de las principales fibras de origen vegetal y animal. Recuperado de',
      link:
        'http://www.fao.org/natural-fibres-2009/about/15-natural-fibres/es/',
    },
    {
      referencia:
        'Carrera Gallissà, E. (2017). Física textil: propiedades físicas para caracterizar la calidad de las fibras textiles. Recuperado de ',
      link: 'https://upcommons.upc.edu/handle/2117/106313',
    },
    {
      referencia:
        'SENA. (2013). Modistería: hilos y tela. Centro de Gestión de Mercados, logística y TIC´s: Bogotá, Colombia [Versión en línea].',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Olga Constanza Bermúdez James',
          cargo: 'Asesora pedagógica',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Gissela del Carmen Alvis Ladino',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'PENDIENTE ASIGNACIÓN',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],

  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
