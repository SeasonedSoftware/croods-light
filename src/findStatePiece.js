import get from 'lodash/get'
import joinWith from './joinWith'
import initialState from './initialState'

export const findPath = (name, stateId) => joinWith('@', name, stateId)

export default (state, name, stateId) => {
  const path = findPath(name, stateId)
  const piece = get(state, path, initialState)
  return piece
}