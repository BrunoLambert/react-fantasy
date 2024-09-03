import * as React from 'react';
import './App.css';
import { CharacterStateType, CharacterType, ChracterSpeed, generateEmptyCharacterState } from './types/Character';
import CharacterSelection from './components/Selection/CharacterSelection';
import MainMarket from './components/MarketLobby/Market';
import { GameContext, GameContextType } from './contexts/GameContext';

interface AppProps { }

const App: React.FunctionComponent<AppProps> = () => {
  const [selectedCharacter, setSelectedCharacter] = React.useState<CharacterType>(null);
  const [characterState, setCharacterState] = React.useState<CharacterStateType>(generateEmptyCharacterState())

  const SpeedValue = React.useMemo(() => {
    if (characterState.running) return ChracterSpeed.RUNNING
    else return ChracterSpeed.WALKING
  }, [characterState.running]);

  React.useEffect(() => {
    const handleKeyEvent = (event, type: 'up' | 'down') => {
      console.log(event)
      const press = type === 'down';

      switch (event.key) {
        case 'Z':
        case 'z':
          setCharacterState({ ...characterState, attack: press });
          break;
        case 'ArrowRight':
          setCharacterState({
            ...characterState,
            direction: 'right',
            walking: press,
            position: {
              y: characterState.position.y,
              x: press ? Math.min(characterState.position.x + SpeedValue, (window.innerWidth - 70)) : characterState.position.x
            }
          })
          break;
        case 'ArrowLeft':
          setCharacterState({
            ...characterState,
            direction: 'left',
            walking: press,
            position: {
              y: characterState.position.y,
              x: press ? Math.max(characterState.position.x - SpeedValue, -30) : characterState.position.x
            }
          })
          break;
        case 'Shift':
          if (type === 'down') {
            setCharacterState({ ...characterState, running: !characterState.running })
          }
          break;
        default:
          break;
      }
    }

    const handleKeyDown = (event) => {
      handleKeyEvent(event, 'down')
    }
    const handleKeyUp = (event) => {
      handleKeyEvent(event, 'up')
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [characterState, SpeedValue]);

  const GameData = React.useMemo<GameContextType>(() => {
    return {
      characterType: selectedCharacter,
      characterState: characterState
    }
  }, [characterState, selectedCharacter])

  return (
    <div className="App">
      <GameContext.Provider value={GameData}>
        {selectedCharacter ? (
          <MainMarket />
        ) :
          <CharacterSelection onSelect={setSelectedCharacter} />
        }
      </GameContext.Provider>
    </div>
  );
}

export default App;
