export const footerTemplate = `
<style>

:host {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: hsl(180, 5%, 15%); /*hsl(200, 60%, 15%);*/
  text-align: left;
  contain: content;
}

.footer-container .logo svg {
  width: 24px;
  position: relative;
  top: 4px;
  margin-right: 2px;
}

.footer-container .logo svg path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);
  stroke-width: 3px;
}

.footer-container .logo {
  font-size: 17px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-right: 6px;
}

.footer-container {
  grid-column: text;
}

.footer-container .nav {
  font-size: 0.9em;
  margin-top: 1.5em;
}

.footer-container .nav a {
  color: rgba(255, 255, 255, 0.8);
  margin-right: 6px;
  text-decoration: none;
}

.footer-container a {
  color: rgba(255, 255, 255, 1.0);
  text-decoration: none;
}

</style>

<div class='footer-container'>

  <a href="/" class="logo">
    <img src="logo.svg" width="20px" style="margin-bottom: -4px">
    The OpenDP Privacy Budget Registry
  </a>  
  
  <div>
  This is a living resource updated periodically to support the responsible adoption of differential privacy.
  </div>

  <div>
  This document is not legal advice nor bears legal liability for the users implementaiton.
  </div>

  <div>
  The website leverages the template of <a href="https://distill.pub/">distill.pub</a>.
  </div>

</div>

`;
