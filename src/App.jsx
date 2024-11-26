import React, { useState } from 'react';
import { Button } from "./components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card.jsx";
import { Facebook, Instagram, Linkedin, Mail, MessageSquare, Monitor, MousePointer, Search, Star } from 'lucide-react';

const LandingPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <header className="bg-indigo-700 text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logotipo */}
          <div className="text-2xl font-bold">
            <a href="#">Digital Boost</a>
          </div>

          {/* Menú de navegación */}
          <nav className="hidden md:flex space-x-6">
            <a href="#servicios" className="hover:underline">Servicios</a>
            <a href="#testimonios" className="hover:underline">Testimonios</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>

          {/* Botón de llamada a la acción */}
          <div>
            <Button
              className="bg-white text-indigo-700 hover:bg-gray-100 hidden md:inline-block"
              onClick={openModal}

            >
              Contáctanos
            </Button>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {open && (
          <div className="bg-indigo-800 md:hidden">
            <a href="#servicios" className="block px-6 py-3 border-b border-indigo-700 hover:bg-indigo-600">Servicios</a>
            <a href="#testimonios" className="block px-6 py-3 border-b border-indigo-700 hover:bg-indigo-600">Testimonios</a>
            <a href="#contacto" className="block px-6 py-3 hover:bg-indigo-600">Contacto</a>
          </div>
        )}
      </header>

      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Impulsa tu negocio en el mundo digital
            </h1>
            <p className="text-xl mb-8">
              Ayudamos a pequeñas y medianas empresas a crecer y destacar con estrategias de marketing digital efectivas y personalizadas.
            </p>
            <Button
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={openModal}
            >
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Consulta Gratuita</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Cuéntanos sobre tu negocio"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">
                  Enviar
                </Button>
              </div>
            </form>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}


      <section id="mision-vision" className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          {/* Título */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Misión y Visión</h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Misión */}
            <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestra misión es proporcionar soluciones innovadoras y personalizadas para satisfacer las necesidades de nuestros clientes, promoviendo un impacto positivo en la sociedad y fomentando el desarrollo sostenible.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser líderes en el sector, reconocidos por nuestra excelencia, compromiso y capacidad para transformar desafíos en oportunidades, construyendo un futuro mejor para todos.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Servicios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <Monitor className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Diseño Web</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creamos sitios web atractivos y funcionales que convierten visitantes en clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gestión profesional de redes sociales para construir una comunidad engaged.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <MousePointer className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Publicidad Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Campañas optimizadas para maximizar tu ROI y alcanzar a tu audiencia ideal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="italic text-gray-600">
                "Gracias a sus estrategias de marketing, nuestro negocio ha crecido como nunca. Altamente recomendados."
              </p>
              <h3 className="text-sm font-semibold mt-4">- Ana López</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="italic text-gray-600">
                "Su equipo de diseño creó una página web espectacular para nuestra marca. Excelente trabajo."
              </p>
              <h3 className="text-sm font-semibold mt-4">- Carlos Martínez</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="map-section" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Título */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Encuéntranos</h2>
          <p className="text-gray-600 mb-8">
            Estamos aquí para ayudarte. Encuentra nuestra ubicación fácilmente.
          </p>

          {/* Mapa */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.418664057866!2d-122.08424968468115!3d37.42199997982647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5ae6b6326e1%3A0x213e4ce3d9a6b6f9!2sGoogleplex!5e0!3m2!1sen!2sus!4v1683248731234!5m2!1sen!2sus"
              title="Nuestra ubicación"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="featured-video" className="py-12 bg-gray-100 h-[40em] ">
        <div className="container mx-auto px-6 text-center h-full">
          {/* Título */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Video Destacado</h2>
          <p className="text-gray-600 mb-8">
            Descubre más sobre este tema con nuestro video destacado.
          </p>

          {/* Video */}
          <div className="aspect-w-16 h-[35em] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YfzRauVRMHA"
              title="Video destacado"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>





      {/* Por qué elegirnos */}
      <section className="py-20 mt-5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por qué elegir Digital Boost?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Estrategia Personalizada</h3>
              <p className="text-gray-600">Soluciones adaptadas a tus objetivos específicos</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resultados Medibles</h3>
              <p className="text-gray-600">Reportes detallados y KPIs transparentes</p>
            </div>
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Soporte Continuo</h3>
              <p className="text-gray-600">Acompañamiento en cada paso del proceso</p>
            </div>
            <div className="text-center">
              <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tecnología Moderna</h3>
              <p className="text-gray-600">Utilizamos las últimas herramientas digitales</p>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonios */}


      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            ¿Listo para impulsar tu presencia digital?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100" onClick={openModal}
          >


            Contactar Ahora
          </Button>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Digital Boost</h3>
              <p className="text-gray-400">
                Tu socio en marketing digital para el crecimiento de tu negocio.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@digitalboost.com</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li>Diseño Web</li>
                <li>Marketing en Redes Sociales</li>
                <li>Publicidad Digital</li>
                <li>SEO</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 cursor-pointer hover:text-blue-400" />
                <Instagram className="h-6 w-6 cursor-pointer hover:text-pink-400" />
                <Linkedin className="h-6 w-6 cursor-pointer hover:text-blue-400" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Digital Boost. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;