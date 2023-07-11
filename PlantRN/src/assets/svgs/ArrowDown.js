import * as React from 'react';
import Svg, {Path, G, Rect, Defs, ClipPath} from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}>
      <Path d="M5.974 1.893v8.214M2.614 6.747l3.36 3.36 3.36-3.36" />
    </G>
  </Svg>
);
export default SvgComponent;
