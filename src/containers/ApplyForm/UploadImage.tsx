import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { FlexRow, FormHeader, Input, InputWrapper, LinkPretender, Tooltip } from '../../components';
import { Info } from '../../Icons';
import firebase from '../../services/firebase';
import { colors } from '../../themes/colors';
import { OnChange } from './types';

interface IUploadImage {
    onChange: OnChange;
}

const UploadImage: React.FC<IUploadImage> = ({ onChange }) => {
    const hiddenFileInput = React.useRef(null);
    const [fileName, setFileName] = useState(null);
    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        hiddenFileInput.current.click();
        const file = e.target.files[0];
        setFileName(file.name);
        const imageURL = await firebase.uploadImage(file);
        onChange('imageURL', imageURL);
        toast.success('Image uploaded successfully!');
    };
    return (
        <InputWrapper>
            <FlexRow>
                <FormHeader>Upload profile image</FormHeader>
                <Tooltip multiline />
                <div
                    style={{ marginTop: '-6px' }}
                    data-tip="Image instruction<br /> Please provide image with 297px(width) on 195px(height) for best user experience">
                    <Info style={{ marginLeft: 10, cursor: 'pointer' }} color={colors.grey} />
                </div>
            </FlexRow>
            <input
                style={{ display: 'none' }}
                type="file"
                ref={hiddenFileInput}
                onChange={onFileChange}
                accept="image/x-png,image/jpeg"
            />
            <div>
                <Input
                    style={{ position: 'fixed', width: 392 }}
                    value={undefined}
                    onChange={null}
                    placeholder={null}
                />
                <LinkPretender
                    onClick={handleClick}
                    style={{
                        position: 'absolute',
                        marginTop: 22,
                        marginLeft: 10,
                        fontWeight: 600
                    }}>
                    Upload image
                </LinkPretender>
                <FormHeader
                    style={{
                        position: 'absolute',
                        marginTop: 22,
                        marginLeft: Number.isInteger(fileName?.length)
                            ? 315 - fileName?.length
                            : 315
                    }}>
                    {fileName}
                </FormHeader>
            </div>
        </InputWrapper>
    );
};
export default UploadImage;
