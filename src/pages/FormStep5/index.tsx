import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep5 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5
            });
        }
    }, []);

       const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step6');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handlenumeroPassaporteChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNumeroPassaporte,
            payload: e.target.value
        });
    }
    const handlecidadeEmissaoPassaporteChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCidadeEmissaoPassaporte,
            payload: e.target.value
        });
    }

    const handledataEmissaoPassaporteChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDataEmissaoPassaporte,
            payload: e.target.value
        });
    }

    const handledataExpiracaoPassaporteChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDataExpiracaoPassaporte,
            payload: e.target.value
        });
    }

    const handlepassaporteRoubadoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setPassaporteRoubado,
            payload: e.target.value
        });
    }

    const handlevistoNegadoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setVistoNegado,
            payload: e.target.value
        });
    }

    const handlepessoasqvaoviajarChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setPessoasqvaoviajar,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 5/10</p>
                <h1>Informações sobre seu passaporte</h1>
                <p></p>

                <hr/>

                <label>
                    Número do passaporte:
                    <input
                        type="text"
                        value={state.numeroPassaporte}
                        onChange={handlenumeroPassaporteChange}
                    />
                </label>

                <label>
                    Cidade de emissão (Passaporte):
                    <input
                        type="text"
                        value={state.cidadeEmissaoPassaporte}
                        onChange={handlecidadeEmissaoPassaporteChange}
                    />
                </label>

                <label>
                    Data de emissão (Passaporte):
                    <input
                        type="text"
                        value={state.dataEmissaoPassaporte}
                        onChange={handledataEmissaoPassaporteChange}
                    />
                </label>

                <label>
                    Data de expiração (Passaporte):
                    <input
                        type="text"
                        value={state.dataExpiracaoPassaporte}
                        onChange={handledataExpiracaoPassaporteChange}
                    />
                </label>

                <label>
                    Já teve seu passaporte ROUBADO/FURTADO? Caso se aplique informe a data e o que aconteceu:
                    <input
                        type="text"
                        value={state.passaporteRoubado}
                        onChange={handlepassaporteRoubadoChange}
                    />
                </label>

                <label>
                    Já teve visto AMERICANO NEGADO OU REVOGADO? Caso já tenha tido visto americano NEGADO, favor informar data aproximada da sua última visita ao consulado:
                    <input
                        type="text"
                        value={state.vistoNegado}
                        onChange={handlevistoNegadoChange}
                    />
                </label>

                <label>
                     Informar quais pessoas irão viajar com você (nome completo e parentesco):
                    <input
                        type="text"
                        value={state.pessoasqvaoviajar}
                        onChange={handlepessoasqvaoviajarChange}
                    />
                </label>

                

                <Link to="/step4" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}