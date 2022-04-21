import './button.css'
type Props = {
    color?: string;
    label: string
  }
const Button: React.FC<Props> = ({color, label}: Props) => { 
    return ( 
        <div>
            <button className={color === 'primary' ? 'primary medium' : 'secondary small dark'} >{label}</button>
        </div>
    )
}
export default Button;