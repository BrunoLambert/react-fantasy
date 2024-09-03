import * as React from 'react';
import './styles.scss';
import { GameContext } from '../../contexts/GameContext';
import CharactersComponent from '../../characters';

interface MainMarketProps {

}

const MainMarket: React.FunctionComponent<MainMarketProps> = () => {
    const { characterState } = React.useContext(GameContext);

    return (<div id="market">
        <div id="character" style={{ left: characterState.position.x }}>
            <CharactersComponent />
        </div>
        <div id="plataform" />
        <div id="background" />
        <div id="instructions">
            <h2>Instruções</h2>
            <p>Pressione ou/e segure as setas direcionais para andar na horizontal</p>
            <p>Pressione "Z" para atacar</p>
            <p>Pressione Shift para ativar/desativar a corrida</p>
            <p>Ficar parado os deixam ansiosos!</p>
        </div>
    </div>);
}

export default MainMarket;