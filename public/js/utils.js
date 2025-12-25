// Returns the specified amount concatenated with
// the word passed in the singular form
// inflected in number accordingly (default behavior).
// If include_amount is set to false the return will
// be just the inflected word. 
function inflectedAmountString(amount, word, include_amount = true) {
    return `${include_amount ? amount + " " : ""}${amount === 1 ? word : word + "s"}`; 
}

module.exports = {
    inflectedAmountString
}