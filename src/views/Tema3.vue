<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de pruebas de #[em software]

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-6.col-md-5
          img(src='@/assets/curso/temas/t3/img01.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center.bg2.mb-3
            .col-lg-6
              img.izq.d-none.d-lg-block(src='@/assets/curso/temas/t3/img02.svg', alt='')
            .col-lg-6.p-4
              p Mientras que los niveles de prueba indican en qué momento del ciclo de vida se realiza la evaluación, los tipos de prueba definen el enfoque o el objetivo específico de lo que se está evaluando. Diferenciar los tipos de pruebas de #[em software] permite seleccionar las herramientas, técnicas y metodologías adecuadas para estructurar un plan de pruebas robusto y pertinente a las necesidades del proyecto.
          p Esta clasificación facilita la toma de decisiones dentro del proceso de aseguramiento de la calidad, ya que no todos los sistemas requieren las mismas pruebas ni con el mismo nivel de profundidad. Por ello, es necesario reconocer qué se evalúa, cómo se evalúa y qué información aporta cada tipo de prueba al análisis del producto tecnológico.

    separador
    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1  Pruebas funcionales y no funcionales

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-10.col-md-8
          img(src='@/assets/curso/temas/t3/img03.png', alt='')
        .col-lg-7
          .row.justify-content-center.mb-3
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/img04.png', alt='')
            .col-lg-10
              p Las pruebas funcionales se centran en evaluar “qué hace” el sistema. Su objetivo principal es verificar que las funciones del #[em software] operen en concordancia con los requisitos especificados por el cliente o el analista de negocio. En este tipo de pruebas, el código interno generalmente se ignora, debido a que se trabaja desde un enfoque de caja negra, centrado en suministrar datos de entrada y validar que los datos de salida o el comportamiento del sistema sean los esperados.
            p Para ilustrar este concepto en un contexto de formación profesional, puede tomarse como referencia el diseño de un Sistema de Gestión de Aprendizaje (#[em LMS], por sus siglas en inglés). Una prueba funcional evaluaría si un aprendiz, al ingresar su número de documento y contraseña correctos, logra acceder a su panel de cursos. Asimismo, validaría que el sistema deniegue el acceso y muestre un mensaje de error claro si la contraseña es incorrecta.
        p En el plan de pruebas, las pruebas funcionales constituyen el núcleo de la matriz de casos de prueba, pues garantizan que la aplicación cumple con su propósito operativo fundamental.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        p.bg4.p-4 A diferencia de las pruebas funcionales, las pruebas no funcionales se enfocan en “cómo lo hace” el sistema. Un #[em software] puede cumplir con todas sus funciones, pero si es extremadamente lento, vulnerable a ataques informáticos o difícil de comprender para el usuario, será considerado un producto defectuoso.
        p Las pruebas no funcionales evalúan atributos de calidad del sistema, como rendimiento, carga, seguridad, usabilidad y accesibilidad. Incluir estos requerimientos en el plan de pruebas es fundamental, porque omitirlos puede llevar a sistemas funcionales en teoría, pero poco eficientes, inseguros o difíciles de usar en condiciones reales.
      .col-lg-4.col-md-6.col-8
        img(src='@/assets/curso/temas/t3/img05.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Pruebas funcionales y no funcionales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.col-md-6.col-8
        img(src="@/assets/curso/temas/t3/img06.png")
      .col-lg-9
       TabsA.color-acento-botones
        .tarjeta.bg6.p-4(titulo="Pruebas funcionales")
          p Evalúan “qué hace” el sistema. Permiten verificar si las funciones del #[em software] cumplen con los requisitos definidos por el cliente o el analista de negocio.
        .tarjeta.bg6.p-4(titulo="Enfoque de caja negra")
          p En las pruebas funcionales, generalmente no se analiza el código interno. Se ingresan datos y se valida si la respuesta del sistema coincide con el resultado esperado.
        .tarjeta.bg6.p-4(titulo="Ejemplo funcional")
          p En un #[em LMS], una prueba funcional puede validar si un aprendiz accede correctamente a su panel de cursos al ingresar credenciales válidas, o si recibe un mensaje de error cuando la contraseña es incorrecta.
        .tarjeta.bg6.p-4(titulo="Pruebas no funcionales")
          p Evalúan “cómo lo hace” el sistema. Permiten revisar atributos de calidad como rendimiento, seguridad, usabilidad, accesibilidad y comportamiento bajo condiciones de alta demanda.
        .tarjeta.bg6.p-4(titulo="Importancia en el plan")
          p Las pruebas funcionales y no funcionales deben considerarse en el plan de pruebas para evaluar tanto el cumplimiento de requisitos como la calidad de la experiencia de uso.

    p Dentro de las pruebas no funcionales, es necesario precisar qué atributos de calidad serán evaluados, ya que no basta con que el #[em software] cumpla sus funciones principales. También debe responder adecuadamente frente a condiciones de uso reales, proteger la información, facilitar la interacción de las personas usuarias y permitir el acceso en condiciones de equidad. Por ello, el siguiente recurso presenta algunos atributos que pueden incluirse en el plan de pruebas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Atributos evaluados en las pruebas no funcionales 

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center
        .col-lg-8.mb-4.mb-md-0
          h4 Rendimiento y carga
          p Evalúa cómo se comporta el sistema bajo condiciones de alta demanda. Por ejemplo, en un portal educativo con inscripciones nacionales, una prueba de carga puede simular múltiples usuarios accediendo al mismo tiempo para comprobar que los servidores respondan adecuadamente.
        .col-lg-3.col-lg-3.mb-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t3/pas1.png', alt='')
            

      .row.justify-content-center
        .col-lg-3.mb-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t3/pas2.png', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-md-0
          h4.text-izq Seguridad
          p.text-izq Verifica que los datos confidenciales, como notas, información personal o certificados, estén protegidos contra accesos no autorizados.

      .row.justify-content-center
        .col-lg-8.mb-4.mb-md-0
          h4 Usabilidad
          p Analiza la facilidad con la que las personas interactúan con la interfaz del #[em software], incluyendo usuarios con discapacidad visual, auditiva, cognitiva o motora.
        .col-lg-3.mb-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t3/pas3.png', alt='Texto que describa la imagen')


      .row.justify-content-center
        .col-lg-3.mb-3.col-md-6
          figure
            img(src='@/assets/curso/temas/t3/pas4.png', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-md-0
          h4.text-izq Accesibilidad
          p.text-izq Permite revisar si el sistema puede ser utilizado por la mayor cantidad posible de personas, considerando lectura con tecnologías de apoyo, navegación por teclado, contraste suficiente, textos alternativos y claridad en los mensajes.
        
        


    separador(data-aos="zoom-in-left")
    #t_3_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.2  Pruebas de revisión, estáticas y dinámicas
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La industria del desarrollo de #[em software] clasifica las pruebas en dos grandes paradigmas metodológicos: pruebas estáticas y pruebas dinámicas. Esta clasificación permite diferenciar si la evaluación requiere ejecutar el código fuente o si puede realizarse mediante el análisis de documentos, modelos, diseños o código sin poner en funcionamiento el sistema.
          br
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8
        p.bg9.p-4 Las pruebas dinámicas requieren la ejecución del código fuente; es decir, el #[em software] debe estar compilado y en funcionamiento para que el probador interactúe con él. Las pruebas funcionales y no funcionales mencionadas anteriormente son, en su mayoría, de naturaleza dinámica, porque permiten revisar el comportamiento del sistema durante su operación.
        p Por otro lado, las pruebas estáticas se realizan sin ejecutar el código. Su objetivo es examinar la documentación, los modelos de diseño o el código fuente para encontrar anomalías de forma temprana. Una de las técnicas más valiosas dentro de las pruebas estáticas son las revisiones.
        p Las revisiones consisten en reuniones estructuradas donde el equipo de desarrollo, analistas y clientes examinan documentos como el documento de requisitos o el diseño de la base de datos. Desde una perspectiva pedagógica, las revisiones funcionan como un ejercicio de aprendizaje colaborativo, porque permiten detectar ambigüedades, contradicciones o vacíos antes de avanzar hacia la codificación.
      .col-lg-4.col-md-6.col-8
        img(src='@/assets/curso/temas/t3/img08.png', alt='')

    p Por ejemplo, al revisar en conjunto el prototipo de un sitio web, el equipo puede identificar que un requisito es ambiguo o contradictorio antes de que un programador invierta tiempo escribiendo el código. Las pruebas estáticas representan una aplicación directa del principio de pruebas tempranas y contribuyen al ahorro de recursos financieros, técnicos y humanos.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/ico.svg")
            h3.bg3.py-2.w-card-text.text-white Pruebas estáticas, dinámicas y de revisión

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/t3/img09.png", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t3/1.png", alt="alt").img100
              .col
                h5 Pruebas dinámicas
                p Requieren ejecutar el código fuente. El #[em software] debe estar compilado y en funcionamiento para evaluar su comportamiento.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t3/2.png", alt="alt").img100
              .col
                h5 Pruebas estáticas
                p No requieren ejecutar el código. Se centran en revisar documentación, modelos, diseños o código fuente para identificar anomalías tempranas.
          .crd.crd--avatarHorizontal2.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t3/3.png", alt="alt").img100
              .col
                h5 Revisiones técnicas
                p Son espacios estructurados donde el equipo examina documentos del proyecto, como requisitos, prototipos o diseños de base de datos.
          .crd.crd--avatarHorizontal2.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t3/4.png", alt="alt").img100
              .col
                h5 Valor preventivo
                p Permiten detectar errores antes de la programación o ejecución del sistema, reduciendo reprocesos y costos.

    .cajon.color-secundario.p-4.mb-4
      p Las pruebas dinámicas evalúan el comportamiento del sistema en funcionamiento. Las pruebas estáticas permiten revisar documentos, diseños o código sin ejecutar el #[em software]. Ambas aportan información valiosa para construir un plan de pruebas más completo y preventivo.








</template>

<script>
export default {
  name: 'Tema3',
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
