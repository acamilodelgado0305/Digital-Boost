import React from 'react';
import inicio from './images/inicio.jpg';
import resultados from './images/resultados.jpg';

const RadioLinkCalcManual = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-6 md:p-12 font-sans">
      {/* Encabezado con Logo y Título */}
      <header className="flex items-center justify-between mb-12 border-b pb-6">
        <div className="flex items-center space-x-4">

          <h1 className="text-4xl font-bold text-indigo-800">Manual de Usuario: RadioLinkCalc</h1>
        </div>
        <div className="text-sm text-gray-500">
          Versión 1.0 | Fecha: 19 de mayo de 2025
        </div>
      </header>

      {/* Índice */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Índice</h2>
        <ul className="list-none space-y-2">
          <li><a href="#introduccion" className="text-blue-600 hover:underline">1. Introducción</a></li>
          <li><a href="#interfaz" className="text-blue-600 hover:underline">2. Navegación por la Interfaz</a></li>
          <li><a href="#como-usar" className="text-blue-600 hover:underline">3. Cómo Usar la Calculadora</a></li>
          <li><a href="#resultados" className="text-blue-600 hover:underline">4. Resultados</a></li>
          <li><a href="#perfil-elevacion" className="text-blue-600 hover:underline">5. Perfil de Elevación</a></li>
          <li><a href="#errores" className="text-blue-600 hover:underline">6. Errores Comunes y Soluciones</a></li>
          <li><a href="#soporte" className="text-blue-600 hover:underline">7. Soporte Técnico</a></li>
        </ul>
      </section>

      {/* Introducción */}
      <section id="introduccion" className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">1. Introducción</h2>
        <p className="text-gray-700 leading-relaxed">
          RadioLinkCalc es una herramienta avanzada diseñada para ingenieros y técnicos en telecomunicaciones, que permite calcular y evaluar la viabilidad de enlaces de radio. Este manual te guiará paso a paso para aprovechar al máximo sus funciones, desde la configuración inicial hasta la interpretación de resultados.
        </p>
      </section>

      {/* Navegación por la Interfaz */}
      <section id="interfaz" className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">2. Navegación por la Interfaz</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={inicio} // Usa la captura de pantalla que proporcionaste
            alt="Interfaz de RadioLinkCalc"
            className="w-full max-h-96 object-contain border border-gray-300 rounded-lg mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Coordenadas:</strong> Ingresa las coordenadas geográficas del transmisor y receptor.</li>
              <li><strong>Parámetros de los Equipos:</strong> Configura la frecuencia y altura de las antenas.</li>
              <li><strong>Parámetros del Transmisor:</strong> Define potencia, pérdidas y ganancias.</li>
              <li><strong>Parámetros de Simulación:</strong> Selecciona número de muestras y dataset topográfico.</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Botón Calcular:</strong> Inicia el cálculo del enlace.</li>
              <li><strong>Resultados:</strong> Visualiza métricas como distancia, pérdida de señal y cobertura.</li>
              <li><strong>Perfil de Elevación:</strong> Muestra el relieve entre transmisor y receptor.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cómo Usar la Calculadora */}
      <section id="como-usar" className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">3. Cómo Usar la Calculadora</h2>

        <div className="space-y-6">
          {/* Coordenadas */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800 mb-2">3.1 Coordenadas</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Ingresa las coordenadas geográficas del transmisor y receptor en formato decimal:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Latitud Transmisor: Ejemplo <code className="bg-gray-200 px-1 rounded">7.357130556</code></li>
              <li>Longitud Transmisor: Ejemplo <code className="bg-gray-200 px-1 rounded">-72.65921111</code></li>
              <li>Latitud Receptor: Ejemplo <code className="bg-gray-200 px-1 rounded">7.380841667</code></li>
              <li>Longitud Receptor: Ejemplo <code className="bg-gray-200 px-1 rounded">-72.65215833</code></li>
            </ul>
            <div className="mt-4">
             
            </div>
          </div>

          {/* Parámetros de los Equipos */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800 mb-2">3.2 Parámetros de los Equipos</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Define la frecuencia de operación y la altura de las antenas:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Frecuencia Mínima: Ejemplo <code className="bg-gray-200 px-1 rounded">5.700 GHz</code></li>
              <li>Frecuencia Máxima: Ejemplo <code className="bg-gray-200 px-1 rounded">5.720 GHz</code></li>
              <li>Altura del Transmisor: Ejemplo <code className="bg-gray-200 px-1 rounded">5 m</code></li>
              <li>Altura del Receptor: Ejemplo <code className="bg-gray-200 px-1 rounded">5 m</code></li>
            </ul>
          </div>

          {/* Parámetros del Transmisor */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800 mb-2">3.3 Parámetros del Transmisor</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Especifica las características del equipo de transmisión:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Potencia: Ejemplo <code className="bg-gray-200 px-1 rounded">1 W</code></li>
              <li>Pérdida de Línea: Ejemplo <code className="bg-gray-200 px-1 rounded">0.1 dB</code></li>
              <li>Ganancia del Transmisor: Ejemplo <code className="bg-gray-200 px-1 rounded">12 dBi</code></li>
              <li>Ganancia del Receptor: Ejemplo <code className="bg-gray-200 px-1 rounded">12 dBi</code></li>
              <li>Sensibilidad del Receptor: Ejemplo <code className="bg-gray-200 px-1 rounded">-107 dBm</code></li>
            </ul>
            <div className="mt-4">
             
            </div>
          </div>

          {/* Parámetros de Simulación */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800 mb-2">3.4 Parámetros de Simulación</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Establece cuántas muestras tomar y qué conjunto de datos usar:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Número de Puntos/Muestras: Ejemplo <code className="bg-gray-200 px-1 rounded">100</code></li>
              <li>Dataset Perfil: Ejemplo <code className="bg-gray-200 px-1 rounded">mapzen</code></li>
            </ul>
          </div>

          {/* Botón Calcular */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800 mb-2">3.5 Botón "Calcular"</h3>
            <p className="text-gray-700 leading-relaxed">
              Una vez ingresados todos los datos, haz clic en el botón <strong className="text-indigo-600">"Calcular"</strong> para obtener los resultados.
            </p>
            <div className="mt-4">
              
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">4. Resultados</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed mb-4">
            Tras pulsar "Calcular", RadioLinkCalc genera métricas clave para evaluar la viabilidad del enlace. A continuación, se presentan los resultados obtenidos con los parámetros ingresados:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Frecuencia Promedio:</strong> 5.710 GHz</li>
              <li><strong>Distancia Total:</strong> 2.75 km</li>
              <li><strong>Azimut:</strong> 16.44°</li>
              <li><strong>Espacio Libre:</strong> 116.36 dB</li>
              <li><strong>Pérdidas Totales:</strong> 123.05 dB</li>
            </ul>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Index Peor Fresnel:</strong> 73</li>
              <li><strong>Radio de Fresnel:</strong> 5.29 m</li>
              <li><strong>Espacio Libre Fresnel:</strong> 4.62 m</li>
              <li><strong>Peor Fresnel:</strong> 0.87F1</li>
              <li><strong>Distancia Tx-Obstáculo:</strong> 2026.95 m</li>
              <li><strong>Distancia Rx-Obstáculo:</strong> 721.93 m</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Interpretación:</h3>
            <p className="text-gray-700">
              - El enlace tiene una distancia de <strong>2.75 km</strong> y opera a <strong>5.710 GHz</strong>.<br />
              - La zona de Fresnel en el punto más crítico (índice 73) tiene un radio de <strong>5.29 m</strong>, pero solo hay <strong>4.62 m</strong> de espacio libre, lo que resulta en un <strong>Peor Fresnel de 0.87F1</strong>. Esto está dentro del rango aceptable (mínimo 0.6F1), pero podría haber interferencias en condiciones adversas.<br />
              - Las pérdidas totales son de <strong>123.05 dB</strong>, lo que genera un margen de enlace negativo (-85.05 dB), indicando que el enlace <strong>no es viable</strong> con los parámetros actuales.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Recomendaciones:</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Aumentar la potencia del transmisor o usar antenas con mayor ganancia.</li>
              <li>Elevar las alturas de las antenas para mejorar el espacio libre Fresnel.</li>
              <li>Reducir obstrucciones en el punto crítico (a 2026.95 m del transmisor).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Perfil de Elevación */}
      <section id="perfil-elevacion" className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">5. Perfil de Elevación</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed mb-4">
            El gráfico muestra el perfil topográfico entre el transmisor y el receptor, incluyendo alturas y obstáculos.
          </p>
          <img
            src="/images/perfil-elevacion.png" // Usa un gráfico de ejemplo de perfil de elevación
            alt="Perfil de Elevación"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </section>

      {/* Errores Comunes */}
      <section id="errores" className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">6. Errores Comunes y Soluciones</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">⚠️</span>
              <div>
                <strong>Error en coordenadas:</strong> Asegúrate de que sean valores decimales válidos y dentro del rango permitido.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">⚠️</span>
              <div>
                <strong>No hay línea de visión:</strong> Verifica si hay obstáculos en el perfil de elevación e intenta ajustar las alturas de las antenas.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">⚠️</span>
              <div>
                <strong>Datos incompletos:</strong> Todos los campos son obligatorios antes de realizar un cálculo.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Soporte Técnico */}
      <section id="soporte" className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">7. Soporte Técnico</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed mb-2">
            Si necesitas ayuda adicional, contáctanos:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Email: <a href="mailto:support@radiolinkcalc.com" className="text-blue-600 hover:underline">support@radiolinkcalc.com</a></li>
            <li>Teléfono: +57 311 8657681</li>
            <li>Horario de Atención: Lunes a Viernes, 9:00 AM - 5:00 PM (EST)</li>
          </ul>
        </div>
      </section>

      {/* Footer con Botón Volver */}
      <footer className="flex justify-center mt-12">

      </footer>
    </div>
  );
};

export default RadioLinkCalcManual;