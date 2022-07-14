export function applyFontSize(data) {
    try {
        var d = document.documentElement;
        var e = data || getFontSize();
        
        d.setAttribute("data-font-size", e);
       
    } catch (t) {
        console.error('FontSize apply fail');
    }   
}

export function saveFontSize(data) {
    try {
        window.localStorage.setItem('fontSize', data)
    } catch (t) {
        console.error('FontSize save fail');
    }   
}

export function getFontSize() {
    return localStorage.getItem("fontSize") || "Medium";
}
