import styled from '@emotion/styled';
import React from 'react';
import { createPortal } from 'react-dom';

import { useEscapeKey } from '../hooks';
import { CloseButton, FlexRow, TitleBold } from '.';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;
const Data = styled.section`
    position: fixed;
    background: white;
    width: 50%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Footer = styled.div`
    margin-top: 128px;
`;

interface IModal {
    show: boolean;
    handleClose: () => void;
    title: string;
    footer?: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({ title, handleClose, show, children, footer }) => {
    useEscapeKey({ callback: handleClose, dependency: show });
    return show
        ? createPortal(
              <Wrapper>
                  <Data>
                      <div style={{ margin: '43px 50px 42px 50px' }}>
                          <FlexRow style={{ marginBottom: 30 }}>
                              <TitleBold>{title}</TitleBold>
                              <CloseButton
                                  onClick={handleClose}
                                  style={{ marginLeft: 'auto', marginTop: 5 }}
                              />
                          </FlexRow>
                          {children}
                          <Footer>{footer}</Footer>
                      </div>
                  </Data>
              </Wrapper>,
              document.getElementById('modal-root')
          )
        : null;
};
