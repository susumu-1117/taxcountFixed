'use strict';
const priceInput = document.getElementById('price');
const taxselect = document.getElementById('tax-select');
const taxcountButton = document.getElementById('taxcount');
const discount = document.getElementById('discount');
const discountBuuton = document.getElementById('discount-button');
const resultDivision = document.getElementById('result-area');

// 税込価格の計算
taxcountButton.onclick = () => {
  const price = parseInt(priceInput.value); // 元価格
  const tax = parseInt(taxselect.value); // 税率
  let taxprice = null; // 税込価格
  if (tax === 5) {
    taxprice = Math.floor(price * 1.05); // 消費5%
    console.log(taxprice);
  } else if (tax === 8) {
    taxprice = Math.floor(price * 1.08); // 消費8%
    console.log(taxprice);
  } else if (tax === 10) {
    taxprice = Math.floor(price * 1.1); // 消費10%
    console.log(taxprice);
  } else if(priceInput.value === '' || taxselect.value === '') { // 価格、税率が空欄の場合
    alert('価格と税率の両方を入力してください');
    return;
  } else {
    return;
  }

  if (taxselect.value !== '' && priceInput.value === '') { // 税率のみ入力されている場合
    alert('価格を入力してください');
    return;
  }
 
  console.log(priceInput.value);
  console.log(taxselect.value);
  resultDivision.innerText = '';

// headerDivision の作成
const headerDivision = document.createElement('div');
headerDivision.setAttribute('class', 'card-header text-bg-primary');
headerDivision.innerText = '税込価格';

// bodyDivision の作成
const bodyDivision = document.createElement('div');
bodyDivision.setAttribute('class', 'card-body');

const paragraph = document.createElement('p');
paragraph.setAttribute('class', 'card-text');
paragraph.innerText = `${price}円 の消費税${tax}%の税込価格は${taxprice} 円です`;
bodyDivision.appendChild(paragraph);

// resultDivision に Bootstrap のスタイルを適用する
resultDivision.setAttribute('class', 'card');

// headerDivision と　bodyDivision を resultDivision に差し込む
resultDivision.appendChild(headerDivision);
resultDivision.appendChild(bodyDivision);

}

// 割引価格の計算
discountBuuton.onclick = () => {
  const price = parseInt(priceInput.value); // 元価格
  const tax = parseInt(taxselect.value); // 税率
  const discountPercent = discount.value; // 割引率
  let discountedPrice = price * (1 - discountPercent / 100); // 割引後価格
  let totalPrice = null;
  if (tax === 5) {
    totalPrice = Math.floor(discountedPrice * 1.05); // 消費税5%
    console.log(totalPrice);
  } else if (tax === 8) {
    totalPrice = Math.floor(discountedPrice * 1.08); // 消費税8%
    console.log(totalPrice);
  } else if (tax === 10) {
    totalPrice = Math.floor(discountedPrice * 1.1); // 消費税10%
    console.log(totalPrice);
  } else if(taxselect.value === '' || priceInput.value === '') { // 価格、税率が空欄の場合
    alert('価格と税率の両方を入力してください');
    return;
  } else {
    return;
  }

  if (discount.value === '') { // 割引率空欄
    alert('割引率を入力してください');
    return;
  } 


  resultDivision.innerText = '';

  // headerDivision の作成
  const headerDivision = document.createElement('div');
  headerDivision.setAttribute('class', 'card-header text-bg-primary');
  headerDivision.innerText = '割引価格';

  // bodyDivision の作成
  const bodyDivision = document.createElement('div');
  bodyDivision.setAttribute('class', 'card-body');

  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'card-text');
  paragraph.innerText = `${price}円の${discountPercent}%引きの消費税${tax}%の価格は${totalPrice}円です`;
  bodyDivision.appendChild(paragraph);

  // resultDivision に Bootstrap のスタイルを適用する
  resultDivision.setAttribute('class', 'card');

  // headerDivision と　bodyDivision を resultDivision に差し込む
  resultDivision.appendChild(headerDivision);
  resultDivision.appendChild(bodyDivision);
}

// ページ再読み込み
function reloadPage() {
  location.reload();
}

document.getElementById('reload').addEventListener('click', reloadPage);