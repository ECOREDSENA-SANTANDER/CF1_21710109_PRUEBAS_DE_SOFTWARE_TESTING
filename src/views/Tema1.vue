<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de las pruebas de #[em software]
        

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-6.col-md-5
          img(src='@/assets/curso/temas/t1/img01.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.bg2.mb-3
            .col-lg-6
              img.izq.d-none.d-lg-block(src='@/assets/curso/temas/t1/img02.svg', alt='')
            .col-lg-6.p-4
              p El estudio de las pruebas de #[em software] debe iniciar con una comprensión profunda de su naturaleza. En algunos contextos formativos, se tiene la concepción errónea de que probar #[em software] consiste únicamente en “hacer clic en botones” para identificar si el sistema falla. Esta visión reduccionista impide dimensionar el verdadero valor de la disciplina.
          p En esta sección se aborda la fundamentación teórica necesaria para comprender el #[em testing] como una actividad analítica, estructurada y preventiva. Esta comprensión permite reconocer que las pruebas de #[em software] no son una acción improvisada, sino un proceso técnico que aporta información sobre la calidad, funcionalidad y confiabilidad de una solución tecnológica.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Valor de las pruebas de #[em software]

      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/t1/img03.png", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/1.png", alt="alt").img100
              .col
                h5 Actividad analítica
                p Las pruebas requieren analizar requisitos, condiciones, riesgos y resultados esperados antes de ejecutar cualquier validación.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/2.png", alt="alt").img100
              .col
                h5 Actividad estructurada
                p El proceso de prueba se organiza mediante planes, escenarios, casos de prueba, criterios y evidencias.
          .crd.crd--avatarHorizontal2.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/3.png", alt="alt").img100
              .col
                h5 Actividad preventiva
                p Las pruebas ayudan a identificar defectos de manera temprana y a reducir riesgos antes de la entrega del producto.
          .crd.crd--avatarHorizontal2.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/4.png", alt="alt").img100
              .col
                h5 Actividad de calidad
                p El #[em testing] aporta información objetiva para valorar la confiabilidad, funcionalidad y utilidad del #[em software].

      separador(data-aos="zoom-in-left")
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1  Concepto, objetivos y alcance de las pruebas de #[em software]

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-10
          img(src='@/assets/curso/temas/t1/img04.png', alt='')
        .col-lg-7
          .row.justify-content-center.mb-3
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/img05.png', alt='')
            .col-lg-10
              p Las pruebas de #[em software] se definen como un proceso técnico e investigativo llevado a cabo para proporcionar a los interesados, como clientes, desarrolladores y gerentes, información objetiva e independiente sobre la calidad del producto o servicio de #[em software] que se está evaluando.
          p No se trata de un evento aislado que ocurre al final del desarrollo, sino de un conjunto de actividades concurrentes que buscan verificar y validar que el sistema informático cumple con los requisitos técnicos, de negocio y normativos.
          p Desde una perspectiva pedagógica, el concepto de pruebas de #[em software] puede comprenderse mediante una analogía con la construcción de un edificio. Un ingeniero civil no espera a que el edificio esté terminado para comprobar si los cimientos soportan el peso; realiza cálculos, inspecciona los materiales y aplica pruebas de tensión durante todo el proceso.

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-8
          p.bg4.p-4 De manera similar, en el desarrollo de #[em software], las pruebas son evaluaciones continuas de los “materiales”, representados en el código fuente, y de los “planos”, representados en los requisitos del cliente, para asegurar que la aplicación construida sea sólida, segura y funcional. Comprender esta esencia es el primer paso para determinar un plan de pruebas coherente y preventivo.
          p El aseguramiento de la calidad, conocido como #[em QA] por sus siglas en inglés, y las pruebas de #[em software], aunque están estrechamente relacionados, cumplen propósitos distintos. Mientras que el QA se enfoca en prevenir defectos mediante la mejora de los procesos de desarrollo, el #[em testing] se centra en detectar los defectos en el producto construido.
        .col-lg-4.col-10.col-md-8
          img(src='@/assets/curso/temas/t1/img06.png', alt='')

      p Los objetivos principales de las pruebas de #[em software] incluyen los siguientes:

      ul.lista-ul--color(data-aos="zoom-in-left")
        li.d-flex
          i.fas.fa-code
          p.mb-1  #[b Encontrar defectos o #[em bugs]:] identificar errores, inconsistencias y vulnerabilidades antes de que el #[em software] sea entregado al usuario final.
        li.d-flex
          i.fas.fa-code
          p.mb-1  #[b Ganar confianza:] demostrar que el #[em software] cumple con sus especificaciones y que es seguro utilizarlo en un entorno de producción.
        li.d-flex
          i.fas.fa-code
          p.mb-1  #[b Proporcionar información para la toma de decisiones:] entregar reportes y métricas que permitan a los líderes del proyecto decidir si un producto está listo para salir al mercado o si requiere ajustes.
        li.d-flex
          i.fas.fa-code
          p  #[b Prevenir defectos:] en enfoques ágiles y modernos, involucrar a los analistas de pruebas desde el diseño de los requisitos ayuda a evitar que los errores se introduzcan en el código.
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.mb-3
          img(src='@/assets/curso/temas/t1/img07.png', alt='')
        .col-lg-7 
          p El alcance de las pruebas define qué partes del sistema serán evaluadas y cuáles no, considerando las limitaciones de tiempo y presupuesto. Por ejemplo, en el desarrollo de un sitio web de comercio electrónico formativo, el alcance podría incluir la validación del carrito de compras y la pasarela de pagos, excluyendo temporalmente la sección de foros de la comunidad.
          p Delimitar el alcance es una habilidad analítica fundamental al momento de construir el plan de pruebas, porque permite establecer prioridades, organizar recursos y definir con claridad los límites del proceso de evaluación.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Conceptos clave de las pruebas de #[em software]

      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
        .tarjeta.bg5.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/01.png' alt='')
          h4.text-center.text-white Proceso técnico
          p.text-center.text-white Las pruebas de #[em software] permiten evaluar un producto tecnológico mediante criterios, procedimientos y evidencias.
        .tarjeta.bg5.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/02.png' alt='')
          h4.text-center.text-white Información objetiva
          p.text-center.text-white El proceso de prueba entrega datos útiles para clientes, desarrolladores y responsables del proyecto.

        .tarjeta.bg5.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/03.png' alt='')
          h4.text-center.text-white Verificación
          p.text-center.text-white Permite comprobar si el sistema fue construido según los requisitos técnicos, de negocio y normativos establecidos.

        .tarjeta.bg5.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/04.png' alt='')
          h4.text-center.text-white Validación
          p.text-center.text-white Permite confirmar si el sistema responde a las necesidades del cliente o del usuario final.

        .tarjeta.bg5.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-6
              img(src='@/assets/curso/temas/t1/05.png' alt='')
          h4.text-center.text-white Alcance
          p.text-center.text-white Define qué partes del sistema serán evaluadas y cuáles quedarán fuera del proceso de prueba.
       
      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2  Principios, importancia e impacto del #[em software testing]

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          img(src='@/assets/curso/temas/t1/img08.png' alt='')

      p Existen principios internacionalmente reconocidos, promovidos por entidades como el International #[em Software] Testing Qualifications Board (ISTQB), que todo profesional en formación debe interiorizar. Estos principios actúan como guías heurísticas que orientan el diseño y la ejecución de las pruebas, permitiendo comprender que el #[em software testing] no se limita a encontrar errores, sino que exige análisis, priorización, actualización permanente y comprensión del contexto en el que opera cada sistema.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Principios universales del #[em software testing]

      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
        .row.justify-content-center(titulo="Las pruebas demuestran la presencia de defectos, no su ausencia")
          .col-lg-6.mb-4.mb-md-0
            p Probar un sistema reduce la probabilidad de que existan fallos ocultos, pero incluso si no se encuentra ningún error, esto no es prueba absoluta de que el #[em software] sea perfecto.
          .col-lg-5.col-md-10
            img(src='@/assets/curso/temas/t1/sli1.png', alt='')
        .row.justify-content-center(titulo="Las pruebas exhaustivas son imposibles")
          .col-lg-6.mb-4.mb-md-0
            p Probar todas las combinaciones posibles de datos de entrada y precondiciones es inviable en la mayoría de los sistemas. Por ello, se debe priorizar mediante el análisis de riesgos para optimizar los recursos.
          .col-lg-5.col-md-10
            img(src='@/assets/curso/temas/t1/sli2.png', alt='')

        .row.justify-content-center(titulo="Pruebas tempranas o <i> Shift-Left Testing</i>")
          .col-lg-6.mb-4.mb-md-0
            p Las actividades de prueba deben comenzar lo antes posible en el ciclo de vida del #[em software], idealmente desde la revisión de los documentos de requisitos. Corregir un error en la fase de diseño es mucho más económico que hacerlo cuando el sistema ya está programado.
          .col-lg-5.col-md-10
            img(src='@/assets/curso/temas/t1/sli3.png', alt='')

        .row.justify-content-center(titulo="Agrupamiento de defectos")
          .col-lg-6.mb-4.mb-md-0
            p La regla del 80 / 20, conocida como principio de Pareto, suele aplicar al #[em software]: aproximadamente el 80 % de los defectos operativos se encuentran en el 20 % de los módulos críticos del sistema. Identificar estos módulos es clave para un plan de pruebas efectivo.
          .col-lg-5.col-md-10
            img(src='@/assets/curso/temas/t1/sli4.png', alt='')

        .row.justify-content-center(titulo="La paradoja del pesticida")
          .col-lg-6.mb-4.mb-md-0
            p Si se repiten exactamente las mismas pruebas una y otra vez, eventualmente esos casos de prueba dejarán de encontrar nuevos defectos. Al igual que las plagas se vuelven resistentes a un pesticida, el #[em software] puede dejar de revelar errores frente a pruebas repetitivas. Es necesario revisar y actualizar los escenarios de prueba periódicamente.
          .col-lg-5.col-md-10
            img(src='@/assets/curso/temas/t1/sli5.png', alt='')

        .row.justify-content-center(titulo="Las pruebas dependen del contexto")
          .col-lg-6.mb-4.mb-md-0
            p No se prueba de la misma manera una aplicación móvil de entretenimiento que un #[em software] de control de tráfico aéreo. El rigor, las técnicas y los estándares varían según el tipo de sistema, el nivel de riesgo y el contexto de uso.
          .col-lg-5.col-md-10
            img(src='@/assets/curso/temas/t1/sli6.png', alt='')

        .row.justify-content-center(titulo="La falacia de la ausencia de errores")
          .col-lg-6.mb-4.mb-md-0
            p Si el sistema construido es inestable, difícil de usar o no cumple con las necesidades de negocio del cliente, no importará que se hayan solucionado todos los defectos técnicos. Un #[em software] sin errores funcionales pero inútil para el usuario, sigue siendo un producto fallido.
          .col-lg-5.col-md-10
            img(src='@/assets/curso/temas/t1/sli7.png', alt='')

      p A partir de estos principios, se comprende que las pruebas de #[em software] no solo permiten detectar errores técnicos, sino que también aportan valor al desarrollo tecnológico, la seguridad de la información y la experiencia del usuario. Su impacto se refleja en la reducción de riesgos, la toma de decisiones fundamentada y la entrega de soluciones más confiables. Por esta razón, el siguiente recurso presenta algunos aportes clave de las pruebas dentro de un proyecto de #[em software].

      .row(data-aos="zoom-in-left")
        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-primario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center
              b Red de seguridad
            p.text-center Las pruebas ayudan a detectar fallos antes de que afecten la operación, los datos o la experiencia de usuario final.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-secundario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center
              b Responsabilidad técnica
            p.text-center El plan de pruebas permite tomar decisiones organizadas sobre qué evaluar, cómo hacerlo y con qué criterios.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-contenido.p-4.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center
              b Integridad de los datos
            p.text-center Una prueba bien planificada ayuda a reducir riesgos asociados con pérdida, alteración o exposición de información.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-botones.p-4.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center
              b Calidad del producto
            p.text-center Los resultados de las pruebas aportan evidencias para mejorar la funcionalidad, confiabilidad y utilidad del #[em software].





























  </template>

<script>
export default {
  name: 'Tema1',
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
