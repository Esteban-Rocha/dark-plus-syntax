module.exports = [
    {
        scope: [
            "keyword.operator.assignment.go",
            "keyword.operator.arithmetic.go",
            "keyword.operator.comparison.go",
            "keyword.operator.address.go",
            "punctuation.other.colon.go",
            "punctuation.other.period.go",
            "keyword.control.gotemplate",
        ],
        settings: {
            "foreground": "#c586c0"
        }
    },
    {
        scope: [
            "string.quoted.double.gotemplate"
        ],
        settings: { "foreground": "#ce9178" }
    },
    {
        scope: [
            "storage.type.string.go",
            "storage.type.numeric.go",
            "storage.type.boolean.go",
        ],
        settings: {
            "foreground": "#4ec9b0",
            // "fontStyle": "italic"
        }
    },
    {
        scope: "constant.character.escape.go",
        settings: {
            "foreground": "#d7ba7d"
        }
    },
    {
        scope: "entity.name.package.go",
        settings: {
            "foreground": "#9cdcfe"
        }
    },
    {
        scope: "constant.other.placeholder.go",
        settings: {
            "foreground": "#569cd6"
        }
    },
    // Templates
    {
        scope: [
            "punctuation.section.embedded.begin.gotemplate",
            "punctuation.section.embedded.end.gotemplate",
        ],
        settings: {
            "foreground": "#4ec9b0"
        }
    },
    {
        scope: [

        ],
        settings: {
            "foreground": "#9cdcfe"
        }
    },

]
