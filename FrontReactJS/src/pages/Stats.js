import React, {Component} from 'react';
import Statstyle from './Statstyle.scss';

class Stats extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>

            <br></br>
            <h2>Meilleurs buteurs - saisons en cours</h2>
            <img style={{width: 1350}} src="https://pbs.twimg.com/media/Dix1oxAXsAANigY.jpg"/>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className="w3-panel w3-round-xxlarge w3-teal">Premier League 2019/2020</h2>
                    </div>
                    <div className="col-md-9">
                        <br></br>
                        <table>
                            <tr>
                                <th>Joueur</th>
                                <th>Buts</th>
                                <th>Penalties</th>
                            </tr>
                            <tr>
                                <td>Jamie VARDY (LEICESTER)</td>
                                <td>14</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Tammy ABRAHAM (CHELSEA)</td>
                                <td>11</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Pierre-Emerick AUBAMEYANG (ARSENAL)</td>
                                <td>10</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Sadio MANÉ (LIVERPOOL)</td>
                                <td>9</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Marcus RASHFORD (MANCHESTER UNITED)</td>
                                <td>9</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Sergio AGUERO (MANCHESTER CITY)</td>
                                <td>9</td>
                                <td>2</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <h2 className="w3-panel w3-round-xxlarge w3-teal">Bundesliga 2019/2020</h2>
                    </div>
                    <div className="col-md-9">
                        <br></br>
                        <table>
                            <tr>
                                <th>Joueur</th>
                                <th>Buts</th>
                                <th>Penalties</th>
                            </tr>
                            <tr>
                                <td>Robert LEWANDOWSKI (BAYERN)</td>
                                <td>16</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Timo WERNER (RB LEIPZIG)</td>
                                <td>13</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Rouwen HENNINGS (DUSSELDORF)</td>
                                <td>10</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Wout WEGHORST (WOLFSBURG)</td>
                                <td>7</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Marcus THURAM (B. MONCHENGLADBACH)</td>
                                <td>6</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Amine HARIT (SCHALKE)</td>
                                <td>6</td>
                                <td>3</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <h2 className="w3-panel w3-round-xxlarge w3-teal">LaLiga 2019/2020</h2>
                    </div>
                    <div className="col-md-9">
                        <br></br>
                        <table>
                            <tr>
                                <th>Joueur</th>
                                <th>Buts</th>
                                <th>Penalties</th>
                            </tr>
                            <tr>
                                <td>Karim BENZEMA (REAL MADRID)</td>
                                <td>10</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Lionel MESSI (FC BARCELONE))</td>
                                <td>9</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Gerard MORENO (VILLAREAL)</td>
                                <td>8</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Lucas PEREZ (ALAVES)</td>
                                <td>8</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>LOREN (BETIS Séville)</td>
                                <td>8</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Luis SUAREZ (FC BARCELONE)</td>
                                <td>7</td>
                                <td>1</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <h2 className="w3-panel w3-round-xxlarge w3-teal">Série A 2019/2020</h2>
                    </div>
                    <div className="col-md-9">
                        <br></br>
                        <table>
                            <tr>
                                <th>Joueur</th>
                                <th>Buts</th>
                                <th>Penalties</th>
                            </tr>
                            <tr>
                                <td>Ciro IMMOBILE (LAZIO Rome)</td>
                                <td>17</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Romelu LUKAKU (INTER Milan)</td>
                                <td>10</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Joao PEDRO (CAGLIARI)</td>
                                <td>9</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Lautaro MARTINEZ (INTER Milan)</td>
                                <td>8</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Luis MURIEL (ATALANTA)</td>
                                <td>8</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Francesco CAPUTO (SASSUOLO)</td>
                                <td>7</td>
                                <td>4</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <h2 className="w3-panel w3-round-xxlarge w3-teal">Ligue 1 2019/2020</h2>
                    </div>
                    <div className="col-md-9">
                        <br></br>
                        <table>
                            <tr>
                                <th>Joueur</th>
                                <th>Buts</th>
                                <th>Penalties</th>
                            </tr>
                            <tr>
                                <td>Ben Yedder WISSAM (AS. MONACO)</td>
                                <td>10</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Moussa DEMBELE (O. LYON)</td>
                                <td>10</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Habibou DIALLO (METZ)</td>
                                <td>9</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Victor OSIMHEN (LILLE)</td>
                                <td>8</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Denis BOUANGA (AS. ST. ETIENNE)</td>
                                <td>7</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Memphis DEPAY (O. LYON)</td>
                                <td>7</td>
                                <td>1</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </React.Fragment>
            
        )
    }

}

export default Stats;