import { type FC } from 'react'
import { Bulbasaur } from '../pokedex/initialPokemon'

type PokemonSelector = {
    setSelectedPokemon: (currentPokemon: string) => void
    currentState: string
    allPokemon: Bulbasaur[]
}
const PokemonDisplay: FC<PokemonSelector> = ({
    setSelectedPokemon,
    currentState,
    allPokemon: pokemons,
}) => {
    return (
        <div
            className={`mx-auto w-screen md:mr-0 md:overflow-auto md:rounded-none
        ${currentState === 'gallery' ? '' : '' /*Display for gallery type*/}
        ${currentState === 'table' ? 'flex ' : '' /*Display for Table type */}
        ${currentState === 'list' ? '' : '' /**Display for List type */}
    bg-mainbg ml-1 mb-1 grid grid-cols-12 rounded-r-lg rounded-bl-lg border-2 border-double border-cyan-800 2xl:grid-cols-9 xl:grid-cols-7 lg:grid-cols-5 md:w-2/3 md:grid-cols-3 sm:grid-cols-4`}>
            {pokemons.map((pokemon, index) => {
                return (
                    <div
                        className={`
                        ${currentState === 'gallery' ? '' : ''}
                        ${currentState === 'list' ? 'flex-col' : ''}
                        ${
                            currentState === 'table'
                                ? 'flex flex-col align-middle'
                                : ''
                        }
                         m-2 rounded-md border-2 border-cyan-600  bg-cyan-200 bg-opacity-70 transition delay-150 ease-out hover:bg-cyan-500 hover:bg-opacity-100`}
                        key={pokemon.name}
                        onClick={() => setSelectedPokemon(pokemon.name)}>
                        <div
                            className={`
                        ${
                            currentState === 'gallery'
                                ? 'flex justify-center'
                                : ''
                        }
                        ${currentState === 'list' ? 'hidden' : ''}
                        ${
                            currentState === 'table'
                                ? ' flex justify-center'
                                : ''
                        }`}>
                            <img
                                className=''
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                    index + 1
                                }.png`}
                                alt=''
                            />
                        </div>
                        <div
                            className={`
                        ${currentState === 'gallery' ? 'hidden' : ''}
                        ${
                            currentState === 'table'
                                ? 'justify-center text-center'
                                : ''
                        }
                        ${
                            currentState === 'list'
                                ? ` m-0 flex min-h-[48px] flex-col justify-center text-center align-middle`
                                : ''
                        }`}>
                            {currentState === 'list'
                                ? `- ${index + 1} - \n`
                                : ''}
                            {pokemon.name.charAt(0).toUpperCase() +
                                pokemon.name.slice(1)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PokemonDisplay
