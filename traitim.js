function updateHeart() {
    // Lấy tên người dùng đã nhập
    const name = document.getElementById("name").value;
    
    // Tạo hình trái tim với tên được ghép trên đó
    const heart = document.createElement("div");
    heart.classList.add("heart-container");
    
    const heartInner = document.createElement("div");
    heartInner.classList.add("heart");
    
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = name;
    
    heartInner.appendChild(nameDiv);
    heart.appendChild(heartInner);
    
    // Thêm hình trái tim mới vào trang web
    const heartContainer = document.querySelector(".heart-container");
    heartContainer.parentNode.replaceChild(heart, heartContainer);
  }
  