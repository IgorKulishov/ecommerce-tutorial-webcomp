class EcommerceTutorial extends HTMLElement {
     constructor() {
        super();
        this.__tooltipContainer;
     }
     connectedCallback() {
         const webComponent = document.createElement('span');
         webComponent.textContent = 'Web Component';
         webComponent.addEventListener('mouseenter', this._showTooltip.bind(this));
         webComponent.addEventListener('mouseleave', this._hideTooltip.bind(this));
         this.appendChild(webComponent);
     }

     _showTooltip() {
         this.__tooltipContainer = document.createElement('div');
         this.__tooltipContainer.textContent = 'This is tooltip of webcomponent';
         this.appendChild(this.__tooltipContainer);
     }

    _hideTooltip() {
        this.removeChild(this.__tooltipContainer);
    }
}
customElements.define('ecommerce-tutorial-webcomp', EcommerceTutorial);
