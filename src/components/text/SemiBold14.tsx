import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import { deviceSizeScale } from '../../utils/devices';

const SemiBold14Text = Styled.Text`
  font-family: ${Fonts.semiBold};
  font-size: ${14 * deviceSizeScale}px;
  line-height: ${17 * deviceSizeScale}px;
  color: ${colors.grey10}
`;

export default SemiBold14Text;
