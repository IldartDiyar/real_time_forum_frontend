import { Get_User } from "../../../api/chat/chat.js"
import { getStyle, render, render_User } from "./static.js"
import sendMsg from "./sender.js"
export default async function Chat_Page(appDiv, usrObj, socket) {
    let users = null;

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data)

        console.log(data);

    };

    if (!users) {
        appDiv.innerHTML = "<h1>Sorry, you are alone user in our service</h1>";
        return
    }
    let InChat = users[0]
    let divPage = render(appDiv, users, InChat)

    render_User(divPage, InChat, users)


    const style = document.createElement('style');
    style.textContent = getStyle();


    const sendButton = divPage.querySelector("#send-button");
    const messageInput = divPage.querySelector("#message-input");
    sendButton.addEventListener("click", () => {
        const message = messageInput.value;
        if (!message) {
            alert("can`t send empty message")
            return
        }
        messageInput.value = "";
        sendMsg(socket, message, usrObj.id, InChat.id);

    });
    document.head.appendChild(style);
    appDiv.appendChild(divPage);

}