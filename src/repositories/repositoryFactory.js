import calculationsRepository from './calculationsRepository'

const repositories = {
    'calculations': calculationsRepository
}
export default {
    get: name => repositories[name]
};