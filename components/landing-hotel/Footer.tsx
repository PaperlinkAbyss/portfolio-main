import { useState } from 'react'
const currentDate = new Date().toISOString().slice(0, 10)
type BoughtState = {
    adults: number
    children: number
    hotel: 'Tokoyama' | 'Tokyo' | 'Nagashima'
    date: string | Date
}
type Kind = keyof BoughtState
type Operation = BoughtState[Kind]
export default function Footer() {
    const [bought, setBought] = useState({
        adults: 1,
        children: 0,
        hotel: 'Tokoyama',
        date: currentDate,
    })

    function stateUpdate(type: Kind, operation: Operation) {
        if (typeof operation === 'string') {
            return setBought((previous) => {
                return { ...previous, [type]: operation }
            })
        }
        if (
            typeof operation === 'number' &&
            (type === 'adults' || type === 'children')
        ) {
            let computed = bought[type] + operation
            if (computed < 0) return
            setBought((previous) => {
                return {
                    ...previous,
                    [type]: computed,
                }
            })
        }
    }
    const bookHotel = () => {
        let displayText = ''
        if (bought.adults > 0) {
            if (bought.children > 0) {
                displayText += `${bought.adults} ${
                    bought.adults > 1 ? 'adultos' : 'adulto'
                } y ${bought.children} ${
                    bought.children === 1 ? 'niños' : 'niño'
                }`
            } else {
                displayText += `${bought.adults} ${
                    bought.adults > 1 ? 'adultos' : 'adulto'
                }`
            }
        }
        if (bought.adults === 0 && bought.children === 0) {
            alert('Debe introducir al menos un niño o un adulto')
        } else {
            alert(
                `Ha elegido el hotel ${bought.hotel} para el día ${bought.date} para ${displayText}`
            )
        }
    }
    return (
        <div className='fixed content-center w-full  bottom-3 justify-items-center'>
            <div className='flex flex-row items-center justify-center p-1 ml-4 mr-4 bg-white border align-self-center'>
                <div className=''>
                    <div className='text-xs '>Hotels </div>

                    <select
                        className='border-2 border-gray-500 rounded-sm '
                        name='hotels'
                        id='hoteles'
                        onChange={(event) =>
                            stateUpdate('hotel', event.target.value as Kind)
                        }>
                        <option
                            onClick={() => {
                                stateUpdate('hotel', 'Tokoyama')
                            }}
                            value='Tokoyama'>
                            Tokoyama Hotel{' '}
                        </option>
                        <option
                            onClick={() => {
                                stateUpdate('hotel', 'Nagashima')
                            }}
                            value='Nagashima'>
                            Nagashima Hotel{' '}
                        </option>
                        <option
                            onClick={() => {
                                stateUpdate('hotel', 'Tokyo')
                            }}
                            value='Tokyo'>
                            Tokyo Hotel{' '}
                        </option>
                    </select>
                </div>
                <div>
                    <div className='ml-1 text-xs '>Date </div>
                    <input
                        type='date'
                        name=''
                        value={bought.date || currentDate}
                        id='fechas'
                        className='ml-1 border-2 border-gray-500 rounded-sm'
                        onChange={(event) => {
                            stateUpdate('date', event.target.value)
                        }}
                    />
                </div>
                <div className='flex flex-col ml-2 mr-2 text-center  center'>
                    <div className='p-1 text-base '>Adults </div>
                    <div className='flex flex-row self-center'>
                        <button
                            className='p-1 bg-gray-400 border-none '
                            onClick={() => stateUpdate('adults', 1)}>
                            +
                        </button>
                        <button className='p-1 bg-white'>
                            {bought.adults >= 0 ? bought.adults : 0}
                        </button>
                        <button
                            className='p-1 bg-gray-400 border-none  h-1/2'
                            onClick={() => stateUpdate('adults', -1)}>
                            -
                        </button>
                    </div>
                </div>
                <div className='flex flex-col ml-1 mr-1 text-center  center'>
                    <div className='p-1 text-base '>Children </div>
                    <div className='flex flex-row self-center'>
                        <button
                            className='p-1 bg-gray-400 border-none '
                            onClick={() => stateUpdate('children', 1)}>
                            +
                        </button>
                        <button className='p-1 bg-white'>
                            {bought.children >= 0 ? bought.children : 0}
                        </button>
                        <button
                            className='p-1 bg-gray-400 border-none '
                            onClick={() => stateUpdate('children', -1)}>
                            -
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        className='self-center p-1 bg-gray-400'
                        onClick={bookHotel}>
                        Check this date
                    </button>
                </div>
            </div>
        </div>
    )
}
