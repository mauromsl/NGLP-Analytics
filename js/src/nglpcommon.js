export function extractPalette(sheetName) {
    let palette = {
        investigation: false,
        export: false,
        request: false
    }
    for (let i = 0; i < document.styleSheets.length; i++) {
        let sheet = document.styleSheets[i];
        if (sheet.href && sheet.href.includes(sheetName)) {
            for (let j = 0; j < sheet.rules.length; j++) {
                let rule = sheet.rules[j];
                if (rule.selectorText === "#palette #investigations") {
                    palette.investigation = rule.style.background;
                } else if (rule.selectorText === "#palette #exports") {
                    palette.export = rule.style.background;
                } else if (rule.selectorText === "#palette #requests") {
                    palette.request = rule.style.background;
                }
            }
        }
    }
    return palette;
}