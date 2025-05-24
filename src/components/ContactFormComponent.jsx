import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "../assets/style/ContactFormComponent.css";

const ContactFormComponent = () => {
  useEffect(() => {
    const changeLanguage = (lang) => {
      if (lang === "es") {
        document.getElementById("es-content").style.display = "block";
        document.getElementById("en-content").style.display = "none";
        document.getElementById("es-btn").classList.add("active");
        document.getElementById("en-btn").classList.remove("active");
      } else {
        document.getElementById("es-content").style.display = "none";
        document.getElementById("en-content").style.display = "block";
        document.getElementById("es-btn").classList.remove("active");
        document.getElementById("en-btn").classList.add("active");
      }
    };

    const setupForm = (formId, langValue) => {
      const form = document.getElementById(formId);
      if (!form) return;

      const inputs = form.querySelectorAll("input, select");

      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          validateField(input);
        });
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        inputs.forEach((input) => {
          if (!validateField(input)) {
            isValid = false;
          }
        });

        if (!isValid) {
          Swal.fire({
            icon: "error",
            title:
              langValue === "español" ? "Error en el formulario" : "Form Error",
            text:
              langValue === "español"
                ? "Por favor, corrige los errores en el formulario."
                : "Please correct the errors in the form.",
          });
          return;
        }

        const formData = {
          nombre: form.querySelector('[name="nombre"]').value,
          telefono: form.querySelector('[name="telefono"]').value,
          email: form.querySelector('[name="email"]').value,
          servicio: form.querySelector('[name="servicio"]').value,
          idioma: langValue,
        };

        const webhookUrl =
          "https://hook.us2.make.com/31hkdtykfxl8d9bletterm6975j7boto";

        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire({
                icon: "success",
                title: langValue === "español" ? "¡Éxito!" : "Success!",
                text:
                  langValue === "español"
                    ? "Su solicitud ha sido enviada correctamente."
                    : "Your request has been successfully submitted.",
              });
              form.reset();
              inputs.forEach((input) => {
                input.classList.remove("is-valid", "is-invalid");
                const error =
                  input.parentElement.querySelector(".error-message");
                if (error) error.textContent = "";
              });
            } else {
              Swal.fire({
                icon: "error",
                title: langValue === "español" ? "Error" : "Error",
                text:
                  langValue === "español"
                    ? "Hubo un problema al enviar su solicitud. Por favor, intente nuevamente."
                    : "There was a problem submitting your request. Please try again.",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              icon: "error",
              title: langValue === "español" ? "Error" : "Error",
              text:
                langValue === "español"
                  ? "Hubo un problema al enviar su solicitud. Por favor, intente nuevamente."
                  : "There was a problem submitting your request. Please try again.",
            });
          });
      });
    };

    const validateField = (input) => {
      const error = input.parentElement.querySelector(".error-message");
      const value = input.value.trim();

      if (input.name === "nombre") {
        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!soloLetras.test(value)) {
          input.classList.remove("is-valid");
          input.classList.add("is-invalid");
          if (error) error.textContent = "Solo se permiten letras y espacios.";
          return false;
        }
        if (value.length < 2) {
          input.classList.remove("is-valid");
          input.classList.add("is-invalid");
          if (error)
            error.textContent = "El nombre debe tener al menos 2 caracteres.";
          return false;
        }
      }

      if (input.name === "telefono") {
        const soloNumeros = /^\d{7,15}$/;
        if (!soloNumeros.test(value)) {
          input.classList.remove("is-valid");
          input.classList.add("is-invalid");
          if (error)
            error.textContent = "Solo se permiten números (7 a 15 dígitos).";
          return false;
        }
      }

      if (input.name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          input.classList.remove("is-valid");
          input.classList.add("is-invalid");
          if (error)
            error.textContent = "Ingresa un correo electrónico válido.";
          return false;
        }

        if (!value.endsWith(".com")) {
          input.classList.remove("is-valid");
          input.classList.add("is-invalid");
          if (error) error.textContent = 'El correo debe terminar en ".com".';
          return false;
        }
      }

      if (input.checkValidity()) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        if (error) error.textContent = "";
        return true;
      } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        if (error) {
          if (input.validity.valueMissing) {
            error.textContent = "Este campo es obligatorio.";
          } else if (input.validity.typeMismatch) {
            error.textContent = "Por favor, introduce un valor válido.";
          } else {
            error.textContent = "Valor inválido.";
          }
        }
        return false;
      }
    };

    window.changeLanguage = changeLanguage;
    changeLanguage("en");
    setupForm("contactForm", "español");
    setupForm("contactFormEn", "english");
  }, []);

  const Input = ({ id, type, name, label, icon, required }) => (
    <div className="relative input-group">
      <div className="input-icon">{icon}</div>
      <input
        type={type}
        id={id}
        name={name}
        className="peer"
        placeholder=" "
        required={required}
      />
      <label htmlFor={id}>{label}</label>
      <span className="error-message"></span>
    </div>
  );

  const Select = ({ id, name, label, options }) => (
    <div className="relative input-group">
      <div className="input-icon">⚙️</div>
      <select id={id} name={name} required className="peer">
        <option value="">--</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <label htmlFor={id}>{label}</label>
      <span className="error-message"></span>
    </div>
  );

  return (
    <div className="contact-container">
      <div className="language-selector">
        <button
          id="es-btn"
          className="language-btn active"
          onClick={() => window.changeLanguage("es")}
        >
          Español
        </button>
        <button
          id="en-btn"
          className="language-btn"
          onClick={() => window.changeLanguage("en")}
        >
          English
        </button>
      </div>

      <div id="es-content">
        <h2>Solicitud de Servicio Eléctrico</h2>
        <form id="contactForm" noValidate>
          <Input
            id="nombre"
            type="text"
            name="nombre"
            label="Nombre completo"
            icon="🧑‍💼"
            required
          />
          <Input
            id="telefono"
            type="tel"
            name="telefono"
            label="Teléfono"
            icon="📱"
            required
          />
          <Input
            id="email"
            type="email"
            name="email"
            label="Correo electrónico"
            icon="📧"
            required
          />
          <Select
            id="servicio"
            name="servicio"
            label="Tipo de servicio"
            options={[
              "Instalación eléctrica ⚡",
              "Reparación 🛠️",
              "Mantenimiento 🔧",
              "Consultoría 📑",
            ]}
          />

          <button type="submit" className="form-btn">
            Enviar solicitud ✈️
          </button>
        </form>
      </div>

      <div id="en-content" style={{ display: "none" }}>
        <h2>Electrical Service Request</h2>
        <form id="contactFormEn" noValidate>
          <Input
            id="nombre_en"
            type="text"
            name="nombre"
            label="Full name"
            icon="🧑‍💼"
            required
          />
          <Input
            id="telefono_en"
            type="tel"
            name="telefono"
            label="Phone"
            icon="📱"
            required
          />
          <Input
            id="email_en"
            type="email"
            name="email"
            label="Email"
            icon="📧"
            required
          />
          <Select
            id="servicio_en"
            name="servicio"
            label="Service type"
            options={[
              "Electrical installation ⚡",
              "Repair 🛠️",
              "Maintenance 🔧",
              "Consulting 📑",
            ]}
          />

          <button type="submit" className="form-btn">
            Submit Request ✈️
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormComponent;
