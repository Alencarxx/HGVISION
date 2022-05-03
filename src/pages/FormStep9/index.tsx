import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep9 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 9
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step10');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handlenomeInstituicaoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeInstituicao,
            payload: e.target.value
        });
    }
    const handlenomeInstituicaoChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeInstituicao2,
            payload: e.target.value
        });
    }

    const handlenomeInstituicaoChange3 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeInstituicao3,
            payload: e.target.value
        });
    }

    const handlenomeInstituicaoChange4 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomeInstituicao4,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 9/10</p>
                <h1>Dados institucionais. Aplica-se apenas à partir do ensino superior com curso concluído.</h1>
                <p>Abaixo 04 campos para informar gradução, Pós gradução, Mestrado e Doutorado</p>

                <hr/>

                <label>
                    Nome da instituição:
                    <input
                        type="text"
                        value={state.nomeInstituicao}
                        onChange={handlenomeInstituicaoChange}
                    />
                </label>

                <label>
                    Endereço:
                    <input
                        type="text"
                        value={state.nomeInstituicao2}
                        onChange={handlenomeInstituicaoChange2}
                    />
                </label>

                <label>
                    Curso:
                    <input
                        type="text"
                        value={state.nomeInstituicao3}
                        onChange={handlenomeInstituicaoChange3}
                    />
                </label>

                <label>
                    Data APROXIMADA de inicio e de fim de curso:
                    <input
                        type="text"
                        value={state.nomeInstituicao4}
                        onChange={handlenomeInstituicaoChange4}
                    />
                </label>

                <Link to="/step8" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}