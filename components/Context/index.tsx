import { useState, useEffect, useContext, createContext, ReactNode } from "react";
import { db, collection, getDocs } from '../../services/firebase';

import Loading from "../Loading";

import { ProjectProps } from "@/@types/Project";
import { SkillProps } from "@/@types/Skill";

type DataProps = {
    projects: ProjectProps[];
    skills: SkillProps;
};

type DataContextProps = {
    data: DataProps;
};

const DataContext = createContext({} as DataContextProps);

type DataProviderProps = {
    children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<DataProps>({} as DataProps);

    const readDataFromDatabase = async () => {
        const collectProjectsData: ProjectProps[] = [];
        const projectsDocs = await getDocs(collection(db, 'projects'));
        projectsDocs.forEach(projectDoc => {
            collectProjectsData.push(projectDoc.data() as ProjectProps);
        });

        const collectSkillsData: SkillProps = {};
        const skillsDocs = await getDocs(collection(db, 'skills'));
        skillsDocs.forEach(skillDoc => {
            const skill = skillDoc.data();
            collectSkillsData[skill.technologie] = {
                info: skill.info,
                created: skill.created,
                createdBy: skill.createdBy,
            };
        });
        setData({
            projects: collectProjectsData,
            skills: collectSkillsData,
        });
    };

    useEffect(() => {
        readDataFromDatabase();
    }, []);

    if (JSON.stringify(data) === '{}')
        return <Loading />;

    return (
        <DataContext.Provider
            value={{
                data,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    return context;
};
