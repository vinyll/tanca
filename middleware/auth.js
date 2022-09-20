export default function ({ redirect, route }) {
  const jsonUser = localStorage.getItem('user') || '{}'
  const user = JSON.parse(jsonUser)
  if (!user.id && route.name !== 'login') redirect('login')
}
