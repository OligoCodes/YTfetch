const fetchBtn = document.getElementById("fetchBtn");

const videoTitle = document.getElementById("videoTitle");
const videoDescription = document.getElementById("videoDescription");
const videoViews = document.getElementById("videoViews");
const videoLikes = document.getElementById("videoLikes");
const videoType = document.getElementById("videoType");
const videoFileSize = document.getElementById("videoFileSize");
const videoQuality = document.getElementById("videoQuality");
const videoDuration = document.getElementById("videoDuration");
const downloadBtn = document.getElementById("downloadBtn")



function load() {
  const yTLink = document.getElementById("url").value.toString();
  const videoContainer = document.querySelector(".videoContainer");

  // Clear old content and show loader immediately
  videoContainer.innerHTML = `
    <div class="load-box">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  `;

  const apiUrl = `https://ytfetch-backend.onrender.com/api/youtube?url=${encodeURIComponent(yTLink)}`;

  fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);

    // Check for error first
    if (data.error && data.error.includes("No matching media found")) {
      alert("No video found. Please try a different link.");
      videoContainer.innerHTML = `<p style="color:red">No video found. Try a different link.</p>`;
      // Optional: disable download button
      downloadBtn.onclick = null;
      return; // stop the rest of the code from executing
    }

    // Only runs if no error
    videoTitle.textContent = data.title;
    videoDescription.textContent = data.description;
    videoViews.textContent = data.views;
    videoLikes.textContent = data.likes;
    videoType.textContent = `${data.type}/${data.mediaExtension}`;
    videoFileSize.textContent = data.mediaFileSize;
    videoQuality.textContent = data.mediaQuality;
    videoDuration.textContent = data.mediaDuration;

    downloadBtn.onclick = function() {
      let downloadUrl = data.downloadUrl;
      let secureDownload = downloadUrl.replace("http://", "https://");
      downloadFile(secureDownload, 'YTfetch_roxyy.mp4');
    };

    // Swap loader for video
    videoContainer.innerHTML = `
      <video width="100%" controls poster="${data.mediaThumbnail}">
        <source src="${data.downloadUrl}" type="video/mp4">
      </video>`;
  })
  .catch(error => {
    console.error("Error:", error);
    videoContainer.innerHTML = `<p style="color:red">Error fetching video</p>`;
  });

function downloadFile(url, filename = `YTfetch_roxyy.mp4`) {
  const downloadApiUrl = `https://ytfetch-backend.onrender.com/api/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
  
  const a = document.createElement("a");
  a.href = downloadApiUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// 🔗 Bind button to function
fetchBtn.addEventListener("click", load);
