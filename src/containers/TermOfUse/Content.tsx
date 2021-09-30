import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';

import { Li, ProHeader } from '../../components';
import { useWindowSize } from '../../hooks';
import { style as scrollbarsStyle } from '../../styles/scrollbars';

interface IContent {
    style?: React.CSSProperties;
}
const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};

const Content: React.FC<IContent> = ({ style }) => {
    const [, height] = useWindowSize();
    const general = [
        'We grant you permission to use our Site and other digital assets , provided that you comply with these Terms.',
        'We reserve the right, at our discretion, to change or terminate our Terms at any time. ',
        'The Site is open for use only for individuals aged sixteen (16) years or older.',
        'You are not allowed to copy, distribute, mirror, frame or modify any part of the Site Content or Marks without our prior written approval. ',
        'The content on the Site, including without limitation, the text, documents, articles, Dashboards, photos and everything related to user interfaces, belong to TopiPro and protected by applicable copyright and/ or other intellectual property laws.'
    ];
    const concept = [
        'Top-iPro highlights and brings to the front , the upper level of iPro’s - independent Professionals  ( The uppermost piece of service providers segment).  We select iPro’s according to their Social and SPOQ Identity . Our platform helps iPro’s and their potential customers – in finalizing a fruitful engagement.',
        'We use a unique conceptual technology to create a SPOQ index for each service provider. SPOQ – Social Proof Of Quality refers to social presence and people’s reviews, recommendations, shared experiences and post purchase feedback.                               Our engine builds a SPOQ Index for each Independent Professionals (IPRO) and allows you to follow the monthly list of Top IPROs according to their SPOQ performance.       Our engine checks service provider’s SPOQ performance on a regular basis and provides you with a list of the best options for the relevant category . ',
        'We also allow iPro’s / freelancers to apply to our Top List by using our unique application process',
        'TopiPro site and apps provide you with links to, and also use content from Third party sources that are not owned or controlled by us and are connected to our company . we enable you to connect with third party companies , freelancers and Independent professionals but we have no control over these third parties and cannot assure the quality of their content and services.  ',
        'We  have no responsibility for third party’s content, privacy policies, actions or practices and/ or terms of use. We are not responsible and cannot be reliable for such content and information  accuracy, appropriateness, safety, or Intellectual Property Rights.',
        'Our site and app may contain third party content and information that is inaccurate, offensive and  indecent. You can decide if you want to interact with any third party on this site or not. You hold and have fully responsibility and liability for interacting with any third party on this site. ',
        'We act as a recommendation engine and we shall not be responsible or liable and do not guarantee the quality, and condition of services and works that are appear or being recommended on our site. ',
        'We do not provide any guarantee of the level of service offered buy service providers to Buyers'
    ];
    const rules = [
        'This site acts as an Index / recommendation engine and publishes top iPros according to their Social presence and feedback. If you are part of our Top iPros list and would like us to remove your card/ name/ dashboard you should contact us by this mail : business@topipro.com, your details will be removed from the site within 3 business days.',
        'We reserve the right, at our sole discretion, to change iPros list and/ or to add or remove any ipro/freelancer from our site for any reason , at any time',
        'We enable iPros / freelancers to apply / send a submission for our Top List .By sharing and publishing your details and content you acknowledge that we can use your information as part of this site, as well as part of our promotion and community activities on any platform. We do not guarantee any confidentiality with respect to any of your user information and shared content.  . You shall be solely responsible for your User Submissions and the consequences of posting, publishing or uploading them to our site. ',
        'You agree that you will not display, post, submit, publish, or upload any content and/ information that deceptive under the consumer protection laws of any jurisdiction and/ or is protected by trade secret or otherwise subject to third party proprietary rights, unless you are the owner of such rights and/or creates a risk to people safety or health and/ or  promotes, or support or endorse illegal drugs, illegal gambling, or any other illegal activity. ',
        'his site users acknowledge that TopiPro is not responsible for any inaccurate, offensive, indecent, or objectionable content or information that is or will be included in this site.    You hereby agree to waive and hereby do waive, any legal or equitable rights or remedies you may have against TopiPro.  ',
        'Please send us an email (business@topipro.com )if you would like to report regarding any Content you believe violates your Intellectual Property. ',
        'You are solely responsible and liable for the use of this site and your use of third party websites and any content that you may send or post to a third party website. '
    ];
    const limitation = [
        'TopiPro shell not be liable for ant indirect , direct or incidental damages of any kind or for any loss of data, revenues, profits or reputation  Raising out of your use of this sites and/or inability to use It.',
        "You agree to defend, indemnify and hold harmless TopiPro and our partners , and our officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs and expenses(including but not limited to attorney's fees) arising from your use of, or inability to use the site and/ or your User Submissions and/ or  your interaction with any third party sites and other users of this site.",
        'You and TopiPro don’t have any contractual relations. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between you and TopiPro'
    ];
    return (
        <>
            <Mobile>
                <div>
                    <Scrollbars
                        style={{ height: 500, width: 460 }}
                        hideTracksWhenNotNeeded
                        renderThumbVertical={({ ...props }) => (
                            <div {...props} style={scrollbarsStyle} />
                        )}>
                        <ProHeader>General Instructions</ProHeader>
                        <ul>
                            {general.map((g, index) => (
                                <Li key={index}>{g}</Li>
                            ))}
                        </ul>
                        <ProHeader>Platform’s concept - usage terms/ rules </ProHeader>
                        <ul>
                            {concept.map((g, index) => (
                                <Li key={index}>{g}</Li>
                            ))}
                        </ul>
                        <ProHeader>
                            Platform’s rules for iPros/ freelancers/ Service providers
                        </ProHeader>
                        <ul>
                            {rules.map((g, index) => (
                                <Li key={index}>{g}</Li>
                            ))}
                        </ul>
                        <ProHeader>Limitation of Liability & Indemnity </ProHeader>
                        <ul>
                            {limitation.map((g, index) => (
                                <Li key={index}>{g}</Li>
                            ))}
                        </ul>
                    </Scrollbars>
                </div>
            </Mobile>
            <Desktop>
                <div style={style}>
                    <Scrollbars
                        style={{ height: height < 850 ? '75vh' : '80vh', width: 970 }}
                        hideTracksWhenNotNeeded
                        renderThumbVertical={({ ...props }) => (
                            <div {...props} style={scrollbarsStyle} />
                        )}>
                        <ProHeader>General Instructions</ProHeader>
                        <ul>
                            {general.map((g, index) => (
                                <Li key={index}>{g}</Li>
                            ))}
                        </ul>
                        <ProHeader>Platform’s concept - usage terms/ rules </ProHeader>
                        <ul>
                            {concept.map((g, index) => (
                                <Li key={index}>{g}</Li>
                            ))}
                        </ul>
                        <ProHeader>
                            Platform’s rules for iPros/ freelancers/ Service providers
                        </ProHeader>
                        <ul>
                            {rules.map((g, index) => (
                                <Li key={index}>{g}</Li>
                            ))}
                        </ul>
                        <ProHeader>Limitation of Liability & Indemnity </ProHeader>
                        <ul>
                            {limitation.map((g, index) => (
                                <Li key={index}>{g}</Li>
                            ))}
                        </ul>
                    </Scrollbars>
                </div>
            </Desktop>
        </>
    );
};
export default Content;
