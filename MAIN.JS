let apikey="56eaa46d50d2df17e41b25e7";
let api =` https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;


currencies = [
  "AED",
  "AFA",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BEF",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTC",
  "BTN",
  "BWP",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUC",
  "CVE",
  "CZK",
  "DEM",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EEK",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GRD",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "ITL",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LTC",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRO",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZM",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SKK",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STD",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMK",
  "ZWL"
];

const fromDropDown= document.getElementById("from-currency");
const toDropDown= document.getElementById("to-currency");
currencies.forEach((currency) => {
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    fromDropDown.add(option);
});

currencies.forEach((currency) => {
  const option=document.createElement("option");
  option.value=currency;
  option.text=currency;
  toDropDown.add(option);
});
fromDropDown.value="USD";
toDropDown.value="AED";

let convertCurrency=()=>{
  const amount= document.querySelector("#amount").value;
  const fromCurrency=fromDropDown.value;
  const toCurrency=toDropDown.value;
 
  if(amount.length !=0){
   fetch(api).then((resp) =>resp.json())
   .then((data) =>{
    let fromExchangeRate=data.conversion_rates[fromCurrency];
    let toExchangeRate=data.conversion_rates[toCurrency];
    const convertedAmount=(amount/fromExchangeRate)*toExchangeRate
    result.innerHTML=`${amount}${fromCurrency}=${convertedAmount}${toCurrency}`});
  }else{alert("Please Add A Currency!!")};
};
document.querySelector("#convert-btn")
.addEventListener("click",convertCurrency);
window.addEventListener("load",convertCurrency);

