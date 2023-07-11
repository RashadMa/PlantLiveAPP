import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Star = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFBB56"
      d="M6.022 1.546a.5.5 0 0 1 .956 0l.948 3.067a.5.5 0 0 0 .477.353h3.119a.5.5 0 0 1 .303.897L9.26 7.823a.5.5 0 0 0-.174.545l.97 3.137a.5.5 0 0 1-.782.545l-2.47-1.887a.5.5 0 0 0-.608 0l-2.47 1.887a.5.5 0 0 1-.781-.545l.97-3.137a.5.5 0 0 0-.175-.545l-2.565-1.96a.5.5 0 0 1 .303-.897h3.119a.5.5 0 0 0 .477-.353l.948-3.067Z"
    />
  </Svg>
)
export default Star
