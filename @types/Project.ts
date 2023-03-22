export type ProjectProps = {
    name: string;
    description: string;
    technologies: string[];
    links: {
        demo: string;
        code: string;
    };
    files: Array<{
        type: string;
        url: string;
    }>;
};
