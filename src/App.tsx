import * as React from 'react';
import './App.css';
import MageCharacter from './characters/Mage';
import { CharacterState } from './types/Character';

interface AppProps { }

const App: React.FunctionComponent<AppProps> = () => {
  const [characterPosition, setCharacterPosition] = React.useState(0);
  const [characterState, setCharacterState] = React.useState<CharacterState>({
    direction: null,
    walking: false,
    running: false,
    attack: false,
  })

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

    const handleKeyUp = (event) => {
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
      <div id="character" style={{ left: characterPosition, position: 'absolute' }}>
        <MageCharacter state={characterState} />

        <div style={{ margin: '20px' }}>
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
    </div>
  );
}

export default App;
