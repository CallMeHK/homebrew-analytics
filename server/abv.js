
const simple = (og, fg) => {
    try {
        if (fg > og) {
            return null
        }
        return (og - fg) * 131.25
    } catch (e) {
        return null
    }
}

const complex = (og, fg) => {
    try {
        if (fg > og) {
            return null
        }
        return (76.08 * (og - fg) / (1.775 - og)) * (fg / 0.794)
    } catch (e) {
        return null
    }
}

module.exports = {
    simple, complex
}