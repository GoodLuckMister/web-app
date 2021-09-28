import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useImmer } from 'use-immer';
import { v4 as uuidv4 } from 'uuid';

import {
    ActionLinkPretender,
    CheckboxWithLabel,
    FlexRow,
    PrimaryButton,
    Sidebar,
    Stepper
} from '../../components';
import { Loader } from '../../components';
import { useUIStore } from '../../contexts/UIContext';
import { useUser } from '../../hooks';
import { urlToSocialApp } from '../../libs/social';
import { calculateSPOQ, getNormalizedScore } from '../../libs/spoq';
import firebase from '../../services/firebase';
import { Link, SocialMedia as SocialMediaType } from '../../types/api';
import Message from '../Message';
import TermOfUseContent from '../TermOfUse/Content';
import ClientReviews from './ClientReviews';
import { messages } from './consts';
import { prepOnLinePresence, prepSocialMedia } from './lib';
import OnLinePresence from './OnLinePresence';
import Overview from './Overview';
import PersonalDetails from './PersonalDetails';
import SocialMedia from './SocialMedia';
import {
    AddUserData,
    ApplySections,
    CreateIProRequest,
    EditableID,
    getBackSection,
    getIndex,
    getNextSection,
    isFirst,
    isLast,
    Reviewed,
    SidebarSections
} from './types';
import { isNextAvailable } from './validation';

const width = 935;
const initialUser: AddUserData = {
    id: uuidv4(),
    name: '',
    country: '',
    email: '',
    language: '',
    phoneNumber: '',
    imageURL: '',
    category: '',
    type: '',
    overview: ''
};

const ApplyForm: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const user = useUser();
    const uiStore = useUIStore();
    const [loading, setLoading] = useState(false);
    const [terms, setCheckboxTerms] = useState(false);
    const [activeSidebarSection, setActiveSidebarSection] = useState(SidebarSections.Form);
    const [activeSection, setActiveSection] = useState(ApplySections.PersonalDetails);
    const [userData, setUserData] = useImmer<AddUserData>({
        ...initialUser,
        name: user?.displayName,
        email: user?.email
    });
    const [socialMedia, updateSocialMedia] = useImmer<SocialMediaType[]>([
        {
            id: Date.now(),
            link: '',
            numberOfFollowers: '' as unknown as number,
            socialNetwork: null
        }
    ]);
    const [personalWebsite, updatePersonalWebsite] = useImmer<Link>({
        id: Date.now(),
        link: '',
        numberOfReviews: '' as unknown as number,
        score: '' as unknown as number
    });
    const [onlinePresence, updateOnlinePresence] = useImmer<Link[]>([
        {
            id: Date.now(),
            link: '',
            numberOfReviews: '' as unknown as number,
            score: '' as unknown as number
        }
    ]);
    const [reviews, updateReviews] = useImmer<Reviewed[]>([
        { id: EditableID, description: '', source: '' }
    ]);
    const [message, setMessage] = useState(messages.success);
    useEffect(() => {
        setUserData((draft) => {
            draft.email = user?.email;
            draft.name = user?.displayName;
        });
    }, [user, setUserData]);
    const onChangeUserData = <T extends keyof AddUserData>(target: T, value: AddUserData[T]) => {
        setUserData((draft) => {
            draft[target] = value;
        });
    };
    const addLinkToOnlinePre = () => {
        updateOnlinePresence((draft) => {
            draft.push({
                id: Date.now(),
                link: '',
                numberOfReviews: '' as unknown as number,
                score: '' as unknown as number
            });
        });
    };
    const onUpdatePersonalWebsite =
        (target: keyof Link) => (link: Link, value: string | number) => {
            updatePersonalWebsite((draft) => {
                draft[target as any] = value;
            });
        };
    const onUpdateLinks = (target: keyof Link) => (link: Link, value: string | number) => {
        updateOnlinePresence((draft) => {
            const index = draft.findIndex((c) => c.id === link.id);
            draft[index] = { ...link, [target]: value };
        });
    };
    const addSocialMedia = () => {
        updateSocialMedia((draft) => {
            draft.push({
                id: Date.now(),
                link: '',
                numberOfFollowers: '' as unknown as number,
                socialNetwork: null
            });
        });
    };
    const onUpdateSocialMedia =
        (target: keyof SocialMediaType) => (sm: SocialMediaType, value: string | number) => {
            updateSocialMedia((draft) => {
                const index = draft.findIndex((c) => c.id === sm.id);
                draft[index] = {
                    ...sm,
                    [target]: value,
                    socialNetwork: urlToSocialApp(draft[index]?.link)
                };
            });
        };
    const addReview = () => {
        updateReviews((draft) => {
            const index = draft.findIndex((c) => c.id === EditableID);
            draft[index].id = Date.now();
            draft.push({
                id: EditableID,
                description: '',
                source: ''
            });
        });
    };
    const onUpdateReview =
        (target: keyof Reviewed) => (review: Reviewed, value: string | number) => {
            updateReviews((draft) => {
                const index = draft.findIndex((c) => c.id === review.id);
                draft[index] = { ...review, [target]: value };
            });
        };
    const sections: Record<ApplySections, React.ReactNode> = {
        [ApplySections.PersonalDetails]: (
            <PersonalDetails formData={userData} onChange={onChangeUserData} />
        ),
        [ApplySections.Overview]: <Overview onChange={onChangeUserData} data={userData} />,
        [ApplySections.OnLinePresence]: (
            <OnLinePresence
                onChange={onUpdateLinks}
                onAddLink={addLinkToOnlinePre}
                data={onlinePresence}
                onPersonalChange={onUpdatePersonalWebsite}
                personal={personalWebsite}
            />
        ),
        [ApplySections.SocialMedia]: (
            <SocialMedia
                onChange={onUpdateSocialMedia}
                onAddLink={addSocialMedia}
                data={socialMedia}
            />
        ),
        [ApplySections.ClientReviews]: (
            <ClientReviews reviews={reviews} onChange={onUpdateReview} onAddReview={addReview} />
        )
    };

    const onNextClick = () => {
        if (isLast(activeSection)) {
            setActiveSidebarSection(SidebarSections.TermOfUse);
        } else {
            setActiveSection(getNextSection(activeSection));
        }
    };
    const onApprove = async () => {
        try {
            setLoading(true);
            const _socialMedia = prepSocialMedia(socialMedia);
            const _onLinePresence = prepOnLinePresence([personalWebsite, ...onlinePresence]);
            const _reviews = reviews.filter((r) => r.description);
            const obj: CreateIProRequest = {
                ...userData,
                socialMedia: _socialMedia,
                onLinePresence: _onLinePresence,
                reviews: _reviews,
                isActive: true, //TODO: should change on prod
                score: getNormalizedScore(_onLinePresence),
                spoq: calculateSPOQ({
                    social: _socialMedia,
                    reviews: _reviews,
                    links: _onLinePresence
                })
            };
            await firebase.createIPro(obj);
            setActiveSidebarSection(SidebarSections.Message);
            toast.success('New iPro has been created');
        } catch (err) {
            setMessage({
                ...messages.error,
                message: err?.message
            });
            setActiveSidebarSection(SidebarSections.Message);
            toast.error('Something went wrong :( ');
        } finally {
            setLoading(false);
        }
    };
    const onDoneClick = () => {
        uiStore.setSidebar(null);
    };
    const actions = (
        <FlexRow>
            <ActionLinkPretender
                disabled={isFirst(activeSection)}
                onClick={() => setActiveSection(getBackSection(activeSection))}
                style={{ marginRight: 32 }}>
                Back
            </ActionLinkPretender>
            <PrimaryButton
                onClick={onNextClick}
                disabled={
                    !isNextAvailable({
                        step: activeSection,
                        userData,
                        onlinePresence: prepOnLinePresence([personalWebsite, ...onlinePresence]),
                        socialMedia: prepSocialMedia(socialMedia),
                        reviews: reviews.filter((r) => r.description)
                    })
                }>
                Next
            </PrimaryButton>
        </FlexRow>
    );
    const termActions = (
        <FlexRow>
            <CheckboxWithLabel
                label="I have read and agree to the terms of use"
                checked={terms}
                onChange={() => setCheckboxTerms(!terms)}
                style={{ position: 'fixed', left: 48 }}
            />
            {loading && <Loader />}
            <ActionLinkPretender
                onClick={() => setActiveSidebarSection(SidebarSections.Form)}
                style={{ marginRight: 32 }}>
                Back
            </ActionLinkPretender>
            <PrimaryButton onClick={onApprove} disabled={!terms}>
                Approve
            </PrimaryButton>
        </FlexRow>
    );
    const messageActions = <PrimaryButton onClick={onDoneClick}>Done</PrimaryButton>;
    const sidebarSections: Record<
        SidebarSections,
        { content: React.ReactNode; title: string; actions?: React.ReactNode }
    > = {
        [SidebarSections.Form]: {
            content: (
                <>
                    <Stepper
                        titles={Object.values(ApplySections)}
                        activeIndex={getIndex(activeSection)}
                        width={width}
                    />
                    <div style={{ marginTop: 25, width }}>{sections[activeSection]}</div>
                </>
            ),
            title: 'Apply for TopiPro',
            actions: actions
        },
        [SidebarSections.TermOfUse]: {
            title: 'Please approve the Terms of Use',
            actions: termActions,
            content: <TermOfUseContent />
        },
        [SidebarSections.Message]: {
            title: message.title,
            actions: messageActions,
            content: <Message message={message.message} />
        }
    };
    return (
        <Sidebar
            isOpen={isOpen}
            title={sidebarSections[activeSidebarSection].title}
            actions={sidebarSections[activeSidebarSection].actions}
            onClose={() => uiStore.setSidebar(null)}>
            {sidebarSections[activeSidebarSection].content}
        </Sidebar>
    );
};
export default ApplyForm;
