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
  const yTLink = document.getElementById("url").value.toString();
  const videoContainer = document.querySelector(".videoContainer");
  const notice = document.querySelector(".appears");

  // Loading animation
  const loading = document.createElement("div");
  loading.className = "load-box";
  loading.innerHTML = `
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  `;

  if (notice) {
    setTimeout(() => {
      videoContainer.replaceChild(loading, notice);
    }, 1000);
  } else {
    videoContainer.appendChild(loading);
  }

  const apiUrl = `https://ytfetch-backend.onrender.com/api/youtube?yTLink=${encodeURIComponent(yTLink)}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      videoTitle.textContent = data.title;
      videoDescription.textContent = data.description;
      videoViews.textContent = data.views;
      videoLikes.textContent = data.likes;
      videoType.textContent = `${data.type}/${data.mediaExtension}`;
      videoFileSize.textContent = data.mediaFileSize;
      videoQuality.textContent = data.mediaQuality;
      videoDuration.textContent = data.mediaDuration;

      setTimeout(() => {
        videoContainer.innerHTML = `
          <video width="100%" controls poster="${data.mediaThumbnail}">
            <source src="${data.downloadUrl}" type="video/mp4">
          </video>`;
      }, 2000);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function downloadFile(urlPath, filename = "YTfetch_roxyy.mp4") {
  const a = document.createElement("a");
  a.href = `https://ytfetch-backend.onrender.com/api/download?urlPath=${encodeURIComponent(urlPath)}&filename=${filename}`;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
  
    console.log(data)
    videoTitle.textContent = data.title;
    videoDescription.textContent = data.description;
    videoViews.textContent = data.views;
    videoLikes.textContent = data.likes;
    videoType.textContent = `${data.type}/${data.mediaExtension}`;
    videoFileSize.textContent = data.mediaFileSize;
    videoQuality.textContent = data.mediaQuality
    videoDuration.textContent = data.mediaDuration;
    
    
    /*for video
    data.mediaThumbnail
    data.downloadUrl*/
    setTimeout(() => {
    videoContainer.innerHTML =
    `<video width="100%" controls poster="${data.mediaThumbnail}">
      <source src="${data.downloadUrl}" type="video/mp4">
    </video>`
    }, 2000)
  })
  .catch(error => {
    console.error("Error:", error);
  });
  
  }
  
  function downloadFile(urlPath, filename = `YTfetch_roxyy.mp4`) {
  const a = document.createElement('a')
  a.href = `https://ytfetch-backend.onrender.com/api/download?urlPath=${encodeURIComponent(urlPath)}&filename=${filename}`
  a.download = filename
  document.body.appendChild(a);
  a.click()
  document.body.removeChild(a)
  }  
  }
  
  function downloadFile(urlPath, filename = `YTfetch_roxyy.mp4`) {
  const a = document.createElement('a')
  a.href = `https://ytfetch-backend.onrender.com/api/download?urlPath=${encodeURIComponent(urlPath)}&filename=${filename}`
  a.download = filename
  document.body.appendChild(a);
  a.click()
  document.body.removeChild(a)
  }  }
  
  function downloadFile(urlPath, filename = `YTfetch_roxyy.mp4`) {
  const a = document.createElement('a')
  a.href = `https://ytfetch-backend.onrender.com/api/download?urlPath=${encodeURIComponent(urlPath)}&filename=${filename}`
  a.download = filename
  document.body.appendChild(a);
  a.click()
  document.body.removeChild(a)
  }return res.json();
})
  .then(data => {
    
    videoTitle.textContent = data.title;
    videoDescription.textContent = data.description;
    videoViews.textContent = data.views;
    videoLikes.textContent = data.likes;
    videoType.textContent = `${data.type}/${data.mediaExtension}`;
    videoFileSize.textContent = data.mediaFileSize;
    videoQuality.textContent = data.mediaQuality
    videoDuration.textContent = data.mediaDuration;
    
    /*for video
    data.mediaThumbnail
    data.downloadUrl*/
    setTimeout(() => {
    videoContainer.innerHTML =
    `<video width="100%" controls poster="${data.mediaThumbnail}">
      <source src="${data.downloadUrl}" type="video/mp4">
    </video>`
    }, 2000)
  })
  .catch(error => {
    console.error("Error:", error);
  });
  
  }
  
  function downloadFile(urlPath, filename = `YTfetch_roxyy.mp4`){
  const a = document.createElement('a')
  a.href = `https://ytfetch-backend.onrender.com/api/download?urlPath=${encodeURIComponent(urlPath)}&filename=${filename}`
  a.download = filename
  document.body.appendChild(a);
  a.click()
  document.body.removeChild(a)
  }
