export const Circle = ({ size = 24, color = '#FFFFFF', classList = '', children }) => {
  const styles = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
  }
  return (
    <span className={`flex items-center justify-center border-round ${classList}`} style={styles}>
      {children}
    </span>
  )
}

export default Circle
