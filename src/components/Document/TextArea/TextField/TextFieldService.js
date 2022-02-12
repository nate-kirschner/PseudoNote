export {
    handleCodeFormatting
}

function handleCodeFormatting(value, letter) {
    let spaces = [-1];
    value.forEach((val, index) => {
        if (val.props.value.props) {
            spaces = [...spaces, index]
        }
    })
    let index = value.length - 1;
    let lastWord = ""
    while (index > spaces[spaces.length - 1]) {
        lastWord += value[index].props.value
        index = index - 1;
    }
    lastWord = letter + lastWord
    lastWord = lastWord.split("").reverse().join("");
    const className = keywords[lastWord] || "";

    return {
        className: className,
        numLetters: lastWord.length,
    }
}

const keywords = {
    for: "for",
    if: "if",
    else: "else",
}