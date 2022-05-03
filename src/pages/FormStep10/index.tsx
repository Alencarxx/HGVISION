import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep10 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 10
            });
        }
    }, []);

    const handleNextStep = () => {        
            history.push('/step11');       
    }

    const handlenomePaisesVisitouChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNomePaisesVisitou,
            payload: e.target.value
        });
    }
    const handleidiomasFluentesChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setIdiomasFluentes,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 10/10</p>
                <h1>Países que visito nos últimos 5 anos</h1>
                <p>Informe o nome de todos os países de que vistou no últimos 05 anos.</p>

                <hr/>

                <label>
                    Nome dos países que vistou:
                    <input
                        type="text"
                        value={state.nomePaisesVisitou}
                        onChange={handlenomePaisesVisitouChange}
                    />
                </label>
                <p>
                    <b>Fala algum outro idioma fluente?</b><br/>
                    Se sim, informe a lista de idiomas fluentes que você fala:

                </p>

                <label>
                    Idiomas fluentes:
                    <input
                        type="text"
                        value={state.idiomasFluentes}
                        onChange={handleidiomasFluentesChange}
                    />
                </label>

                <Link to="/step9" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}