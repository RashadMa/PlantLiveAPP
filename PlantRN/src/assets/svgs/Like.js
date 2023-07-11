import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Like = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={24} height={24} fill="#fff" rx={6} />
    <Path
      stroke="#BFC2C8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.467}
      d="M17.075 7.972a3.153 3.153 0 0 0-1.025-.72 3.025 3.025 0 0 0-2.417 0 3.152 3.152 0 0 0-1.025.72l-.608.64-.609-.64A3.082 3.082 0 0 0 9.158 7c-.837 0-1.64.35-2.233.972A3.407 3.407 0 0 0 6 10.32c0 .88.333 1.725.925 2.347l.609.64L12 18l4.466-4.694.609-.64c.293-.308.526-.674.684-1.076a3.465 3.465 0 0 0 0-2.54 3.336 3.336 0 0 0-.684-1.078v0Z"
    />
  </Svg>
)
export default Like
