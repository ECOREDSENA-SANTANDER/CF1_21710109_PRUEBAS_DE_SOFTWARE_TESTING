<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de pruebas de #[em software (#[em test plan])]
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-6.col-md-4
          img(src='@/assets/curso/temas/t5/img01.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.bg9.mb-3
            .col-lg-6
              img.izq.d-none.d-lg-block(src='@/assets/curso/temas/t5/img02.svg', alt='')
            .col-lg-6.p-4
              p La consolidación de los saberes conceptuales y procedimentales abordados hasta este punto se materializa en uno de los instrumentos más importantes del analista de QA: el plan de pruebas. Construir este documento es el objetivo central del primer resultado de aprendizaje de este componente formativo.
          p No se trata simplemente de diligenciar una plantilla, sino de tomar decisiones estratégicas fundamentadas en los requerimientos del cliente, los recursos disponibles y los riesgos inherentes al desarrollo. Por esta razón, el plan de pruebas funciona como una guía técnica que orienta qué se va a probar, cómo se realizará el proceso, con qué recursos y bajo qué criterios se evaluarán los resultados.
    .cajon.color-secundario.p-4.mb-4
      p El plan de pruebas no es solo un formato administrativo. Es una estrategia técnica que permite organizar el proceso de evaluación del #[em software], definir prioridades, anticipar riesgos y asegurar que las pruebas respondan a los requisitos del proyecto.

    separador
    #t_5_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 5.1  Concepto, propósito, alcance y enfoque del plan de pruebas

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t5/img03.png', alt='')
    p El plan de pruebas, conocido en inglés como #[em test plan], es el documento maestro que describe el alcance, el enfoque, los recursos y el cronograma de las actividades de prueba previstas. Su propósito es identificar explícitamente los elementos de #[em software] que serán probados, las características que se evaluarán, las responsabilidades del equipo y los riesgos asociados a la ejecución de las pruebas.
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        p.bg1.p-4 En términos prácticos, el plan de pruebas es la hoja de ruta que permite que el equipo técnico y gerencial comparta una misma visión sobre cómo se asegurará la calidad del producto. La industria actual, basada en el estándar ISO/IEC/IEEE 29119-3, propone formatos estructurados que evitan la ambigüedad y reducen el riesgo de omitir fases críticas.
        p Aunque en metodologías ágiles el plan de pruebas suele ser más conciso y dinámico que en metodologías tradicionales, su esencia estratégica y analítica permanece. Por ello, es necesario reconocer su estructura formal para adaptarla con criterio al contexto de cada proyecto tecnológico.
      .col-lg-4.col-md-6.col-8
        img(src='@/assets/curso/temas/t5/img04.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-12
        img.w-100(
          src='@/assets/curso/temas/t5/podcast.png'
          alt=''
          data-aos="zoom-in-left"
        )

      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-secundario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones(
              texto="Plan de pruebas: la ruta para entregar software confiable"
              :audio="require_src('@/assets/curso/temas/t3/podcast.mp3')"
            )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mt-3
              | Antes de continuar con la definición del alcance y el enfoque del plan de pruebas, acceda al pódcast Plan de pruebas: la ruta para entregar #[em software] confiable. Este recurso permite comprender, mediante una conversación sencilla, por qué el plan de pruebas no debe asumirse como un formato, sino como una estrategia técnica para organizar la evaluación del #[em software], anticipar riesgos y tomar decisiones durante el aseguramiento de la calidad.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.mb-3.col-10
        img(src='@/assets/curso/temas/t5/img05.png', alt='')
      .col-lg-7
        p El primer paso para construir el plan es delimitar el alcance. Esto implica listar con precisión las funcionalidades del sistema que serán objeto de pruebas, es decir, el alcance dentro de los límites, y justificar qué componentes no serán probados y por qué, es decir, el alcance fuera de los límites. Por ejemplo, en la primera fase de desarrollo de un portal de noticias, el alcance puede abarcar la publicación y visualización de artículos, dejando por fuera, para una fase posterior, el módulo de suscripciones de pago.
        p Posteriormente, se define el enfoque o la estrategia. Esto responde al “cómo” se llevarán a cabo las pruebas. En este punto se determina si se dará prioridad a pruebas automatizadas o manuales, qué niveles de prueba se aplicarán, como unitarias, de integración o del sistema, y qué metodologías se utilizarán, como caja negra o caja blanca.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Elementos iniciales del plan de pruebas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.col-md-6.col-8
        img(src="@/assets/curso/temas/t5/img06.png")
      .col-lg-9
       TabsA.color-acento-botones
        .tarjeta.bg6.p-4(titulo="Concepto")
          p El plan de pruebas o #[em test plan] es el documento maestro que organiza el alcance, el enfoque, los recursos y el cronograma de las actividades de prueba.
        .tarjeta.bg6.p-4(titulo="Propósito")
          p Permite identificar qué elementos del #[em software] serán probados, qué características se evaluarán, quiénes serán responsables y qué riesgos pueden afectar la ejecución.
        .tarjeta.bg6.p-4(titulo="Formato estructurado")
          p Los formatos basados en estándares, como ISO/IEC/IEEE 29119-3, ayudan a evitar ambigüedades y a no omitir fases críticas del proceso.
        .tarjeta.bg6.p-4(titulo="Alcance")
          p Define qué funcionalidades serán evaluadas y qué componentes quedarán fuera del proceso, con su respectiva justificación.
        .tarjeta.bg6.p-4(titulo="Enfoque")
          p Establece cómo se realizarán las pruebas: manuales o automatizadas, niveles aplicables y técnicas como caja negra o caja blanca.

    separador
    #t_5_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 5.2  Recursos, cronograma, ítems, escenarios y casos de prueba

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-10.col-md-8
          img(src='@/assets/curso/temas/t5/img07.png', alt='')
        .col-lg-7
          .row.justify-content-center.mb-3
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/img08.png', alt='')
            .col-lg-10
              p La asignación de recursos exige una planeación realista. Se deben identificar los recursos humanos, como la cantidad de analistas requeridos y su nivel de experiencia; los recursos de #[em hardware], como servidores o dispositivos móviles para pruebas de compatibilidad; y los recursos de #[em software], como herramientas de gestión de defectos, entornos de automatización y bases de datos de prueba.
            p Por ejemplo, herramientas como #[em Jira] pueden apoyar la gestión de defectos y el seguimiento de incidencias durante el proceso de pruebas. Una planeación deficiente de recursos puede generar retrasos en las entregas de #[em software], reprocesos y dificultades para ejecutar las pruebas previstas.
            p La elaboración del cronograma dentro del plan de pruebas trasciende la simple asignación de fechas en un calendario. Requiere sincronizar las actividades de prueba con los hitos del desarrollo de #[em software]. Para ello, se debe estimar el esfuerzo necesario para diseñar los casos de prueba, configurar el entorno, ejecutar las pruebas y documentar los resultados.
    p Un cronograma realista contempla márgenes para la corrección de defectos; es decir, asume que se encontrarán errores y que el equipo de desarrollo necesitará tiempo para solucionarlos antes de una segunda ronda de pruebas, conocidas como pruebas de regresión.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7
        p Junto con el tiempo, se deben definir los ítems de prueba. Un ítem es un componente específico del #[em software], un módulo o un documento que será sometido a evaluación. Por ejemplo, en un sistema de información para una biblioteca virtual, un ítem de prueba podría ser el “Módulo de Búsqueda de Catálogo”.
        p A partir de los ítems, se estructuran los escenarios de prueba. Un escenario es una descripción de alto nivel que responde a la pregunta “¿qué se va a probar?” desde la perspectiva del flujo del usuario. Siguiendo el ejemplo de la biblioteca virtual, un escenario de prueba sería: “Verificar que un usuario registrado pueda buscar un libro por autor, agregarlo a sus favoritos y descargar el archivo PDF asociado”.
      .col-lg-5.col-md-8
        img(src='@/assets/curso/temas/t5/img09.png', alt='')

    p La correcta estructuración de escenarios garantiza la trazabilidad con los requisitos del cliente, asegurando que ninguna necesidad de negocio quede sin ser validada. Además, promueve una visión sistémica de la aplicación, al comprenderla como un conjunto de flujos de trabajo interconectados y no solo como pantallas aisladas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Ruta para estructurar el plan de pruebas


    PasosA.color-acento-contenido.mb-2(tipo="n")
      .row.justify-content-center
        .col-lg-8.mb-4.mb-md-0
          h4 Asignar recursos
          p Identificar recursos humanos, de #[em hardware] y de #[em software] necesarios para preparar, ejecutar y documentar las pruebas.
        .col-lg-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t5/pas1.png', alt='')

      .row.justify-content-center
        .col-lg-3.mb-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t5/pas2.png', alt='')
        .col-lg-8.mb-4.mb-md-0
          h4.text-izq Elaborar el cronograma
          p.text-izq Sincronizar las actividades de prueba con los hitos del desarrollo, considerando diseño de casos, configuración del entorno, ejecución, documentación y corrección de defectos.

      .row.justify-content-center
        .col-lg-8.mb-4.mb-md-0
          h4 Definir ítems de prueba
          p Seleccionar módulos, componentes o documentos que serán sometidos a evaluación dentro del proceso de pruebas.
        .col-lg-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t5/pas3.png', alt='')

      .row.justify-content-center
        .col-lg-3.mb-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t5/pas4.png', alt='')
        .col-lg-8.mb-4.mb-md-0
          h4.text-izq Estructurar escenarios
          p.text-izq Describir de manera general qué se va a probar, tomando como referencia los flujos del usuario y los requisitos del cliente.
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        p.bg2.p-4 Para mantener el orden y la trazabilidad en proyectos tecnológicos que pueden involucrar cientos o miles de evaluaciones, el estándar exige el uso de nomenclaturas. Una nomenclatura es una convención de nombres o códigos de identificación únicos asignados a cada elemento del proceso de pruebas.
        p Por ejemplo, en lugar de llamar a una prueba “Prueba de inicio de sesión”, se le puede asignar un código estructurado como SIS-FUN-LOG-001, que corresponde a Sistema - Funcional - #[em Login] - Caso 01. Esta práctica fortalece el rigor administrativo necesario para gestionar configuraciones complejas y permite que cualquier integrante del equipo ubique rápidamente un caso específico en la matriz de diseño.
        p A partir de los escenarios y utilizando la nomenclatura establecida, se procede al diseño detallado de los casos de prueba. Mientras que el escenario describe el “qué”, el caso de prueba detalla el “cómo”. Un caso de prueba formalmente estructurado es el nivel más específico de la planeación y debe contener, como mínimo, los siguientes elementos procedimentales.
      .col-lg-4.col-md-6.col-8
        img(src='@/assets/curso/temas/t5/img10.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Elementos de un caso de prueba

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.mb-3.col-md-5.col-8
        img(src="@/assets/curso/temas/t5/img11.png")
      .col-lg-9
       TabsA.color-acento-botones
        .tarjeta.bg6.p-4(titulo="Identificador único")
          p Corresponde a la nomenclatura asignada al caso de prueba. Permite ubicarlo, diferenciarlo y relacionarlo con un escenario o requisito específico.
        .tarjeta.bg6.p-4(titulo="Propósito o descripción")
          p Indica el objetivo específico de la validación que se realizará sobre una funcionalidad, flujo o condición del sistema.
        .tarjeta.bg6.p-4(titulo=" Precondiciones")
          p Describe el estado en el que debe estar el sistema antes de iniciar la prueba. Por ejemplo: “El usuario debe estar previamente registrado en la base de datos”.
        .tarjeta.bg6.p-4(titulo="Pasos de ejecución")
          p Presenta las instrucciones operativas que permiten ejecutar la prueba de forma ordenada y repetible.
        .tarjeta.bg6.p-4(titulo="Datos de prueba")
          p Incluye los valores exactos que se ingresarán durante la prueba. Por ejemplo: “Usuario: admin@sena.edu.co, clave: 12345”.
        .tarjeta.bg6.p-4(titulo="Resultado esperado")
          p Describe el comportamiento que el sistema debe presentar según los requisitos. Por ejemplo: “El sistema redirige al panel de control y muestra un mensaje de bienvenida”.
       
    
    p La capacidad de redactar casos de prueba claros, atómicos y repetibles evidencia la asimilación del resultado de aprendizaje. Un caso de prueba bien diseñado permite que cualquier persona, incluso ajena al proyecto, pueda ejecutar la prueba y llegar a la misma conclusión, eliminando la ambigüedad y profesionalizando el aseguramiento de la calidad del #[em software].





</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
