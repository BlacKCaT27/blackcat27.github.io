function showQrCode()
{
    var form = document.getElementById("submissionForm");
    form.style.display = "none";

    var qrCode = document.getElementById("qrCode");
    qrCode.style.display = "block";
}

function checkQrCode()
{
    var formInput = document.getElementById("password");
    if (formInput.value === "FULCRUM")
    {
        showQrCode();
    }
}