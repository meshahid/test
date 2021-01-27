export class ContactComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const contactTemplate = document.createElement("div");
        contactTemplate.classList.add("contact");
        contactTemplate.innerHTML = `
        <p>You can join with me. Clickable <span style="color:aqua;">links</span> below.</p>

        <ul>
            <li><span style="color: rgb(9, 197, 9);">&rArr;</span> <a href="https://github.com/thashahid/" target="_blank">Github</a></li>
            <li><span style="color: rgb(9, 197, 9);">&rArr;</span> <a href="https://twitter.com/thashahid/" target="_blank">Twitter</a></li>
        </ul>

        <p>Have fun and Enjoy your time</p>
        `;
        this.container.appendChild(contactTemplate);
    }
}
