import locationIcon from "./imgs/icons/location.svg";
import phoneIcon from "./imgs/icons/phone.svg";
import mailIcon from "./imgs/icons/mail.svg";

export default function renderContactContent(element) {
  const contactHTML = `
  <div class="contact-container">
    <div class="contacts">
    <div class="contact-card">
      <img
        src="${locationIcon}"
        alt="Location"
        srcset=""
      />
      <p id="address">301 Queen Anne Ave N, Seattle, WA 98109, USA</p>
    </div>
    <div class="contact-card">
      <img src="${phoneIcon}" alt="Phone" srcset="" />
      <p id="phone">+1(206)828-6324</p>
    </div>
    <div class="contact-card">
      <img src="${mailIcon}" alt="Email" srcset="" />
      <p id="email">pozdinni@gmail.com</p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1428.6949123044308!2d-122.35765117846071!3d47.62148821830265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901544eab22879%3A0xc0b049c099f33870!2s301%20Queen%20Anne%20Ave%20N%2C%20Seattle%2C%20WA%2098109%2C%20USA!5e0!3m2!1sen!2sge!4v1694522366599!5m2!1sen!2sge"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
    </div>  
</div>  
  `;
  element.innerHTML = "";
  element.insertAdjacentHTML("afterbegin", contactHTML);
}
