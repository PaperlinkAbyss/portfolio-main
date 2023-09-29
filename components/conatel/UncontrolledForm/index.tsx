import { DOMAttributes, useRef } from 'react'
import Input from './Input'
import TextArea from './TextArea'

export default function UncontrolledForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit: DOMAttributes<HTMLFormElement>['onSubmit'] = (
        event
    ) => {
        event.preventDefault()
        if (!formRef.current) return
        const {
            name: name,
            phone: { value: phone },
            mail: { value: mail },
            business: { value: business },
            accepted: { value: accepted },
            message: { value: message },
        } = formRef.current
        const body = {
            name,
            phone,
            mail,
            business,
            accepted,
            message,
        }
        fetch('/api/formValidation', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                phone,
                mail,
                business,
                accepted,
                message,
            }),
        })
    }

    return (
        <>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col flex-wrap content-center self-center justify-center m-auto my-4 ali w-max'
                action='/api/formValidation'
                encType='text/plain'
                method='post'>
                <Input
                    name='name'
                    pattern='^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$'
                    placeholder=' Nombre y apellidos'
                />
                <Input
                    name='phone'
                    pattern='[0-9+]{9}'
                    placeholder='Teléfono'
                    type='tel'
                />
                <Input
                    name='mail'
                    pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.ñÑ]+)\.([a-zA-Z]{2,5})$'
                    placeholder=' Correo electrónico'
                />
                <Input name='business' placeholder='Empresa' />
                <TextArea name='message' placeholder=' Mensaje' />
                <div className=''>
                    <Input
                        name='accepted'
                        type='checkbox'
                        className='w-auto p-1 mr-2'
                        id='aviso'
                    />
                    <label htmlFor='aviso'>
                        Acepto el{' '}
                        <a href=''>Aviso legal y de protección de datos</a>
                    </label>
                </div>
                <button
                    className='self-center px-4 py-2 mt-2 font-bold text-white bg-blue-900 rounded h-max w-max'
                    type='submit'
                    value='enviar'>
                    Enviar
                </button>
            </form>
        </>
    )
}
