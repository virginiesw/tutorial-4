import React from 'react';

import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title: "Custom Button",
    component: CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <Header
        fontSize={15}
        color="#999"
        onMouseOver={CancelClick}
    />
    <Header
        fontSize={25}
        color="#3F5"
        onMouseOver={OkClick}
    />
    <Header
        fontSize={35}
        color="#F3F"
        onMouseOver={SubmitClick}
    />
    <Header
        fontSize={45}
        color="#DAB"
    />
    <CustomButton
        color="#999"
        text="Cancel"
        onClick={CancelClick}
    />
    <CustomButton
        color="#3F5"
        text="OK"
        onClick={OkClick}
    />
    <CustomButton
        color="#F3F"
        text="Submit"
        onClick={SubmitClick}
    />
    <CustomButton
        text="Menu" />
</div>

function CancelClick() {
    alert("Cancel");
}

function OkClick() {
    alert("OK");
}

function SubmitClick() {
    alert("Submit");
}
