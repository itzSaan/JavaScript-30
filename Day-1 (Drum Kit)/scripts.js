function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()  
    key.classList.add('playing')        
}

function removeTransition(e) {
    if (!e.propertyName == 'transform') return
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playAudio)

let device = navigator.userAgent.match('Android')
if (device != null) {            
    function playAudioMobile(e) {  
    const keyCode = e.target.attributes[0].nodeValue
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)                 
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()  
    key.classList.add('playing') 
}
window.addEventListener('click', playAudioMobile)  
}     
        
