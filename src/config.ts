const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        user: "root",
        password: "1111",
        database: "candidate_evaluation",
        connectTimeout: 60000
    },
    listPerPage: 10,
};
export default config;