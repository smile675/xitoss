import { interested_fields } from "./data/interested_fields.js";
import { commitments } from "./data/commitments.js";

window.addEventListener("DOMContentLoaded", event => {

    // build interested fields section items
    const interested_fields_element = document.querySelector("#fields_contents")

    interested_fields_element.innerHTML = '';

    interested_fields.forEach(item => {

        const fieldElement = `
            <div class="col p-3">
                <div class="card h-100 bg-dark content_card">
                    <div class="card-body d-flex gap-3">
                        <i class="bi bi-${item.icon_class} fs-1 text-secondary"></i>
                        <div>
                            <p class="fs-3 fw-bold text-light">${item.title}</p>
                            <p class="text-secondary">${item.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        interested_fields_element.innerHTML += fieldElement;

    });

    // build commitments section contents
    const commitment_element = document.querySelector("#commitment_contents");

    commitment_element.innerHTML = '';

    commitments.forEach(item => {
        const element = `
        <div class="col p-3">
                <div class="card h-100 bg-dark content_card">
                    <div class="card-body d-flex gap-3">
                        <i class="bi bi-${item.icon_class} fs-1 text-secondary"></i>
                        <div>
                            <p class="fs-3 fw-bold text-light">${item.title}</p>
                            <p class="text-secondary">${item.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        commitment_element.innerHTML += element;
    });

})