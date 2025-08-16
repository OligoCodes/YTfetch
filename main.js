const fetchBtn = document.getElementById("fetchBtn");

const videoTitle = document.getElementById("videoTitle");
const videoDescription = document.getElementById("videoDescription");
const videoViews = document.getElementById("videoViews");
const videoLikes = document.getElementById("videoLikes");
const videoType = document.getElementById("videoType");
const videoFileSize = document.getElementById("videoFileSize");
const videoQuality = document.getElementById("videoQuality");
const videoDuration = document.getElementById("videoDuration");

function load() {
  const yTLink = document.getElementById("url").value.trim();
  const videoContainer = document.querySelector(".videoContainer");

  if (!yTLink) {
    alert("Please enter a YouTube link first.");
    return;
  }

  // Show loader immediately
  videoContainer.innerHTML = `
    <div class="load-box">
      <div class="dot"></div><div class="dot"></div><div class="dot"></div>
      <div class="dot"></div><div class="dot"></div><div class="dot"></div>
      <div class="dot"></div><div class="dot"></div>
    </div>
  `;

  const apiUrl = `https://ytfetch-backend.onrender.com/api/youtube?yTLink=${encodeURIComponent(yTLink)}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

      videoTitle.textContent = data.title || "No title";
      videoDescription.textContent = data.description || "No description";
      videoViews.textContent = data.views || "N/A";
      videoLikes.textContent = data.likes || "N/A";
      videoType.textContent = `${data.type || "unknown"}/${data.mediaExtension || ""}`;
      videoFileSize.textContent = data.mediaFileSize || "N/A";
      videoQuality.textContent = data.mediaQuality || "N/A";
      videoDuration.textContent = data.mediaDuration || "N/A";

      videoContainer.innerHTML = `
        <video width="100%" controls poster="${data.mediaThumbnail || ""}">
          <source src="${data.downloadUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>`;
    })
    .catch(error => {
      console.error("Error:", error);
      videoContainer.innerHTML = `<p style="color:red">Error fetching video</p>`;
    });
}

function downloadFile(urlPath, filename) {
  const a = document.createElement('a')
  a.href = `https://ytfetch-backend.onrender.com/api/download?urlPath=${encodeURIComponent(urlPath)}&filename=${filename}`
  a.download = filename;
  document.body.appendChild(a);
  a.click()
  document.body.removeChild(a)
}
// 🔗 Bind button to function
fetchBtn.addEventListener("click", load);
