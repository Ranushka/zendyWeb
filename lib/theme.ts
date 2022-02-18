export function applyTheme(data) {
    try {
        var d = document.documentElement;
        var e = data || getTheme();
        
        d.setAttribute("data-theme", e);
       
    } catch (t) {}   
}

export function saveTheme(data) {
    try {
        window.localStorage.setItem('theme', data)
    } catch (t) {}   
}

export function getTheme() {
    return localStorage.getItem("theme") || "Light";
}
