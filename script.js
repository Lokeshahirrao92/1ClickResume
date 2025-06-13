const form = document.getElementById("resume-form");
const preview = document.getElementById("resume-preview");
const previewContent = document.getElementById("preview-content");
const editBtn = document.getElementById("edit-btn");
const downloadBtn = document.getElementById("download-btn");
const shareBtn = document.getElementById("share-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const skills = formData.get("skills").split(",");
  const education = formData.get("education");

  previewContent.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Skills:</strong> ${skills.join(", ")}</p>
    <p><strong>Education:</strong> ${education}</p>
  `;

  form.classList.add("hidden");
  preview.classList.remove("hidden");
});

editBtn.addEventListener("click", () => {
  form.classList.remove("hidden");
  preview.classList.add("hidden");
});

downloadBtn.addEventListener("click", () => {
  const element = document.createElement("a");
  const file = new Blob([previewContent.innerText], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = "Resume.txt";
  document.body.appendChild(element);
  element.click();
});

shareBtn.addEventListener("click", () => {
  const text = encodeURIComponent(previewContent.innerText);
  const url = `https://wa.me/?text=${text}`;
  window.open(url, '_blank');
});
