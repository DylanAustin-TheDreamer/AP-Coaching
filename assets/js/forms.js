// web app link https://script.google.com/macros/s/AKfycbyNknKKh5sSvoPNltrD3J4hfgqJhR78V09q84Who-HiSBJ4qge5xuhnzDXA9M3uWUqg/exec
document.addEventListener("DOMContentLoaded", () => {

    async function submitForm() {
        const btn = document.querySelector('button[type="submit"]');
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading...';
        btn.disabled = true;
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const instagram = document.getElementById("instagram").value.trim();

        const honeypot = document.getElementById("company").value;

        if (honeypot) {
            return;
        }
        if (!email.includes('@')) return;
        if (!service) return;
        if (firstName.length < 2 || lastName.length < 2) return;

        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbyNknKKh5sSvoPNltrD3J4hfgqJhR78V09q84Who-HiSBJ4qge5xuhnzDXA9M3uWUqg/exec", {
                method: "POST",
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    service,
                    instagram
                })
            });

            const data = await res.json();

        } catch (err) {
            console.error("Submission failed:", err);
        }

        let page;
        if(document.getElementById("service").value === "E-Book"){
            page = "https://tally.so/r/3jAEyY"
        } else page = "../pages/confirmation.html"
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("service").value = "";
        document.getElementById("instagram").value = "";
        btn.innerHTML = "Send Message";
        btn.disabled = false;

        if(page === "https://tally.so/r/3jAEyY") {
            window.open(page);
        } else window.location = page;
        window.open(page);
    }

    // 🔥 Attach event HERE instead of HTML
    document.getElementById("lead-form").addEventListener("submit", function (e) {
        e.preventDefault();
        submitForm();
    });

});