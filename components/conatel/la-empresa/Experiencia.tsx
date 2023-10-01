import GeneralHeader from '../GeneralHeader'

export default function Experiencia() {
  return (
    <article
      id='experiencia'
      className='mb-4'
    >
      <GeneralHeader>
        <b>Experiencia</b>
      </GeneralHeader>
      <h3 className='mb-5 text-center text-2xl font-bold  text-[#333399]'>
        Desde 2011, estamos inscritos en el “Registro de operadores de Redes de Servicios de
        Comunicaciones Electrónicas” como proveedores de “Servicio Telefónico Fijo y Proveedor de
        Acceso a Internet”.
      </h3>
      <h3 className='mb-5 text-center text-2xl font-bold text-[#333399]'>
        También estamos inscritos en el “Registro de empresas instaladoras de telecomunicación”.
      </h3>
      <section className='grid grid-cols-5 grid-rows-1 gap-3 text-center font-bold sm:grid-cols-2'>
        <div className='text-center'>
          <p>Somos un equipo con</p>
          <ol className='inline-block list-inside list-disc text-left sm:list-none'>
            <li>dilatada experiencia</li>
            <li>alto nivel de cualificación</li>
            <li>en formación continua.</li>
            <li>Compromiso</li>
            <li>Trato directo</li>
            <li>Cercanía al cliente</li>
          </ol>
        </div>
        <p>
          Suponen un elemento diferencial a la hora de buscar, proponer y desarrollar soluciones
          para ellos.
        </p>
        <p>
          La comunicación y el trabajo de nuestro equipo son necesarios durante los procesos de
          implantación, despliegue y soporte de soluciones.
        </p>
        <p>
          Tratamos de analizar y afrontar los retos que surgen como una fuente de aprendizaje y
          búsqueda activa y creativa de soluciones, para continuar manteniendo la perspectiva.
        </p>
        <p>
          La planificación y organización de la actuación en el cliente nos ayuda a desarrollar una
          adecuada capacidad de respuesta para afrontar las variaciones del entorno.
        </p>
      </section>
    </article>
  )
}
