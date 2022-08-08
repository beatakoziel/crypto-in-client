import calculationsRepository from './calculationsRepository'
import infoRepository from "@/repositories/infoRepository";

const repositories = {
    'calculations': calculationsRepository,
    'info': infoRepository
}
export default {
    get: name => repositories[name]
};