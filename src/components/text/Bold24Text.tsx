import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import { deviceSizeScale } from '../../utils/devices';

const Bold24Text = Styled.Text`
  font-family: ${fonts.bold};
   font-size: ${24 * deviceSizeScale}px;
  line-height: ${29 * deviceSizeScale}px;
  display: flex;
  color: ${colors.black}
`;

export default Bold24Text;
