<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Marcos de referencia y estándares en pruebas de #[em software]

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-6.col-md-5
          img(src='@/assets/curso/temas/t4/img01.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.bg6.mb-3
            .col-lg-6
              img.izq.d-none.d-lg-block(src='@/assets/curso/temas/t4/img02.svg', alt='')
            .col-lg-6.p-4
              p El aseguramiento de la calidad del #[em software] no es una labor empírica basada en la intuición; es una disciplina de la ingeniería fundamentada en metodologías rigurosas. Para determinar el plan de pruebas, es necesario interpretar y aplicar principios, marcos de referencia y estándares internacionales.
          p Estos lineamientos proporcionan un lenguaje común y estructurado que profesionaliza la labor del analista de pruebas, facilita la documentación del proceso y permite que los resultados sean comprensibles para los diferentes integrantes del equipo de desarrollo.

    separador
    #t_4_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.1  Estándares, técnicas y procedimientos técnicos
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        p.bg6.p-4 Los estándares son conjuntos de reglas, directrices y definiciones avaladas por organizaciones internacionales para unificar la manera en que se desarrollan y prueban los sistemas. Históricamente, el estándar IEEE 829 fue uno de los referentes principales para la documentación de pruebas de #[em software]. Sin embargo, en la actualidad, la norma ISO/IEC/IEEE 29119 ha tomado protagonismo, al ofrecer un marco que abarca conceptos, procesos, documentación y técnicas de prueba aplicables tanto a metodologías tradicionales como ágiles.
        p Paralelamente, instituciones como el ISTQB, sigla de #[em International Software Testing Qualifications Board], no emiten normativas legales, pero proporcionan el marco de conocimientos, conocido como #[em Syllabus], más adoptado a nivel global. En el ámbito formativo, alinear el conocimiento con estos estándares permite que el vocabulario técnico y los formatos utilizados sean comprendidos por cualquier equipo de desarrollo. La adherencia a estándares no busca burocratizar el proceso, sino asegurar trazabilidad, repetibilidad y rigor técnico.
      .col-lg-4.col-md-6.col-8
        img(src='@/assets/curso/temas/t4/img03.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Referentes para estandarizar las pruebas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.col-md-6.col-8
        img(src="@/assets/curso/temas/t4/img04.png")
      .col-lg-9
       TabsA.color-acento-botones
        .tarjeta.bg6.p-4(titulo="Estándares")
          p Son reglas, directrices y definiciones que permiten unificar la forma en que se desarrollan, documentan y ejecutan las pruebas de #[em software].
        .tarjeta.bg6.p-4(titulo="IEEE 829")
          p Fue uno de los referentes históricos para la documentación de pruebas de #[em software], especialmente en la organización de artefactos y formatos asociados al proceso.
        .tarjeta.bg6.p-4(titulo="ISO/IEC/IEEE 29119")
          p Proporciona un marco amplio para conceptos, procesos, documentación y técnicas de prueba, aplicable en metodologías tradicionales y ágiles.
        .tarjeta.bg6.p-4(titulo="ISTQB")
          p El #[em International Software Testing Qualifications Board] aporta un marco de conocimientos ampliamente reconocido para orientar el vocabulario y las buenas prácticas del #[em testing.]
        .tarjeta.bg6.p-4(titulo="Rigor técnico")
          p El uso de estándares fortalece la trazabilidad, la repetibilidad y la comprensión del proceso de pruebas por parte del equipo de desarrollo.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-10.col-md-8
          img(src='@/assets/curso/temas/t4/img05.png', alt='')
        .col-lg-7
          .row.justify-content-center.mb-3
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/img06.png', alt='')
            .col-lg-10
              p Un procedimiento técnico en pruebas de #[em software] es la secuencia lógica y ordenada de pasos necesarios para preparar, ejecutar y evaluar las pruebas. La determinación de este procedimiento requiere seleccionar técnicas estandarizadas acordes con el contexto del proyecto.
            p Por ejemplo, al definir técnicas de diseño de casos de prueba, los estándares y buenas prácticas orientan el uso de métodos formales como la “partición de clases de equivalencia” o el “análisis de valores límite”. En lugar de ingresar datos al azar en un formulario web, se aplica un procedimiento técnico para identificar qué subconjuntos de datos son representativos y probarlos de manera organizada, optimizando el tiempo y maximizando la cobertura.
            p Comprender el procedimiento técnico permite pasar de pruebas empíricas a experimentos formales de validación de #[em software], con criterios definidos, datos seleccionados y resultados verificables.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Procedimiento técnico para diseñar pruebas

    .row(data-aos="zoom-in-left")
        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-primario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center
              b Preparar
            p.text-center Se identifican requisitos, condiciones del proyecto, datos de prueba, entorno y criterios que orientan la evaluación.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-secundario.p-4.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center
              b Seleccionar técnicas
            p.text-center Se eligen técnicas acordes con el contexto, como partición de clases de equivalencia o análisis de valores límite.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-contenido.p-4.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center
              b Ejecutar
            p.text-center Se aplican los casos de prueba definidos, utilizando datos representativos y condiciones previamente establecidas.

        .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
          .tarjeta-numerada.color-acento-botones.p-4.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center
              b Evaluar
            p.text-center Se comparan los resultados obtenidos con los resultados esperados para determinar si el #[em software] cumple con lo definido.

    separador
    #t_4_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.2  Documentación, gestión de configuración y lecciones aprendidas

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        img(src='@/assets/curso/temas/t4/img07.png', alt='')
    p La documentación técnica es la evidencia tangible del proceso de #[em testing]. Sin documentación, es imposible demostrar qué se probó, cómo se probó y qué resultados se obtuvieron, lo cual invalida el esfuerzo realizado ante auditorías de calidad. Los estándares exigen la creación de artefactos como la política de pruebas, la estrategia, el plan maestro, los casos de prueba y los informes de incidentes.
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        p.bg9.p-4 Estrechamente ligada a la documentación se encuentra la gestión de la configuración. Este concepto hace referencia al control de las versiones tanto del #[em software] que se está probando como de los documentos asociados. En un entorno real, el código cambia constantemente. Si se reporta un defecto, debe indicarse exactamente en qué versión del #[em software], por ejemplo, versión 1.2.4, y en qué entorno, como desarrollo o producción, ocurrió el fallo.
        p Sin una gestión de la configuración estandarizada, el equipo de desarrollo puede perder tiempo intentando reproducir errores en versiones incorrectas del sistema. Por esta razón, documentar y controlar versiones no es una tarea secundaria, sino una condición necesaria para asegurar trazabilidad y confiabilidad en el proceso de pruebas.
      .col-lg-4.col-md-6.col-8
        img(src='@/assets/curso/temas/t4/img08.png', alt='')
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Documentación y gestión de configuración
    
    .row.justify-content-center.cursor-pointer.mb-4(data-aos="zoom-in-left")
        .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t4/tar1.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Documentación técnica
              p.mb-0 Permite demostrar qué se probó, cómo se probó y qué resultados se obtuvieron durante el proceso de #[em testing]. 
        
        .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t4/tar2.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Artefactos de prueba
              p.mb-0 Incluyen política de pruebas, estrategia, plan maestro, casos de prueba e informes de incidentes.
        
        .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t4/tar3.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Control de versiones
              p.mb-0 Permite identificar la versión exacta del #[em software] y de los documentos asociados al momento de reportar un defecto.
        
        .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t4/tar4.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Trazabilidad del fallo
              p.mb-0 Facilita reproducir errores en el entorno y versión correspondientes, evitando confusiones durante la corrección.
              

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.mb-3.col-9
        img(src='@/assets/curso/temas/t4/img09.png', alt='')
      .col-lg-7
        p La mejora continua es el pilar de cualquier marco de calidad. Una vez finaliza un ciclo de pruebas, el estándar indica que el equipo debe reflexionar sobre el proceso ejecutado. El manejo de las lecciones aprendidas consiste en documentar los aspectos positivos, como técnicas que funcionaron o herramientas que agilizaron el trabajo, y los aspectos por mejorar, como cuellos de botella, errores no detectados o fallas de comunicación.
        p Desde un enfoque educativo, esta etapa fomenta la metacognición en el aprendiz. Al analizar retrospectivamente un proyecto simulado, se identifican oportunidades de optimización y se proponen planes de mejora concretos, desarrollando una postura analítica y crítica frente al propio desempeño. Estas lecciones aprendidas se convierten en activos organizacionales valiosos para afrontar futuros proyectos con mayor grado de madurez técnica.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Ruta para gestionar lecciones aprendidas

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center
        .col-lg-8.mb-4.mb-md-0
          h4 Revisar el proceso ejecutado
          p Se analiza cómo se prepararon, ejecutaron y documentaron las pruebas durante el ciclo de trabajo.
        .col-lg-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t4/pas1.png', alt='')
            

      .row.justify-content-center
        .col-lg-3.mb-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t4/pas2.png', alt='')
        .col-lg-8.mb-4.mb-md-0
          h4.text-izq Identificar aciertos
          p.text-izq Se registran técnicas, herramientas, decisiones o prácticas que facilitaron el proceso y generaron buenos resultados.

      .row.justify-content-center
        .col-lg-8.mb-4.mb-md-0
          h4 Reconocer aspectos por mejorar
          p Se documentan cuellos de botella, errores no detectados, fallas de comunicación o dificultades en la ejecución.
        .col-lg-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t4/pas3.png', alt='')


      .row.justify-content-center
        .col-lg-3.mb-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t4/pas4.png', alt='')
        .col-lg-8.mb-4.mb-md-0
          h4.text-izq Proponer mejoras
          p.text-izq Se formulan acciones concretas para optimizar futuros ciclos de prueba y fortalecer la madurez técnica del equipo.

    

































</template>

<script>
export default {
  name: 'Tema4',
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
