import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep4 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step5');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handlenomePaiChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomePai,
            payload: e.target.value
        });
    }
    const handlenomeMaeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeMae,
            payload: e.target.value
        });
    }

    const handleparenteUSAChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setParenteUSA,
            payload: e.target.value
        });
    }

    const handlenomesRelacaoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomesRelacao,
            payload: e.target.value
        });
    }

    const handlequemEstaCusteandoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setQuemEstaCusteando,
            payload: e.target.value
        });
    }

    const handledatanascimentoPaiChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDatanascimentoPai,
            payload: e.target.value
        });
    }

    const handledatanascimentoMaeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDatanascimentoMae,
            payload: e.target.value
        });
    } 

    const handlepaiMoraEuaChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setPaiMoraEua,
            payload: e.target.value
        });
    } 

    const handlemaeMoraEuaChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setMaeMoraEua,
            payload: e.target.value
        });
    } 

    const handleviajandoAgenciaTurismoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setViajandoAgenciaTurismo,
            payload: e.target.value
        });
    } 

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/10</p>
                <h1>Informa????es sobre seus familiares</h1>
                <p>Informa????es pessoais de parentes no brasil e nos USA.</p>

                <hr/>

                <label>
                    Nome do PAI - Informe o nome completo
                    <input
                        type="text"
                        value={state.nomePai}
                        onChange={handlenomePaiChange}
                    />
                </label>

                <label>
                     Data de Nascimento do Pai - (Data de nascimento dos pais n??o ?? obrigat??ria)
                    <input
                        type="text"
                        value={state.datanascimentoPai}
                        onChange={handledatanascimentoPaiChange}
                    />
                </label>      

                <label>
                     Ele mora nos EUA? 
                    <input
                        type="text"
                        value={state.paiMoraEua}
                        onChange={handlepaiMoraEuaChange}
                    />
                </label>                         

                <label>
                    Nome completo da M??e - Informe o nome completo 
                    <input
                        type="text"
                        value={state.nomeMae}
                        onChange={handlenomeMaeChange}
                    />
                </label>

                <label>
                     Data de Nascimento do M??e - (Data de nascimento dos pais n??o ?? obrigat??ria)
                    <input
                        type="text"
                        value={state.datanascimentoMae}
                        onChange={handledatanascimentoMaeChange}
                    />
                </label> 

                <label>
                     Ela mora nos EUA? 
                    <input
                        type="text"
                        value={state.maeMoraEua}
                        onChange={handlemaeMoraEuaChange}
                    />
                </label> 

                <label>
                    Tem algum parente direto nos USA? Aplica-se apenas para parentesco direto como Pai, M??e, Irm??os ou Filhos! Se sim favor informar nome completo e seu respectivo status atual em territ??rio americano.
                    <input
                        type="text"
                        value={state.parenteUSA}
                        onChange={handleparenteUSAChange}
                    />
                </label>
                <br />
                <p>
                    <b>Informar quais pessoas ir??o viajar com voc?? (nome completo e parentesco):</b><br/>
                    Acompanhantes de Viagem - Importante informar pelo menos 01 acompanhante de viagem, principalmente se tratar-se da sua primeira viagem aos estados unidos
                </p>
                <br/>
                <label>
                    Nomes e rela????o com voc??:
                    <input
                        type="text"
                        value={state.nomesRelacao}
                        onChange={handlenomesRelacaoChange}
                    />
                </label>
                
                <label>
                    Quem est?? CUSTEANDO sua viagem? Em caso de terceiros pagando a viagem, gentileza informar nome completo e grau de parentensco. Caso a pessoa informada n??o more com voc?? informar tamb??m as seguintes informa????es (Endere??o completo com CEP, Telefone e E-mail de contato):
                    <input
                        type="text"
                        value={state.quemEstaCusteando}
                        onChange={handlequemEstaCusteandoChange}
                    />                    
                </label>

                <label>
                    Esta viajando com alguma ag??ncia de Turismo? Informar:
                    <input
                        type="text"
                        value={state.viajandoAgenciaTurismo}
                        onChange={handleviajandoAgenciaTurismoChange}
                    />                    
                </label>
                

                <Link to="/step3" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Pr??ximo</button>
            </C.Container>
        </Theme>
    );
}