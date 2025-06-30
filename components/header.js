// components/header.js
export class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('site-header', Header);