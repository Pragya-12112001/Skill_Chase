//section 6
function sendBrochure() {
            const email = document.querySelector("#email").value;
            const mobile = document.querySelector("#mobile").value;

            if (!email) {
                alert("Please enter your email address.");
                return;
            }

            if (!mobile) {
                alert("Please enter your mobile number.");
                return;
            }

            // Simulate sending the brochure
            alert(`Brochure will be sent to: ${email}. Mobile: ${mobile}`);

        }
