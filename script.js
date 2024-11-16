document.getElementById("generate-cv").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const village = document.getElementById("village").value;
    const postOffice = document.getElementById("postOffice").value;
    const policeStation = document.getElementById("policeStation").value;
    const state = document.getElementById("state").value;
    const pin = document.getElementById("pin").value;
    const tenth = document.getElementById("tenth").value;
    const twelfth = document.getElementById("twelfth").value;
    const college = document.getElementById("college").value;
    const skills = document.getElementById("skills").value;

    document.getElementById("personal-info").innerHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Address:</strong> ${village}, ${postOffice}, ${policeStation}, ${state} - ${pin}</p>
    `;

    document.getElementById("education-info").innerHTML = `
        <h3>Educational Qualifications</h3>
        <p><strong>10th:</strong> ${tenth}</p>
        <p><strong>12th:</strong> ${twelfth}</p>
        <p><strong>College:</strong> ${college}</p>
    `;

    document.getElementById("skills-info").innerHTML = `
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    document.getElementById("cv-preview").style.display = "block";
});

document.getElementById("download-pdf").addEventListener("click", function () {
    const element = document.getElementById("cv-content");
    const opt = {
        margin: 0.5,
        filename: 'CV.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
});
