export default function ({ redirect, route }) {
  const userId = localStorage.getItem('userId') || ''
  if (userId && route.name === 'login') redirect('profile')
  if (!userId && route.name !== 'login') redirect('login')
  
}
