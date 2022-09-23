export default function ({ redirect, route }) {
  const cardId = localStorage.getItem('cardId') || ''
  if (cardId && route.name === 'login') redirect('profile')
  if (!cardId && route.name !== 'login') redirect('login')
}
