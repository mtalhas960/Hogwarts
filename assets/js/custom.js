// Numbers Animations for spans
function animateNumbers(num, finalValue, duration) {
    let start = null;
    const finalValueStr = num.getAttribute("data-final-value");
    const charCount = finalValueStr.length;
    num.style.display = "inline-block";
    num.style.width = `${charCount}ch`;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        num.textContent = Math.floor(progress * finalValue);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}
function startNumberAnimation() {
    const numbers = document.querySelectorAll(".number");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const finalValue = parseInt(
                        entry.target.getAttribute("data-final-value")
                    );
                    animateNumbers(entry.target, finalValue, 2000);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    numbers.forEach((num) => observer.observe(num));
}
startNumberAnimation();
window.addEventListener("load", startNumberAnimation);


/* 1.1. Side navbar */
function open_aside() {
    "use strict";
    const sidepanel = document.getElementById("sideNav");
    if (sidepanel) {
        sidepanel.style.left = "0";
    } else {
        console.error("Error: Side panel element not found!");
    }
}
function close_aside() {
    "use strict";
    const sidepanel = document.getElementById("sideNav");
    if (sidepanel) {
        sidepanel.style.left = "-355px";
    } else {
        console.error("Error: Side panel element not found!");
    }
}
let slid = document.getElementById("slid-btn");
slid.onclick = () => {
    let dropdwon = document.getElementById("slid-drop");
    dropdwon.classList.toggle("aside-dropdwon");
}
const dropdowns = document.querySelectorAll('.navbar .dropdown');
dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdownMenu.style.maxHeight = '0';
    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.maxHeight = '0';
    });
});

const api = 'https://hp-api.onrender.com/api';
async function fetchStaff() {
    const url = api + "/characters/staff";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const staffContainer = document.querySelector('.StaffSlider');
        data.slice(0, 6).forEach(staff => {
            const staffCard = document.createElement('div');
            staffCard.className = 'd-flex flex-column gap-2';
            staffCard.innerHTML = `
                <figure><img class="w-100" src="${staff.image || 'https://via.placeholder.com/150'}" alt="${staff.name || 'Staff Image'}"></figure>
                <h3 class="pt-3">${staff.name || 'N/A'}</h3>
                <div>
                <p><strong>Gender:</strong> ${staff.gender || 'N/A'}</p>
                <p><strong>House:</strong> ${staff.house || 'N/A'}</p>
                <p><strong>Ancestry:</strong> ${staff.ancestry || 'N/A'}</p>
                <p><strong>Patronus:</strong> ${staff.patronus || 'N/A'}</p>
                </div>
            `;

            staffContainer.appendChild(staffCard);
        });
        $(staffContainer).slick({
            arrows: false,
            dots: false,
            infinite: true,
            speed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    } catch (error) {
        console.error('Error fetching staff data:', error);
    }
}
if (document.querySelector('.StaffSlider') !== null)
    fetchStaff();
async function fetchStudents() {
    const url = "https://hp-api.onrender.com/api/characters/students";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const studentsContainer = document.querySelector('.StudentSlider');
        data.slice(0, 6).forEach(student => {
            const studentCard = document.createElement('div');
            studentCard.className = 'd-flex flex-column gap-2';
            studentCard.innerHTML = `
            <figure><img class="w-100" src="${student.image || 'https://via.placeholder.com/150'}" alt="${student.name || 'Student Image'}"></figure>
            <h3 class="pt-3">${student.name || 'N/A'}</h3>
            <div>
            <p><strong>Gender:</strong> ${student.gender || 'N/A'}</p>
            <p><strong>House:</strong> ${student.house || 'N/A'}</p>
            <p><strong>Ancestry:</strong> ${student.ancestry || 'N/A'}</p>
            <p><strong>Patronus:</strong> ${student.patronus || 'N/A'}</p>
            </div>
            `;
            studentsContainer.appendChild(studentCard);
        });
        $(studentsContainer).slick({
            arrows: false,
            dots: false,
            infinite: true,
            speed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    } catch (error) {
        console.error('Error fetching student data:', error);
    }
}
if (document.querySelector('.StudentSlider') !== null)
    fetchStudents();