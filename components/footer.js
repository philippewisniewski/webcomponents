export class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #333;
                    color: white;
                    padding: 1rem;
                    margin-top: auto;
                }
                footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .social-links a {
                    color: white;
                    text-decoration: none;
                    margin-left: 1rem;
                }
                .social-links a:hover {
                    text-decoration: underline;
                }
            </style>
            <footer>
                <p>© ${new Date().getFullYear()} Philippe Wisniewski</p>
                <div class="social-links">
                    <a href="https://github.com/philippewisniewski" target="_blank" rel="noopener">GitHub</a>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', Footer);