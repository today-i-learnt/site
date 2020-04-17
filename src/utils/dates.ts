export function formatDateForTitle(dateStr: string) {
  if (!dateStr) {
    return ''
  }

  return new Date(dateStr).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateForMeta(dateStr: string) {
  if (!dateStr) {
    return ''
  }

  return new Date(dateStr).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
