import styled from '@emotion/styled';
import React from 'react';
import { createPortal } from 'react-dom';

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
              </Wrapper>,
              document.getElementById('sidebar-root')
          )
        : null;
};
