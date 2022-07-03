export function applyTheme(data) {
  try {
    var d = document.documentElement
    var e = data || getTheme()

    d.setAttribute('data-theme', e)
  } catch (t) {
    console.error('Theme apply fail');
  }
}

export function saveTheme(data) {
  try {
    window.localStorage.setItem('theme', data)
  } catch (t) {
    console.error('Theme save fail');
  }
}

export function getTheme() {
  const data = localStorage.getItem('theme') || 'Light'

  return data
}
