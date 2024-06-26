/*
 * © Copyright (c) Betim Cakiqi 2024. All rights reserved.
 * This code is the property of Betim Cakiqi. The design elements are the property of Figma.
 * You may not reproduce, distribute, modify, or use this code without permission.
 */
class ContactComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
    <link rel="stylesheet" href="./components/contact-form/contact.css">
    <section id="contact" class="section">
    <div class="contact-section-container">
        <div class="contact-title">
            <span>Contact</span>
        </div>
        <hr id="contact-seperator">
        <div class="contact-form-container">
            <form id="contact-form" action="https://formcarry.com/s/uGLqa5jmEHa" method="POST" enctype="multipart/form-data">
                <div class="contact-form-information-only">
                    <div class="contact-form-information">
                        <p id="input-txtarea-title">Name<span class="required-field">*</span></p>
                        <input type="text" name="name" placeholder="John Doe" maxlength="50" required autocomplete="name">
                        <span class="name-error" data-error-for="name"></span>
                    </div>
                    <div class="contact-form-information">
                        <p id="input-txtarea-title">Email Address<span class="required-field">*</span></p>
                        <input type="email" name="email" placeholder="example@example.com" maxlength="50" required autocomplete="email">
                        <span class="email-error" data-error-for="email"></span>
                    </div>
                </div>
                <div class="contact-form-message-submit-only">
                    <div class="contact-form-information">
                        <p id="input-txtarea-title">Your message<span class="required-field">*</span></p>
                        <textarea name="message" id="your-message-txt" placeholder="Enter your message here" maxlength="600" required></textarea>
                        <span class="message-error" data-error-for="message"></span>
                    </div>
                    <div class="contact-form-information">
                        <input id="contact-form-submit" type="submit" value="Submit">
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
        `
    }
}
customElements.define('contact-form', ContactComponent)