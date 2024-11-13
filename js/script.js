// // Redirection based on role selection
// function redirectTo(role) {
//     if (role === 'admin') {
//         window.location.href = 'pages/admin_login.html';
//     } else if (role === 'voter') {
//         window.location.href = 'pages/voter_login.html';
//     }
// }

// // Hash password using SHA-256
// async function encryptPassword(password) {
//     const msgBuffer = new TextEncoder().encode(password);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//     return hashHex;
// }

// // Admin login validation
// async function adminLogin() {
//     const username = document.getElementById("adminUsername").value;
//     const password = document.getElementById("adminPassword").value;
    
//     const encryptedPassword = await encryptPassword(password);
//     if (validatePassword(password)) {
//         // Simulate successful login for admin (you can later add actual admin checks)
//         console.log(`Admin ${username} logged in with encrypted password: ${encryptedPassword}`);
//         window.location.href = 'admin_dashboard.html';
//     } else {
//         alert("Password doesn't meet the eligibility criteria.");
//         return false;
//     }
// }

// // Voter login validation
// async function voterLogin() {
//     const username = document.getElementById("voterUsername").value;
//     const password = document.getElementById("voterPassword").value;
//     const voterID = document.getElementById("voterID").value;
    
//     const encryptedPassword = await encryptPassword(password);
//     if (validatePassword(password)) {
//         // Simulate successful login for voter (you can later add actual voter checks)
//         console.log(`Voter ${username} logged in with voter ID ${voterID} and encrypted password: ${encryptedPassword}`);
//         window.location.href = 'vote.html';
//     } else {
//         alert("Password doesn't meet the eligibility criteria.");
//         return false;
//     }
// }

// // Password eligibility check
// function validatePassword(password) {
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumber = /\d/.test(password);
//     const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//     return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
// }

// // Redirection based on role selection
// function redirectTo(role) {
//     if (role === 'admin') {
//         window.location.href = 'pages/admin_login.html';
//     } else if (role === 'voter') {
//         window.location.href = 'pages/voter_login.html';
//     }
// }

// // Hash password using SHA-256
// async function encryptPassword(password) {
//     const msgBuffer = new TextEncoder().encode(password);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//     return hashHex;
// }

// // Admin login validation
// async function adminLogin() {
//     const username = document.getElementById("adminUsername").value;
//     const password = document.getElementById("adminPassword").value;
    
//     const encryptedPassword = await encryptPassword(password);
//     if (validatePassword(password)) {
//         // Simulate successful login for admin
//         console.log(`Admin ${username} logged in with encrypted password: ${encryptedPassword}`);
//         window.location.href = 'admin_dashboard.html'; // Redirect to admin dashboard
//     } else {
//         alert("Password doesn't meet the eligibility criteria.");
//         return false;
//     }
// }

// // Voter login validation
// async function voterLogin() {
//     const username = document.getElementById("voterUsername").value;
//     const password = document.getElementById("voterPassword").value;

//     const encryptedPassword = await encryptPassword(password);
    
//     if (validatePassword(password)) {
//         // Simulate successful login for voter
//         console.log(`Voter ${username} logged in with encrypted password: ${encryptedPassword}`);
//         window.location.href = 'voting.html'; // Redirect to voting page
//         return false; // Prevent form submission (as redirection is handled)
//     } else {
//         alert("Password doesn't meet the eligibility criteria.");
//         return false; // Prevent form submission
//     }
// }


// // Password eligibility check
// function validatePassword(password) {
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumber = /\d/.test(password);
//     const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//     return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
// }

// Redirection based on role selection
function redirectTo(role) {
    if (role === 'admin') {
        window.location.href = 'pages/admin_login.html';
    } else if (role === 'voter') {
        window.location.href = 'pages/voter_login.html';
    }
}

// Hash password using SHA-256
async function encryptPassword(password) {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Encrypt username using a simple method (you can use a more complex encryption method as needed)
function encryptUsername(username) {
    const encryptedUsername = btoa(username); // Base64 encoding for simplicity
    return encryptedUsername;
}

// Admin login validation
async function adminLogin() {
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;
    
    const encryptedPassword = await encryptPassword(password);
    const encryptedUsername = encryptUsername(username);

    if (validatePassword(password)) {
        // Store encrypted username and password
        localStorage.setItem("adminUsername", encryptedUsername);
        localStorage.setItem("adminPassword", encryptedPassword);
        
        // Display alert with encrypted data
        alert(`Admin login successful!\nEncrypted Username: ${encryptedUsername}\nEncrypted Password: ${encryptedPassword}`);

        // Simulate successful login for admin
        window.location.href = 'admin_dashboard.html'; // Redirect to admin dashboard
    } else {
        alert("Password doesn't meet the eligibility criteria.");
        return false;
    }
}

// Voter login validation
async function voterLogin() {
    const username = document.getElementById("voterUsername").value;
    const password = document.getElementById("voterPassword").value;
    
    const encryptedPassword = await encryptPassword(password);
    const encryptedUsername = encryptUsername(username);
    
    if (validatePassword(password)) {
        // Store encrypted username and password
        localStorage.setItem("voterUsername", encryptedUsername);
        localStorage.setItem("voterPassword", encryptedPassword);
        
        // Display alert with encrypted data
        alert(`Voter login successful!\nEncrypted Username: ${encryptedUsername}\nEncrypted Password: ${encryptedPassword}`);

        // Simulate successful login for voter
        window.location.href = 'voting.html'; // Redirect to voting page
    } else {
        alert("Password doesn't meet the eligibility criteria.");
        return false;
    }
}

// Password eligibility check
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}
