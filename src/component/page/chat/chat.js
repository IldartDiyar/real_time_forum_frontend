import { Get_User } from "../../../api/chat/chat.js"

export default async function Chat_Page(appDiv, usrObj) {
    let users;
    try {
        users = await Get_User()
    } catch (error) {
        console.log(error);
        appDiv.innerHTML = "<h1>Error: " + error.message + "</h1>";
        return
    }
    appDiv.innerHTML = ``;
    const divPage = document.createElement("div");
    divPage.classList.add("chat_page");
    let InChat = users[0]
        // ${users.map(user => `<li${user === InChat  ? ' class="active-user"' : ''}>${user.name}</li>`).join('')}
    divPage.innerHTML = `
    <div class="container">
        <div class="user-list">
            <ul>
                ${users.array.forEach(user => {
                    if (user === InChat){
                        return '<li class="active-user>' + user.nickname + '</li>'
                    }
                    return '<li>' + user.nickname + '</li>'
                })}
            </ul>
        </div>
            </ul>
        </div>
        <div class="chat-window">
            <div class="messages">
                <div class="message">
                    <div class="message-header">
                        <span class="message-sender">User 1:</span>
                        <span class="message-timestamp">10:00 AM</span>
                    </div>
                    <div class="message-content">
                        Hello!
                    </div>
                </div>
                <div class="message">
                    <div class="message-header">
                        <span class="message-sender">User 2:</span>
                        <span class="message-timestamp">10:05 AM</span>
                    </div>
                    <div class="message-content">
                        Hi there!
                    </div>
                </div>
            </div>
            <div class="input-container">
                <input type="text" id="message-input" placeholder="Type your message..." />
                <button id="send-button">Send</button>
            </div>
        </div>
    </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
    .container {
        display: flex;
    }
    
    .user-list {
        flex: 1;
        background-color: #f2f2f2;
        padding: 10px;
    }
    
    .chat-window {
        flex: 3;
        background-color: #fff;
        padding: 10px;
        overflow-y: scroll;
    }
    
    .user-list ul {
        list-style-type: none;
        padding: 0;
    }
    
    .user-list li {
        margin-bottom: 10px;
        cursor: pointer;
    }
    
    .user-list li:hover {
        background-color: #e6e6e6;
    }
    
    .active-user {
        background-color: #e6e6e6;
    }
    
    .messages {
        margin-bottom: 10px;
    }
    
    .message {
        margin-bottom: 10px;
    }
    
    .message-header {
        display: flex;
        align-items: baseline;
        margin-bottom: 5px;
    }
    
    .message-sender {
        font-weight: bold;
        margin-right: 5px;
    }
    
    .message-timestamp {
        font-size: 0.8em;
        color: #888;
    }
    
    .message-content {
        background-color: #f9f9f9;
        padding: 8px;
        border-radius: 5px;
    }
    
    .input-container {
        display: flex;
        margin-top: 10px;
    }
    
    #message-input {
        flex: 1;
        padding: 5px;
    }
    
    #send-button {
        padding: 5px 10px;
        margin-left: 5px;
    }
    `;

    document.head.appendChild(style);
    appDiv.appendChild(divPage);
}