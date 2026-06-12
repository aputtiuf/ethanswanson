const addContactButton = document.getElementById("addContact");

addContactButton.addEventListener("click", () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Swanson;Ethan;;;
FN:Ethan Swanson
ORG:University of Florida
TITLE:Student
TEL;TYPE=CELL:+18638430955
EMAIL;TYPE=INTERNET:swanson.ethan@ufl.edu
URL:https://www.linkedin.com/in/ethan-swanson1
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Ethan_Swanson.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
