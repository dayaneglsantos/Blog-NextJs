export const formatDate = (receivedDate: string) => {
  const date = new Date(receivedDate).toLocaleString('pt-BR', {
    timeStyle: 'short',
    dateStyle: 'short'
  })
  return date
}
