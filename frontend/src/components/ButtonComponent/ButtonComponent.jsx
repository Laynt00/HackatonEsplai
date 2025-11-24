import "./ButtonComponent.css"

export const ButtonComponent = ({children, onClick}) => {
  return (
    <div className="ButtonComponent" onClick={onClick}>
        {children}
    </div>
  )
}
