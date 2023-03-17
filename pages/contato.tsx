import styles from '../styles/contact.module.scss';
import style from '../styles/title.module.scss';
import styleButton from '../styles/button.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

const schema = yup.object({
    name: yup.string().required('O nome é obrigatório.').min(5, 'O mínimo de caracteres é 5.').max(50, 'O máximo de caracteres é 50.'),
    email: yup.string().required('O email é obrigatório.').email('O email deve conter um @, assim como caracteres antes e depois do mesmo. Logo após o @ deve existir um ponto seguido de caracteres.'),
    subject: yup.string().required('O assunto/título do email é obrigatório.').min(5, 'O mínimo de caracteres é 5.').max(50, 'O máximo de caracteres é 50.'),
    message: yup.string().required('A mensagem/conteúdo do email é obrigatória.').min(5, 'O mínimo de caracteres é 5.').max(1024, 'O máximo de caracteres é 1024.'),
}).required('Todos os campos são obrigatórios.');

type DataProps = yup.InferType<typeof schema>;

const Contato = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<DataProps>({
        resolver: yupResolver(schema),
    });

    const sendEmail = (data: DataProps) => {
        const template_params = {
            from_name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
        };

        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            template_params,
            process.env.NEXT_PUBLIC_PUBLIC_KEY!,
            )
            .then(() => {
                alert('Email enviado com sucesso!');
                reset();
            })
    .catch(err => {
        console.log(err);
    });
    };

return (
    <div className='mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28'>
        <span className='block w-[350px] sm:w-125 lg:w-[700px] h-[350px] sm:h-125 lg:h-[700px] absolute top-0 sm:-top-5 lg:-top-32 left-0 sm:-left-5 lg:-left-[155px] bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[200px] -z-10' />

        <div className='w-full flex flex-col items-center md:items-start text-center md:text-left'>
            <h1 className={`${style.title} text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-tight`}>
                Contate-me
            </h1>

            <p className='max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                Envie-me um e-mail com a proposta que tiver para podermos negociar.
            </p>
        </div>

        <form
            onSubmit={handleSubmit(sendEmail)}
            className='max-w-[700px] flex flex-col gap-3 mb-20 sm:mb-24 mt-20 xs:mt-28'
        >
            <div className='flex flex-col md:flex-row gap-3'>
                <div className='w-full'>
                    <div className={styles.input}>
                        <input
                            id='name'
                            type='text'
                            placeholder='Dário Matias'
                            {...register('name')}
                            className='w-full h-14 bg-[#11111B] border border-[#00DBDE] pt-2 pl-4 placeholder:font-medium placeholder:text-[#757575] outline-none'
                        />
                        <label htmlFor="name">
                            Nome:
                        </label>
                    </div>

                    <span className='text-sm text-red-600 font-bold'>
                        {errors.name?.message}
                    </span>
                </div>

                <div className='w-full'>
                    <div className={styles.input}>
                        <input
                            id='email'
                            type='text'
                            placeholder='seuemail@gmail.com'
                            {...register('email')}
                            className='w-full h-14 bg-[#11111B] border border-[#00DBDE] pt-2 pl-4 placeholder:font-medium placeholder:text-[#757575] outline-none'
                        />
                        <label htmlFor="email">
                            Email:
                        </label>
                    </div>

                    <span className='text-sm text-red-600 font-bold'>
                        {errors.email?.message}
                    </span>
                </div>
            </div>

            <div>
                <div className={styles.input}>
                    <input
                        id='subject'
                        type='text'
                        {...register('subject')}
                        placeholder='Aprender mais'
                        className='h-14 bg-[#11111B] border border-[#00DBDE] pt-2 pl-4 outline-none'
                    />
                    <label htmlFor="subject">
                        Assunto:
                    </label>
                </div>

                <span className='text-sm text-red-600 font-bold'>
                    {errors.subject?.message}
                </span>
            </div>

            <div>
                <div className={styles.input}>
                    <textarea
                        id='message'
                        placeholder='Vamos estudar programação.'
                        {...register('message')}
                        className='h-44 w-full bg-[#11111B] border border-[#00DBDE] pt-5 pl-4 placeholder:font-medium placeholder:text-[#757575] resize-none outline-none'
                    />
                    <label htmlFor="message">
                        Mensagem:
                    </label>
                </div>

                <span className='text-sm text-red-600 font-bold'>
                    {errors.message?.message}
                </span>
            </div>

            <div className='w-full flex justify-end'>
                <button className={`${styleButton.button} w-56 sm:w-[250px] h-20 sm:h-20 mt-8 text-2xl sm:text-3xl`}>
                    Enviar
                </button>
            </div>
        </form>

        <span className='block w-[300px] sm:w-100 lg:w-[400px] h-125 sm:h-[200px] lg:h-[450px] absolute top-[600px] sm:top-[790px] left-1/4 md:left-2/4 bg-[#0C009C] opacity-30 blur-[100px] sm:blur-[150px] -z-10' />
    </div>
);
};

export default Contato;
