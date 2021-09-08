function testGS(){
    alert("in testGS");
    let url = "https://script.googleusercontent.com/macros/echo?user_content_key=ysfTQxTEVsOjGlE5HomgvoeaKcV3-Q05U4RM55HrDNkHtzFFianxAo3nrSXYCB1K720RTTLDUR0Ef6dvT9L_YP5Z4UY5h81mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJWR1A_qaup48coehJkUXEO6rr4CCurBVLePZuhYRQqSSleP_x65anGoeqeeo0HVK_lHkGNNQ6mm7fM0GxMc5THg7-VTxnQ9f9z9Jw9Md8uu&lib=M2G_NM1iE-V7R8Qev1U-1xQwqzCun1r2R";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click",testGS);
