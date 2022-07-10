// Function toast
function Toast(
    { title = '', message = '', type = 'info', duration = 3000 }
) {
    const main = document.getElementById("toast");

    if (main) {
        const toast = document.createElement("div");
        const icons = {
            success: "fa fa-check-circle",
            info: "fa-solid fa-circle-info",
            warning: "fa-solid fa-triangle-exclamation",
            error: "fa-solid fa-bug",
        }
        const timing = 1;
        const icon = icons[type];
        const delay = duration / 1000;
        const timeOut = duration + (timing * 1000);

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, timeOut)

        // Remove toast when click
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId); // Khi clear thì setTimeout sẽ không chạy nữa
            }
        }

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear ${timing}s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    Toast({
        title: 'Success',
        message: 'Registor successfully!',
        type: 'success',
        duration: 3000
    });
}

function showErrorToast() {
    Toast({
        title: 'Error',
        message: 'Wrong password!',
        type: 'error',
        duration: 3000
    });
}