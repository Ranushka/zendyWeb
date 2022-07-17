export function setPrevPage() {
  localStorage.setItem('prevPage', location.pathname)
}

export function clearPrevPage() {
  localStorage.setItem('prevPage', null)
}

export function getPrevPage() {
  return localStorage.getItem('prevPage')
}
