function testGS(){
    alert("in testGS");
    //let url = "https://script.googleusercontent.com/macros/echo?user_content_key=ysfTQxTEVsOjGlE5HomgvoeaKcV3-Q05U4RM55HrDNkHtzFFianxAo3nrSXYCB1K720RTTLDUR0Ef6dvT9L_YP5Z4UY5h81mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJWR1A_qaup48coehJkUXEO6rr4CCurBVLePZuhYRQqSSleP_x65anGoeqeeo0HVK_lHkGNNQ6mm7fM0GxMc5THg7-VTxnQ9f9z9Jw9Md8uu&lib=M2G_NM1iE-V7R8Qev1U-1xQwqzCun1r2R";
    const url = "https://script.google.com/macros/s/AKfycbwtFx0tj_sf9WEJYJXFvejmbbZXHwRWChyNAFPA-Q1QWp-ap0bq0v1IoB1dy9o-JEPzGA/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

function addGS(){
    //const url = "https://script.googleusercontent.com/macros/echo?user_content_key=ysfTQxTEVsOjGlE5HomgvoeaKcV3-Q05U4RM55HrDNkHtzFFianxAo3nrSXYCB1K720RTTLDUR0Ef6dvT9L_YP5Z4UY5h81mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJWR1A_qaup48coehJkUXEO6rr4CCurBVLePZuhYRQqSSleP_x65anGoeqeeo0HVK_lHkGNNQ6mm7fM0GxMc5THg7-VTxnQ9f9z9Jw9Md8uu&lib=M2G_NM1iE-V7R8Qev1U-1xQwqzCun1r2R";
    //const url = "https://docs.google.com/spreadsheets/d/1veX9Y5YR47W0eD33mu1DOYBi_clpGnkhe78St9Vamdw/edit?usp=sharing";
    const url = "https://script.google.com/macros/s/AKfycbwtFx0tj_sf9WEJYJXFvejmbbZXHwRWChyNAFPA-Q1QWp-ap0bq0v1IoB1dy9o-JEPzGA/exec";
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ticker:"QQQ",flag:"0",snooze:"",shares:"0"}) // body data type must match "Content-Type" header
    });
    console.log(body);
}

document.getElementById("btn2").addEventListener("click",addGS);

document.getElementById("btn").addEventListener("click",testGS);
