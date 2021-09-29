import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../themes/colors';

export const assistant = css`
    font-family: Assistant;
    font-size: 1em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colors.darkBlueGrey};
`;
export const inter = css`
    font-family: Inter;
    font-size: 1em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
`;
export const poppins = css`
    font-family: Poppins;
    font-size: 1em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
`;
export const TitleBold = styled.div`
    ${assistant};
    font-weight: bold;
    font-size: 2em;
`;
export const SmallTitleBold = styled.div`
    ${assistant}
    font-size: 1.5em;
    font-weight: bold;
    color: ${colors.darkBlueGrey};
`;
export const Label = styled.div`
    ${assistant};
    color: ${colors.slateGrey};
`;
export const Li = styled.li`
    ${assistant};
    color: ${colors.slateGrey};
`;
export const LabelBold = styled.div`
    ${assistant};
    color: ${colors.fuchsia};
    font-weight: 600;
`;
export const Text = styled.div`
    ${inter};
`;
export const LargeText = styled.div`
    ${inter};
    font-size: 4em;
    font-weight: 900;
    color: ${colors.darkBlueGrey};
`;
export const LargeTextMobile = styled.div`
    ${inter};
    font-size: 4em;
    font-weight: 600;
    color: ${colors.darkBlueGrey};
`;
export const WelcomeText = styled.div`
    ${inter};
    font-size: 2.5em;
    color: ${colors.darkBlueGrey};
`;
export const SubLargeText = styled.div`
    ${inter};
    font-size: 1.25em;
    color: ${colors.slateGrey};
    line-height: 1.5;
`;
export const TextSemiBold = styled.div`
    ${inter};
    font-weight: 600;
`;
export const TextBold = styled.div`
    ${inter};
    font-weight: 800;
`;
export const TextDarkBlue = styled.div`
    ${inter};
    color: ${colors.darkBlueGrey};
`;
export const TextLightGrey = styled.div`
    ${inter};
    color: ${colors.slateGrey};
`;
export const TextGreyish = styled.div`
    ${inter};
    color: ${colors.greyish};
`;
export const ProHeader = styled.div`
    ${inter};
    color: ${colors.darkBlueGrey};
    font-weight: bold;
    font-size: 1.25em;
`;
export const TextGrey = styled.div`
    ${inter};
    color: ${colors.pinkishGrey};
`;
export const LinkPretender = styled.a<{ disabled?: boolean }>`
    ${assistant};
    font-size: 14px;
    cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
    color: ${colors.fuchsia};
    ${({ disabled }) => disabled && `color: ${colors.slateGrey};`}
`;
export const DivLinkPretender = styled.div<{ disabled?: boolean }>`
    ${assistant};
    font-size: 14px;
    cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
    color: ${colors.fuchsia};
    ${({ disabled }) => disabled && `color: ${colors.slateGrey};`}
`;
export const ActionLinkPretender = styled(LinkPretender)`
    color: ${colors.slateGrey};
`;
export const StepperLink = styled.div<{ active?: boolean }>`
    ${inter};
    font-size: 0.9em;
    color: ${colors.darkBlueGrey};
    ${({ active }) => active && `color: ${colors.fuchsia};`}
    ${({ active }) => active && `font-weight: 600;`}
`;
export const InputWrapperTitle = styled.div`
    ${poppins};
    font-size: 0.8em;
    color: ${colors.steel};
`;
export const Message = styled.div`
    ${inter};
    font-size: 2.5em;
    color: ${colors.blueyGrey};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
`;
