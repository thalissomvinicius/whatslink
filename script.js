document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const sendButton = document.getElementById("sendButton");
    const copyButton = document.getElementById("copyButton");

    phoneInput.addEventListener("input", function () {
        let phoneNumber = phoneInput.value;

        // Remove todos os caracteres não numéricos
        phoneNumber = phoneNumber.replace(/\D/g, "");

        // Formata o número no padrão (DDD) + NÚMERO
        if (phoneNumber.length >= 2) {
            phoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2)}`;
        }

        // Adiciona o traço depois dos primeiros 6 dígitos (DDD) + NÚMERO
        if (phoneNumber.length >= 7) {
            phoneNumber = `${phoneNumber.substring(0, 10)}-${phoneNumber.substring(10)}`;
        }

        // Define o valor formatado de volta no campo
        phoneInput.value = phoneNumber;
    });

    sendButton.addEventListener("click", function () {
        const phoneNumber = phoneInput.value;

        if (phoneNumber) {
            // Remove espaços em branco, parênteses e traços
            const formattedPhoneNumber = phoneNumber.replace(/[\s()-]/g, "");

            const whatsappLink = `https://wa.me/${formattedPhoneNumber}`;
            window.open(whatsappLink, "_blank");
        } else {
            alert("Por favor, preencha o número de telefone.");
        }
    });

    copyButton.addEventListener("click", function () {
        const phoneNumber = phoneInput.value;

        if (phoneNumber) {
            // Remove espaços em branco, parênteses e traços
            const formattedPhoneNumber = phoneNumber.replace(/[\s()-]/g, "");

            const whatsappLink = `https://wa.me/${formattedPhoneNumber}`;
            copyToClipboard(whatsappLink);
            alert("Link copiado para a área de transferência.");
        } else {
            alert("Por favor, preencha o número de telefone antes de copiar.");
        }
    });

    // Função para copiar texto para a área de transferência
    function copyToClipboard(text) {
        const textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    }
});