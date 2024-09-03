import * as React from 'react';
import { GameContext } from '../contexts/GameContext';
import { CharacterClass } from '../types/Character';
import MageCharacter from './Mage';
import KnightCharacter from './Knight';
import RogueCharacter from './Rogue';

interface CharactersComponentProps {

}

const CharactersComponent: React.FunctionComponent<CharactersComponentProps> = () => {
    const { characterType, characterState } = React.useContext(GameContext);

    const CharacterSprite = React.useMemo(() => {
        switch (characterType) {
            case CharacterClass.MAGE:
                return MageCharacter;
            case CharacterClass.KNIGHT:
                return KnightCharacter;
            default:
                return RogueCharacter;
        }
    }, [characterType])

    return (<CharacterSprite state={characterState} />);
}

export default CharactersComponent;