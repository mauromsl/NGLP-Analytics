export function extractPalette(sheetName, paletteSelector) {
    if (!paletteSelector) {
        paletteSelector = "#palette"
    }

    let palette = {};
    for (let i = 0; i < document.styleSheets.length; i++) {
        let sheet = document.styleSheets[i];
        if (sheet.href && sheet.href.includes(sheetName)) {
            for (let j = 0; j < sheet.rules.length; j++) {
                let rule = sheet.rules[j];
                if (rule.selectorText && rule.selectorText.startsWith(paletteSelector + " ")) {
                    let key = rule.selectorText.substring(paletteSelector.length + 2);
                    palette[key] = rule.style.color;
                }
            }
        }
    }
    return palette;
}