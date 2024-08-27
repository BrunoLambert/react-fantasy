import { CharacterState } from "../../types/Character";

export const generateCharacterClass = (state: CharacterState, onlyDisplay?: boolean) => {
    if (onlyDisplay) return 'display';

    let charClass = [state.direction]

    if (state.attack) {
        charClass.push('attacking')
    } else if (state.running && state.direction) {
        charClass.push('running')
    } else if (state.walking) {
        charClass.push('walking')
    } else {
        charClass.push('idle')
    }

    return charClass.join(' ');
}