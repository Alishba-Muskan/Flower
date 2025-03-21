var showNavBar = document.getElementById("shownavbar");

showNavBar.innerHTML = ` <a href=""></a>
    <nav class="nav1">
        <div class="menu-icon">
            <i class="bx bx-menu"></i>
        </div>
        <div class="search-container">
            <input style="display: block;" type="text" id="search" placeholder="Search products...">
            <i class="fas fa-search search-icon"></i>
        </div>
        <div class="logo"><img src="./assets/logo.jpg" alt=""></div>
        <div class="cart-container">
            <label class="bag-icon"><i class='bx bxs-shopping-bags cart-icon'></i><span id="cart-notification"
                    class="cart-notification">0</span></label>
        </div>
    </nav>
    <nav class="navbar">
        <ul class="nav-links">
            <li><a href="./test.html">Home</a></li>
            <li class="dropdown">
                <a href="#">Occasions ▼</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Birthday</a></li>
                    <li><a href="#">Get well soon</a></li>
                    <li><a href="#">Thank you</a></li>
                    <li><a href="#">Fathers day</a></li>
                    <li><a href="#">Eid</a></li>
                    <li><a href="#">Sympathy</a></li>
                    <li><a href="#">New year</a></li>
                    <li><a href="#">Graduation</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">Flowers ▼</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Rose</a></li>
                    <li><a href="#">Lilies</a></li>
                    <li><a href="#">Crysanthemums</a></li>
                    <li><a href="#">Gerberas</a></li>
                    <li><a href="#">Babys Breath</a></li>
                    <li><a href="#">Gladiolus</a></li>
                    <li><a href="#">Tuberoses</a></li>
                </ul>
            </li>
            <li><a href="./cake.html">Cakes</a></li>
            <li><a href="./gift.html">Gifts</a></li>
            <li><a href="./blog.html">Blogs</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <div class="sidebar">
        <span class="close-btn">&times;</span>
        <ul class="sidebar-links">
            <li><a href="#">Home</a></li>
            <li class="sidebar-dropdown">
                <a href="#">Occasions ▼</a>
                <ul class="sidebar-dropdown-menu">
                    <li><a href="#">Birthday</a></li>
                    <li><a href="#">Get well soon</a></li>
                    <li><a href="#">Thank you</a></li>
                    <li><a href="#">Fathers day</a></li>
                    <li><a href="#">Eid</a></li>
                    <li><a href="#">Sympathy</a></li>
                    <li><a href="#">New year</a></li>
                    <li><a href="#">Graduation</a></li>
                </ul>
            </li>
            <li class="sidebar-dropdown">
                <a href="#">Flowers ▼</a>
                <ul class="sidebar-dropdown-menu">
                    <li><a href="#">Rose</a></li>
                    <li><a href="#">Lilies</a></li>
                    <li><a href="#">Crysanthemums</a></li>
                    <li><a href="#">Gerberas</a></li>
                    <li><a href="#">Babys Breath</a></li>
                    <li><a href="#">Gladiolus</a></li>
                    <li><a href="#">Tuberoses</a></li>
                </ul>
            </li>
            <li><a href="./cake.html">Cakes</a></li>
            <li><a href="./gift.html">Gifts</a></li>
            <li><a href="./blog.html">Blogs</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>`;



    var subscription = document.getElementById("subcription-form")
subscription.innerHTML = `
     <h2>Stay Updated with Our Floral News</h2>
        <p>Subscribe to receive the latest offers, trends, and floral inspirations!</p>
        <form class="subscribe-form-footer" action="">
            <input type="text" placeholder="Enter your name" required>
            <input type="email" placeholder="Enter your email" required>
            <button type="submit">Subscribe</button>
        </form>
            <img src="./assets/12.png" alt="Leaves" class="leaves">`;


    var footersection = document.getElementById("bottomsection")
    footersection.innerHTML = `
        <div class="footer-container">
            <div class="footer-column">
                <h4>Contact Us</h4>
                <ul>
                    <li>📍 123 Flower Street, NY</li>
                    <li>📞 +1 234 567 890</li>
                    <li>✉ info@florist.com</li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cakes</a></li>
                    <li><a href="#">Gifts</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Packaging</h4>
                <ul>
                    <li><a href="index.html">Ribbons</a></li>
                    <li><a href="#">Paper Wraps</a></li>
                    <li><a href="#">Baskets</a></li>
                    <li><a href="#">Gift Boxes</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Customer Service</h4>
                <ul>
                    <li><a href="#">Working Hours</a></li>
                    <li><a href="#">Payment Options</a></li>
                    <li><a href="#">Delivery Info</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Follow Us</h4>
                <div style = "font-size: 22px" class="footer-social">
                    <a href="" ><i style="font-size: 28px; " class="fa-brands fa-facebook"></i></a>
                    <a href=""><i style="font-size: 28px;" class="fa-brands fa-square-instagram"></i></a>
                    <a href=""><i style="font-size: 28px;" class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>`;









        const q = s => document.querySelector(s);
        q(".menu-icon").onclick = () => (q(".sidebar").classList.add("active"), q(".nav-links").style.display = "none");
        q(".close-btn").onclick = () => q(".sidebar").classList.remove("active");
        document.onclick = e => (!q(".sidebar").contains(e.target) && !q(".menu-icon").contains(e.target)) &&
            (q(".sidebar").classList.remove("active"), q(".nav-links").style.display = "flex");
        document.querySelectorAll(".sidebar-dropdown a").forEach(link =>
            link.onclick = () => link.parentElement.classList.toggle("active")
        );


        

        document.addEventListener('DOMContentLoaded', () => {
            const chatBtn = document.getElementById("chatBtn"),
                  chatBox = document.getElementById("chatBox"),
                  closeBtn = document.getElementById("close-btn");
        
            const toggleChat = () => {
                chatBox?.classList.toggle("visible");
                chatBtn.style.boxShadow = chatBox?.classList.contains("visible") ? "0px 0px 15px #25D366" : "none";
            };
        
            setTimeout(toggleChat, 2000);
            chatBtn?.addEventListener("click", toggleChat);
            closeBtn?.addEventListener("click", () => { chatBox?.classList.remove("visible"); chatBtn.style.boxShadow = "none"; });
        });