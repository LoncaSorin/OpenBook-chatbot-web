import { runPostApiRequest } from './Api';
import { CREATE_ARTEFACT } from '../constants/apiRoutes';

export const createArtefact = async (payload) => (
  runPostApiRequest(CREATE_ARTEFACT, payload)
);
