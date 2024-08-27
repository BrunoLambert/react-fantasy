export const generateEmptyCharacterState = () => ({
    direction: null,
    walking: false,
    running: false,
    attack: false,
})

export interface CharacterComponentProps {
    state: CharacterState
    onlyDisplay?: boolean
}

export interface CharacterState {
    direction: string | null,
    walking: boolean,
    running: boolean,
    attack: boolean,
}