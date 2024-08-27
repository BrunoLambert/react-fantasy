import * as React from 'react';
import './styling/rogue.scss'
import '../shared/styles.scss';
import { CharacterComponentProps } from '../../types/Character';
import { generateCharacterClass } from '../shared/functions';

const RogueCharacter: React.FunctionComponent<CharacterComponentProps> = ({ state, onlyDisplay }) => {
    const characterClass = React.useMemo(() => {
        return generateCharacterClass(state, onlyDisplay);
    }, [state, onlyDisplay])

    return (
        <div id="rogue" className={characterClass} />
    );
}

export default RogueCharacter;