import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
        _state : {
                profilePage : {
                        posts : [
                                {id: 1, message: "Пошёл нахуй", like_count: 1},
                                {id: 2, message: "Пошёл нахер", like_count: 100},
                                {id: 3, message: "Пошёл в пизду", like_count: 10},
                                {id: 4, message: "Пошёл в жопу", like_count: 20},
                                {id: 5, message: "Пошёл куда-то", like_count: 30},
                        ],

                        newPostText:'Пошёл нахуй',

                },

                dialogsPage :{
                        dialogs : [
                                {id: 1, name: "кто бля"},
                                {id: 2, name: "я бля"},
                                {id: 3, name: "кого ты выберешь"},
                                {id: 4, name: "нас"},
                                {id: 5, name: "или"},
                                {id: 6, name: "их"},
                                {id: 7, name: "а?"}
                        ],

                        messages : [
                                {id: 1, message: "Ну как"},
                                {id: 2, message: "там"},
                                {id: 3, message: "с деньгами"}

                        ],

                        newMessageBody: ""
                },

                sidebar : {
                        friends : [
                                {id: 1, name: 'Кто', photo: "https://petsi.net/images/dogbreed/12.jpg" },
                                {id: 2, name: 'Эти', photo: "https://zooqi.by/social/cache/image_attachment_preview_large/attachment-image/282/3862_15335599796393.jpg?1644402046"},
                                {id: 3, name: 'Люди', photo: "data:image/jpeg;base64,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"}
                        ]
                }
        },

        _callSubscriber(){
                console.log('State changed');
        },

        getState(){
          return this._state;
        },

        subscribe(observer){
                this._callSubscriber = observer;
        },

        dispatch(action){

                this._state.profilePage = profileReducer(this._state.profilePage, action);
                this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
                this._state.sidebar = sidebarReducer(this._state.sidebar, action);

                this._callSubscriber(this._state);
        }
}


export default store;
window.store = store; //для глобального обращения


