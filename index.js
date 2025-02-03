import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './template.js';  // 確保這行只出現一次

import './assets/style/all.scss';
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      once: true, // 動畫只執行一次
    });
    //watchScroll();
});
  // function watchScroll() {  
  //   window.addEventListener('scroll', function() {
  //     const banner = document.querySelector('.banner-container');
  //     const scrollPosition = window.scrollY;
      
  //     // 計算右側偏移量
  //     const maxScroll = 300; // 控制最大滾動距離
  //     const positionOffset = Math.min(scrollPosition / maxScroll * 10, 5); // 最大偏移為 5%
  
  //     // 更新背景位置
  //     banner.style.backgroundPosition = `right ${5 + positionOffset}%`;
      
  //     console.log("scrollPosition:", scrollPosition, "positionOffset:", positionOffset);
  //   });
  // }

