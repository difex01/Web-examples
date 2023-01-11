interface Props {
  label: string;
  handleClick?: () => void;
  coolClass?: string;
}

function ButtonCool(props: Props) {

  const { label, handleClick, coolClass } = props;

  return (
    <button className={coolClass} onClick={handleClick}>{label}</button>
  )
}

export default ButtonCool
