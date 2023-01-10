import {ButtonComp} from "./ButtonStyle"

const Button = ({ type, onClick, primary, children, fullWidth }) => {
  return (
    <ButtonComp type={type} onClick={onClick} primary={primary} fullWidth={fullWidth}>
      {children}
    </ButtonComp>
  );
};
export default Button;
