document.addEventListener('DOMContentLoaded', function () {
    // Select Elements
    const preloader = document.querySelector('.preloader');
    const chatBtn = document.getElementById("chatBtn");
    const chatBox = document.getElementById("chatBox");
    const closeBtn = document.querySelector(".close-btn");

    // Hide Preloader After 6s
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';

            // Chat Button Effect (Now runs after preloader hides)
            if (chatBtn) {
                setTimeout(() => {
                    chatBtn.style.boxShadow = "0px 0px 15px red";
                    chatBtn.style.transform = "scale(1.2)";

                    setTimeout(() => {
                        chatBox?.classList.add("visible"); // Use class instead of display:block
                        chatBtn.style.boxShadow = "none";
                        chatBtn.style.transform = "scale(1)";
                    }, 1000);
                }, 2000);
            }
        }, 6000);
    }

    // Chatbox Toggle Function
    function toggleChat() {
        if (chatBox) {
            chatBox.classList.toggle("visible"); // Instead of display:block, use CSS class
            chatBtn.style.boxShadow = chatBox.classList.contains("visible") ? "0px 0px 15px #25D366" : "none";
        }
    }

    // Attach Event Listeners
    chatBtn?.addEventListener("click", toggleChat);
    closeBtn?.addEventListener("click", toggleChat);
});




