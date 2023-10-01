import GeneralHeader from '../GeneralHeader'

export default function Colaboraciones() {
  return (
    <article id='colaboraciones'>
      <GeneralHeader>
        <b>Colaboraciones</b>
      </GeneralHeader>
      <section className='mt-10 grid grid-cols-3 p-5 font-bold sm:grid-cols-2'>
        <p>
          Consideramos que la colaboración entre empresas supone una inversión de recursos que hacen
          que nuestros proyectos sigan evolucionando.
        </p>
        <p>
          La unión con mayoristas del sector puede fortalecer, promover y ampliar conocimientos para
          mejorar la calidad y gestión de nuestro servicio, y también de nuestros productos.
        </p>
        <p>
          Asimismo, creemos que esa diversidad promoverá la aparición de nuevas ideas para el
          desempeño de nuestra labor diaria, pudiendo ofrecer así una mayor calidad a nuestros
          clientes.
        </p>
      </section>
    </article>
  )
}
