function showInfo() {
    const text = document.getElementById("SideMenu");

    if (text.style.display === "none") {
        text.style.display = "block";
    } 
    else {
        text.style.display = "none";
    }
}

function ToPage(page) {
    window.location.href = page;
}

function openMenu(){
    document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu(){
    document.getElementById("sideMenu").style.width = "0px";
}

function showInfo(energi) {
    const infoBox = document.getElementById("info-box");
    if (energi === "sol") {
        infoBox.innerHTML = `
            <h2>Solceller</h2>
            <p>Information om solceller.</p>
        `;
    }

    if (energi === "vatten") {
        infoBox.innerHTML = `
            <h2>Vattenkraft</h2>
            <p>Information om vattenkraft.</p>
        `;
    }

    if (energi === "vind") {
        infoBox.innerHTML = `
            <h2>Vindkraft</h2>
            <p>Information om vindkraft.</p>
        `;
    }

    if (energi === "bio") {
        infoBox.innerHTML = `
            <h2>Biogas</h2>
            <p>Information om biogas.</p>
        `;
    }
}