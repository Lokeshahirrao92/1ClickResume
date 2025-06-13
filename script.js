function downloadPDF() {
  const text = document.getElementById("editor").value;
  const blob = new Blob([text], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "resume.pdf";
  link.click();
}