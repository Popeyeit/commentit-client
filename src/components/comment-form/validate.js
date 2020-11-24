import * as Yup from 'yup';

const validate = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Введите больше 2х символов')
    .max(50, 'Имя слишком длинное, макс. 50 символов')
    .required('Обязательное поле'),
  text: Yup.string()
    .required('Обязательное поле')
    .min(10, 'Введите больше 10 символов')
    .max(300, 'Комментарий слишком длинный'),
});

export default validate;
