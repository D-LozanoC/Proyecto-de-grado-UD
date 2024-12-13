import './styles.css'

export default function Home() {
  return (
    <>
      <main>
        <section className="about">
          <h2>Acerca de Remembo</h2>
          <p>Remembo es una aplicación diseñada para ayudar a los estudiantes a gestionar su conocimiento académico de manera eficiente. El sistema aborda problemas comunes como la curva del olvido, la desorganización de recursos de aprendizaje y la falta de métodos efectivos para el seguimiento del progreso académico.</p>
          <p>Con funcionalidades como la organización de información, creación de flashcards, exámenes relámpago y un repositorio de conocimiento, Remembo proporciona una solución integral para administrar y reforzar el aprendizaje.</p>
          <p>Esta herramienta está dirigida a estudiantes de la Universidad Distrital Francisco José de Caldas, pero su enfoque puede ser adaptado para beneficiar a cualquier persona interesada en optimizar su aprendizaje.</p>
        </section>

        <section className="modules">
          <h2>Módulos de Remembo</h2>
          <ul>
            <li><strong>Página Web:</strong> Página principal de la aplicación. A partir de esta página los usuarios de la aplicación acceden a los diferentes módulos del sistema. Esta página contiene información general de la aplicación y los botones de acceso a los diferentes módulos.</li>
            <li><strong>Registro:</strong> Módulo que tiene la función de administrar la información de los diferentes tipos de usuario que acceden a la aplicación.</li>
            <li><strong>Enlaces:</strong> Módulo que tiene la función de administrar la información de enlaces a páginas, documentos y videos que contienen información relacionada con el tema de la aplicación. En cada enlace se debe contar con título, descripción y dirección.</li>
            <li><strong>Información del Proyecto:</strong> Módulo que tiene la función de administrar la información relacionada con el proyecto como: Introducción, objetivos, descripción del funcionamiento (módulos), video de funcionamiento, manual de usuario, autores y contacto.</li>
            <li><strong>Validación:</strong> Módulo que tiene la función de brindar acceso a las operaciones del proceso de validación: realizar encuesta, diligenciar encuesta, visualizar resultados e histórico de encuestas y resultados. El administrador del sistema debe tener la posibilidad de ejecutar varias validaciones.</li>
            <li><strong>Procesos de Conocimiento:</strong> Módulo que tiene la función de administrar los procesos de conocimiento que conforman el ciclo de vida de gestión del conocimiento: adquirir, organizar (almacenar), difundir, transferir, aplicar y mantener.</li>
            <li><strong>Repositorio de Conocimiento:</strong> Módulo que tiene la función de administrar el repositorio de conocimiento del sistema. El repositorio es el lugar donde los procesos de adquirir, organizar (almacenar) y mantener actúan. Además, permite a los usuarios acceder al conocimiento.</li>
            <li><strong>Estadísticas de Uso:</strong> Módulo que tiene la función de visualizar el uso que los usuarios le están dando al sistema.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
