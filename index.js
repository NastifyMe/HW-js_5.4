const keyDisplay = document.getElementById('key')
const keys = ['a', 'f' ,'o', ';', 's', 'g', 'd', 'j', 'l', '.',]

let currentKeyIndex = 0

const keyUpdate = () => {
    keyDisplay.textContent = keys[currentKeyIndex]
}
keyUpdate()
document.addEventListener('keydown', (e) => {
    const currentKey = e.key

    if (currentKey === keys[currentKeyIndex]){
        currentKeyIndex++

        if (currentKeyIndex >= keys.length){
            PNotify.success({
                text: "Ви виграли! 🎉",
                delay: 2000
              });
    
              currentKeyIndex = 0
        }
        keyUpdate()
    } else {
        PNotify.error({
            text: `Помилка! Натиснуто "${currentKey}", потрібно "${keys[currentKeyIndex]}"`,
            delay: 2000
          });
    }
})

document.addEventListener('keypress', (e) => {
    e.preventDefault()
})