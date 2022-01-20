import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../colors';
import { SvgProps } from 'react-native-svg';

const ArrowLeft: FC<SvgProps> = ({ fill = colors.black }) => (
  <Svg width={800} height={600}>
    <Path
      d="M35.96 19.443v2.026q0 .838-.514 1.431-.514.594-1.337.594H22.971l4.635 4.651q.602.57.602 1.424 0 .855-.602 1.424l-1.186 1.203q-.586.585-1.424.585-.823 0-1.44-.585l-10.3-10.316q-.585-.585-.585-1.424 0-.823.585-1.44l10.3-10.284q.601-.601 1.44-.601.822 0 1.424.601l1.186 1.17q.602.602.602 1.44 0 .84-.602 1.44l-4.635 4.636h11.138q.823 0 1.337.593.514.594.514 1.432z"
      fill={fill}
      strokeWidth={0.01582}
    />
  </Svg>
);

export default ArrowLeft;
