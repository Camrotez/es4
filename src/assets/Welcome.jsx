import Age from "./Age"
function Welcome(props) {
  return (
    <div>
      <p>Welcome {props.name}</p>
      <Age prova2 = {props.prova}/>
    </div>
  )
}

export default Welcome
