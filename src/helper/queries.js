const url = process.env.REACT_APP_API_PLANET;
const urlCrew = process.env.REACT_APP_API_CREW;

export const obtenerPlanetas = async () => {
  try {
    const respuesta = await fetch(url);
    const dato = await respuesta.json();
    return dato;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerId = async (id) => {
  try {
    const respuesta = await fetch(url + "/" + id);
    const planeta = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return planeta;
  } catch (error) {
    console.log(error);
    return false;
  }
};


// ********************crew***************************
export const obtenerCrew = async () => {
  try {
    const respuesta = await fetch(urlCrew);
    const dato = await respuesta.json();
    return dato;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerIdCrew = async (id) => {
  try {
    const respuesta = await fetch(urlCrew + "/" + id);
    const planeta = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return planeta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

