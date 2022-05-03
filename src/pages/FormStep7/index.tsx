import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep7 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 7
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step8');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handlenomeEmpresaTrabEstChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeEmpresaTrabEst,
            payload: e.target.value
        });
    }
    const handleendCompEmpEscChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEndCompEmpEsc,
            payload: e.target.value
        });
    }

    const handletelefoneEmpEstChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTelefoneEmpEst,
            payload: e.target.value
        });
    }

    const handlerendBrutaChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setRendaBruta,
            payload: e.target.value
        });
    }

    const handleprofissaoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setProfissao,
            payload: e.target.value
        });
    }

    const handlepcargoExercicioChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCargoExercicio,
            payload: e.target.value
        });
    }

    const handledataAdmissaoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDataAdmissao,
            payload: e.target.value
        });
    }

    const handleCEPmpEscChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCEPmpEsc,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 7/10</p>
                <h1>Dados profissionais ou Institucionais</h1>
                <p>Se for estudante, colocar dados da instituição, curso e período.</p>

                <hr/>

                <label>
                    Nome da empresa onde trabalha ou Estuda :
                    <input
                        type="text"
                        value={state.nomeEmpresaTrabEst}
                        onChange={handlenomeEmpresaTrabEstChange}
                    />
                </label>

                <label>
                    Endereço completo da empresa ou escola:
                    <input
                        type="text"
                        value={state.endCompEmpEsc}
                        onChange={handleendCompEmpEscChange}
                    />
                </label>

                <label>
                    CEP da empresa ou escola:
                    <input
                        type="text"
                        value={state.CEPmpEsc}
                        onChange={handleCEPmpEscChange}
                    />
                </label>

                <label>
                    Telefone de contato da empresa ou da instituição de ensino:
                    <input
                        type="text"
                        value={state.telefoneEmpEst}
                        onChange={handletelefoneEmpEstChange}
                    />
                </label>

                <label>
                    Informe sua renda bruta atual (Independentemente de comprovação (IRPF) ou outro rendimentos, informe o valor real que você recebe por mês, juntando todas as suas fontes de renda. Caso tenha outra fonte de renda favor explicar:)
                    <input
                        type="text"
                        value={state.rendaBruta}
                        onChange={handlerendBrutaChange}
                    />
                </label>

                <label>
                    Profissão / Cargo na empresa - Informe sua profissão e seu respectivo cargo atual na empresa:
                    <input
                        type="text"
                        value={state.profissao}
                        onChange={handleprofissaoChange}
                    />
                </label>

                <label>
                    Cargo em exercício:
                    <input
                        type="text"
                        value={state.cargoExercicio}
                        onChange={handlepcargoExercicioChange}
                    />
                </label>

                <label>
                    Data de admissão ou Data que entrou na instituição de ensino:
                    <input
                        type="text"
                        value={state.dataAdmissao}
                        onChange={handledataAdmissaoChange}
                    />
                </label>

                <Link to="/step6" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}