let total = 0;
function handleClickBtn(target) {
  const cartContainer = document.getElementById("cart-container");
  const itemName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  cartContainer.appendChild(li);
  const priceString =
    target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  const priceFloat = parseFloat(priceString);
  const priceTwoDigit = +priceFloat.toFixed(2);
  total = total + priceTwoDigit;
  const totalTwoDigit = +total.toFixed(2);
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.innerText = totalTwoDigit;
  const netTotalElement = document.getElementById("total-amount");
  netTotalElement.innerText = totalTwoDigit;
  const couponButton = document.getElementById("couponBtn");
  const purchaseBtn = document.getElementById("purchaseBtn");
  if (totalTwoDigit >= 200) {
    couponButton.disabled = false;
    couponButton.style.backgroundColor = "#E527B2";
  } else {
    couponButton.disabled = true;
  }
  if (totalTwoDigit > 0) {
    purchaseBtn.disabled = false;
    purchaseBtn.style.backgroundColor = "#E527B2";
  } else {
    purchaseBtn.disabled = true;
  }
}

function calculateDiscount() {
  const couponFieldValue = document.getElementById("couponField");
  const couponFieldValueString = couponFieldValue.value;
  if (couponFieldValueString === "SELL200") {
    const percentage = 20;
    const discountAmount = (total * percentage) / 100;
    const discountAmountElement = document.getElementById("discount-amount");
    discountAmountTwoDigit = +discountAmount.toFixed(2);
    discountAmountElement.innerText = discountAmountTwoDigit;
    const netTotalElement = document.getElementById("total-amount");
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = parseFloat(totalPriceElement.innerText);
    const netTotalAmount = totalPrice - discountAmountTwoDigit;
    const netTotalTwoDigit = +netTotalAmount.toFixed(2);
    netTotalElement.innerText = netTotalTwoDigit;
    couponFieldValue.value = "";
  } else {
    alert("Please enter valid Coupon Code");
  }
}

function MakePurchase() {
  const dialog = document.getElementById("my_modal");
  const netTotalElement = document.getElementById("total-amount");
  const netTotalAmount = netTotalElement.innerText;
  const netTotalAmountNum = parseFloat(netTotalAmount);
  if (netTotalAmountNum > 0) {
    dialog.showModal();
  } else {
    alert("Add some product to cart first");
  }
}

const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", clearCart);

function clearCart() {
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.innerText = "00.00";
  const discountAmountElement = document.getElementById("discount-amount");
  discountAmountElement.innerText = "00.00";
  const netTotalElement = document.getElementById("total-amount");
  netTotalElement.innerText = "00.00";
  total = 0;
  const couponButton = document.getElementById("couponBtn");
  couponButton.style.backgroundColor = "#dfacd1";
  couponButton.disabled = true;
  const purchaseBtn = document.getElementById("purchaseBtn");
  purchaseBtn.style.backgroundColor = "#dfacd1";
  purchaseBtn.disabled = true;
  const listItems = document.getElementById("cart-container");
  while (listItems.hasChildNodes()) {
    listItems.removeChild(listItems.firstChild);
  }
}
