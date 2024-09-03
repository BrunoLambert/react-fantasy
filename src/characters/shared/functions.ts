import { CharacterStateType } from "../../types/Character";

export const generateCharacterClass = (state: CharacterStateType, onlyDisplay?: boolean) => {
    if (onlyDisplay) return 'display';

    let charClass = [state.direction]

    if (state.attack) {
        charClass.push('attacking')
    } else if (state.running && state.direction && state.walking) {
        charClass.push('running')
    } else if (state.walking) {
        charClass.push('walking')
    } else {
        charClass.push('idle')
    }

    return charClass.join(' ');
}