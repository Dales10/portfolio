export type ProjectProps = {
    name: string;
    description: string;
    technologies: string[];
    links: {
        code: {
            frontend: string;
            backend: string;
        };
        demo: string;
    };
    files: Array<{
        type: string;
        url: string;
    }>;
};
