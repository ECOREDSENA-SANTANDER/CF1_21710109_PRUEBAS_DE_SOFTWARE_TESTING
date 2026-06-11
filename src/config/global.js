export default {
  global: {
    Name: 'Fundamentos del plan de pruebas de <i>software</i>',
    Description:
      'Este componente aborda los conceptos, principios, niveles y tipos de pruebas de <i>software</i>, así como los marcos de referencia y estándares aplicables. Orienta al aprendiz en la definición del procedimiento técnico y en la construcción del plan de pruebas, incluyendo alcance, recursos, escenarios, nomenclaturas y casos de prueba.',
    imagenBannerPrincipal: '@/assets/curso/bg/img01.png',
    fondoBannerPrincipal: '@/assets/curso/bg/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/bg/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/bg/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/bg/banner-principal-decorativo-3.svg',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/bg/banner-principal-decorativo-4.svg',
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
        titulo: 'Fundamentos de las pruebas de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto, objetivos y alcance de las pruebas de <i>software</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Principios, importancia e impacto del <i>software testing</i>',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Niveles de pruebas de <i>software</i> y ciclo de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Ciclo de vida del desarrollo de <i>software</i> y Modelo en V',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Pruebas unitarias, de integración, del sistema y de aceptación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de pruebas de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Pruebas funcionales y no funcionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Pruebas de revisión, estáticas y dinámicas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Marcos de referencia y estándares en pruebas de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estándares, técnicas y procedimientos técnicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Documentación, gestión de configuración y lecciones aprendidas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de pruebas de <i>software</i> (<i>test plan</i>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Concepto, propósito, alcance y enfoque del plan de pruebas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Recursos, cronograma, ítems, escenarios y casos de prueba',
            hash: 't_5_2',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Aseguramiento de la calidad (<i>QA</i>)',
      significado:
        'Conjunto de procesos sistemáticos destinados a garantizar que un producto o servicio de <i>software</i> cumpla con los estándares de calidad definidos durante su ciclo de vida.',
    },
    {
      termino: 'Caso de prueba (<i>test case</i>)',
      significado:
        'Conjunto detallado de precondiciones, datos de entrada, acciones operativas y resultados esperados, diseñado para validar un objetivo o requerimiento específico del sistema.',
    },
    {
      termino: 'Defecto (<i>bug</i>)',
      significado:
        'Imperfección o fallo en el código, diseño o requisitos de un <i>software</i> que causa que el sistema no funcione de acuerdo con sus especificaciones.',
    },
    {
      termino: 'Entorno de pruebas',
      significado:
        'Configuración específica de <i>hardware</i>, <i>software</i>, red y datos, estructurada para ejecutar las evaluaciones sin afectar el ambiente de producción de los usuarios finales.',
    },
    {
      termino: 'Escenario de prueba',
      significado:
        'Descripción de alto nivel de una funcionalidad que debe ser evaluada desde la perspectiva del flujo de uso del cliente final.',
    },
    {
      termino: 'Gestión de la configuración',
      significado:
        'Proceso técnico orientado a identificar, controlar y rastrear las versiones exactas de los componentes de <i>software</i> y la documentación a lo largo del tiempo.',
    },
    {
      termino: 'ISTQB',
      significado:
        'Sigla de <i>International Software Testing Qualifications Board</i>, organización global que define estándares, certificaciones y esquemas de conocimiento, como el <i>Syllabus</i>, para la profesión de pruebas de <i>software</i>.',
    },
    {
      termino: 'Nomenclatura',
      significado:
        'Sistema o conjunto de reglas establecidas para asignar códigos identificadores únicos a elementos como requisitos, escenarios, casos de prueba y reportes de incidentes.',
    },
    {
      termino: 'Plan de pruebas (<i>test plan</i>)',
      significado:
        'Documento técnico y de gestión que establece la estrategia, el alcance, el cronograma y los recursos necesarios para asegurar la calidad de un proyecto tecnológico.',
    },
    {
      termino: 'Pruebas de aceptación (<i>UAT</i>)',
      significado:
        'Evaluaciones formales llevadas a cabo por el cliente o los usuarios finales para determinar si el sistema satisface sus necesidades de negocio antes de la implementación real.',
    },
    {
      termino: 'Pruebas de caja blanca',
      significado:
        'Técnica de evaluación que se basa en el conocimiento de la estructura interna y la lógica del código fuente del <i>software</i>.',
    },
    {
      termino: 'Pruebas de caja negra',
      significado:
        'Técnica de prueba centrada en las entradas y salidas de la aplicación, sin considerar la estructura interna del código.',
    },
    {
      termino: 'Pruebas del sistema',
      significado:
        'Fase en la que se evalúa de manera integral el <i>software</i> completamente ensamblado para verificar que cumple con los requisitos funcionales y no funcionales.',
    },
    {
      termino: 'Pruebas dinámicas',
      significado:
        'Evaluaciones que requieren que el <i>software</i> sea compilado y ejecutado para analizar su comportamiento en tiempo real.',
    },
    {
      termino: 'Pruebas estáticas',
      significado:
        'Evaluaciones analíticas de la documentación, los requerimientos o el código fuente que se realizan sin ejecutar el programa.',
    },
    {
      termino: 'Pruebas funcionales',
      significado:
        'Evaluaciones diseñadas para verificar que el sistema realiza adecuadamente las funciones o tareas especificadas en los requisitos del cliente.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'Evaluaciones técnicas del nivel más granular, enfocadas en verificar el correcto funcionamiento aislado de funciones, métodos o pequeñas fracciones de código.',
    },
  ],
  referencias: [
    {
      referencia:
        'Black, R. (2020). Agile Testing Foundations: An ISTQB Foundation Level Agile Tester Guide. BCS, The Chartered Institute for IT.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization [ISO]. (2021). Software and systems engineering -- Software testing -- Part 3: Test documentation (ISO/IEC/IEEE Standard 29119-3:2021).',
      link: '',
    },
    {
      referencia:
        'International Software Testing Qualifications Board [ISTQB]. (2023). Certified Tester Foundation Level (CTFL) Syllabus v4.0.',
      link: 'https://www.istqb.org/',
    },
    {
      referencia:
        "Pressman, R. S., & Maxim, B. R. (2020). Software Engineering: A Practitioner's Approach (9th ed.). McGraw-Hill Education.",
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2021). Engineering Software Products: An Introduction to Modern Software Engineering. Pearson Education.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Angelica Varon Quintero',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
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
