// Countdown Timer
function initCountdown() {
    // Set launch date to 30 days from now
    const now = new Date();
    const launchDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const distance = launchDate.getTime() - currentTime;

        if (distance < 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Lead Capture Form
function initLeadForm() {
    const form = document.getElementById('leadForm');
    const successDiv = document.getElementById('leadSuccess');
    const emailInput = document.getElementById('leadEmail');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const email = emailInput.value.trim();

            if (!email) {
                alert('Please enter a valid email');
                return;
            }

            // Save to Google Sheet via Apps Script
            try {
                const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/d/AKfycbzYyDylFy5_0ysfYXbEXrI073kfP0zUrGMeD6oFMtBkeJ_3ZR5FiFbJaTEw7aOLGJ4I/userweb?v=1';
                const formData = new FormData();
                formData.append('Email', email);
                formData.append('Type', 'Lead Capture');
                formData.append('Timestamp', new Date().toISOString());
                
                await fetch(GOOGLE_APPS_SCRIPT_URL, {
                    method: 'POST',
                    body: formData,
                }).catch(() => {}); // Fail silently if no script URL configured
            } catch (error) {
                console.log('Google Sheets not configured, using local storage');
            }

            // Save to localStorage for demonstration
            const emails = JSON.parse(localStorage.getItem('kindertick_emails') || '[]');
            emails.push({
                email: email,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('kindertick_emails', JSON.stringify(emails));

            // Show success message
            form.style.display = 'none';
            successDiv.style.display = 'block';

            // Reset form
            form.reset();
        });
    }
}

// Contact Form Handler
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successDiv = document.getElementById('contactSuccess');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            // Validate
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Save to Google Sheet via Apps Script
            try {
                const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/userweb?v=1';
                const formData = new FormData();
                formData.append('Name', name);
                formData.append('Email', email);
                formData.append('Message', message);
                formData.append('Type', 'Contact Form');
                formData.append('Timestamp', new Date().toISOString());
                
                await fetch(GOOGLE_APPS_SCRIPT_URL, {
                    method: 'POST',
                    body: formData,
                }).catch(() => {}); // Fail silently if no script URL configured
            } catch (error) {
                console.log('Google Sheets not configured, using local storage');
            }

            // Save to localStorage for demonstration
            const messages = JSON.parse(localStorage.getItem('kindertick_messages') || '[]');
            messages.push({
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('kindertick_messages', JSON.stringify(messages));

            // Show success
            form.style.display = 'none';
            successDiv.style.display = 'block';

            console.log('Message saved and sent to Google Sheet');
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initCountdown();
    initLeadForm();
    initContactForm();
});
