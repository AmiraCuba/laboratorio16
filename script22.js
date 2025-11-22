const formulario = document.getElementById('formularioPerfil');
        const divPerfil = document.getElementById('perfilGuardado');
        const showNombre = document.getElementById('showNombre');
        const showEdad = document.getElementById('showEdad');
        const showPais = document.getElementById('showPais');
        function cargarPerfil() {
            const datosGuardados = localStorage.getItem('perfilUsuario');
            if (datosGuardados) {
                const perfil = JSON.parse(datosGuardados);
                showNombre.textContent = perfil.nombre;
                showEdad.textContent = perfil.edad;
                showPais.textContent = perfil.pais;
                divPerfil.style.display = 'block';
            }
        }
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            const nuevoPerfil = {
                nombre: document.getElementById('nombre').value,
                edad: document.getElementById('edad').value,
                pais: document.getElementById('pais').value
            };
            localStorage.setItem('perfilUsuario', JSON.stringify(nuevoPerfil));
            cargarPerfil();
            alert('Datos guardados correctamente.');
        });
        document.addEventListener('DOMContentLoaded', cargarPerfil);
