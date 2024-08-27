import * as React from 'react';
import './styling/rogue.scss'
import { CharacterState } from '../../types/Character';

interface RogueCharacterProps {
    state: CharacterState
}

const RogueCharacter: React.FunctionComponent<RogueCharacterProps> = ({ state }) => {
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
        <div id="rogue" className={characterClass} />
    );
}

export default RogueCharacter;