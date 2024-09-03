import * as React from 'react';
import { CharacterStateType, CharacterType, generateEmptyCharacterState } from "../types/Character"

export interface GameContextType {
    characterType: CharacterType | null
    characterState: CharacterStateType
}

export const GameContextData: GameContextType = {
    characterType: null,
    characterState: generateEmptyCharacterState()
}

export const GameContext = React.createContext(GameContextData);