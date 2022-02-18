export function applyFontSize(data) {
    try {
        var d = document.documentElement;
        var e = data || getFontSize();
        
        d.setAttribute("data-font-size", e);
       
    } catch (t) {}   
}

export function saveFontSize(data) {
    try {
        window.localStorage.setItem('fontSize', data)
    } catch (t) {}   
}

export function getFontSize() {
    return localStorage.getItem("fontSize") || "Medium";
}
