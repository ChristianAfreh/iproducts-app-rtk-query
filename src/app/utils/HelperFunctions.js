

export const getDiscountedPrice = (discountPercentVal,priceVal) => {
    const discountVal = priceVal * (discountPercentVal/100);

    //console.log(discountVal);
    const discountedAmount = priceVal - discountVal;

    //console.log(discountedAmount);
    return discountedAmount;
}


