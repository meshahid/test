export class AboutComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const aboutTemplate = document.createElement("div");
        aboutTemplate.classList.add("intro");
        aboutTemplate.innerHTML = `
        <p>Hi,<br>I'm <span style="color: greenish blue;">Md Shahidur Rahman</span>, a InfosecLearner, code lover, traveller, a passionate learner.<span style="color: #00888f; font-style:oblique;">'I want to be Security Researcher, Husband, Father, Developer!'</span>. Stay fit & Have a great day.
        </p>
        `;
        this.container.appendChild(aboutTemplate);
    }
}
