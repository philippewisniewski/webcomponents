export class Layout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    margin: 0;
                }
                main {
                    flex: 1;
                    padding: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    box-sizing: border-box;
                }
            </style>
            <site-header></site-header>
            <main>
                <slot></slot>
            </main>
            <site-footer></site-footer>
        `;
    }
}

customElements.define('page-layout', Layout);