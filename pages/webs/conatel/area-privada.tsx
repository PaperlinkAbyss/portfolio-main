import Layout from 'c/ConatelLayout'
import GeneralHeader from 'c/GeneralHeader'
import Image from 'next/legacy/image'
import { ReactElement } from 'react'

export default function AreaPrivada() {
    return (
        <>
            <div className='mx-auto my-0 w-[70%] min-w-[70] place-content-center lg:w-4/5 md:w-[90%]'>
                <GeneralHeader>Área privada</GeneralHeader>
                <form className='grid text-center place-content-center'>
                    <div className='mx-auto'>
                        <Image src='/logo.png' width='300' height='300' />
                    </div>
                    <h2 className='my-4 text-4xl text-center'>Conatel</h2>
                    <input
                        className='w-56 mx-auto input-general'
                        type='text'
                        name='user'
                        pattern='[a-zA-Z0-9]'
                        placeholder='Usuario'
                    />
                    <input
                        className='w-56 mx-auto mb-4 input-general'
                        type='password'
                        name='password'
                        pattern='[a-zA-Z0-9*]{9}'
                        placeholder='Contraseña'
                    />
                    <button
                        className='self-center px-4 py-2 mt-2 font-bold text-white bg-blue-900 rounded'
                        type='submit'>
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
}
AreaPrivada.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
