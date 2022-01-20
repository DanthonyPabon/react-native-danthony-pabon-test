import Styled from 'styled-components/native';

import colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import { deviceSizeScale } from '../../utils/devices';

const Bold18Text = Styled.Text`
  font-family: ${Fonts.bold};
  font-size: ${18 * deviceSizeScale}px;
  line-height: ${19 * deviceSizeScale}px;
  color: ${colors.grey};
`;

export default Bold18Text;
