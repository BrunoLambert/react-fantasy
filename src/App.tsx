import * as React from 'react';
import './App.css';
import MageCharacter from './characters/Mage';
import KnightCharacter from './characters/Knight';
import { CharacterState } from './types/Character';
import RogueCharacter from './characters/Rogue';
import CharacterSelection from './components/Selection/CharacterSelection';

interface AppProps { }

const App: React.FunctionComponent<AppProps> = () => {
  const [selectedCharacter, setSelectedCharacter] = React.useState<string | null>(null);
  const [characterPosition, setCharacterPosition] = React.useState(0);
  const [characterState, setCharacterState] = React.useState<CharacterState>({
    direction: null,
    walking: false,
    running: false,
    attack: false,
  })

  const DisplayCharacter = React.useMemo(() => {
    switch (selectedCharacter) {
      case 'mage':
        return <MageCharacter state={characterState} />
      case 'knight':
        return <KnightCharacter state={characterState} />
      case 'rogue':
        return <RogueCharacter state={characterState} />
      default:
        return (<p>Erro</p>)
    }
  }, [selectedCharacter, characterState])

  const startWalking = React.useCallback((position = 0) => {
    setTimeout(() => {
      let nextStep = position + 50

      if (position >= window.outerWidth + 130) {
        nextStep = 0
      }

      setCharacterPosition(nextStep);
      startWalking(nextStep);
    }, 1000 / 6)
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event)
      if (event.key === 'z') {
        setCharacterState({ ...characterState, attack: true })
      } else if (event.key === 'ArrowRight') {
        setCharacterState({ ...characterState, direction: 'right', walking: true })
      } else if (event.key === 'ArrowLeft') {
        setCharacterState({ ...characterState, direction: 'left', walking: true })
      } else if (event.key === 'Shift') {
        setCharacterState({ ...characterState, running: !characterState.running })
      }
    }

    const handleKeyUp = () => {
      setCharacterState({ direction: null, attack: false, walking: false, running: characterState.running })
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [characterState]);

  return (
    <div className="App">
      {selectedCharacter ? (
        <div id="character" className='p-5'>

          <h1 className='capitalize mb-5 text-center text-4xl font-bold underline'>{selectedCharacter}</h1>

          <div className='flex justify-center'>{DisplayCharacter}</div>

          <div className='mt-5'>
            <p>
              Movimento de tempo ocioso <b>(5s)</b>
            </p>
            <p>
              Movimento horizontal <b>(setas)</b>
            </p>
            <p>
              Ataque no <b>Z</b>
            </p>
            <p>
              (Shift) Corrida ativado: <b>{characterState.running ? 'Sim' : 'Não'}</b>
            </p>
          </div>
        </div>
      ) :
        <CharacterSelection onSelect={setSelectedCharacter} />
      }
    </div>
  );
}

export default App;
