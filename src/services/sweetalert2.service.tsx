import Swal from "sweetalert2";

export function successNotification(title: string, message: string) {
    Swal.fire({
        icon: 'success',
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 3000
    })
}

export function errorNotification(title: string, message: string) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 3000
    })
}

export function loadingScreen() {
    Swal.fire({
        title: '',
        html: 'Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    });
}

export function closeSwal() {
    Swal.close();
}
export function alertConfirmation(title: string, message: string, icon: any) {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think',
    }).then((result) => {
        if (result.value) {
            Swal.fire('Removed!', 'Product removed successfully.', 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Product still in our database.)', 'error');
        }
    });
}