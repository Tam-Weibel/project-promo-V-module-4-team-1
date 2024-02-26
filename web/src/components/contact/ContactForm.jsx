import '../../scss/layout/ContactForm.scss';
import '../../scss/layout/Main.scss';

function ContactForm() {
  return (
    <main className='main'>
    <form action="https://formspree.io/f/xrgwndbn" method="POST" className="form">
        <div className="herocontact">
            <h1 className="herocontact__title">PROYECTOS MOLONES</h1>
            <p className="herocontact__text">Contacta con nosotras</p>
        </div>

        <div className="">
            <label htmlFor="name">Nombre completo <span className="">*</span></label>
            <input className="" type="text" id="name" placeholder="Nombre..." required />
        </div>

        <div className="">
            <label htmlFor="email">Email <span className="">*</span></label>
            <input className="" type="email" id="email" placeholder="nombre.apellidos@mail.com" required />
        </div>

        <div className="">
            <label htmlFor="number">Teléfono</label>
            <input className="" type="tel" id="number" placeholder="Ej:123456789" />
        </div>

        <div className="">
            <label htmlFor="message">Mensaje <span className="">*</span></label>
            <textarea className="" name="message" id="message" cols="30" rows="10" placeholder="¿Qué necesitas?"></textarea> 
            
        </div>
        <input className="" type="submit" value="Enviar"></input>
    </form>
    </main>
  )
}

export default ContactForm