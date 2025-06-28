// components/layout.js
export class Layout extends HTMLElement {
    connectedCallback() {
        // Store the original content
        const content = this.innerHTML;
        
        // Create the layout structure
        this.innerHTML = `
            <site-header></site-header>
            <main>
                ${content}
            </main>
            <site-footer></site-footer>
        `;
    }
}

customElements.define('page-layout', Layout);