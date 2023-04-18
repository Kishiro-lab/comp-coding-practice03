// ハンバーガーアイコンを押したときの処理
// burger header-nav body-mask

const burgerBtn = document.querySelector('.burger-btn');
const headerNav = document.querySelector('.header-nav');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
  if(burgerBtn.classList.contains('cross')) {
    burgerBtn.classList.remove('cross');
    headerNav.classList.remove('open');
    body.classList.remove('masked');
  } else {
    burgerBtn.classList.add('cross');
    headerNav.classList.add('open');
    body.classList.add('masked');
  }
});

// Intersection Observer API
// site-logoとmenuアイコンの色を変える処理

const kv = document.querySelector('.kv-wrapper');
const fv = document.querySelector('.fv');
const siteTitle = document.querySelector('.site-title');

function kvCallback(entries) {
  if (entries[0].isIntersecting) {
    siteTitle.classList.remove('black');
  } else {
    siteTitle.classList.add('black');
  }
}
function fvCallback(entries) {
  if (entries[0].isIntersecting) {
    burgerBtn.classList.remove('black');
  } else {
    burgerBtn.classList.add('black');
  }
}

// ページに応じてthresholdの値を変える
let kvThreshold;
let fvThreshold;
if (document.title == 'Practice03') {
  kvThreshold = .06;
  fvThreshold = .04;
} else {
  kvThreshold = .09;
  fvThreshold = .07;
}
const kvOptions = {
  threshold: [kvThreshold],
}
const fvOptions = {
  threshold: [fvThreshold],
}
// observerを作成して観測
const kvObserver = new IntersectionObserver(kvCallback, kvOptions);
const fvObserver = new IntersectionObserver(fvCallback, fvOptions);

kvObserver.observe(kv);
fvObserver.observe(fv);



