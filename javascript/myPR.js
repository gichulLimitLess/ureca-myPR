/* 힙합 관련 이미지 경로 */
const hiphopImages = [
  "image/hiphop-0.JPG", 
  "image/hiphop-1.JPG",
  "image/hiphop-2.JPG",
  "image/hiphop-3.JPG",
  "image/hiphop-4.JPG",
  "image/hiphop-5.JPG"
];

/* 러닝 관련 이미지 경로 */
const marathonImages = [
  "image/marathon-1.jpeg", 
  "image/marathon-2.JPG",
  "image/marathon-3.JPG",
  "image/marathon-4.JPG",
  "image/marathon-5.JPG"
];

/* 교육 관련 이미지 경로 */
const teachingImages = [
  "image/teaching.JPG", 
  "image/school.jpeg",
  "image/school-2.JPG",
  "image/school-3.JPG",
  "image/school-4.JPG"
];

// 이미지 미리 로드 함수
function preloadImages(imageArray, callback) {
  let loadedImages = 0;
  const totalImages = imageArray.length;

  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        callback(); // 모든 이미지 로딩 완료 시 콜백 실행
      }
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
    };
  });
}

// 이미지 슬라이드쇼 함수
function imageSlideShows(elementId, imageArray, time) {
  let index = 0;
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  // 첫 번째 이미지를 설정
  element.src = imageArray[index];

  setInterval(() => {
    index = (index + 1) % imageArray.length; // 다음 이미지로 이동
    element.src = imageArray[index];
  }, time);
}

// 슬라이드 쇼 시작 함수
function startSlideshow() {
  imageSlideShows("hiphop-image", hiphopImages, 2800);
  imageSlideShows("marathon-image", marathonImages, 2800);
  imageSlideShows("teaching-image", teachingImages, 2800);
}

// 모든 이미지를 미리 로드한 후 슬라이드 쇼 시작
preloadImages([...hiphopImages, ...marathonImages, ...teachingImages], startSlideshow);

