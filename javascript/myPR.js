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

// 이미지 교체 함수 imageSlideShows
function imageSlideShows(elementId, imageArray, time) {
  let index = 0;
  const element = document.getElementById(elementId);

  setInterval(() => {
    index = (index + 1) % imageArray.length; // 배열 인덱스 순환
    element.src = imageArray[index];        // src 속성 변경
  }, time); // 매개변수로 들어온 초마다 실행
}

//각 섹션에 대한 함수 호출
imageSlideShows("hiphop-image", hiphopImages, 3500);
imageSlideShows("marathon-image", marathonImages, 3500);
imageSlideShows("teaching-image", teachingImages, 3500);