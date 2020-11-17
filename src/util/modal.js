import MicroModal from "micromodal";
import empty from "./action";

let modalTitleElement = null;
let modalContentElement = null;

let modalButtonClose = null;
let modalButtonConfirm = null;
let modalButtonCancel = null;

const config = {};
const modalId = 'modal';

/* Shows a generic error message */
export function showGenericError() {
    const title = "Error";
    const text = "An error has occurred. Please try again later.";

    modalButtonClose.style.display = "unset";
    modalButtonConfirm.style.display = "none";
    modalButtonCancel.style.display = "none";

    showModal(title, text);
}

/* Shows a error message from the backend */
export function showError(backendError) {
    const title = "Error";
    const text = backendError;

    modalButtonClose.style.display = "unset";
    modalButtonConfirm.style.display = "none";
    modalButtonCancel.style.display = "none";

    showModal(title, text);
}


/* Displays a customizable message */
export function showMessage(title, text) {
    title = title || "Info";
    text = text || "";

    modalButtonClose.style.display = "unset";
    modalButtonConfirm.style.display = "none";
    modalButtonCancel.style.display = "none";

    showModal(title, text);
}

/* Displays a message with buttons to confirm and cancel */
/* onConfirm: action that should be executed when confirming modal */
/* onCancel: action that should be executed when canceling/denying modal */
export function showActions(title, text, onConfirm, onCancel) {
    if (!onConfirm) {
        console.error("modal.js: please provide an onConfirm function to execute!")
        onConfirm = empty;
    }
    
    title = title || "Info";
    text = text || "";
    onConfirm = onConfirm || empty;
    onCancel = onCancel || empty;

    modalButtonClose.style.display = "none";
    modalButtonConfirm.style.display = "unset";
    modalButtonCancel.style.display = "unset";

    modalButtonConfirm.onclick = onConfirm;
    modalButtonCancel.onclick = onCancel;

    showModal(title, text);
}

function showModal(title, text) {
    modalTitleElement.innerText = title;
    modalContentElement.innerText = text;

    MicroModal.show(modalId, config);
}

export function initializeModal() {
    if (!modalTitleElement) {
        modalTitleElement = document.getElementById('modal-title');
    }

    if (!modalContentElement) {
        modalContentElement = document.getElementById('modal-content');
    }

    if (!modalButtonClose) {
        modalButtonClose = document.getElementById('modal-btn-close');
    }

    if (!modalButtonConfirm) {
        modalButtonConfirm = document.getElementById('modal-btn-confirm');
    }

    if (!modalButtonCancel) {
        modalButtonCancel = document.getElementById('modal-btn-cancel');
    }
}