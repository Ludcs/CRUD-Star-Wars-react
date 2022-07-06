import {createContext, useEffect, useState} from 'react';
import {helpHttp} from '../../helpers/helpHttp';
import {getData} from '../../services/getAxios';

const CharactersProjectContext = createContext();
const CharactersProjectProvider = ({children}) => {
  const [datos, setDatos] = useState();

  const initialForm = {
    name: '',
    urlImg: '',
    phrase: '',
    color: 'black',
    id: null,
  };
  const [form, setForm] = useState(initialForm);
  const [db, setDb] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  /*   useEffect(() => {
    loadCharacters();
  }, [form]);

  const loadCharacters = async () => {
    const devEnv = process.env.NODE_ENV !== 'production';
    const {REACT_APP_DEV_MY_FAKE_API_URL, REACT_APP_PROD_MY_FAKE_API_URL} =
      process.env;
    const response = await axios.get(
      `${
        devEnv ? REACT_APP_DEV_MY_FAKE_API_URL : REACT_APP_PROD_MY_FAKE_API_URL
      }`
    );
    setDb(response.data);
  }; */

  useEffect(() => {
    const devEnv = process.env.NODE_ENV !== 'production';
    const {REACT_APP_DEV_MY_FAKE_API_URL, REACT_APP_PROD_MY_FAKE_API_URL} =
      process.env;

    getData(
      `${
        devEnv ? REACT_APP_DEV_MY_FAKE_API_URL : REACT_APP_PROD_MY_FAKE_API_URL
      }`
    ).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb(res);
      } else {
        setDb(null);
      }
    });
  }, [form]);

  const createData = (data) => {
    const devEnv = process.env.NODE_ENV !== 'production';
    const {REACT_APP_DEV_MY_FAKE_API_URL, REACT_APP_PROD_MY_FAKE_API_URL} =
      process.env;

    data.id = Date.now();

    let options = {
      body: data,
      headers: {'content-type': 'application/json'},
    };

    helpHttp()
      .post(
        `${
          devEnv
            ? REACT_APP_DEV_MY_FAKE_API_URL
            : REACT_APP_PROD_MY_FAKE_API_URL
        }`,
        options
      )
      .then((res) => {
        console.log(res);
      });
  };

  const updateData = (data) => {
    //console.log(data);
    const devEnv = process.env.NODE_ENV !== 'production';
    const {REACT_APP_DEV_MY_FAKE_API_URL, REACT_APP_PROD_MY_FAKE_API_URL} =
      process.env;

    let endpoint = `${
      devEnv ? REACT_APP_DEV_MY_FAKE_API_URL : REACT_APP_PROD_MY_FAKE_API_URL
    }/${data.id}`;
    let options = {
      body: data,
      headers: {'content-type': 'application/json'},
    };

    helpHttp()
      .put(endpoint, options)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          let newDaata = db.map((el) => (el.id === data.id ? data : el));
          setDb(newDaata);
        }
      });
  };
  const deleteData = (id, name) => {
    const devEnv = process.env.NODE_ENV !== 'production';
    const {REACT_APP_DEV_MY_FAKE_API_URL, REACT_APP_PROD_MY_FAKE_API_URL} =
      process.env;

    let isDelete = window.confirm(`¿Estas seguro de eliminar a ${name}?`);

    if (isDelete) {
      let endpoint = `${
        devEnv ? REACT_APP_DEV_MY_FAKE_API_URL : REACT_APP_PROD_MY_FAKE_API_URL
      }/${id}`;
      let options = {
        headers: {'content-type': 'application/json'},
      };
      helpHttp()
        .del(endpoint, options)
        .then((res) => {
          console.log(res);
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        });
    }
  };
  const nextPhrase = () => {
    getData(process.env.REACT_APP_MY_ZEN_API_URL)
      .then((res) => {
        setLoading(true);
        if (datos.includes(res)) {
          return setTimeout(() => {
            nextPhrase();
          }, 3000);
        } else {
          setLoading(false);
          setForm({
            ...form,
            phrase: res,
          });
          return setDatos(res);
        }
      })
      .catch((err) => {
        setForm({
          ...form,
          phrase: `Error number`,
        });
        return setDatos(`Error number`);
      });
  };
  const datas = {
    db,
    setDb,
    createData,
    updateData,
    deleteData,
    initialForm,
    form,
    setForm,
    visible,
    setVisible,
    datos,
    setDatos,
    loading,
    setLoading,
    nextPhrase,
  };

  return (
    <CharactersProjectContext.Provider value={datas}>
      {children}
    </CharactersProjectContext.Provider>
  );
};

export {CharactersProjectProvider};
export default CharactersProjectContext;
