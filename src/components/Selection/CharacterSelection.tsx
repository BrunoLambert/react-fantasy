import * as React from 'react';
import MageCharacter from '../../characters/Mage';
import KnightCharacter from '../../characters/Knight';
import RogueCharacter from '../../characters/Rogue';
import { CharacterClass, CharacterType, generateEmptyCharacterState } from '../../types/Character';
import './styles.scss'

const EMPTY_CHARACTER_STATE = generateEmptyCharacterState();

interface CharacterSelectionProps {
    onSelect: (character: CharacterType) => void
}

const CharacterSelection: React.FunctionComponent<CharacterSelectionProps> = ({ onSelect }) => {
    return (
        <div id="character-selection" className='text-center'>
            <h1 className='text-7xl font-bold underline underline-offset-2'>React Fantasy</h1>
            <h2 className='text-2xl font-bold mt-10'>Selecione seu personagem</h2>
            <div className='mt-14 w-fit inline-flex gap-5'>
                <div className='selection-box' onClick={() => { onSelect(CharacterClass.MAGE) }}>
                    <MageCharacter state={EMPTY_CHARACTER_STATE} onlyDisplay />
                </div>
                <div className='selection-box' onClick={() => { onSelect(CharacterClass.KNIGHT) }}>
                    <KnightCharacter state={EMPTY_CHARACTER_STATE} onlyDisplay />
                </div>
                <div className='selection-box' onClick={() => { onSelect(CharacterClass.ROUGUE) }}>
                    <RogueCharacter state={EMPTY_CHARACTER_STATE} onlyDisplay />
                </div>
            </div>
        </div>
    );
}

export default CharacterSelection;