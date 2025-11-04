/*                        MAIN                                 */
console.log('Программа запущена')

const btnPlayElement = document.querySelector('.play')

btnPlayElement.addEventListener('click', (event) => {
    console.log('Произведен клик')
    window.location.assign('./play.html')
})
