import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep6 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 6
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step7');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handledataPeriodoVisitaChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDataPeriodoVisita,
            payload: e.target.value
        });
    }
    const handledataEmissaoUltimoVistoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDataEmissaoUltimoVisto,
            payload: e.target.value
        });
    }

    const handledataExpiracaoVistoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDataExpiracaoVisto,
            payload: e.target.value
        });
    }

    const handleinformaLicencaUltVistoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setInformaLicencaUltVisto,
            payload: e.target.value
        });
    }

    const handlemesmoTipodeVistoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setMesmoTipodeVisto,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 6/10</p>
                <h1>Informações sobre seu visto americano anterior e suas respectivas viagens aos USA</h1>
                <p>Caso se aplique favor informar.</p>

                <hr/>

                <label>
                    DATA E PERIODO QUE FICOU NAS ÚLTIMAS 03 VISITAS AOS (EUA) - Caso se aplique, no seu passaporte contém a data de entrada nos USA, gentileza informar as 03 últimas entradas e tempo aproximadado de cada viagem:
                    <input
                        type="text"
                        value={state.dataPeriodoVisita}
                        onChange={handledataPeriodoVisitaChange}
                    />
                </label>

                <label>
                    DATA EMISSÃO DO ULTIMO VISTO EUA:
                    <input
                        type="text"
                        value={state.dataEmissaoUltimoVisto}
                        onChange={handledataEmissaoUltimoVistoChange}
                    />
                </label>

                <label>
                    DATA DE EXPIRAÇÃO DO SEU VISTO AMERICANO:
                    <input
                        type="text"
                        value={state.dataExpiracaoVisto}
                        onChange={handledataExpiracaoVistoChange}
                    />
                </label>

                <label>
                    INFORMAR LICENÇA DO ULTIMO VISTO (em vermelho no ultimo visto) - Caso se aplique informe o número de licença que esta no seu último visto, fica do lado esquerdo direito em vermelho:
                    <input
                        type="text"
                        value={state.informaLicencaUltVisto}
                        onChange={handleinformaLicencaUltVistoChange}
                    />
                </label>

                <label>
                    ESTÁ SOLICITANDO MESMO TIPO DE VISTO? Especificação:
                    <input
                        type="text"
                        value={state.mesmoTipodeVisto}
                        onChange={handlemesmoTipodeVistoChange}
                    />
                </label>
                

                <Link to="/step5" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}