// services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'; // Reemplaza esto con la URL de tu API


export const getGenerarReporteRankingVinos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/gestor-generar-reporte-ranking-vinos/opcion-generar-ranking-de-vinos`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener generar-reporte-ranking-vinos');
  }
};
