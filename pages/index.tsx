import Image from 'next/image';
import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <div className="mt-36 ml-28">
      <span className='w-[700px] h-[700px] absolute -top-[125px] -left-[155px] bg-[#0C009C] opacity-30 blur-[200px] -z-10' />

      <h1 className="flex flex-col text-[75px] font-bold leading-none">
        <span>
          Oi, eu sou
        </span>

        <span className="text-[80px] font-black">
          Dário Matias
        </span>

        <span>
          web developer
        </span>
      </h1>

      <button className={styles.button}>
        Currículo
      </button>

      <div className='w-[calc(100%_-_200px)] h-1 bg-[#090909] my-44' />

      <h2 className='text-[50px] font-extrabold mt-[150px]'>
        Mensagem
      </h2>

      <div className='max-w-[1000px] mr-52 text-[26px] text-justify font-bold mt-[130px] mb-[130px] indent-10 leading-tight'>
        <p>
          Nesse portifólio encontrará todos os meus projetos mais relevantes, tecnologias que tenho conhecimento, e conhecer um pouco sobre mim. Os projetos criados estarão em um card cada, com as tecnologias usadas, uma breve descrição do que se tratam, além de dois links, sendo um para ver o projeto online, e o outro para analisar o código-fonte no GitHub caso tenha interesse.
        </p>
        <p>
          Então vamos lá conhecer o meu trabalho e quem eu sou?
        </p>
      </div>

      <div className=' w-[550px] h-[550px] absolute top-[1000px] right-1/4 bg-[#0C009C] opacity-30 blur-[200px] -z-10' >
      </div>
    </div>
  );
};

export default Home;
