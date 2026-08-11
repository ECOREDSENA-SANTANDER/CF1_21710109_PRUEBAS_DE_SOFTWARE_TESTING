<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Niveles de pruebas de #[em software] y ciclo de vida

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-6.col-md-5
          img(src='@/assets/curso/temas/t2/img01.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.bg6.mb-3
            .col-lg-6
              img.izq.d-none.d-lg-block(src='@/assets/curso/temas/t2/img02.svg', alt='')
            .col-lg-6.p-4
              p A partir de los fundamentos teóricos, es necesario comprender cómo se estructuran temporal y arquitectónicamente las pruebas. Los niveles de prueba organizan las evaluaciones en fases que corresponden a la evolución del #[em software], desde sus unidades de código más pequeñas hasta el sistema completo en su entorno real.
          p Esta organización permite reconocer en qué momento del desarrollo se aplican determinadas pruebas y qué propósito cumple cada una dentro del aseguramiento de la calidad. De esta manera, los niveles de prueba ayudan a planificar el cronograma, los recursos, los escenarios y los casos de prueba de forma coherente con el avance del producto tecnológico.

    separador(data-aos="zoom-in-left")
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1  Ciclo de vida del desarrollo de #[em software] y Modelo en V
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-10.col-md-8
          img(src='@/assets/curso/temas/t2/img03.png', alt='')
        .col-lg-7
          .row.justify-content-center.mb-3
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/img04.png', alt='')
            .col-lg-10
              p El ciclo de vida del desarrollo de #[em software (SDLC], por sus siglas en inglés) es el marco metodológico que describe las etapas por las que pasa un producto informático desde su concepción hasta su retiro. Modelos tradicionales como el Modelo en Cascada, o su variante orientada a pruebas, el Modelo en V, establecen una relación simétrica entre las fases de desarrollo y los niveles de prueba.
          p Por otro lado, en marcos de trabajo ágiles, como #[em Scrum], estos niveles no se presentan como fases aisladas, sino que se integran en iteraciones cortas o #[em sprints]. Independientemente de la metodología utilizada, se requiere interpretar el ciclo de vida para determinar cuándo aplicar cada nivel de prueba.
          p Esta comprensión es esencial para planificar el cronograma dentro del plan de pruebas, ya que permite relacionar los momentos del desarrollo con las actividades de verificación y validación correspondientes.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Relación entre ciclo de vida y niveles de prueba

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.col-md-6.col-8
        img(src="@/assets/curso/temas/t2/img05.png")
      .col-lg-9
       TabsA.color-acento-botones
        .tarjeta.bg6.p-4(titulo="Análisis de requisitos")
          p En esta etapa se identifican las necesidades del cliente, las condiciones del negocio y los requisitos que servirán como base para validar el producto.
        .tarjeta.bg6.p-4(titulo="Diseño del sistema")
          p Se define la arquitectura y funcionalidad del sistema. Esta información orienta la verificación de componentes, interfaces y comportamiento esperado.
        .tarjeta.bg6.p-4(titulo="Codificación")
          p Se implementa el código fuente. En esta etapa se relacionan las pruebas unitarias, orientadas a verificar unidades, métodos o funciones específicas.
        .tarjeta.bg6.p-4(titulo="Integración y sistema")
          p Los componentes se conectan y se evalúa el comportamiento del sistema completo. Aquí se relacionan las pruebas de integración y las pruebas del sistema.
        .tarjeta.bg6.p-4(titulo="Aceptación y uso real")
          p El producto se valida frente a los requisitos y necesidades del usuario final o del cliente antes de su liberación o implementación.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 1.
        span Diagrama del Modelo en V del ciclo de vida del #[em software]
      img(src='@/assets/curso/temas/t2/fig1.svg', alt='Diagrama del Modelo en V del ciclo de vida del software. A la izquierda se presentan las etapas de desarrollo: análisis de requisitos, con definición de usuario y negocio; diseño del sistema, con arquitectura y funcionalidad; y codificación, con implementación del código. En la parte inferior derecha se ubican las pruebas unitarias, orientadas a verificar unidades y módulos. Luego se presentan las pruebas del sistema, asociadas con la validación integral del sistema, y las pruebas de aceptación, relacionadas con la validación de requisitos y uso real. El diagrama muestra la relación entre las fases de desarrollo y los niveles de prueba dentro del proceso de verificación y validación del software.')


    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2  Pruebas unitarias, de integración, del sistema y de aceptación

    .bloque-texto-g.bg8.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los niveles de prueba permiten evaluar el #[em software] de manera progresiva. Cada nivel cumple una función específica dentro del ciclo de vida: primero se verifica la lógica interna de unidades pequeñas, luego la comunicación entre componentes, después el sistema completo y, finalmente, la aceptación por parte del cliente o usuario final.
          br
         

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Niveles de prueba del #[em software]

    SlyderE(indicadores="derecha").bg7.p-5
      .row.justify-content-center
        .col-lg-7.mb-4.mb-md-0
          h4 Pruebas unitarias
          p Las pruebas unitarias constituyen el nivel más bajo y granular de la evaluación de #[em software]. Su objetivo es aislar y verificar la funcionalidad de un fragmento de código específico, denominado “unidad”, que generalmente corresponde a una función, un método o una clase en la programación orientada a objetos.
          p En la práctica formativa y profesional, estas pruebas suelen ser escritas y ejecutadas por los desarrolladores utilizando marcos de trabajo técnicos, como #[em JUnit] para Java o #[em PyTest] para Python. Su propósito no es verificar el sistema completo, sino garantizar que la lógica interna de cada componente funcione como se diseñó.
          p Por ejemplo, en el desarrollo de un aula web académica, una prueba unitaria evaluaría exclusivamente si la función matemática que calcula el promedio de notas de un estudiante devuelve el resultado correcto con ciertos parámetros de entrada, sin importar si la interfaz gráfica está conectada.
        .col-lg-5.col-md-8
          figure
            img(src='@/assets/curso/temas/t2/1.png', alt='')

      .row.justify-content-center
        .col-lg-7.mb-4.mb-md-0
          h4 Pruebas de integración
          p Incluso si todas las unidades de código funcionan correctamente de manera aislada, los problemas suelen surgir cuando estas unidades se conectan para interactuar entre sí. Las pruebas de integración se enfocan en evaluar la interfaz y el flujo de datos entre módulos o componentes de #[em software].
          p Estas pruebas buscan detectar fallos en la comunicación, como formatos de datos incompatibles o llamadas a funciones incorrectas. Existen diferentes enfoques para la integración, como #[em Big Bang], ascendente #[em (bottom-up)] o descendente #[em (top-down)].
          p En el escenario de una plataforma académica, una prueba de integración evaluaría si el módulo de “cálculo de promedios” se comunica correctamente con el módulo de “base de datos de estudiantes” para extraer y actualizar la información sin generar acoplamientos de conexión.
        .col-lg-5.col-md-8
          figure
            img(src='@/assets/curso/temas/t2/2.png', alt='')

      .row.justify-content-center
        .col-lg-7.mb-4.mb-md-0
          h4 Pruebas del sistema
          p Cuando todos los componentes se han integrado, se procede a las pruebas del sistema. Este nivel evalúa el #[em software] en su totalidad, como un producto completo y ensamblado, para verificar que cumple con los requerimientos funcionales y no funcionales definidos por el cliente.
          p Las pruebas del sistema se realizan en un entorno de pruebas que debe simular, lo más fielmente posible, el entorno de producción real. En este nivel se asume la perspectiva del usuario final y se evalúa el comportamiento del #[em software] en escenarios completos.
          p Continuando con el ejemplo de la plataforma académica, la prueba del sistema implicaría iniciar sesión como docente, ingresar notas en múltiples asignaturas, generar un reporte en PDF y verificar que el sistema no se congela durante el proceso. Este nivel debe contemplarse detalladamente al elaborar los escenarios y nomenclaturas del plan de prueba.
        .col-lg-5.col-md-8
          figure
            img(src='@/assets/curso/temas/t2/3.png', alt='')

      .row.justify-content-center
        .col-lg-7.mb-4.mb-md-0
          h4 Pruebas de implementación y aceptación del usuario
          p Las pruebas de aceptación son el último nivel antes de que el #[em software] sea liberado o implementado oficialmente. Su propósito principal no es buscar nuevos defectos técnicos, que debieron resolverse en niveles anteriores, sino validar que el sistema satisface las necesidades de negocio y genera confianza para su despliegue.
          p Generalmente, estas pruebas, conocidas como #[em UAT] o #[em User Acceptance Testing], son realizadas por el cliente, los usuarios finales o representantes del negocio, con el acompañamiento del equipo técnico. Su división con frecuencia en pruebas alfa, realizadas en las instalaciones de los desarrolladores, y pruebas beta, realizadas por usuarios en sus propios entornos.
          p La determinación de este nivel dentro del procedimiento técnico de prueba es crucial, ya que representa la firma de conformidad que certifica que el #[em software] entregado aporta el valor esperado.
        .col-lg-5.col-md-8
          figure
            img(src='@/assets/curso/temas/t2/4.png', alt='')
  


















</template>

<script>
export default {
  name: 'Tema2',
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
