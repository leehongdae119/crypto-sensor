
document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const timeString = now.toLocaleString("ko-KR", {
    hour12: false,
  });
  document.getElementById("update-time").textContent = `업데이트: ${timeString}`;
});
