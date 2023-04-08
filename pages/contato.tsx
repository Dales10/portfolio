import "aos/dist/aos.css";

import { useState, useEffect } from 'react';
import styles from '../styles/Contact.module.scss';
import styleButton from '../styles/Button.module.scss';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

import FeedbackMessage from '@/components/FeedbackMessage';
import MainGlowEffect from './../components/MainGlowEffect';

const schema = yup.object({
    name: yup.string().required('O nome é obrigatório.').min(5, 'O mínimo de caracteres é 5.').max(50, 'O máximo de caracteres é 50.'),
    email: yup.string().required('O email é obrigatório.').email('O email deve conter um @, assim como caracteres antes e depois do mesmo.'),
    subject: yup.string().required('O assunto/título do email é obrigatório.').min(5, 'O mínimo de caracteres é 5.').max(50, 'O máximo de caracteres é 50.'),
    message: yup.string().required('A mensagem/conteúdo do email é obrigatória.').min(5, 'O mínimo de caracteres é 5.').max(1024, 'O máximo de caracteres é 1024.'),
}).required('Todos os campos são obrigatórios.');

type DataProps = yup.InferType<typeof schema>;

const borderRed = { borderColor: '#FF0000' };

const messagesContents = {
    success: {
        title: 'Sucesso',
        message: 'O email foi enviado com sucesso.',
    },
    error: {
        title: 'Ocorreu um erro',
        message: 'Por favor, tente novamente ou volte mais tarde.',
    },
};

const Contato = () => {
    const [showMessage, setShowMessage] = useState({ status: false, type: '' });

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

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                template_params,
                process.env.NEXT_PUBLIC_PUBLIC_KEY!,
            )
            .then(() => {
                setShowMessage({ status: true, type: 'success' });
                reset({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            })
            .catch(err => {
                setShowMessage({ status: true, type: 'error' });
                console.log(err);
            });
    };

    const popupTime = () => {
        setTimeout(() => {
            setShowMessage({ status: false, type: '' });
        }, 4600);
    };

    useEffect(() => {
        if (showMessage.status)
            popupTime();
    }, [showMessage]);

    return (
        <div className='mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28'>
            <MainGlowEffect />

            <div
                data-aos='fade-right'
                className='w-full flex flex-col items-center md:items-start text-center md:text-left'
            >
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black leading-tight'>
                    Contate-me
                </h1>

                <p className='max-w-125 md:max-w-175 lg:max-w-200 xl:max-w-225 mt-12 lg:mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify lg:text-start font-bold leading-tight'>
                    Envie-me um e-mail com a proposta que tiver para podermos negociar.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(sendEmail)}
                data-aos='fade-up'
                className='max-w-175 flex flex-col gap-3 mb-20 sm:mb-24 mt-20 xs:mt-28'
            >
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='w-full'>
                        <div className={styles.input}>
                            <input
                                id='name'
                                type='text'
                                placeholder='Dário Matias'
                                {...register('name')}
                                style={errors.name?.message ? borderRed : {}}
                                className='w-full h-14 bg-darkGray border pt-2 pl-4 placeholder:font-medium border-gray placeholder:text-gray hover:border-lightGray focus:border-cyan transition duration-300 outline-none'
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
                                style={errors.email?.message ? borderRed : {}}
                                className='w-full h-14 bg-darkGray border pt-2 pl-4 placeholder:font-medium border-gray placeholder:text-gray hover:border-lightGray focus:border-cyan transition duration-300 outline-none'
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
                            placeholder='Aprender mais'
                            {...register('subject')}
                            style={errors.subject?.message ? borderRed : {}}
                            className='w-full h-14 bg-darkGray border pt-2 pl-4 placeholder:font-medium border-gray placeholder:text-gray hover:border-lightGray focus:border-cyan transition duration-300 outline-none'
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
                            style={errors.message?.message ? borderRed : {}}
                            className='h-44 w-full bg-darkGray border pt-5 pl-4 placeholder:font-medium border-gray placeholder:text-gray hover:border-lightGray focus:border-cyan transition duration-300 outline-none'
                        />
                        <label htmlFor="message">
                            Mensagem:
                        </label>
                    </div>

                    <span className='text-sm text-red-600 font-bold'>
                        {errors.message?.message}
                    </span>
                </div>

                <div className='w-full flex justify-center xs:justify-end'>
                    <button className={`${styleButton.button} w-56 sm:w-64 h-20 sm:h-20 mt-8 text-2xl sm:text-3xl`}>
                        Enviar
                    </button>
                </div>
            </form>

            <span className='block w-75 sm:w-100 h-100 s:h-125 sm:h-52 lg:h-[450px] absolute top-[600px] lg:top-[740px] left-0 s:left-[20%] md:left-2/4 bg-darkBlue opacity-30 blur-25 sm:blur-37.5 -z-10' />

            {
                showMessage.status && (
                    <FeedbackMessage
                        type={showMessage.type}
                        contents={messagesContents[showMessage.type as keyof typeof messagesContents]}
                        setShowMessage={setShowMessage}
                    />
                )
            }
        </div>
    );
};

export default Contato;
