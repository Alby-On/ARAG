const formArag = document.getElementById('formContacto');

if (formArag) {

    formArag.addEventListener("submit", function(e) {

        e.preventDefault();

        const formData = new FormData(formArag);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const btn = formArag.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = "Enviando...";
        btn.disabled = true;

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        })
        .then(async (response) => {

            let jsonResponse = await response.json();

            if (response.status == 200) {

                const toast = document.getElementById("toast-success");
                toast.style.display = "block";
                formArag.reset();

            } else {
                console.log(response);
                alert("Error: " + jsonResponse.message);
            }
        })
        .catch((error) => {
            console.log(error);
            alert("Algo salió mal. Por favor, intenta de nuevo.");
        })
        .then(() => {

            btn.innerHTML = originalText;
            btn.disabled = false;

            setTimeout(() => {
                document.getElementById("toast-success").style.display = "none";
            }, 4000);
        });
    });
}
