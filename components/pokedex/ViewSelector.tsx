import { View } from '~w/pokedex'
type Props = {
    stateUpdate: (argument: View) => void
    currentState: View
}

export default function ViewSelector({ stateUpdate, currentState }: Props) {
    return (
        <div className='flex flex-row p-1 m-1 mt-2 mb-0 border-2 border-b-0 rounded-t-lg w-fit border-cyan-800 bg-cyan-100'>
            <div
                className={`p-1 ${
                    currentState === 'gallery'
                        ? ' rounded-lg border-2 border-dotted border-cyan-600'
                        : 'p-2'
                }`}
                onClick={() => stateUpdate('gallery')}>
                Gallery
            </div>
            <div
                className={`p-1 ${
                    currentState === 'table'
                        ? ' rounded-lg border-2 border-dotted border-cyan-600'
                        : 'p-2'
                }`}
                onClick={() => stateUpdate('table')}>
                Table
            </div>
            <div
                className={`p-1 ${
                    currentState === 'list'
                        ? 'rounded-lg border-2 border-dotted border-cyan-600'
                        : 'p-2'
                }`}
                onClick={() => stateUpdate('list')}>
                List
            </div>
        </div>
    )
}
