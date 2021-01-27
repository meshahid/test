export class ExceptionComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const errorTemplate = document.createElement("div");
        errorTemplate.id = "exception";
        errorTemplate.innerHTML = `<p><span style="color: #e70347;"> Sorry, Invalid Command : Please Try again!</span>
        <br>
            <span style="color: #fce26e;">Type <span style="color: aquamarine;">"help"</span> for valid commands.</span></p>`;
        this.container.appendChild(errorTemplate);
    }
}
