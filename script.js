const contact = {
  firstName: "Ethan",
  lastName: "Swanson",
  fullName: "Ethan Swanson",
  organization: "University of Florida",
  email: "swanson.ethan@ufl.edu",
  phone: "+18638430955",
  linkedIn: "https://www.linkedin.com/in/ethan-swanson1"
};

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.fullName}`,
    `ORG:${contact.organization}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `URL:${contact.linkedIn}`,
    "END:VCARD"
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "Ethan-Swanson.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

document.getElementById("addContactButton").addEventListener("click", downloadVCard);
