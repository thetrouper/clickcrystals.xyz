document.addEventListener("DOMContentLoaded", function() {
  document.body.innerHTML += `
    <style>
      .gradient-custom {
        /* fallback for old browsers */
        background: #fccb90;
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to bottom right, rgba(252, 203, 144, 1), rgba(213, 126, 235, 1));
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to bottom right, rgba(252, 203, 144, 1), rgba(213, 126, 235, 1));
      }
      
      .mask-custom {
        background: rgba(24, 24, 16, .2);
        border-radius: 2em;
        backdrop-filter: blur(15px);
        border: 2px solid rgba(255, 255, 255, 0.05);
        background-clip: padding-box;
        box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
      }
      
      #chat {
        margin: 50px;
        position: fixed;
        z-index: 9999;
        bottom: 10px;
        right: 0;
        overflow: scroll;
        height: 500px;
        width: 50%;
      }
      
    </style>
    <section class="gradient-custom" id="chat" style="display:none;">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6 col-lg-7 col-xl-7">
            <ul class="list-unstyled text-white" id="ai_messages">
              <li class="d-flex justify-content-between mb-4">
                <div class="card mask-custom w-100">
                  <div class="card-header d-flex justify-content-between p-3" style="border-bottom: 1px solid rgba(255,255,255,.3);">
                    <p class="fw-bold mb-0">Ai</p>
                  </div>
                  <div class="card-body">
                    <p class="mb-0">Hello! I'm here to help in any questions on CCS (ClickCrystalsScript)</p>
                  </div>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60">
              </li>
            </ul>
            <div class="mb-3" style="position:relative; bottom:0; right:50;">
              <div data-mdb-input-init class="form-outline form-white">
                <textarea class="form-control" id="ai_input" rows="4"></textarea>
              </div>
            </div>
            <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-light btn-lg btn-rounded float-end" id="AisendBtn">Send</button>
          </div>
        </div>
      </div>
    </section>
  `;

  const toggleChatBtn = document.getElementById("toggleChatBtn");
  const chatPopup = document.getElementById("chat");
  const sendBtn = document.getElementById("AisendBtn");
  const messageList = document.getElementById("ai_messages");

  toggleChatBtn.addEventListener("click", function() {
    if (chatPopup.style.display == "none"){
      chatPopup.style.display = "block";
    } else{
      chatPopup.style.display = "none"
    }
 });
  
  sendBtn.addEventListener("click", function() {
    const userInput = document.getElementById("ai_input").value;
    if (!userInput.trim()) return; // Don't send empty messages
    appendMessage("user", userInput);
    sendBtn.classList.add("disabled")

    // Send user message to the server and receive AI response
    fetch('https://tools.tutla.net/ai/models/clickcrystals/generate.php', {
      method: 'POST',
      body: JSON.stringify({ prompt: userInput }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(data => {
      appendMessage("AI", data);
    })
    .catch(error => console.error('Error:', error));
    sendBtn.classList.remove("disabled")
    document.getElementById("ai_input").value = ""; // Clear input field
  });

  function appendMessage(sender, message) {
    const listItem = document.createElement("li");
    listItem.classList.add("d-flex", "justify-content-between", "mb-4");

    const messageContent = `
      <div class="card mask-custom w-100">
        <div class="card-body">
          <p class="mb-0">${message}</p>
        </div>
      </div>
    `;

    if (sender === "user") {
      listItem.innerHTML = `
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
          class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60">
        ${messageContent}
      `;
    } else if (sender === "AI") {
      listItem.innerHTML = `
        ${messageContent}
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
          class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60">
      `;
    }

    messageList.appendChild(listItem);
  }
});
