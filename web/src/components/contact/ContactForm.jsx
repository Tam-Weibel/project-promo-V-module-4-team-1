import "../../scss/layout/ContactForm.scss";
import "../../scss/layout/Main.scss";

function ContactForm() {
  return (
    <main className="main">
      <form
        action="https://formspree.io/f/xrgwndbn"
        method="POST"
        className="contactForm"
      >
        <div className="herocontact">
          <h1 className="herocontact__title">PROYECTOS MOLONES</h1>
          <p className="herocontact__text">Contacta con nosotras</p>
        </div>

        <label htmlFor="name" className="labelForm">
          Nombre completo 
        </label>
        <input
          className="inputForm"
          type="text"
          id="name"
          placeholder="Nombre Apellidos"
          required
        />

        <label htmlFor="email"  className="labelForm">
          Email 
        </label>
        <input
          className="inputForm"
          type="email"
          id="email"
          placeholder="nombre.apellidos@mail.com"
          required
        />

        <label htmlFor="number"  className="labelForm">Teléfono (opcional)</label>
        <input className="inputForm" type="tel" id="number" placeholder="Ej: 123456789" />

        <label htmlFor="message"  className="labelForm">
          Mensaje 
        </label>
        <textarea
          className="textArea"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="¿Qué necesitas?"
        ></textarea>

        <input className="btn btnForm" type="submit" value="Enviar"></input>
      </form>
    </main>
  );
}

export default ContactForm;
