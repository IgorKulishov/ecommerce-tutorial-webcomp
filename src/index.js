class EcommerceTutorial extends HTMLElement {
     constructor() {
        super();
        this.__webcomponent;
        this.__tooltipContainer;
        this.attachShadow({mode:"open"});
        this.shadowRoot.innerHTML = `
            <style>
                #webcomponent {
                    background-color: #44C7F4;
                    max-width: 10rem;
                    position: fixed;
                    bottom: 20vh;
                    right:5vw;
                }
            </style>
            <div id="webcomponent">Web Component</div>
        `;
     }
     connectedCallback() {
         this.__webcomponent = this.shadowRoot.querySelector('#webcomponent');
         this.__webcomponent.addEventListener('mouseenter', this._showTooltip.bind(this));
         this.__webcomponent.addEventListener('mouseleave', this._hideTooltip.bind(this));
     }
     _showTooltip() {
         this.__tooltipContainer = document.createElement('div');
         this.__tooltipContainer.style.position = 'absolute';
         this.__tooltipContainer.style.bottom = '30px';
         this.__tooltipContainer.style.backgroundColor = '#64dea2';
         this.__tooltipContainer.textContent = 'This is tooltip of webcomponent';
         this.__webcomponent.appendChild(this.__tooltipContainer);
     }
    _hideTooltip() {
        this.__webcomponent.removeChild(this.__tooltipContainer);
    }
}
customElements.define('ecommerce-tutorial-webcomp', EcommerceTutorial);
