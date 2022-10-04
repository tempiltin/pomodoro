export const Login = (props) => <input
    type={props.type}
    name={props.name}
    id={props.id}
    placeholder={props.plasholder}
    value={props.inpValue}
    onChange={(e)=> props.setInpValue(e.target.value)}
/>