// Hero section

document.addEventListener("DOMContentLoaded", function () {
    const slidingContainer = document.querySelector(".sliding-container");
    const sliderContainer = document.querySelector(".slides-wrapper");
    const slides = document.querySelectorAll(".slides-wrapper h1");
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Set the initial height of the sliding-container to the height of the first slide
    function updateContainerHeight() {
        const currentHeight = slides[currentSlide].offsetHeight;
        slidingContainer.style.height = `${currentHeight}px`;
    }

    // Function to show the next slide
    function showNextSlide() {
        const currentHeight = slides[currentSlide].offsetHeight;
        currentSlide = (currentSlide + 1) % totalSlides;
        const nextHeight = slides[currentSlide].offsetHeight;

        // Update the sliding-container height to the next slide height
        slidingContainer.style.height = `${nextHeight}px`;

        // Slide the slides-wrapper by the current slide's height
        sliderContainer.style.transform = `translateY(-${slides[currentSlide].offsetTop}px)`;
    }

    // Set the initial height of the container
    updateContainerHeight();

    setInterval(showNextSlide, 3000);
});


// Hero svg

// Rotate the first SVG 180 degrees in Z direction over 3 seconds
gsap.to(".svg1", {
    rotationZ: -180,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
});
gsap.fromTo(
    ".herosvg1",
    { x: "-5%" }, // Starting position: -50% (outside the container on the left)
    {
        x: "20%", // End position: 100% (beyond the right side of the container)
        duration: 8,
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse direction after hitting the end point
        ease: "power1.inOut", // Smooth ease in and out effect
    }
);

// Header mobile

document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".custom-header");
    let menuIcon = document.querySelector(".menu-icon i"); // Target the <i> tag inside the menu-icon
    let contact_btn = document.querySelector(".contact-btn a");
    let mobile_contact_btn = document.querySelector(
        ".mobile-nav .contact-btn"
    );
    const mobileNav = document.querySelector(".mobile-nav");
    const navLinks = document.querySelectorAll(".mobile-nav .nav-links li");
    const navLink = document.querySelectorAll(
        ".mobile-nav .nav-links li a"
    );
    let isOpen = false;

    menuIcon.addEventListener("click", () => {
        if (!isOpen) {
            menuIcon.classList.remove("bi-list");
            menuIcon.classList.add("bi-x");
            header.classList.add("custom-header-mob");
            contact_btn.style.display = "none";
            // Open animation
            gsap.to(mobileNav, {
                duration: 0.4,
                display: "flex",
                maxHeight: "350px",
                opacity: 1,
                visibility: "visible",
                zIndex: 9999,
                ease: "power2.out",
            });

            gsap.fromTo(
                navLinks,
                {
                    opacity: 0,
                    x: "10%",
                },
                {
                    opacity: 1,
                    x: "0%",
                    stagger: 0.1,
                    duration: 0.3,
                    ease: "power2.out",
                }
            );
        } else {
            mobileNav.style.display = "none";
            menuIcon.classList.remove("bi-x");
            menuIcon.classList.add("bi-list");
            header.classList.remove("custom-header-mob");
            contact_btn.style.display = "flex";
            // Close animation
            gsap.to(navLinks, {
                opacity: 0,
                x: "10%",
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    gsap.to(mobileNav, {
                        duration: 0.4,
                        maxHeight: "0",
                        opacity: 0,
                        visibility: "hidden",
                        zIndex: -1,
                        ease: "power2.in",
                    });
                },
            });
        }
        isOpen = !isOpen;
    });
    navLink.forEach((link) => {
        link.addEventListener("click", function (event) {
            // Prevent default anchor behavior
            event.preventDefault();

            // Close the menu
            mobileNav.style.display = "none";
            menuIcon.classList.remove("bi-x");
            menuIcon.classList.add("bi-list");
            header.classList.remove("custom-header-mob");
            contact_btn.style.display = "flex";

            // Scroll to the target section
            let targetId = this.getAttribute("href");
            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
            isOpen = !isOpen;
        });
    });
    mobile_contact_btn.addEventListener("click", function (event) {
        mobileNav.style.display = "none";
        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");
        header.classList.remove("custom-header-mob");
        contact_btn.style.display = "flex";
        isOpen = !isOpen;
    });
});


//  Services

const tabs = document.querySelectorAll(".tab-content");
const titles = document.querySelectorAll(".tab-titleh5");
const descriptions = document.querySelectorAll(".tab-description");
const images = document.querySelectorAll(".image-container img");
let currentTab = 0;

function showTab(index) {
    tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
    });

    titles.forEach((title, i) => {
        title.classList.toggle("active", i === index);
    });

    descriptions.forEach((desc, i) => {
        desc.classList.toggle("active", i === index);
    });

    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        showTab(index);
        currentTab = index;
    });
});


// Scrolling script for services sec

serviceLinks = function () {
    event.preventDefault();

    const windowWidth = window.innerWidth;

    if (windowWidth > 1439) {
        document.getElementById("Services").scrollIntoView({
            behavior: "smooth",
        });
    } else {
        document.getElementById("Services-mob").scrollIntoView({
            behavior: "smooth",
        });
    }
};


//  About us

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".Partner-section");
    const image = document.querySelector(
        ".partner-content-wrap .mobile-view-h3 span .image"
    );

    if (window.innerWidth < 769) {
        // Make sure the image exists
        if (image) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                            // Section is in view, add the 'visible' class
                            requestAnimationFrame(() => {
                                image.classList.add("visible");
                            });
                        } else {
                            // Section is out of view, remove the 'visible' class
                            requestAnimationFrame(() => {
                                image.classList.remove("visible");
                            });
                        }
                    });
                },
                {
                    threshold: 0.5, // Trigger when 50% of the section is visible
                }
            );

            // Observe the section
            observer.observe(section);
        } else {
            console.error("Image element not found!");
        }
    }
});


// Partner scroll effect

function init_about_text() {
    var text = Splitting({ target: ".scroll_effect", by: "chars", key: null, });

    gsap.from(text[0].chars, {
        stagger: 0.3,
        opacity: 0.1,
        scrollTrigger: {
            pinType: "fixed",
            trigger: ".creative",
            start: "top 0%",
            end: "bottom 30%",
            scrub: 1,
        },
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    init_about_text();
});



// form post call

let isSubmitting;

// Form validation function
function validateField(field, message) {
    if (!field.val().trim()) {
        field.addClass("error");
        field.next(".error-message").text(message).slideDown("slow");
        return false;
    } else {
        field.removeClass("error");
        field.next(".error-message").slideUp("slow");
        return true;
    }
}

// Custom validation function for mobile numbers
function validateMobile(field) {
    const value = field.val().trim();
    const mobilePattern = /^(?:\+91|0)?[789]\d{9}$/;
    const isValid = mobilePattern.test(value);

    if (!isValid) {
        field.addClass("error");
        field
            .next(".error-message")
            .text("Invalid contact number")
            .slideDown("slow");
        return false;
    } else {
        field.removeClass("error");
        field.next(".error-message").slideUp("slow");
        return true;
    }
}

// Custom validation function for email
function validateEmail(field) {
    const value = field.val().trim();
    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|rediffmail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(value);

    if (!isValid) {
        field.addClass("error");
        field
            .next(".error-message")
            .text("Email domain is not allowed!")
            .slideDown("slow");
        return false;
    } else {
        field.removeClass("error");
        field.next(".error-message").slideUp("slow");
        return true;
    }
}

$("#user-form").on("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Check if the form is already being submitted
    if (isSubmitting) {
        return;
    }

    // Validate all fields
    let isValid = true;

    isValid &= validateField($("#name"), "Please enter a Name!");
    isValid &= validateEmail($("#email"));
    isValid &= validateMobile($("#phone"));
    isValid &= validateField($("#company"), "Please enter a company name!");
    isValid &= validateField($("#message"), "Please enter a message!");

    // If validation passes, submit the form
    if (isValid) {
        submitForm();
    }
});

// Validate fields on input change
$("#name, #company, #message").on("input", function () {
    validateField($(this), `${$(this).attr("placeholder")} is required`);
});

// Validate mobile number on input change
$("#phone").on("input", function () {
    validateMobile($(this));
});

// Validate email on input change
$("#email").on("input", function () {
    validateEmail($(this));
});

function submitForm() {
    // Set the submitting flag to true
    isSubmitting = true;

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    var company = $("#company").val();

    // Getting Params from session storage
    var param = JSON.parse(sessionStorage.getItem("params") || "{}");
    $.ajax({
        type: "POST",
        url: "",
        dataType: "json",
        data: {
            name: name,
            email: email,
            phone: phone,
            message: message,
            website: company,
            http_referrer: location.href,
            utm_source: param.utm_source || "",
            utm_medium: param.utm_medium || "",
            utm_campaign: param.utm_campaign || "",
        },
        success: function (data, xhr) {
            const btn = document.getElementById("submit");
            btn.classList.add("grow-out");

            // Update the text content
            const span = btn.querySelector("span");
            span.textContent = "Message Sent";

            // Adjust icon positions after click
            const clickIcon = btn.querySelector(".click-icon");
            clickIcon.style.left = "15px";
            clickIcon.style.right = "auto";

            // After 5 seconds, revert the changes
            setTimeout(() => {
                btn.classList.remove("grow-out");
                span.textContent = "Message";
                clickIcon.style.left = "";
                clickIcon.style.right = "";
            }, 5000);
            // Show success message
            $("#v_success").slideDown("slow");
            setTimeout(() => {
                $("#v_success").slideUp("slow");
            }, 5000);

            // Reset form after successful submission
            $("#user-form")[0].reset();
        },
        error: function (data, xhr) {

            // Show error message
            $("#v_error").slideDown("slow");
            setTimeout(() => {
                $("#v_error").slideUp("slow");
            }, 5000);
        },
        complete: function () {
            // Reset the submitting flag after the request completes
            isSubmitting = false;
        },
    });
}
