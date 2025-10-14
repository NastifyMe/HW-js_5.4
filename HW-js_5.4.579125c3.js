const keyDisplay = document.getElementById('key');
const keys = [
    'a',
    'f',
    'o',
    ';',
    's',
    'g',
    'd',
    'j',
    'l',
    '.'
];
let currentKeyIndex = 0;
const keyUpdate = ()=>{
    keyDisplay.textContent = keys[currentKeyIndex];
};
keyUpdate();
document.addEventListener('keydown', (e)=>{
    const currentKey = e.key;
    if (currentKey === keys[currentKeyIndex]) {
        currentKeyIndex++;
        if (currentKeyIndex >= keys.length) {
            PNotify.success({
                text: "\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438! \uD83C\uDF89",
                delay: 2000
            });
            currentKeyIndex = 0;
        }
        keyUpdate();
    } else PNotify.error({
        text: `\u{41F}\u{43E}\u{43C}\u{438}\u{43B}\u{43A}\u{430}! \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{443}\u{442}\u{43E} "${currentKey}", \u{43F}\u{43E}\u{442}\u{440}\u{456}\u{431}\u{43D}\u{43E} "${keys[currentKeyIndex]}"`,
        delay: 2000
    });
});
document.addEventListener('keypress', (e)=>{
    e.preventDefault();
});

//# sourceMappingURL=HW-js_5.4.579125c3.js.map
