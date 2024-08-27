import * as React from 'react';
import './styling/mage.scss'
import '../shared/styles.scss';
import { CharacterComponentProps } from '../../types/Character';
import { generateCharacterClass } from '../shared/functions';

const MageCharacter: React.FunctionComponent<CharacterComponentProps> = ({ state, onlyDisplay }) => {
    const characterClass = React.useMemo(() => {
        return generateCharacterClass(state, onlyDisplay);
    }, [state, onlyDisplay])

    return (
        <div id="mage" className={characterClass} />
    );
}

export default MageCharacter;