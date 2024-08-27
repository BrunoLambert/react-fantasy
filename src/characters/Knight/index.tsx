import * as React from 'react';
import './styling/knight.scss';
import '../shared/styles.scss';
import { CharacterComponentProps } from '../../types/Character';
import { generateCharacterClass } from '../shared/functions';

const KnightCharacter: React.FunctionComponent<CharacterComponentProps> = ({ state, onlyDisplay }) => {
    const characterClass = React.useMemo(() => {
        return generateCharacterClass(state, onlyDisplay);
    }, [state, onlyDisplay])

    return (
        <div id="knight" className={characterClass} />
    );
}

export default KnightCharacter;