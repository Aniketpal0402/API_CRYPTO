let url="https://api.coincap.io/v2/assets";

async function cryptofun(){
    let jsondatacrypto=await fetch(url);
    let crypto=await jsondatacrypto.json();
    let cryptodata= crypto.data;

    // console.log(cryptodata.length);

    for(let i=0;i<cryptodata.length;i++){
       let newelement=document.createElement("tr");
    //    newelement.classList.add("crypto");
       newelement.innerHTML=`
       <td>${cryptodata[i].rank}</td>
       <td>${cryptodata[i].name}</td>
       <td>${cryptodata[i].priceUsd}</td>
       `;
       document.querySelector("#cryptotable").appendChild(newelement);
    //    document.write( cryptodata[i].rank+"     "+cryptodata[i].name+"    " +cryptodata[i].priceUsd+"<br>");
    }
}
cryptofun();