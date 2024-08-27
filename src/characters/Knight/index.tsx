import * as React from 'react';
import './styling/knight.scss'
import { CharacterState } from '../../types/Character';

interface KnightCharacterProps {
    state: CharacterState
}

const KnightCharacter: React.FunctionComponent<KnightCharacterProps> = ({ state }) => {
    const characterClass = React.useMemo(() => {
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
    }, [state])

    return (
        <div id="knight" className={characterClass} />
    );
}

export default KnightCharacter;