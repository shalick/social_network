import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 12},
                {id: 2, post: 'It\'s my first post', likesCount: 11},
                {id: 3, post: 'Blabla', likesCount: 13},
                {id: 4, post: 'Reunion', likesCount: 14}
            ],
            newPostText: "hehe"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Paul'},
                {id: 3, name: 'Peter'},
                {id: 4, name: 'John'},
                {id: 5, name: 'Jameson'},
                {id: 6, name: 'Patrick'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}


export default store;