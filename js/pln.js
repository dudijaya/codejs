    function setceklistrikFrameSource(){
        var ceklistrikFrame = document.getElementById("ceklistrik");
        ceklistrikFrame.src= "http://layanan.pln.co.id/ebill/InfoRekening.html?idpel=" +document.getElementById("txtUrl").value;
        ceklistrikFrame.style="height:443px; width:470px;overflow: hidden";
    }