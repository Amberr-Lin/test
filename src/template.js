export class HeaderComponent extends HTMLElement {
  connectedCallback() {
    // https://www.giant-tec.ai
    this.innerHTML = `
                <nav class="navbar navbar-expand-lg py-4  navbar-light ">
  <div class="container container-fluid d-flex justify-content-between">
    <div class="navbar-brand">
      <a href="/" class="d-flex align-items-center" id="home">
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="33.5 36 133 128"
          viewBox="33.5 36 133 128"
          height="50"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
          data-type="color"
          role="presentation"
          aria-hidden="true"
          aria-label=""
        >
          <g>
            <path
              d="M165.345 49.488l-65.821 66.666c-.745.754-1.758 1.179-2.815 1.179s-2.069-.424-2.815-1.179l-19.747-20a4.022 4.022 0 0 1 .015-5.657 3.95 3.95 0 0 1 5.615.015l16.932 17.149 63.006-63.815a3.953 3.953 0 0 1 5.615-.015 4.022 4.022 0 0 1 .015 5.657zM155.948 96c-2.193 0-3.97 1.791-3.97 4v46.667c0 5.146-4.124 9.333-9.194 9.333h-92.15c-5.069 0-9.194-4.187-9.194-9.333V53.333c0-5.146 4.124-9.333 9.194-9.333h72.404c2.193 0 3.97-1.791 3.97-4s-1.778-4-3.97-4H50.634C41.186 36 33.5 43.775 33.5 53.333v93.334c0 9.558 7.686 17.333 17.134 17.333h92.15c9.448 0 17.134-7.775 17.134-17.333V100c0-2.209-1.778-4-3.97-4z"
              fill="#008afc"
              data-color="1"
            ></path>
          </g>
        </svg>
        <span class="title-text">GIANTEC</span>
      </a>
    </div>
    <button
      class="navbar-toggler border border-light border-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2 12h12v1H2v-1zm0-5h12v1H2V7zm0-5h12v1H2V2z"/>
    </svg>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/vision" id="solutionLink">Solutions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/solutions" id="caseLink">Cases</a>
        </li>
        <li class="nav-item" id="getstartLink">
          <button type="button" class="nav-link btn-link">Get Start</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
            `;
    this.querySelector("#home").addEventListener("click", (e) => {
      e.preventDefault(); // 阻止預設行為
      navigateTo("/");
    });
    this.querySelector("#solutionLink").addEventListener("click", (e) => {
      e.preventDefault(); // 阻止預設行為
      document.title = "Solutions | 傑揚科技";
      navigateTo("vision.html");
    });

    this.querySelector("#caseLink").addEventListener("click", (e) => {
      e.preventDefault();
      document.title = "Cases | 傑揚科技";
      navigateTo("solutions.html");
    });
    this.querySelector("#getstartLink").addEventListener("click", (e) => {
      e.preventDefault();
      document.title = "Get Started | 傑揚科技";
      navigateTo("getstart.html");
    });
  }
}

export class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="text-center text-lg-start">
    <div class="container p-4">
        <div class="row">
            <div class="col-lg-5 col-md-12 mb-4 mb-md-0">
                <a href="https://www.giant-tec.ai" class="d-flex align-items-center">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="33.5 36 133 128" viewBox="33.5 36 133 128"
                        height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color"
                        role="presentation" aria-hidden="true" aria-label="">
                        <g>
                            <path
                                d="M165.345 49.488l-65.821 66.666c-.745.754-1.758 1.179-2.815 1.179s-2.069-.424-2.815-1.179l-19.747-20a4.022 4.022 0 0 1 .015-5.657 3.95 3.95 0 0 1 5.615.015l16.932 17.149 63.006-63.815a3.953 3.953 0 0 1 5.615-.015 4.022 4.022 0 0 1 .015 5.657zM155.948 96c-2.193 0-3.97 1.791-3.97 4v46.667c0 5.146-4.124 9.333-9.194 9.333h-92.15c-5.069 0-9.194-4.187-9.194-9.333V53.333c0-5.146 4.124-9.333 9.194-9.333h72.404c2.193 0 3.97-1.791 3.97-4s-1.778-4-3.97-4H50.634C41.186 36 33.5 43.775 33.5 53.333v93.334c0 9.558 7.686 17.333 17.134 17.333h92.15c9.448 0 17.134-7.775 17.134-17.333V100c0-2.209-1.778-4-3.97-4z"
                                fill="#008afc" data-color="1"></path>
                        </g>
                    </svg>
                    <span class="title-text">GIANTEC</span>
                </a>
                <div class="contact-info">
                    <p class="phone-number">0963-659195</p>
                    <p>
                        <a href="mailto:info@giant-tec.ai">info@giant-tec.ai</a>
                    </p>
                    <p>
                        11F, No. 61, Sec. 2, Daxing W. Rd., Taoyuan Dist., Taoyuan
                        City<br />

                        91027204
                    </p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/vision" >Solutions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/solutions">Cases</a>
                    </li>
                    <li class="nav-item mx-auto">
                        <button type="button" class="nav-link btn-link " id="getstartLink">
                            Get Start
                        </button>
                    </li>
                </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-2 mb-md-0">
                <h5 class="text-uppercase">Subscribe to Our Newsletter</h5>
                <div class="form-content d-flex flex-column ">
                    <label for="email">Email <span>*</span> </label>
                    <input type="email" id="email" name="email" required />
                    <button type="button" class="btn-form mx-auto" id="btn-email">Submit</button>
                </div>
            </div>
        </div>
    </div>

    <div class="text-end website-rights">© 2021 by GIANTEC</div>
</footer>`;
    this.querySelector("#getstartLink").addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("getstart.html");
    });
    this.querySelector("#btn-email").addEventListener("click", (e) => {
      e.preventDefault();
      subscribeRequest();
    });
  }
  }

async function loadContent(page) {
  console.log('loadContent 被觸發:', page);
  await fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .then(()=>{
      const btn_email_getStart=document.getElementById("btn-email_getStart");
      if (btn_email_getStart){
        btn_email_getStart.addEventListener("click", (e) => {
          e.preventDefault();
          subscribeRequest();
        });
      }

      const btn_useremail_getStart=document.getElementById("email_getStart");
      
      if (btn_useremail_getStart){
        btn_useremail_getStart.addEventListener("focus", (e) => {
          document.getElementById("label_required").classList.add("active-label");
          document.getElementById("email_getStart").classList.add("active-border");
        });
      }
      activeLink(page)
    })
    .catch((err) => console.error(err));
}

// window.onload = () => {
//     loadContent('index.html');
// };

// // 監聽瀏覽器歷史紀錄變化
window.addEventListener("popstate", (event) => {
  // console.log("popstate 被觸發:", event);
  if (event.state && event.state.page) {
    loadContent(event.state.page);
  } else {
    loadContent("index.html");
  }
});

// 手動定義的路由變化處理邏輯
function handleRouteChange() {
  // console.log("模擬 popstate: ", window.location.href);
  // console.log("window.name:", window.location.pathname);
  // 在這裡可以執行一些與路由相關的處理
}

// 導航到新的頁面，並推入歷史紀錄
function navigateTo(page) {
  console.log("navigateTo 被觸發:", page);

  // 更改瀏覽器的 URL，而不重新載入頁面
  const routeName = page.replace(".html", ""); // 例如將 'about.html' 轉換為 'about'
  window.history.pushState({ page: page }, "", routeName); // 更改 URL
  loadContent(page); // 載入新的內容
  // 模擬 popstate 行為，因為 pushState 不會觸發 popstate
  // handleRouteChange(); // 手動觸發
}
// 監聽 popstate 事件
// window.addEventListener('popstate', (event) => {
//   console.log('popstate 被觸發:', event);
//   const statePage = event.state?.page || 'index.html'; // 使用預設值
//   // loadContent(statePage); // 根據歷史記錄狀態載入內容
// });


function ajax({ method, url, data = null, headers = {} }) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // 開啟請求
    xhr.open(method.toUpperCase(), url, true);

    // 設定自訂標頭
    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }

    // 設定回傳型別 (例如 JSON)
    xhr.responseType = "json";

    // 處理請求完成的回應
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
          response: xhr.response,
        });
      }
    };

    // 處理請求失敗
    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
        response: xhr.response,
      });
    };

    // 發送請求
    if (data) {
      // 如果資料是物件，轉成 JSON 字串
      if (typeof data === "object" && !(data instanceof FormData)) {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
      } else {
        // 若是 FormData 或字串，直接傳送
        xhr.send(data);
      }
    } else {
      xhr.send();
    }
  });
}

function subscribeRequest(){
  const user_email = document.getElementById('email').value;
  const user_email_getStart = document.getElementById('email_getStart').value;
  const data={usermail:""}
  if(user_email){
    data.usermail= user_email
  }else if(user_email_getStart){
    data.usermail = user_email_getStart
  } else{
    alert("Please enter your email address")
  }
  ajax({
    method: "POST",
    url: "http://localhost:5000/sendMail",
    data:data,
  })
    .then((response) => {
      alert(response.message);
      document.getElementById('email').value = "";
      document.getElementById('email_getStart').value = "";
    })
    .catch((error) => {
      console.error("GET 錯誤：", error);
    });
  
}


// 檢查自訂元素是否已存在再定義
document.addEventListener("DOMContentLoaded", () => {
  // 頁面首次加載時，根據路由載入對應的頁面
  const currentPath = window.location.pathname;

  if (currentPath === "/vision") {
    loadContent("vision.html");
  } else if (currentPath === "/solutions") {
    loadContent("solutions.html");
  } else if (currentPath === "/getstart") {
    loadContent("getstart.html");
  } else {
    loadContent("index.html"); // 預設首頁
  }

  if (!customElements.get("header-component")) {
    customElements.define("header-component", HeaderComponent);
  } else {
    // 清除 header-component 的內容（或進行其他處理）
    const existingHeader = document.querySelector("header-component");
    if (existingHeader) {
      existingHeader.innerHTML = ""; // 清除內容
    }
  }

  if (!customElements.get("footer-component")) {
    customElements.define("footer-component", FooterComponent);
  } else {
    // 清除 header-component 的內容（或進行其他處理）
    const existingHeader = document.querySelector("footer-component");
    if (existingHeader) {
      existingHeader.innerHTML = ""; // 清除內容
    }
  }

});


function activeLink(route_name){
  // 當前 URL 的 hash
  const currentPage = window.location.pathname;

  // 獲取所有的連結
  const links = document.querySelectorAll('a');
  if(route_name.replace(".html","")===currentPage.replace("/","")){
    //移除所有連結的 active 類名
    links.forEach(link => link.classList.remove('active'));
    // // 為當前路徑對應的連結加上 active 類名
    if (currentPage) {
      const activeLink = document.querySelector(`a[href="${currentPage}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }
}

