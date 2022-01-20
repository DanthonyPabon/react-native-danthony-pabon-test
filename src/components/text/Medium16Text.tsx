import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import { deviceSizeScale } from '../../utils/devices';

const Medium16Text = Styled.Text`
  font-family: ${fonts.medium};
  font-size: ${16 * deviceSizeScale}px;
  line-height: ${24 * deviceSizeScale}px;
  color: ${colors.grey}
`;

export default Medium16Text;
