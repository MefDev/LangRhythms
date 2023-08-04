function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

export default formatDate
