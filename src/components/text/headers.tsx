import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import { deviceSizeScale } from '../../utils/devices';

const HeaderText = Styled.Text`
  font-family: ${Fonts.bold};
  font-size: ${24 * deviceSizeScale}px;
  line-height: ${29 * deviceSizeScale}px;
  color: ${colors.black}
`;

export default HeaderText;
