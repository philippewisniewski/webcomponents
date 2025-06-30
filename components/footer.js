// components/footer.js
export class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>© ${new Date().getFullYear()} Philippe Wisniewski</p>
                <div class="social-links">
                    <a href="https://github.com/philippewisniewski">GitHub</a>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', Footer);