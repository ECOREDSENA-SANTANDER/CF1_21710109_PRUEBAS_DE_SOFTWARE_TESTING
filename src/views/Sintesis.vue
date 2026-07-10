<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Las pruebas de software constituyen un proceso técnico, analítico y preventivo que permite verificar y validar la calidad de una solución tecnológica. En este componente formativo se integran los fundamentos del testing, los niveles y tipos de pruebas, los estándares de referencia y los elementos necesarios para construir un plan de pruebas. Estos aspectos permiten organizar escenarios, casos, recursos, cronogramas y criterios de evaluación, con el fin de reducir riesgos, detectar defectos y aportar a la entrega de productos de #[em software] más confiables, seguros y alineados con las necesidades del usuario y del proyecto.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado Fundamentos del plan de pruebas de software. El esquema presenta cinco elementos principales que integran saberes para determinar el plan de pruebas: fundamentos del testing, niveles de prueba, tipos de prueba, estándares y referentes, y plan de pruebas. En fundamentos del testing se incluyen concepto, objetivos, alcance, QA, bugs y principios, orientados a comprender la calidad del producto. En niveles de prueba se relacionan pruebas unitarias, de integración, del sistema, de aceptación, UAT y Modelo en V, para ubicar cuándo se prueba en el ciclo de vida. En tipos de prueba se presentan pruebas funcionales, no funcionales, estáticas, dinámicas y de revisión, para definir qué se evalúa y cómo se evalúa. En estándares y referentes se incluyen IEEE 829, ISO/IEC/IEEE 29119, ISTQB, Syllabus y procedimientos, asociados con trazabilidad, documentación y rigor técnico. En plan de pruebas se integran alcance, enfoque, recursos, cronograma, ítems, escenarios, casos y nomenclaturas, para organizar la evaluación del software. El mapa concluye que estos elementos contribuyen al resultado del proceso de pruebas: un software confiable, seguro, usable y alineado con los requisitos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
