/*
    Quando clicar no pokemon da listagem temos que esconder o pokemon atualmente aberto e mostrar o cartão pokemon escondido

    pra isso vamos precisar trabalhar com dois elementos
    1 - listagem
    2 - cartão do pokémon

    precisamos criar duas variáveis no JS pra trbalhar com os elementos da tela

    será preciso trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    -remover a classe aberto só do cartão que está aberto
    -ao clicar em um pokemon da listagem, pegamos o id desse pokemon pra saber qual cartão mostrar
    -remover a calsse ativa que marca o pokémon slecionado
    -adicionar a classe ativo no item da lista selecionado.

*/

// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')


        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')


        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')
    })

})

