import { interested_fields } from "./data/interested_fields.js";
import { commitments } from "./data/commitments.js";
import { experties } from "./data/experties.js";

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

    // build experties_contents sections elements
    const experties_element = document.querySelector("#experties_contents");
    experties_element.innerHTML = '';

    experties.forEach(item => {
        const element =
            `
        <div class="col p-3">
        <div class="card bg-dark h-100 text-light border border-primary rounded shadow-sm content_card">
            <div class="card-body d-flex flex-column align-items-center text-center">
                <i class="bi bi-${item.icon_class} fs-1 mb-3 text-secondary"></i>
                <p class="fs-5 fw-semibold mb-0">${item.title}</p>
            </div>
        </div>
    </div>
        `;
        experties_element.innerHTML += element;
    });


})