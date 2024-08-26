import * as React from 'react';
import './styling/mage.scss'
import { CharacterState } from '../../types/Character';

interface MageCharacterProps {
    state: CharacterState
}

const MageCharacter: React.FunctionComponent<MageCharacterProps> = ({ state }) => {
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
        <div id="mage" className={characterClass} />
    );
}

export default MageCharacter;