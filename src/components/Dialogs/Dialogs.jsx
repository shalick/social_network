import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        alert(text);
    }


    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = state.messages
        .map(message => <Message message={message.message}/>);

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.message}>
                    <div>{messagesElements}</div>
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;