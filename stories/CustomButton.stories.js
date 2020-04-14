import React from 'react';

import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage'

export default {
    title: "My comps",
    component: CustomButton
};

export const MyCutsomButton = () => <CustomButton />;

function CancelClick() {
    alert("Cancel");
}

export const MyCustomButtonWithOptions = () => <CustomButton
    color="#999"
    text="Cancel"
    onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;
export const MyInput = () => <Input />;
export const MyInputWithPlaceHolder = () => <Input
    placeholder="Custom Placeholder"
/>;
export const MyChat = () => <Chat />;
export const MyChatPage = () => <ChatPage />;


// export const PageWithCustomButtons = () => <div>
//     <Header
//         fontSize={15}
//         color="#999"
//         onMouseOver={CancelClick}
//     />
//     <Header
//         fontSize={25}
//         color="#3F5"
//         onMouseOver={OkClick}
//     />
//     <Header
//         fontSize={35}
//         color="#F3F"
//         onMouseOver={SubmitClick}
//     />
//     <Header
//         fontSize={45}
//         color="#DAB"
//     />
//     <CustomButton
//         color="#999"
//         text="Cancel"
//         onClick={CancelClick}
//     />
//     <CustomButton
//         color="#3F5"
//         text="OK"
//         onClick={OkClick}
//     />
//     <CustomButton
//         color="#F3F"
//         text="Submit"
//         onClick={SubmitClick}
//     />
//     <CustomButton
//         text="Menu" />
// </div>

// function CancelClick() {
//     alert("Cancel");
// }

// function OkClick() {
//     alert("OK");
// }

// function SubmitClick() {
//     alert("Submit");
// }
