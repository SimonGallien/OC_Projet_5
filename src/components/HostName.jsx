import '../styles/HostName.css'

function HostName({ name }) {
  // Diviser le nom et le prénom
  const [firstName, lastName] = name.split(' ') // Divise la chaîne en deux à partir de l'espace

  return (
    <div className="host__name">
      <span className="host__firstName">{firstName}</span>
      <span className="host__lastName">{lastName}</span>
    </div>
  )
}

export default HostName
