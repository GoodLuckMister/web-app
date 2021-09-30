import styled from '@emotion/styled';
import React from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';

import { colors } from '../themes/colors';
import { CloseButton, FlexRow, TitleBold } from '.';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;
const Container = styled.div`
    height: 100% !important;
    display: flex;
    flex-direction: column;
    border-right: 1px solid;
    padding: 43px 50px 41px 50px;
    border-radius: 0;
    transition: 1.2s ease;
    width: 970px;
    background-color: ${colors.paleLilac};
    position: fixed;
    top: 0;
    right: 0;
`;
const ContainerMobile = styled.div`
    height: 100% !important;
    display: flex;
    flex-direction: column;
    border-right: 1px solid;
    border-radius: 0;
    transition: 1.2s ease;
    width: 970px;
    background-color: ${colors.paleLilac};
    position: fixed;
    top: 0;
    right: 0;
`;
const Actions = styled.div`
    position: fixed;
    right: 50px;
    bottom: 110px;
`;
interface ISidebar {
    width?: number;
    isOpen: boolean;
    title: string;
    actions?: React.ReactNode;
    onClose?: () => void;
}
const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};

export const Sidebar: React.FC<ISidebar> = ({
    width = 970,
    isOpen,
    title,
    children,
    actions,
    onClose
}) => {
    const [xPosition, setX] = React.useState(width);

    const toggleMenu = () => {
        if (xPosition < 0) {
            setX(0);
        } else {
            setX(width + 100);
            setTimeout(() => onClose(), 1000);
        }
    };

    React.useEffect(() => {
        setX(0);
    }, [isOpen]);
    return isOpen
        ? createPortal(
              <>
                  <Mobile>
                      <Wrapper>
                          <ContainerMobile
                              style={{
                                  transform: `translatex(${xPosition}px)`,
                                  width: '475px'
                              }}>
                              <FlexRow style={{ marginBottom: 10 }}>
                                  <TitleBold style={{ marginLeft: 10 }}>{title}</TitleBold>
                                  <CloseButton
                                      onClick={toggleMenu}
                                      style={{ marginLeft: 'auto', marginTop: 10, marginRight: 10 }}
                                  />
                              </FlexRow>
                              {children}
                              <Actions>{actions}</Actions>
                          </ContainerMobile>
                      </Wrapper>
                  </Mobile>
                  <Desktop>
                      <Wrapper>
                          <Container
                              style={{
                                  transform: `translatex(${xPosition}px)`,
                                  width
                              }}>
                              <FlexRow style={{ marginBottom: 30 }}>
                                  <TitleBold>{title}</TitleBold>
                                  <CloseButton
                                      onClick={toggleMenu}
                                      style={{ marginLeft: 'auto', marginTop: 5 }}
                                  />
                              </FlexRow>
                              {children}
                              <Actions>{actions}</Actions>
                          </Container>
                      </Wrapper>
                  </Desktop>
              </>,
              document.getElementById('sidebar-root')
          )
        : null;
};
