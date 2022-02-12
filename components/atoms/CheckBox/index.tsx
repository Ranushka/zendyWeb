import classnames from 'classnames'

type Props = {
  label?: string
  name?: string
  checked?: boolean
  id: string
  value?: string
  className?: string
  onChange?: Function
}

const CheckBox: React.FC<Props> = ({
  label,
  name,
  checked = false,
  id,
  value,
  className,
  onChange = () => {},
}) => {
  return (
    <div className={classnames('checkbox', className && className)}>
      <input
        className={'input__hide'}
        type="checkbox"
        checked={checked}
        name={name}
        id={id}
        value={value}
        onChange={() => onChange()}
      />

      <label htmlFor={id}>
        <div />
        {name && <span className="labelText">{label}</span>}
      </label>
    </div>
  )
}

export default CheckBox
