export class SkillsComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const skillsTemplate = document.createElement("div");
        skillsTemplate.classList.add("skills");
        skillsTemplate.innerHTML = `
        <p>I’m currently learning everything</p>
        
        <p style="color: #64f105;"><span style="color: #fec304;">&rArr;</span> Learn > Practice >Eat > Repeat .</p>
        `;
        this.container.appendChild(skillsTemplate);
    }
}
