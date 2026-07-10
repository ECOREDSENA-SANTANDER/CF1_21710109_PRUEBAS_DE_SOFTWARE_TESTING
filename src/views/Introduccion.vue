<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        p.bg1.p-4 En el desarrollo de soluciones tecnológicas, la calidad del #[em software] no depende únicamente de que una aplicación funcione, sino de que responda a los requisitos definidos, sea confiable, segura y útil para las personas que la utilizarán. Por esta razón, las pruebas de #[em software] cumplen un papel fundamental dentro de los proyectos de desarrollo, mantenimiento e implementación de sistemas. Este componente formativo aborda los fundamentos necesarios para comprender qué son las pruebas de #[em software], cuáles son sus objetivos, qué niveles y tipos existen, y por qué su planificación permite tomar decisiones técnicas más organizadas durante el aseguramiento de la calidad.
        p El estudio de este componente es importante porque permite al aprendiz reconocer que probar una solución tecnológica no consiste en realizar acciones al azar, sino en definir una estrategia estructurada que oriente el proceso de verificación y validación. A través de estos contenidos, el aprendiz podrá identificar la relación entre los requisitos del cliente, los estándares técnicos, los escenarios de prueba y los casos de prueba, comprendiendo cómo estos elementos aportan a la prevención de errores, la detección de defectos y la mejora de la experiencia del usuario final.
      .col-lg-4.col-md-6.col-8
        img(src='@/assets/curso/temas/bg/img02.png', alt='')
    p El componente se desarrollará mediante explicaciones conceptuales, ejemplos aplicados y recursos educativos virtuales que faciliten la comprensión progresiva de los temas. Inicialmente, se abordarán los conceptos, objetivos, alcance, principios e importancia de las pruebas de #[em software]; luego, se revisarán los niveles y tipos de prueba en relación con el ciclo de vida del desarrollo; posteriormente, se estudiarán los marcos de referencia, estándares y procedimientos técnicos; finalmente, se orientará la construcción del plan de pruebas, considerando alcance, enfoque, recursos, cronograma, ítems, escenarios, nomenclaturas y casos de prueba.
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
