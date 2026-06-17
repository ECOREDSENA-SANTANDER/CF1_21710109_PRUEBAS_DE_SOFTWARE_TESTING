<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del plan de pruebas de <i>software.</i>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Verificar la comprensión de los fundamentos de las pruebas de software, sus niveles, tipos, principios, estándares técnicos y elementos necesarios para estructurar un plan de pruebas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cómo se definen las pruebas de <i>software</i> dentro del aseguramiento de la calidad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como una actividad que se realiza únicamente después de entregar el <i>software</i> al usuario final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como un proceso técnico e investigativo que proporciona información objetiva sobre la calidad del producto de <i>software</i>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Como una tarea exclusiva de programación orientada a corregir código fuente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como una estrategia para reemplazar la documentación técnica del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 2,
          texto:
            '¿Cuál es la diferencia principal entre aseguramiento de la calidad y pruebas de <i>software</i>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El aseguramiento de la calidad busca prevenir defectos en los procesos, mientras que las pruebas buscan detectar defectos en el producto construido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El aseguramiento de la calidad solo se aplica cuando el <i>software</i> ya está instalado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las pruebas de <i>software</i> reemplazan por completo la planeación del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ambos conceptos significan exactamente lo mismo y no tienen diferencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 3,
          texto:
            '¿Cuál de las siguientes acciones corresponde a un objetivo principal de las pruebas de <i>software</i>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la necesidad de revisar los requisitos del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar que los usuarios finales participen en la validación del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar defectos, generar confianza y aportar información para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Construir la interfaz gráfica completa sin intervención del equipo técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 4,
          texto:
            '¿Qué implica delimitar el alcance de las pruebas dentro de un proyecto de <i>software</i>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Probar todos los módulos sin considerar tiempo, presupuesto o prioridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ejecutar pruebas únicamente sobre la interfaz visual del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar del plan los módulos críticos del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir qué partes del sistema serán evaluadas y cuáles quedarán fuera de la prueba.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 5,
          texto:
            '¿Qué significa el principio que indica que las pruebas demuestran la presencia de defectos, no su ausencia?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que un sistema sin errores encontrados siempre es perfecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que las pruebas no aportan información útil al equipo de desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que las pruebas reducen la probabilidad de fallos, pero no garantizan que el <i>software</i> esté libre de defectos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que solo se deben probar los módulos menos importantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 6,
          texto:
            '¿Por qué se afirma que las pruebas exhaustivas son imposibles en la mayoría de los sistemas?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque no es viable probar todas las combinaciones posibles de datos, entradas y condiciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque los usuarios finales no deben participar en los procesos de validación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque los sistemas informáticos no requieren análisis de riesgos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque las pruebas solo se aplican a documentos impresos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 7,
          texto:
            '¿Qué propone el principio de pruebas tempranas o Shift-Left Testing?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Esperar a que el sistema esté en producción para iniciar las pruebas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Probar únicamente cuando el cliente reporte errores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Iniciar las actividades de prueba desde etapas tempranas, como la revisión de requisitos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Repetir siempre los mismos casos de prueba sin modificarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 8,
          texto:
            '¿Qué describe la paradoja del pesticida en pruebas de <i>software</i>?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que todos los defectos se concentran únicamente en la documentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que las pruebas automatizadas eliminan toda posibilidad de error.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que las pruebas funcionales no deben repetirse en ningún proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que repetir siempre las mismas pruebas puede hacer que dejen de encontrarse nuevos defectos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 9,
          texto:
            '¿Qué relación existe entre el ciclo de vida del desarrollo de <i>software</i> y los niveles de prueba?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los niveles de prueba se integran con las fases del desarrollo para verificar progresivamente la calidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El ciclo de vida del <i>software</i> solo se aplica a proyectos sin documentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los niveles de prueba se ejecutan sin relación con las etapas del desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El ciclo de vida impide realizar pruebas de aceptación del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 10,
          texto: '¿Qué caracteriza a las pruebas unitarias?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evalúan la aceptación del sistema por parte del cliente final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verifican de manera aislada una función, método, clase o fragmento específico de código.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se enfocan exclusivamente en la usabilidad de la interfaz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se realizan únicamente después de liberar el sistema en producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 11,
          texto:
            '¿Cuál es el propósito principal de las pruebas de integración?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Validar que los usuarios acepten comercialmente el producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazar las pruebas unitarias realizadas por el desarrollador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Medir únicamente la velocidad de carga de una página web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar la comunicación, interfaces y flujo de datos entre módulos o componentes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 12,
          texto: '¿Qué evalúan las pruebas del sistema?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un único método de código fuente sin conexión con otros módulos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El <i>software</i> completo y ensamblado para verificar su cumplimiento funcional y no funcional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo los documentos administrativos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La satisfacción del usuario antes de construir el <i>software</i>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 13,
          texto:
            '¿Cuál es el propósito de las pruebas de aceptación del usuario o UAT?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Buscar errores de sintaxis en el código fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Validar que el sistema satisface las necesidades del negocio antes de su implementación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar la participación del cliente en el proceso de validación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ejecutar únicamente pruebas de rendimiento en servidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 14,
          texto: '¿Qué evalúan las pruebas funcionales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El comportamiento del sistema frente a los requisitos definidos por el cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La cantidad de servidores físicos disponibles en la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estética del código fuente sin ejecutar el sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El presupuesto general del proyecto de formación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 15,
          texto: '¿Qué aspecto corresponde a una prueba no funcional?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar si un usuario puede iniciar sesión con credenciales válidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprobar si el sistema muestra el mensaje esperado al guardar un formulario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Confirmar únicamente que el nombre del proyecto esté escrito correctamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar rendimiento, seguridad, usabilidad o accesibilidad del sistema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre los fundamentos, niveles, tipos, estándares y diseño del plan de pruebas de <i>software.</i>',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
