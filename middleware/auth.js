export default function ({ redirect, route }) {
  const jsonUser = localStorage.getItem('user')
  if(jsonUser) {
    const user = JSON.parse(jsonUser)
    if (!user.id && route.name !== 'login') redirect('login')
  }
}
